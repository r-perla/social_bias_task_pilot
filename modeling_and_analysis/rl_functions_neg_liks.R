# learning function ----
# RW learning function WITHOUT bias
comp_model_rw_no_bias <- function(data, n_options, a, starting_mean_reward) {
  # set globals
  n_choices <- length(data$choices)
  reward <- data$reward
  choices <- data$choices
  expectations <- matrix(starting_mean_reward, ncol = n_options, nrow = n_choices + 1)
  option_mapper <- list("1:1+2:1" = c(1, 3), 
                        "1:2+2:1" = c(2, 3), 
                        "1:2+2:2" = c(2, 4),
                        "1:1+2:2" = c(1, 4))
  
  for (i in 1:n_choices) {
    current_options <- option_mapper[[data$pairing[i]]]  # get columns of current options in exp matrix
    options_expectations <- expectations[i, current_options]  # reduce exp matrix to relevant cols
    current_choice <- choices[i] # Store the current choice in a separate variable
    expectations[i + 1, ] <- expectations[i, ]  # carry over the expectations from the previous trial
    expectations[i + 1, current_options[current_choice]] <- options_expectations[current_choice] + a*(reward[i] - options_expectations[current_choice])
  }
  
  return(expectations)
}

# RW learning with WITH bias
comp_model_rw_bias <- function(data, a, n_options=NULL, starting_mean_reward) {
  # set globals
  n_agents <- 2
  n_choices <- length(data$choices)
  reward <- data$reward
  choices <- data$choices
  
  agent_expectations <- matrix(starting_mean_reward, ncol = n_agents, nrow = nrow(data) + 1)
  
  for (i in 1:n_choices) {
    current_choice <- choices[i]  # Store the current choice in a separate variable
    
    agent_expectations[i + 1, ] <- agent_expectations[i, ]  # carry over the expectations from the previous trial
    
    agent_expectations[i + 1, current_choice] <- agent_expectations[i, current_choice] + 
      a * (reward[i] - agent_expectations[i, current_choice])  # update chosen agent exp value
  }
  
  return(list(agent_expectations = agent_expectations))
}

# bayes without bias
comp_model_bayes_no_bias <- function(initial_expectation, initial_variance, reward_noise_variance, n_combinations=4, data) {
  reward <- data$reward
  choices <- data$choices
  expectations <- matrix(initial_expectation, ncol = n_combinations, nrow = nrow(data) + 1)
  variances <- matrix(initial_variance, ncol = n_combinations, nrow = nrow(data) + 1)
  
  option_mapper <- list("1:1+2:1" = c(1, 3), 
                        "1:2+2:1" = c(2, 3), 
                        "1:2+2:2" = c(2, 4),
                        "1:1+2:2" = c(1, 4))
  
  for (i in 1:nrow(data)) {
    current_options <- option_mapper[[data$pairing[i]]]  # get columns of current options in exp matrix
    options_expectations <- expectations[i, current_options]  # reduce exp matrix to relevant cols
    options_variances <- variances[i, current_options]  # reduce variances matrix to relevant cols
    standard_deviation_est <- sqrt(options_variances)  # Calculate standard deviation estimates
    
    current_choice <- choices[i] # Store the current choice in a separate variable
    
    # Bayesian updating of the option values
    chosen_option_variance = variances[i, current_options[current_choice]]
    chosen_option_expectation = expectations[i, current_options[current_choice]]
    variances[i + 1, ] <- variances[i, ]  # carry over the variances from the previous trial
    variances[i + 1, current_options[current_choice]] <- (chosen_option_variance * reward_noise_variance) / (chosen_option_variance + reward_noise_variance)
    expectations[i + 1, ] <- expectations[i, ]  # carry over the expectations from the previous trial
    expectations[i + 1, current_options[current_choice]] <- chosen_option_expectation + 
      (variances[i + 1, current_options[current_choice]] / chosen_option_variance) * (reward[i] - chosen_option_expectation)
  }
  
  return(list(expectations = expectations, variances = variances))
}

