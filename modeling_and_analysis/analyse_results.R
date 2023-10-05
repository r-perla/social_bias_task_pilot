rm(list = objects())
library(tidyverse)
library(jtools)
library(RColorBrewer)

use_only_attentive <- F
plot_width <- 4*500
plot_height <- 3*500

# load data
#if (use_only_attentive) {
#  df <- readRDS("fitting_results_attentive.rds")
#  n <- 9
#} else {
#  df <- readRDS("fitting_results_all.rds")
#  n <- 15
#}
df <- readRDS("fitting_results_pilot.rds")
n <- 15

# A function to calculate AIC and BIC based on model and value
calculate_metrics <- function(model, value) {
  k <- case_when(
    model == "bayes_no_bias_lik" ~ 7,
    model == "rw_no_bias_lik" ~ 6,
    model == "rw_bias_lik" ~ 4,
    model == "bayes_bias_lik" ~ 5
  )
  aic <- 2*k + 2*value
  bic <- k*log(n) + 2*value
  return(data.frame(AIC = aic, BIC = bic))
}

# define model options
model_options <- c("bayes_model_no_bias", "rw_model_no_bias", "rw_model_bias", "bayes_model_bias")
participants <- df$participant_id

# get best fitting model for each participant individually
neg_liks_part <- df %>%
  select(., participant_id, bayes_no_bias_lik, rw_no_bias_lik, rw_bias_lik, bayes_bias_lik)

# TODO: Finish this shit
best_model <- c()

for (i in seq_along(participants)) {
  part_data <- subset(neg_liks_part, participant_id == participants[i])
  part_data <- part_data %>%
    select(., !participant_id)
  best_model[i] <- model_options[which.min(part_data)]
}

neg_liks_part$best_model <- best_model

# sum neg lik and store in matrix
neg_liks <- c(sum(df$bayes_no_bias_lik), sum(df$rw_no_bias_lik), sum(df$rw_bias_lik), sum(df$bayes_bias_lik)) %>%
  matrix(nrow = 1) %>%
  as.data.frame()
colnames(neg_liks) <- model_options

# calculate AIC
aics <- data.frame(bayes_model_no_bias = 2*7 + 2*neg_liks$bayes_model_no_bias,
                   rw_model_no_bias = 2*6 + 2*neg_liks$rw_model_no_bias,
                   rw_model_bias = 2*4 + 2*neg_liks$rw_model_bias,
                   bayes_model_bias = 2*5 + 2*neg_liks$bayes_model_bias)

# calculate BIC
bics <- data.frame(bayes_model_no_bias = 7*log(n) + 2*neg_liks$bayes_model_no_bias,
                   rw_model_no_bias = 6*log(n) + 2*neg_liks$rw_model_no_bias,
                   rw_model_bias = 4*log(n) + 2*neg_liks$rw_model_bias,
                   bayes_model_bias = 5*log(n) + 2*neg_liks$bayes_model_bias)

# get best models
best_neg_lik_model <- model_options[which.min(neg_liks)]
best_aic_model <- model_options[which.min(aics)]
best_bic_model <- model_options[which.min(bics)]

# print to console
cat("Best model negative log-likelihood: ", best_neg_lik_model, "\n", sep = "")
cat("Best model AIC: ", best_aic_model, "\n", sep = "")
cat("Best model BIC: ", best_bic_model, "\n", sep = "")

# get evidence diff
diffs <- neg_liks_part$rw_no_bias_lik - neg_liks_part$rw_bias_lik
hist(diffs)

diffs <- data.frame(diffs = diffs)

ggplot(diffs, aes(x = diffs)) +
  geom_density() +
  geom_vline(xintercept = 0) +
  theme_apa()

t.test(diffs$diffs)

# visualize ----
# Convert the data to a long format and order by likelihood
neg_liks_long <- neg_liks %>%
  gather(key = "model", value = "likelihood") %>%
  arrange(-likelihood) %>%
  mutate(model = factor(model, levels = unique(model)))

