rm(list = objects())
library(dplyr)
source("rl_functions_revised.R")
library(foreach)
library(doParallel)
library(withr)
library(randtoolbox)

# set seed
set_seed <- 123456  # set to NULL for no pseudo randomization
set.seed(set_seed)

# determine which subset of data to use
use_only_attentive = F

# load data
#ifelse(use_only_attentive, full_part <- readRDS("attentive_data.rds"), full_part <- readRDS("all_data.rds"))
full_part <- readRDS("pilot_data.rds")

# define model functions ----
# estimation function for unbiased rw
estimate_parameters_rw_no_bias <- function(participant_data, use_optim=T, n_starting_values=50, iterations=250) {
  
  # set the number of values for which to run optim in full
  fullIter <- iterations
  
  # define parameters and their boundaries (alpha, temp)
  lower_ceilings <- c(0, 0)
  upper_ceilings <- c(1, 10)
  starting_params <- generate_starting_values(n_starting_values , min = lower_ceilings, max = upper_ceilings, seed = set_seed)
  
  d <- participant_data
  if (use_optim) {
    # find best parameters
    opt <- apply(starting_params, 1, function(x) optim(x, fn = neg_lik_rw_no_bias, part_data = d, control=list(maxit = fullIter), 
                                                       lower = lower_ceilings, upper = upper_ceilings, method = "L-BFGS-B"))
    bestopt <- opt[[which.min(unlist(lapply(opt,function(x) x$value)))]]
    
    # initialize temp_data
    temp_data <- matrix(NA, nrow = 1, ncol = 4)
    
    # store alpha, temp, convergence and negative maximum likelihood in results
    temp_data[1, ] <- c(bestopt$par[1], bestopt$par[2], bestopt$convergence, bestopt$value)
    
    colnames(temp_data) <- c("alpha", "temp", "convergence", "neg_lik")
    
    temp_data <- as.data.frame(temp_data)
  }
  
  if (!use_optim) {
    liks <- apply(starting_params, 1, function(x) neg_lik(x, sim_agent(0, .5, .5, 200, 4, df)))
    best_params <- starting_params[which.min(liks), ]
    best_value <- liks[which.min(liks)]
    temp_data <- data.frame(alpha = best_params[1],
                            temp = best_params[2],
                            convergence = 0,
                            neg_lik = best_value)
  }
  return(temp_data)
}

# estimation function for biased rw
estimate_parameters_rw_bias <- function(participant_data, use_optim=T, n_starting_values=50, iterations=250) {
  
  # set the number of values for which to run optim in full
  fullIter <- iterations
  
  # define parameters and their boundaries (alpha, temp)
  lower_ceilings <- c(0, 0)
  upper_ceilings <- c(1, 10)
  starting_params <- generate_starting_values(n_starting_values , min = lower_ceilings, max = upper_ceilings, seed = set_seed)
  
  d <- participant_data
  if (use_optim) {
    # find best parameters
    opt <- apply(starting_params, 1, function(x) optim(x, fn = neg_lik_rw_bias, part_data = d, control=list(maxit = fullIter), 
                                                       lower = lower_ceilings, upper = upper_ceilings, method = "L-BFGS-B"))
    bestopt <- opt[[which.min(unlist(lapply(opt,function(x) x$value)))]]
    
    # initialize temp_data
    temp_data <- matrix(NA, nrow = 1, ncol = 4)
    
    # store alpha, temp, convergence and negative maximum likelihood in results
    temp_data[1, ] <- c(bestopt$par[1], bestopt$par[2], bestopt$convergence, bestopt$value)
    
    colnames(temp_data) <- c("alpha", "temp", "convergence", "neg_lik")
    
    temp_data <- as.data.frame(temp_data)
  }
  
  if (!use_optim) {
    liks <- apply(starting_params, 1, function(x) neg_lik(x, sim_agent(0, .5, .5, 200, 4, df)))
    best_params <- starting_params[which.min(liks), ]
    best_value <- liks[which.min(liks)]
    temp_data <- data.frame(alpha = best_params[1],
                            temp = best_params[2],
                            convergence = 0,
                            neg_lik = best_value)
  }
  return(temp_data)
}

# estimation function for unbiased bayes
estimate_parameters_bayes_no_bias <- function(participant_data, use_optim=T, n_starting_values=50, iterations=250) {
  
  # set the number of values for which to run optim in full
  fullIter <- iterations
  
  # define parameters and their boundaries (gamma, beta, variance)
  lower_ceilings <- c(0, 0, .1)
  upper_ceilings <- c(5, 5, 10)
  starting_params <- generate_starting_values(n_starting_values , min = lower_ceilings, max = upper_ceilings, seed = set_seed)
  
  d <- participant_data
  if (use_optim) {
    # find best parameters
    opt <- apply(starting_params, 1, function(x) optim(x, fn = neg_lik_bayes_no_bias, part_data = d, control=list(maxit = fullIter), 
                                                       lower = lower_ceilings, upper = upper_ceilings, method = "L-BFGS-B"))
    bestopt <- opt[[which.min(unlist(lapply(opt,function(x) x$value)))]]
    
    # initialize temp_data
    temp_data <- matrix(NA, nrow = 1, ncol = 5)
    
    # store alpha, temp, convergence and negative maximum likelihood in results
    temp_data[1, ] <- c(bestopt$par[1], bestopt$par[2], bestopt$par[3], bestopt$convergence, bestopt$value)
    
    colnames(temp_data) <- c("gamma", "beta", "variance", "convergence", "neg_lik")
    
    temp_data <- as.data.frame(temp_data)
  }
  
  if (!use_optim) {
    liks <- apply(starting_params, 1, function(x) neg_lik(x, sim_agent(0, .5, .5, 200, 4, df)))
    best_params <- starting_params[which.min(liks), ]
    best_value <- liks[which.min(liks)]
    temp_data <- data.frame(gamma = best_params[1],
                            beta = best_params[2],
                            convergence = 0,
                            neg_lik = best_value)
  }
  return(temp_data)
}