# bayes with bias
comp_model_bayes_bias <- function(initial_expectation, initial_variance, reward_noise_variance, n_combinations=NULL, data) {
  n_agents <- 2
  reward <- data$reward
  choices <- data$choices
  
  agent_expectations <- matrix(initial_expectation, ncol = n_agents, nrow = nrow(data) + 1)
  agent_variances <- matrix(initial_variance, ncol = n_agents, nrow = nrow(data) + 1)
  
  for (i in 1:nrow(data)) {
    current_choice <- choices[i]  # Store the current choice in a separate variable
    
    # Bayesian updating of the agent values
    agent_option_expectations <- agent_expectations[i, current_choice]  
    
    agent_option_variances <- agent_variances[i, current_choice]
    
    # update
    agent_variances[i + 1, ] <- agent_variances[i, ]
    agent_variances[i + 1, current_choice] <- (agent_variances[i, current_choice] * reward_noise_variance) / 
      (agent_variances[i, current_choice] + reward_noise_variance)
    
    agent_expectations[i + 1, ] <- agent_expectations[i, ]
    agent_expectations[i + 1, current_choice] <- agent_expectations[i, current_choice] + 
      (agent_variances[i + 1, current_choice] / agent_variances[i, current_choice]) * 
      (reward[i] - agent_expectations[i, current_choice])
  }
  
  return(list(agent_expectations = agent_expectations, 
              agent_variances = agent_variances))
}

# choice rules ----
# softmax not biased
softmax_choice_prob_no_bias <- function(m, temp, pairing) {
  option_mapper <- list("1:1+2:1" = c(1, 3), 
                        "1:2+2:1" = c(2, 3), 
                        "1:2+2:2" = c(2, 4),
                        "1:1+2:2" = c(1, 4))
  actual_m <- matrix(NA, nrow = length(pairing), ncol = 2)
  for (i in 1:length(pairing)) {
    actual_m[i, ] <- m[i, option_mapper[[pairing[i]]]]
  }
  prob <- exp(temp*actual_m)
  prob <- prob/rowSums(prob) # normalize
  return(prob)
}

# softmax biased
softmax_choice_prob_bias <- function(model_results, temp, pairing = NULL) {
  
  # Initialize matrix to hold probabilities
  prob <- matrix(NA, nrow = nrow(model_results$agent_expectations) - 1, ncol = 2)
  
  for (i in 1:(nrow(model_results$agent_expectations) - 1)) {
    agent_option_expectations <- model_results$agent_expectations[i, ]
    
    # Calculate softmax probabilities
    prob[i, ] <- exp(temp * agent_option_expectations)
  }
  
  # Normalize probabilities row-wise
  prob <- prob / rowSums(prob)
  
  return(prob)
}

# UCB not biased
ucb_choice_prob_no_bias <- function(mean_est, variance_est, gamma, beta, pairing) {
  standard_deviation_est <- sqrt(variance_est)
  option_mapper <- list("1:1+2:1" = c(1, 3), 
                        "1:2+2:1" = c(2, 3), 
                        "1:2+2:2" = c(2, 4),
                        "1:1+2:2" = c(1, 4))
  
  actual_mean_est <- matrix(NA, nrow = length(pairing), ncol = 2)
  actual_standard_deviation_est <- matrix(NA, nrow = length(pairing), ncol = 2)
  
  for (i in 1:length(pairing)) {
    actual_mean_est[i, ] <- mean_est[i, option_mapper[[pairing[i]]]]
    actual_standard_deviation_est[i, ] <- standard_deviation_est[i, option_mapper[[pairing[i]]]]
  }
  
  prob <- exp(gamma * (actual_mean_est + beta * actual_standard_deviation_est))
  prob <- prob / rowSums(prob)
  return(prob)
}

# UCB with bias
ucb_choice_prob_bias <- function(agent_mean_est, agent_variance_est, gamma, beta, pairing=NULL, env_mean_est = NULL, env_variance_est = NULL) {
  
  # Get standard deviation of the agent's estimates
  standard_deviation_agent_est <- sqrt(agent_variance_est)
  
  # Calculate UCB-based probability based on agent's estimates
  prob <- exp(gamma * (agent_mean_est + beta * standard_deviation_agent_est))
  
  # Normalize probabilities row-wise
  prob <- prob / rowSums(prob)
  
  return(prob)
}