aics_long <- aics %>%
  gather(key = "model", value = "AIC") %>%
  arrange(-AIC) %>%
  mutate(model = factor(model, levels = unique(model)))

bics_long <- bics %>%
  gather(key = "model", value = "BIC") %>%
  arrange(-BIC) %>%
  mutate(model = factor(model, levels = unique(model)))

model_counts <- neg_liks_part %>%
  group_by(best_model) %>%
  summarise(count = n())

neg_liks_melted <- reshape2::melt(neg_liks_part, id.vars = "participant_id", 
                              measure.vars = c("bayes_no_bias_lik", "rw_no_bias_lik", 
                                               "rw_bias_lik", "bayes_bias_lik"))

new_labels <- c(bayes_model_no_bias = "Bayesian (No Bias)",
  rw_model_no_bias = "RW (No Bias)",
  rw_model_bias = "RW (Bias)",
  bayes_model_bias = "Bayesian (Bias)")

# calc AIC and BIC for individual participants
neg_liks_melted <- neg_liks_melted %>%
  rowwise() %>%
  mutate(calculate_metrics(variable, value))

neg_liks_melted$variable <- factor(neg_liks_melted$variable, levels = c("rw_no_bias_lik", "rw_bias_lik", "bayes_no_bias_lik", "bayes_bias_lik"))

# Print the head to check the results
head(neg_liks_melted)

# plot neg log lik
ggplot(neg_liks_long, aes(x = model, y = likelihood, fill = model)) +
  geom_bar(stat = "identity", position = "dodge") +
  labs(title = "", y = "Negative Log-Likelihood", x = "Model") +
  scale_fill_brewer(palette = "Set2") +
  scale_x_discrete(labels = new_labels) +
  theme_apa() +
  theme(axis.text.x = element_text(angle = 0, hjust = 0.5, size = 8),
        axis.text.y = element_text(size = 10),
        axis.title = element_text(size = 14),
        legend.position = "none") +
  geom_text(aes(label = round(likelihood, 2)), vjust = -0.5, size = 3.5)

ggsave(filename = "G:\\Meine Ablage\\Proposal Study 1\\Figures\\nll_fits_pilot.png", device = "png", width = plot_width, height = plot_height, 
       dpi = 300, units = "px")

# plot AIC
ggplot(aics_long, aes(x = model, y = AIC, fill = model)) +
  geom_bar(stat = "identity", position = "dodge") +
  labs(title = "", y = "AIC", x = "Model") +
  scale_fill_brewer(palette = "Set2") +
  scale_x_discrete(labels = new_labels) +
  theme_apa() +
  theme(axis.text.x = element_text(angle = 0, hjust = .5, size = 8),
        axis.text.y = element_text(size = 10),
        axis.title = element_text(size = 14),
        legend.position = "none") +
  geom_text(aes(label = round(AIC, 2)), vjust = -0.5, size = 3.5)

ggsave(filename = "G:\\Meine Ablage\\Proposal Study 1\\Figures\\aic_fits_pilot.png", device = "png", width = plot_width, height = plot_height, 
       dpi = 300, units = "px")

# plot BIC
ggplot(bics_long, aes(x = model, y = BIC, fill = model)) +
  geom_bar(stat = "identity", position = "dodge") +
  labs(title = "", y = "BIC", x = "Model") +
  scale_fill_brewer(palette = "Set2") +
  scale_x_discrete(labels = new_labels) +
  theme_apa() +
  theme(axis.text.x = element_text(angle = 0, hjust = .5, size = 8),
        axis.text.y = element_text(size = 10),
        axis.title = element_text(size = 14),
        legend.position = "none") +
  geom_text(aes(label = round(BIC, 2)), vjust = -0.5, size = 3.5)

ggsave(filename = "G:\\Meine Ablage\\Proposal Study 1\\Figures\\bic_fits_pilot.png", device = "png", width = plot_width, height = plot_height, 
       dpi = 300, units = "px")

