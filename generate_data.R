rm(list = objects())
library(writexl)
set.seed(123456)

generate_data <- function(n=100, reward_sd=2/3, reward_mean=0, agent_main_effect=0,
                          condition_main_effect=0, interaction_effect=2, intercept=0) {
  require(dplyr)
  # define globals
  n_trials <- n
  ratio <- .85
  agents <- as.character(1:2)
  conditions <- as.character(1:2)
  a1_pairings <- c("1:1", "1:2")
  a2_pairings <- c("2:1", "2:2")
  possible_pairings <- c("1:1+2:1", "1:2+2:1", "1:2+2:2", "1:1+2:2")
  equal_pairings <- c("1:1+2:1", "1:2+2:2")
  
  # generate rewards (CHECK THESE IF YOU CHANGE GLOBALS!)
  rewards <- matrix(NA, ncol = 4, nrow = n_trials)
  colnames(rewards) <- c(a1_pairings, a2_pairings)
  rewards[, 1] <- intercept + agent_main_effect*0 + condition_main_effect*0 + rnorm(n_trials, reward_mean, reward_sd)
  rewards[, 2] <- intercept + agent_main_effect*0 + condition_main_effect*1 + rnorm(n_trials, reward_mean, reward_sd)
  rewards[, 3] <- intercept + agent_main_effect*1 + condition_main_effect*0 + rnorm(n_trials, reward_mean, reward_sd)
  rewards[, 4] <- intercept + agent_main_effect*1 + condition_main_effect*1 + interaction_effect + rnorm(n_trials, reward_mean, reward_sd)
  rewards <<- round(rewards, 2)
  
  # initiate parings
  pairings <- c(rep(equal_pairings[2], round(n*ratio)), rep(equal_pairings[1], round(n*(1-ratio))))
  
  reward_positions <- list("1:1+2:1" = c(1, 3), 
                           "1:2+2:1" = c(2, 3), 
                           "1:2+2:2" = c(2, 4),
                           "1:1+2:2" = c(1, 4))
  
  name_mapper <- list("1:1+2:1" = c("agent_1", "condition_1", "agent_2", "condition_1"), 
                      "1:2+2:1" = c("agent_1", "condition_2", "agent_2", "condition_1"), 
                      "1:2+2:2" = c("agent_1", "condition_2", "agent_2", "condition_2"),
                      "1:1+2:2" = c("agent_1", "condition_1", "agent_2", "condition_2"))
  
  a1_reward <- c()
  a2_reward <- c()
  agent_option_1 <- c()
  condition_option_1 <- c()
  agent_option_2 <- c()
  condition_option_2 <- c()
  
  for (i in seq_along(pairings)) {
    current_pos <- reward_positions[[pairings[i]]]
    current_pairing <- name_mapper[[pairings[i]]]
    a1_reward[i] <- round(rewards[i, current_pos[1]], 2) # get's rounded again to avoid floating point representation errors
    a2_reward[i] <- round(rewards[i, current_pos[2]], 2) # same here
    agent_option_1[i] <- current_pairing[1]
    condition_option_1[i] <- current_pairing[2]
    agent_option_2[i] <- current_pairing[3]
    condition_option_2[i] <- current_pairing[4]
  }
  
  df <- data.frame(trial = 1:length(pairings),
                   pairing = pairings,
                   a1_reward = a1_reward,
                   a2_reward = a2_reward,
                   agent_option_1 = agent_option_1,
                   condition_option_1 = condition_option_1,
                   agent_option_2 = agent_option_2,
                   condition_option_2 = condition_option_2)
  
  return(df)
}

df <- generate_data(n=52, intercept = 3, reward_sd = 1)

write_xlsx(df, path = "tables/data.xlsx")