# ML function ----
# rw not biased
neg_lik_rw_no_bias <- function(par, part_data) {
  starting_alpha <- par[1]
  starting_temp <- par[2]
  pairing <- part_data$pairing
  options_number <- 4
  mean_reward <- 0
  expectations <- comp_model_rw_no_bias(data = part_data, a = starting_alpha, n_options = options_number, 
                                        starting_mean_reward = mean_reward)
  p <- softmax_choice_prob_no_bias(m = expectations, temp = starting_temp, pairing = pairing)
  choices <- part_data$choices
  choice_probs <- p[cbind(1:nrow(part_data), choices)]
  n_like <- -log(choice_probs)
  #if(is.na(n_like) | n_like == Inf) n_like <- 1e+300
  return(n_like)
}

# rw biased
neg_lik_rw_bias <- function(par, part_data) {
  starting_alpha <- par[1]
  starting_temp <- par[2]
  pairing <- part_data$pairing
  options_number <- 4
  mean_reward <- 0
  expectations <- comp_model_rw_bias(data = part_data, a = starting_alpha, n_options = options_number, 
                                     starting_mean_reward = mean_reward)
  p <- softmax_choice_prob_bias(m = expectations, temp = starting_temp, pairing = pairing)
  choices <- part_data$choices
  choice_probs <- p[cbind(1:nrow(part_data), choices)]
  n_like <- -log(choice_probs)
  #if(is.na(n_like) | n_like == Inf) n_like <- 1e+300
  return(n_like)
}

# Bayes not biased
neg_lik_bayes_no_bias <- function(par, part_data) {
  starting_gamma <- par[1]
  starting_beta <- par[2]
  starting_variance <- par[3]
  pairing <- part_data$pairing
  options_number <- 4
  mean_reward <- 0
  expectations <- comp_model_bayes_no_bias(initial_expectation = mean_reward, initial_variance = starting_variance, reward_noise_variance = (2/3)^2, 
                                           n_combinations = options_number, data = part_data)
  p <- ucb_choice_prob_no_bias(mean_est = expectations$expectations, variance_est = expectations$variances, 
                               gamma = starting_gamma, beta = starting_beta, pairing = pairing)
  choices <- part_data$choices
  choice_probs <- p[cbind(1:nrow(part_data), choices)]
  n_like <- -log(choice_probs)
#  if(is.na(n_like) | n_like == Inf) n_like <- 1e+300
  return(n_like)
}

# Bayes biased
neg_lik_bayes_bias <- function(par, part_data) {
  starting_gamma <- par[1]
  starting_beta <- par[2]
  starting_variance <- par[3]
  pairing <- part_data$pairing
  options_number <- 4
  mean_reward <- 0
  expectations <- comp_model_bayes_bias(initial_expectation = mean_reward, initial_variance = starting_variance, 
                                        reward_noise_variance = (2/3)^2, data = part_data)
  p <- ucb_choice_prob_bias(agent_mean_est = expectations$agent_expectations, agent_variance_est = expectations$agent_variances, 
                            env_mean_est = expectations$env_expectations, env_variance_est = expectations$env_variances, 
                            gamma = starting_gamma, beta = starting_beta, pairing = pairing)
  choices <- part_data$choices
  choice_probs <- p[cbind(1:nrow(part_data), choices)]
  n_like <- -log(choice_probs)
#  if(is.na(n_like) | n_like == Inf) n_like <- 1e+300
  return(n_like)
}

# starting value generation function ----
generate_starting_values <- function(n, min, max, seed=NULL) {
  require(randtoolbox)
  if(length(min) != length(max)) stop("min and max should have the same length")
  dim <- length(min)
  # generate Sobol values
  if (!is.null(seed)) {
    start <- sobol(n, dim = dim, seed = seed)
  }
  if (is.null(seed)) {
    start <- sobol(n, dim = dim, seed = NULL)
  }
  
  # transform these to lie between min and max on each dimension
  for(i in 1:ncol(start)) {
    start[,i] <- min[i] + (max[i] - min[i]) * start[, i]
  }
  return(start)
}