# plot best model
ggplot(model_counts, aes(x = best_model, y = count, fill = best_model)) +
  geom_bar(stat = "identity", position = "dodge") +
  labs(title = "", y = "Count", x = "Model") +
  scale_fill_brewer(palette = "Set2") +
  scale_x_discrete(labels = new_labels) +
  theme_apa() +
  theme(axis.text.x = element_text(angle = 0, hjust = .5, size = 8),
        axis.text.y = element_text(size = 10),
        axis.title = element_text(size = 14),
        legend.position = "none") +
  geom_text(aes(label = count), vjust = -.2, size = 4)

ggsave(filename = "G:\\Meine Ablage\\Proposal Study 1\\Figures\\best_model_counts_pilot.png", device = "png", 
       width = plot_width, height = plot_height, dpi = 300, units = "px")

# Define custom colors for each plot
custom_colors_AIC <- c("rw_no_bias_lik" = "#C07F00", "rw_bias_lik" = "#618264", "bayes_no_bias_lik" = "#5B0888", "bayes_bias_lik" = alpha("#3D0C11", .8))
custom_colors_BIC <- c("rw_no_bias_lik" = "#FFD95A", "rw_bias_lik" = "#79AC78", "bayes_no_bias_lik" = "#713ABE", "bayes_bias_lik" = "#D80032")
custom_colors_NLL <- c("rw_no_bias_lik" = "#FFF7D4", "rw_bias_lik" = "#B0D9B1", "bayes_no_bias_lik" = "#9D76C1", "bayes_bias_lik" = "#F78CA2")


# bocplot for NNLs across participants
ggplot(neg_liks_melted, aes(x = variable, y = value, fill = variable)) +
  geom_boxplot(position = "dodge") +
  labs(title = "", y = "", x = "") +
  scale_fill_manual(values = custom_colors_NLL) +
  scale_x_discrete(labels = c("", "", "", "")) +
  theme_apa() +
  theme(axis.text.x = element_text(angle = 0, hjust = .5, size = 8),
        axis.text.y = element_text(size = 32),
        axis.title = element_text(size = 14),
        legend.position = "none")

ggsave(filename = "G:\\Meine Ablage\\Proposal Study 1\\Figures\\nll_boxplot_pilot.png", device = "png", 
       width = plot_width, height = plot_height, dpi = 300, units = "px")

# boxplot for AICs across participants
ggplot(neg_liks_melted, aes(x = variable, y = AIC, fill = variable)) +
  geom_boxplot(position = "dodge") +
  labs(title = "", y = "", x = "") +
  scale_fill_manual(values = custom_colors_AIC) +
  scale_x_discrete(labels = c("", "", "", "")) +
  theme_apa() +
  theme(axis.text.x = element_text(angle = 0, hjust = .5, size = 8),
        axis.text.y = element_text(size = 32),
        axis.title = element_text(size = 14),
        legend.position = "none")

ggsave(filename = "G:\\Meine Ablage\\Proposal Study 1\\Figures\\aic_boxplot_pilot.png", device = "png", 
       width = plot_width, height = plot_height, dpi = 300, units = "px")

# boxplot for BICs across participants
ggplot(neg_liks_melted, aes(x = variable, y = BIC, fill = variable)) +
  geom_boxplot(position = "dodge") +
  labs(title = "", y = "", x = "") +
  scale_fill_manual(values = custom_colors_BIC) +
  scale_x_discrete(labels = c("", "", "", "")) +
  theme_apa() +
  theme(axis.text.x = element_text(angle = 0, hjust = .5, size = 8),
        axis.text.y = element_text(size = 32),
        axis.title = element_text(size = 14),
        legend.position = "none")

ggsave(filename = "G:\\Meine Ablage\\Proposal Study 1\\Figures\\bic_boxplot_pilot.png", device = "png", 
       width = plot_width, height = plot_height, dpi = 300, units = "px")

