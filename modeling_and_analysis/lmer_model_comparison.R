rm(list = objects())
library(dplyr)
library(lmerTest)
library(sjPlot)
library(ggplot2)
library(RColorBrewer)
library(jtools)
source("rl_functions_neg_liks.R")
set.seed(123456)

plot_width <- 4*500
plot_height <- 3*500
use_only_attentive <- F

# load data
#if (use_only_attentive) {
#  df <- readRDS("fitting_results_attentive.rds")
#  exp_df <- readRDS("attentive_data.rds")
#} else {
#  df <- readRDS("fitting_results_all.rds")
#  exp_df <- readRDS("all_data.rds")
#}

df <- readRDS("fitting_results_pilot.rds")
exp_df <- readRDS("pilot_data.rds")

if (!dir.exists("tables")) {
  dir.create("tables")
}

# define globals
participants <- unique(df$participant_id)
model_names <- c("rw_no_bias", "rw_bias", "bayes_no_bias", "bayes_bias")
n_trials <- length(unique(exp_df$trials.thisTrialN))

calculate_metrics <- function(model, value) {
  k <- case_when(
    model == "bayes_no_bias" ~ 7,
    model == "rw_no_bias" ~ 6,
    model == "rw_bias" ~ 4,
    model == "bayes_bias" ~ 5
  )
  aic <- 2*k + 2*value
  bic <- k*log(n_trials) + 2*value
  return(data.frame(AIC = aic, BIC = bic))
}

# create a list to store individual data frames
results_list <- list()

for (i in seq_along(participants)) {
  # reduce data frames to part and get params
  part_df <- subset(exp_df, participant_id == participants[i])
  part_params_df <- subset(df, participant_id == participants[i])
  rw_no_b_pars <- c(part_params_df$rw_no_bias_alpha, part_params_df$rw_no_bias_temp)
  rw_b_pars <- c(part_params_df$rw_bias_alpha, part_params_df$rw_bias_temp)
  bayes_no_b_pars <- c(part_params_df$bayes_no_bias_gamma, part_params_df$bayes_no_bias_beta, part_params_df$bayes_no_bias_variance)
  bayes_b_pars <- c(part_params_df$bayes_bias_gamma, part_params_df$bayes_bias_beta, part_params_df$bayes_bias_variance)
  
  # get NLLs for all models
  rw_no_b_nlls <- neg_lik_rw_no_bias(rw_no_b_pars, part_df)
  rw_b_nlls <- neg_lik_rw_bias(rw_b_pars, part_df)
  bayes_no_b_nlls <- neg_lik_bayes_no_bias(bayes_no_b_pars, part_df)
  bayes_b_nlls <- neg_lik_bayes_bias(bayes_b_pars, part_df)
  
  # create data frames for each model
  rw_no_b_df <- data.frame(participant_id = rep(participants[i], n_trials),
                           trial = 1:n_trials,
                           model = rep(model_names[1], n_trials),
                           nll_value = rw_no_b_nlls)
  
  rw_b_df <- data.frame(participant_id = rep(participants[i], n_trials),
                        trial = 1:n_trials,
                        model = rep(model_names[2], n_trials),
                        nll_value = rw_b_nlls)
  
  bayes_no_b_df <- data.frame(participant_id = rep(participants[i], n_trials),
                              trial = 1:n_trials,
                              model = rep(model_names[3], n_trials),
                              nll_value = bayes_no_b_nlls)
  
  bayes_b_df <- data.frame(participant_id = rep(participants[i], n_trials),
                           trial = 1:n_trials,
                           model = rep(model_names[4], n_trials),
                           nll_value = bayes_b_nlls)
  
  # add the data frames to the list
  results_list[[length(results_list) + 1]] <- rw_no_b_df
  results_list[[length(results_list) + 1]] <- rw_b_df
  results_list[[length(results_list) + 1]] <- bayes_no_b_df
  results_list[[length(results_list) + 1]] <- bayes_b_df
}

# combine all data frames in the list into one data frame
results <- do.call(rbind, results_list)

# relevel model variable
results$model <- as.factor(results$model)
results$model <- relevel(results$model, ref = "rw_bias")

# add AIC and BIC
results <- cbind.data.frame(results, calculate_metrics(results$model, results$nll_value))

results$model_type <- ifelse(results$model == "rw_bias" | results$model == "bayes_bias", "biased", "unbiased")

# do anova
model <- lmer(AIC ~ model_type + (1 | participant_id), data = results)
summary(model)
anova(model)

tab_model(model, file = "G:\\Meine Ablage\\Proposal Study 1\\Tables\\model_comp_pilot.html", show.se = T, pred.labels = c("Intercept (rw_bias)", "bayes_no_bias",
                                                                                                                          "bayes_bias", "rw_no_bias"))
# plot this
rw_biased_bic <- summary(model)$coeff[1, 1]
bayes_biased_bic <- rw_biased_bic + summary(model)$coeff[2, 1]
bayes_not_biased_bic <- rw_biased_bic + summary(model)$coeff[3, 1]
rw_not_biased_bic <- rw_biased_bic + summary(model)$coeff[4, 1]

rw_biased_se <- summary(model)$coeff[1, 2]
bayes_biased_se <- summary(model)$coeff[2, 2]
bayes_not_biased_se <- summary(model)$coeff[3, 2]
rw_not_biased_se <- summary(model)$coeff[4, 2]

model_data <- data.frame(model = c("RW Biased", "RW Unbiased", "Bayes Biased", "Bayes Unbiased"),
                         estimate = c(rw_biased_bic, rw_not_biased_bic, bayes_biased_bic, bayes_not_biased_bic),
                         std_error = c(rw_biased_se, rw_not_biased_se, bayes_biased_se, bayes_not_biased_se))

ggplot(data = model_data, aes(x = model, y = estimate, fill = model)) +
  geom_bar(stat = "identity", position = position_dodge(), color = "black") +
#  geom_errorbar(aes(ymin = estimate - std_error, ymax = estimate + std_error), width = 0.2, position = position_dodge(0.9)) +
  labs(title = "Model BIC Estimates with Standard Error",
       x = "Model",
       y = "BIC Estimate") +
  theme_apa()

# across parts
test <- results %>%
  group_by(participant_id, model) %>%
  summarise_all(mean)

summary(lm(AIC ~ model, test))

# ez
results_anova <- ezANOVA(data = results,
                   dv = .(BIC),
                   wid = .(participant_id),
                   within = .(model),
                   detailed = T)
print(results_anova)
post <- pairwise.t.test(results$BIC, results$model, p.adjust.method = "BH", paired = T)
print(post)

# factorite choices for logt model
exp_df$choices <- factor(exp_df$choices, ordered = F)
exp_df$pairing <- as.factor(exp_df$pairing)
exp_df$pairing <- relevel(exp_df$pairing, ref = "1:2+2:2")

# do glmer
model2 <- glmer(choices ~ pairing + (1 | participant_id), data = exp_df, family = "binomial")
summary(model2)

# refactor
exp_df$pairing_bin <- ifelse(exp_df$pairing == "1:2+2:2" | exp_df$pairing == "1:1+2:2", 1, 0)

model3 <- glmer(choices ~ pairing_bin + (1 | participant_id), data = exp_df, family = "binomial")
summary(model3)

tab_model(model3, file = "G:\\Meine Ablage\\Proposal Study 1\\Tables\\choices_pilot.html", show.se = T)