# estimation function for biased bayes
estimate_parameters_bayes_bias <- function(participant_data, use_optim=T, n_starting_values=50, iterations=250) {
  
  # set the number of values for which to run optim in full
  fullIter <- iterations
  
  # define parameters and their boundaries (gamma, beta, variance)
  lower_ceilings <- c(0, 0, .1)
  upper_ceilings <- c(5, 5, 10)
  starting_params <- generate_starting_values(n_starting_values , min = lower_ceilings, max = upper_ceilings, seed = set_seed)
  
  d <- participant_data
  if (use_optim) {
    # find best parameters
    opt <- apply(starting_params, 1, function(x) optim(x, fn = neg_lik_bayes_bias, part_data = d, control=list(maxit = fullIter), 
                                                       lower = lower_ceilings, upper = upper_ceilings, method = "L-BFGS-B"))
    bestopt <- opt[[which.min(unlist(lapply(opt,function(x) x$value)))]]
    
    # initialize temp_data
    temp_data <- matrix(NA, nrow = 1, ncol = 5)
    
    # store alpha, temp, convergence and negative maximum likelihood in results
    temp_data[1, ] <- c(bestopt$par[1], bestopt$par[2], bestopt$par[3], bestopt$convergence, bestopt$value)
    
    colnames(temp_data) <- c("gamma", "beta", "variance", "convergence", "neg_lik")
    
    temp_data <- as.data.frame(temp_data)
  }
  
  if (!use_optim) {
    liks <- apply(starting_params, 1, function(x) neg_lik(x, sim_agent(0, .5, .5, 200, 4, df)))
    best_params <- starting_params[which.min(liks), ]
    best_value <- liks[which.min(liks)]
    temp_data <- data.frame(gamma = best_params[1],
                            beta = best_params[2],
                            convergence = 0,
                            neg_lik = best_value)
  }
  return(temp_data)
}

# Get the names of all objects in the global environment
obj <- ls(envir = .GlobalEnv)

# Filter out only the functions to pass to cores later
functions <- obj[sapply(obj, function(x) is.function(get(x)))]

# define model fitting function ----
fit_models <- function(part_data) {
  
  # Prepare agent data frame structure
  agent_data <- part_data
  part_ids <- unique(agent_data$participant_id)
  
  # initialize matrix
  estimations <- matrix(NA, nrow = length(part_ids), ncol = 15)
  
  for (i in seq_along(part_ids)) {
      cat("Processing Participant ", i, " out of ", length(part_ids), "...\n", sep = "")
      part_df <- subset(agent_data, participant_id == part_ids[i])
      est_bayes_model_no_bias <- estimate_parameters_bayes_no_bias(part_df, use_optim = TRUE, n_starting_values = 100, iterations = 350)
      est_rw_model_no_bias <- estimate_parameters_rw_no_bias(part_df, use_optim = TRUE, n_starting_values = 100, iterations = 350)
      est_rw_model_bias <- estimate_parameters_rw_bias(part_df, use_optim = TRUE, n_starting_values = 100, iterations = 350)
      est_bayes_model_bias <- estimate_parameters_bayes_bias(part_df, use_optim = TRUE, n_starting_values = 100, iterations = 350)
      
      params <- c(est_bayes_model_no_bias$gamma, est_bayes_model_no_bias$beta, est_bayes_model_no_bias$variance, est_rw_model_no_bias$alpha, 
                  est_rw_model_no_bias$temp, est_rw_model_bias$alpha, est_rw_model_bias$temp, est_bayes_model_bias$gamma, est_bayes_model_bias$beta, 
                  est_bayes_model_bias$variance)
      liks <- c(est_bayes_model_no_bias$neg_lik, est_rw_model_no_bias$neg_lik, est_rw_model_bias$neg_lik, est_bayes_model_bias$neg_lik)
      
      estimations[i, ] <- c(part_ids[i], params, liks)
  }
  
  # Prepare the results for return
  colnames(estimations) <- c("participant_id", "bayes_no_bias_gamma", "bayes_no_bias_beta", "bayes_no_bias_variance", "rw_no_bias_alpha", "rw_no_bias_temp", 
                             "rw_bias_alpha", "rw_bias_temp", "bayes_bias_gamma", "bayes_bias_beta", "bayes_bias_variance", "bayes_no_bias_lik", "rw_no_bias_lik", 
                             "rw_bias_lik", "bayes_bias_lik")
  estimations <- as.data.frame(estimations)
  row.names(estimations) <- NULL
  
  return(estimations)
}

# do model fitting ----
# take time
start_time <- Sys.time()

# run simulation
results <- fit_models(part_data = full_part)

# Calculate the elapsed time
end_time <- Sys.time()
elapsed_time <- end_time - start_time

# Print the runtime
print(elapsed_time)

# finalize and save
# convert to numeric
results[, 2:ncol(results)] <- results[, 2:ncol(results)] %>%
  as.matrix() %>%
  as.numeric()

# save results
#if (use_only_attentive) {
#  saveRDS(results, "fitting_results_attentive.rds")
#  
#} else {
#  saveRDS(results, "fitting_results_all.rds")
#}

saveRDS(results, "fitting_results_pilot.rds")
