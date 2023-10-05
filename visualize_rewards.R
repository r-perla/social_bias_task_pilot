rm(list = objects())
source("generate_data.R")
library(tidyverse)
library(jtools)

rewards <- as.data.frame(rewards) %>%
  pivot_longer(., cols = 1:4, names_to = "pairing", values_to = "reward")

ggplot(rewards, aes(x=pairing, y=reward)) +
  geom_dotplot(aes(fill=pairing), binaxis='y', stackdir='center') +
  geom_violin(alpha=0.3) +
  geom_boxplot(width=0.05, fill="gray") +
  theme_apa() +
  theme(legend.position = "none") +
  labs(y = "Reward", x = "Pairing")

ggsave(filename = "G:\\Meine Ablage\\Proposal Study 1\\Figures\\rewards_fig.png", device = "png", width = 4*500, height = 3*500, units = "px", dpi = 300)
