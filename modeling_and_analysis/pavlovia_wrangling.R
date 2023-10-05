rm(list = objects())
library(dplyr)
library(readr)

# load data
#df <- read_csv("Database_AllParticipants_investment_task_part_2_330632_2023-08-25_13h31.33_153f220e-f3f1-41c1-80ed-257ceb4b9e28.csv")
df <- read_csv("raw_pilot_df.csv")

# reduce to relevant vars
df <- df %>%
  select(., participant, att_response, condition, a1_reward, a2_reward, rewards, choices, pairing, trials.thisTrialN)

names(df)[names(df) == "participant"] <- "participant_id"
names(df)[names(df) == "rewards"] <- "reward"

full_df <- df %>%
  select(!any_of(c("att_response", "condition"))) %>%
  na.omit() %>%
  subset(., !(participant_id) %in% names(which(table(.$participant_id) < 52)))

# investigate choices
good_parts <- names(table(full_df$participant_id, full_df$choices)[,1][table(full_df$participant_id, full_df$choices)[,1] > 6])

# remove participants hitting the same button
#df <- subset(df, participant_id %in% good_parts)
#full_df <- subset(full_df, participant_id %in% good_parts)

# remove inattentive participants
att_participants <- subset(df, att_response == 2)$participant_id %>%
  unique()

df <- subset(df, participant_id %in% att_participants) %>%
  select(!any_of(c("att_response", "condition"))) %>%
  na.omit()

#write_rds(df, "attentive_data.rds")
#write_rds(full_df, "all_data.rds")

write_rds(full_df, "pilot_data.rds")
