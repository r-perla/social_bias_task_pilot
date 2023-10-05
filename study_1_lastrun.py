#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2023.1.3),
    on September 30, 2023, at 12:37
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
prefs.hardware['audioLib'] = 'ptb'
prefs.hardware['audioLatencyMode'] = '3'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.tools import environmenttools
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2023.1.3'
expName = 'study_1'  # from the Builder filename that created this script
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
}
# --- Show participant info dialog --
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\truly\\Desktop\\Neuer Ordner\\ma_study_1_pilot\\study_1_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# --- Setup the Window ---
win = visual.Window(
    size=[1920, 1080], fullscr=False, screen=0, 
    winType='pyglet', allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    backgroundImage='', backgroundFit='none',
    blendMode='avg', useFBO=True, 
    units='height')
win.mouseVisible = True
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# --- Setup input devices ---
ioConfig = {}

# Setup iohub keyboard
ioConfig['Keyboard'] = dict(use_keymap='psychopy')

ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, **ioConfig)
eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='iohub')

# --- Initialize components for Routine "welcome" ---
welcome_text = visual.TextStim(win=win, name='welcome_text',
    text="Welcome to the 'spot the market insider' task!\nThis experiment aims to analyze whether people can identify market insiders making short-term bets by observing their investment decisions. Market insider are individuals, such as executives or employees, who have access to confidential and non-public information about a company, which could influence its stock price if it were publicly known.\n\nPress 'space' to start",
    font='Open Sans',
    pos=(0, 0), height=0.045, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
end_welcome = keyboard.Keyboard()

# --- Initialize components for Routine "instructions" ---
instruction_text = visual.TextStim(win=win, name='instruction_text',
    text="In this experiment, your responses will be anonymized prior to analysis, ensuring no personal data is collected. We are interested in the collective response pattern from a broad participant group.\n\nPress 'space' to continue",
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
end_instr = keyboard.Keyboard()

# --- Initialize components for Routine "instructions_2" ---
instruction_text_2 = visual.TextStim(win=win, name='instruction_text_2',
    text="During the task, you'll be selecting from various options, each providing a different number of game points. These points will be tallied at the end and converted into a bonus payment. You could earn up to an additional £3 based on your performance, which is separate from the guaranteed £2 completion reward.\n\nPress 'space' to continue",
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
end_instr_2 = keyboard.Keyboard()

# --- Initialize components for Routine "instructions_3" ---
instruction_text_3 = visual.TextStim(win=win, name='instruction_text_3',
    text="This experiment is part two of a larger study. First, we'll show you what your peers did in part one. Then, we'll guide you through your own task in this study.\n\nPress 'space' to continue",
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
end_instr_3 = keyboard.Keyboard()

# --- Initialize components for Routine "fake_instructions" ---
stocks_image = visual.ImageStim(
    win=win,
    name='stocks_image', 
    image='stimuli/stock_symbol.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.2), size=(0.4, 0.4),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
instruction_text_4 = visual.TextStim(win=win, name='instruction_text_4',
    text='In part one of the study, participants were tasked to invest into various stocks at a fictional stock market.',
    font='Open Sans',
    pos=(0, -0.2), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
end_instr_6 = keyboard.Keyboard()

# --- Initialize components for Routine "fake_instructions_2" ---
instruction_text_6 = visual.TextStim(win=win, name='instruction_text_6',
    text='The experiment took place over multiple rounds. At the beginning of each round, participants were assigned a specific category of stocks to invest in.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
end_instr_8 = keyboard.Keyboard()

# --- Initialize components for Routine "fake_instructions_3" ---
env_logos = visual.ImageStim(
    win=win,
    name='env_logos', 
    image='stimuli/envs.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.2), size=(0.7794, 0.2160),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
instruction_text_7 = visual.TextStim(win=win, name='instruction_text_7',
    text="Two examples of the categories presented were 'Hygiene' and 'Furniture', indicated respectively by the images shown above. Each of these categories contained a unique selection of 4 possible stocks to invest in.",
    font='Open Sans',
    pos=(0, -0.2), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
end_instr_9 = keyboard.Keyboard()

# --- Initialize components for Routine "fake_instructions_4" ---
selection_img = visual.ImageStim(
    win=win,
    name='selection_img', 
    image='stimuli/selection.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.15), size=(0.9936, 0.5256),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
instruction_text_8 = visual.TextStim(win=win, name='instruction_text_8',
    text='Once assigned their category for the round, participants were shown the stocks it contained (symbolized by the 4 images shown above) and asked to invest in one of them.',
    font='Open Sans',
    pos=(0, -0.3), height=0.045, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
end_instr_10 = keyboard.Keyboard()

# --- Initialize components for Routine "fake_instructions_5" ---
ind_stock = visual.ImageStim(
    win=win,
    name='ind_stock', 
    image='stimuli/stock.png', mask=None, anchor='center',
    ori=0.0, pos=(-0.1, 0.15), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
instruction_text_9 = visual.TextStim(win=win, name='instruction_text_9',
    text='After choosing a stock, the participants would be informed of the money they earned or lost by choosing this stock.',
    font='Open Sans',
    pos=(0, -0.3), height=0.045, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
end_instr_11 = keyboard.Keyboard()
fake_reward_txt = visual.TextStim(win=win, name='fake_reward_txt',
    text='+1.4$',
    font='Open Sans',
    pos=(0.2, 0.15), height=0.05, wrapWidth=None, ori=0.0, 
    color=[-1.0000, 0.0039, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# --- Initialize components for Routine "fake_instructions_6" ---
ind_stock_2 = visual.ImageStim(
    win=win,
    name='ind_stock_2', 
    image='stimuli/stock.png', mask=None, anchor='center',
    ori=0.0, pos=(-0.1, 0.15), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
instruction_text_10 = visual.TextStim(win=win, name='instruction_text_10',
    text='Then the next round would begin.',
    font='Open Sans',
    pos=(0, -0.3), height=0.045, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
end_instr_12 = keyboard.Keyboard()
fake_reward_txt_2 = visual.TextStim(win=win, name='fake_reward_txt_2',
    text='+1.4$',
    font='Open Sans',
    pos=(0.2, 0.15), height=0.05, wrapWidth=None, ori=0.0, 
    color=[-1.0000, 0.0039, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# --- Initialize components for Routine "fake_instructions_7" ---
env_logos_2 = visual.ImageStim(
    win=win,
    name='env_logos_2', 
    image='stimuli/envs.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.2), size=(0.7794, 0.2160),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
instruction_text_11 = visual.TextStim(win=win, name='instruction_text_11',
    text='They would once again be randomly assigned one of the two categories of stocks.',
    font='Open Sans',
    pos=(0, -0.2), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
end_instr_13 = keyboard.Keyboard()

# --- Initialize components for Routine "fake_instructions_8" ---
selection_img_2 = visual.ImageStim(
    win=win,
    name='selection_img_2', 
    image='stimuli/selection.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.15), size=(0.9936, 0.5256),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
instruction_text_12 = visual.TextStim(win=win, name='instruction_text_12',
    text='Be shown the selection of stocks from the assigned category and asked to choose one of them.',
    font='Open Sans',
    pos=(0, -0.3), height=0.045, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
end_instr_14 = keyboard.Keyboard()

# --- Initialize components for Routine "fake_instructions_9" ---
ind_stock_3 = visual.ImageStim(
    win=win,
    name='ind_stock_3', 
    image='stimuli/stock2.png', mask=None, anchor='center',
    ori=0.0, pos=(-0.1, 0.15), size=(0.2, 0.2),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
instruction_text_13 = visual.TextStim(win=win, name='instruction_text_13',
    text='Be shown the monetary reward they received or lost as a consequence of their chosen stock.',
    font='Open Sans',
    pos=(0, -0.3), height=0.045, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
end_instr_15 = keyboard.Keyboard()
fake_reward_txt_3 = visual.TextStim(win=win, name='fake_reward_txt_3',
    text='-2.7$',
    font='Open Sans',
    pos=(0.2, 0.15), height=0.05, wrapWidth=None, ori=0.0, 
    color=[1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);

# --- Initialize components for Routine "fake_instructions_10" ---
instruction_text_15 = visual.TextStim(win=win, name='instruction_text_15',
    text='Each stock would yield a different amount of reward on average. Some stocks even changed their average reward over time.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
end_instr_17 = keyboard.Keyboard()

# --- Initialize components for Routine "fake_instructions_11" ---
instruction_text_16 = visual.TextStim(win=win, name='instruction_text_16',
    text='You can see the rewards yielded by four of these stocks in the diagram above. The reward is displayed on the y-axis while the rounds of the experiment are displayed on the x-axis. Each of the four stocks is represented by a colored line.',
    font='Open Sans',
    pos=(0, -0.35), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
end_instr_18 = keyboard.Keyboard()
avg_reward_img = visual.ImageStim(
    win=win,
    name='avg_reward_img', 
    image='stimuli/plot.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.15), size=(1.28, 0.72),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)

# --- Initialize components for Routine "fake_instructions_12" ---
instruction_text_14 = visual.TextStim(win=win, name='instruction_text_14',
    text='By repeating this process for multiple rounds, participants could learn which stocks generally made them the most money through a process of trial and error.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
end_instr_16 = keyboard.Keyboard()

# --- Initialize components for Routine "fake_instructions_13" ---
instruction_text_17 = visual.TextStim(win=win, name='instruction_text_17',
    text="However, some participants were randomly selected to receive 'insider information' that would help them make more profitable choices, thus giving them an advantage over the 'normal' participants.",
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
end_instr_19 = keyboard.Keyboard()

# --- Initialize components for Routine "fake_instructions_14" ---
instruction_text_18 = visual.TextStim(win=win, name='instruction_text_18',
    text="This is where you come in. In your task, you will be able to select an investor and check how much money they made when investing in different markets. You'll be asked repeatedly to choose the investor you want to investigate, because each investor placed several bets during our experiment. Remember that some investors may have been 'insiders' on specific markets.",
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
end_instr_20 = keyboard.Keyboard()

# --- Initialize components for Routine "real_instructions" ---
instruction_text_5 = visual.TextStim(win=win, name='instruction_text_5',
    text="The detailed instructions for your task start now. \nPlease read them carefully. You can only score many points (and receive a large bonus payment) if you understand them well!\n\nPress 'space' to continue",
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
end_instr_7 = keyboard.Keyboard()

# --- Initialize components for Routine "real_instructions_2" ---
investors = visual.ImageStim(
    win=win,
    name='investors', 
    image='stimuli/training_investors.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.2), size=(1.012, 0.338),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
instr_txt = visual.TextStim(win=win, name='instr_txt',
    text='As mentioned, you will choose between two prior participants (investors) to examine whether you can spot the market insider or not. Like yourself, these participants were ensured anonymity. For this reason, you will be able to tell them apart by the colored icons seen above.',
    font='Open Sans',
    pos=(0, -.1), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
end_instr_4 = keyboard.Keyboard()

# --- Initialize components for Routine "real_instructions_2_5" ---
investors_2_sample = visual.ImageStim(
    win=win,
    name='investors_2_sample', 
    image='stimuli/example_pairing.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.15), size=(0.9058, 0.5425),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
instr_txt_3 = visual.TextStim(win=win, name='instr_txt_3',
    text='To simplify the experience, you will only see two investors and the category they were assigned to. You will not have to deal with the individual stocks nested within the categories the way the prior participants did.',
    font='Open Sans',
    pos=(0, -.3), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
end_instr_21 = keyboard.Keyboard()

# --- Initialize components for Routine "real_instructions_3" ---
reward_demo = visual.TextStim(win=win, name='reward_demo',
    text='+3.72$',
    font='Open Sans',
    pos=(0, 0.2), height=0.1, wrapWidth=None, ori=0.0, 
    color=[-1.0000, 0.0039, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
instr_txt_2 = visual.TextStim(win=win, name='instr_txt_2',
    text='When you have chosen the investor you want to investigate, you will see the result as a numerical value on your screen after selection.',
    font='Open Sans',
    pos=(0, -.1), height=0.03, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
end_instr_5 = keyboard.Keyboard()

# --- Initialize components for Routine "training" ---
training_stims = visual.ImageStim(
    win=win,
    name='training_stims', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0.1), size=(0.72464, 0.43400),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
training_choice = keyboard.Keyboard()
training_instr = visual.TextStim(win=win, name='training_instr',
    text="Let's do a practice round! Select one of the two investors by pressing their corresponding number on your keyboard.",
    font='Open Sans',
    pos=(0, -0.3), height=0.04, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
one_txt = visual.TextStim(win=win, name='one_txt',
    text='1',
    font='Open Sans',
    pos=(-0.3, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
two_txt = visual.TextStim(win=win, name='two_txt',
    text='2',
    font='Open Sans',
    pos=(0.3, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);

# --- Initialize components for Routine "training_reward_display" ---
training_reward_display_text = visual.TextStim(win=win, name='training_reward_display_text',
    text="Very good! \nWhen you select an investor, the reward they earned will either be added to your points (if it's positive) or deducted from your points (if it's negative).\nAt the end of the experiment, we'll compare your total points with participants who weren't informed about the presence of market insiders the way you were. This will help us determine if you were successful in identifying the market insiders.",
    font='Open Sans',
    pos=(0, -0.1), height=0.035, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
fake_training_reward = visual.TextStim(win=win, name='fake_training_reward',
    text='+1.64$',
    font='Open Sans',
    pos=(0, 0.2), height=0.1, wrapWidth=None, ori=0.0, 
    color=[-1.0000, 0.0039, -1.0000], colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
next_key_2 = keyboard.Keyboard()

# --- Initialize components for Routine "att_check_primer" ---
training_reward_display_text_2 = visual.TextStim(win=win, name='training_reward_display_text_2',
    text="You have reached the end of the instructions! Before we begin the task, let's go over a couple of questions to see whether you understand your assignment.",
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
next_key = keyboard.Keyboard()

# --- Initialize components for Routine "att_check_1" ---
q1 = visual.TextStim(win=win, name='q1',
    text='What is your task in this experiment?',
    font='Open Sans',
    pos=(0, 0.3), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
resps = visual.TextStim(win=win, name='resps',
    text='1. To choose all investors about equally often.\n\n2. To gain as many points as possible.\n\n3. To find out which category is best.',
    font='Open Sans',
    pos=(0, 0), height=0.035, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
text = visual.TextStim(win=win, name='text',
    text='Press the number key corresponding to your answer.',
    font='Open Sans',
    pos=(0, -0.35), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
att1_resp = keyboard.Keyboard()

# --- Initialize components for Routine "att_1_feedback" ---
text_2 = visual.TextStim(win=win, name='text_2',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
continue_feed = keyboard.Keyboard()

# --- Initialize components for Routine "exp_start_primer" ---
instruction_text_19 = visual.TextStim(win=win, name='instruction_text_19',
    text="The experiment is about to begin. Remember:\n\n1. Some investors might have received insider information.\n2. Your task is to gather as many points as possible - choose whichever pairing of investor and condition you think will yield the highest reward.\n3. Select your chosen pairing by pressing the '1' or '2' key on your keyboard.\n\nPress 'space' to start the experiment",
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
end_instr_22 = keyboard.Keyboard()

# --- Initialize components for Routine "choice" ---
# Run 'Begin Experiment' code from trial_code
condition_list = ["standard", "color_flip", "side_flip", "color_and_side_flip"]
condition = condition_list[np.random.randint(0, 4)]

path_condition_mapper = {
    "1:1+2:1": f"stimuli/{condition}/both_tech.png",
    "1:2+2:2": f"stimuli/{condition}/both_trad.png",
    "1:1+2:2": f"stimuli/{condition}/a1_tech_a2_trad.png" if "side_flip" not in condition else f"stimuli/{condition}/a1_trad_a2_tech.png",
    "1:2+2:1": f"stimuli/{condition}/a1_trad_a2_tech.png" if "side_flip" not in condition else f"stimuli/{condition}/a1_tech_a2_trad.png",
}

thisExp.addData('condition', condition)
stimuli_img = visual.ImageStim(
    win=win,
    name='stimuli_img', 
    image='default.png', mask=None, anchor='center',
    ori=0.0, pos=(0, 0), size=(1.2, .9),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)
choices = keyboard.Keyboard()

# --- Initialize components for Routine "reward_display" ---
reward_display_text = visual.TextStim(win=win, name='reward_display_text',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);

# --- Initialize components for Routine "end_screen" ---
end_text = visual.TextStim(win=win, name='end_text',
    text="You have reached the end of the experiment. Thank you for your participation!\n\nPress 'space' to save your data and be redirected to Prolific.",
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
end_key = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.Clock()  # to track time remaining of each (possibly non-slip) routine 

# --- Prepare to start Routine "welcome" ---
continueRoutine = True
# update component parameters for each repeat
end_welcome.keys = []
end_welcome.rt = []
_end_welcome_allKeys = []
# keep track of which components have finished
welcomeComponents = [welcome_text, end_welcome]
for thisComponent in welcomeComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "welcome" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *welcome_text* updates
    
    # if welcome_text is starting this frame...
    if welcome_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        welcome_text.frameNStart = frameN  # exact frame index
        welcome_text.tStart = t  # local t and not account for scr refresh
        welcome_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(welcome_text, 'tStartRefresh')  # time at next scr refresh
        # update status
        welcome_text.status = STARTED
        welcome_text.setAutoDraw(True)
    
    # if welcome_text is active this frame...
    if welcome_text.status == STARTED:
        # update params
        pass
    
    # *end_welcome* updates
    waitOnFlip = False
    
    # if end_welcome is starting this frame...
    if end_welcome.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        end_welcome.frameNStart = frameN  # exact frame index
        end_welcome.tStart = t  # local t and not account for scr refresh
        end_welcome.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_welcome, 'tStartRefresh')  # time at next scr refresh
        # update status
        end_welcome.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(end_welcome.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(end_welcome.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if end_welcome.status == STARTED and not waitOnFlip:
        theseKeys = end_welcome.getKeys(keyList=['space'], waitRelease=False)
        _end_welcome_allKeys.extend(theseKeys)
        if len(_end_welcome_allKeys):
            end_welcome.keys = _end_welcome_allKeys[-1].name  # just the last key pressed
            end_welcome.rt = _end_welcome_allKeys[-1].rt
            end_welcome.duration = _end_welcome_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in welcomeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "welcome" ---
for thisComponent in welcomeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "welcome" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "instructions" ---
continueRoutine = True
# update component parameters for each repeat
end_instr.keys = []
end_instr.rt = []
_end_instr_allKeys = []
# keep track of which components have finished
instructionsComponents = [instruction_text, end_instr]
for thisComponent in instructionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "instructions" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instruction_text* updates
    
    # if instruction_text is starting this frame...
    if instruction_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_text.frameNStart = frameN  # exact frame index
        instruction_text.tStart = t  # local t and not account for scr refresh
        instruction_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_text, 'tStartRefresh')  # time at next scr refresh
        # update status
        instruction_text.status = STARTED
        instruction_text.setAutoDraw(True)
    
    # if instruction_text is active this frame...
    if instruction_text.status == STARTED:
        # update params
        pass
    
    # *end_instr* updates
    waitOnFlip = False
    
    # if end_instr is starting this frame...
    if end_instr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        end_instr.frameNStart = frameN  # exact frame index
        end_instr.tStart = t  # local t and not account for scr refresh
        end_instr.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_instr, 'tStartRefresh')  # time at next scr refresh
        # update status
        end_instr.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(end_instr.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(end_instr.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if end_instr.status == STARTED and not waitOnFlip:
        theseKeys = end_instr.getKeys(keyList=['space'], waitRelease=False)
        _end_instr_allKeys.extend(theseKeys)
        if len(_end_instr_allKeys):
            end_instr.keys = _end_instr_allKeys[-1].name  # just the last key pressed
            end_instr.rt = _end_instr_allKeys[-1].rt
            end_instr.duration = _end_instr_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "instructions" ---
for thisComponent in instructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "instructions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "instructions_2" ---
continueRoutine = True
# update component parameters for each repeat
end_instr_2.keys = []
end_instr_2.rt = []
_end_instr_2_allKeys = []
# keep track of which components have finished
instructions_2Components = [instruction_text_2, end_instr_2]
for thisComponent in instructions_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "instructions_2" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instruction_text_2* updates
    
    # if instruction_text_2 is starting this frame...
    if instruction_text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_text_2.frameNStart = frameN  # exact frame index
        instruction_text_2.tStart = t  # local t and not account for scr refresh
        instruction_text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_text_2, 'tStartRefresh')  # time at next scr refresh
        # update status
        instruction_text_2.status = STARTED
        instruction_text_2.setAutoDraw(True)
    
    # if instruction_text_2 is active this frame...
    if instruction_text_2.status == STARTED:
        # update params
        pass
    
    # *end_instr_2* updates
    waitOnFlip = False
    
    # if end_instr_2 is starting this frame...
    if end_instr_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        end_instr_2.frameNStart = frameN  # exact frame index
        end_instr_2.tStart = t  # local t and not account for scr refresh
        end_instr_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_instr_2, 'tStartRefresh')  # time at next scr refresh
        # update status
        end_instr_2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(end_instr_2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(end_instr_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if end_instr_2.status == STARTED and not waitOnFlip:
        theseKeys = end_instr_2.getKeys(keyList=['space'], waitRelease=False)
        _end_instr_2_allKeys.extend(theseKeys)
        if len(_end_instr_2_allKeys):
            end_instr_2.keys = _end_instr_2_allKeys[-1].name  # just the last key pressed
            end_instr_2.rt = _end_instr_2_allKeys[-1].rt
            end_instr_2.duration = _end_instr_2_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructions_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "instructions_2" ---
for thisComponent in instructions_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "instructions_2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "instructions_3" ---
continueRoutine = True
# update component parameters for each repeat
end_instr_3.keys = []
end_instr_3.rt = []
_end_instr_3_allKeys = []
# keep track of which components have finished
instructions_3Components = [instruction_text_3, end_instr_3]
for thisComponent in instructions_3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "instructions_3" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instruction_text_3* updates
    
    # if instruction_text_3 is starting this frame...
    if instruction_text_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_text_3.frameNStart = frameN  # exact frame index
        instruction_text_3.tStart = t  # local t and not account for scr refresh
        instruction_text_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_text_3, 'tStartRefresh')  # time at next scr refresh
        # update status
        instruction_text_3.status = STARTED
        instruction_text_3.setAutoDraw(True)
    
    # if instruction_text_3 is active this frame...
    if instruction_text_3.status == STARTED:
        # update params
        pass
    
    # *end_instr_3* updates
    waitOnFlip = False
    
    # if end_instr_3 is starting this frame...
    if end_instr_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        end_instr_3.frameNStart = frameN  # exact frame index
        end_instr_3.tStart = t  # local t and not account for scr refresh
        end_instr_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_instr_3, 'tStartRefresh')  # time at next scr refresh
        # update status
        end_instr_3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(end_instr_3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(end_instr_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if end_instr_3.status == STARTED and not waitOnFlip:
        theseKeys = end_instr_3.getKeys(keyList=['space'], waitRelease=False)
        _end_instr_3_allKeys.extend(theseKeys)
        if len(_end_instr_3_allKeys):
            end_instr_3.keys = _end_instr_3_allKeys[-1].name  # just the last key pressed
            end_instr_3.rt = _end_instr_3_allKeys[-1].rt
            end_instr_3.duration = _end_instr_3_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructions_3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "instructions_3" ---
for thisComponent in instructions_3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "instructions_3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "fake_instructions" ---
continueRoutine = True
# update component parameters for each repeat
end_instr_6.keys = []
end_instr_6.rt = []
_end_instr_6_allKeys = []
# keep track of which components have finished
fake_instructionsComponents = [stocks_image, instruction_text_4, end_instr_6]
for thisComponent in fake_instructionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "fake_instructions" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *stocks_image* updates
    
    # if stocks_image is starting this frame...
    if stocks_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        stocks_image.frameNStart = frameN  # exact frame index
        stocks_image.tStart = t  # local t and not account for scr refresh
        stocks_image.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(stocks_image, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'stocks_image.started')
        # update status
        stocks_image.status = STARTED
        stocks_image.setAutoDraw(True)
    
    # if stocks_image is active this frame...
    if stocks_image.status == STARTED:
        # update params
        pass
    
    # *instruction_text_4* updates
    
    # if instruction_text_4 is starting this frame...
    if instruction_text_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_text_4.frameNStart = frameN  # exact frame index
        instruction_text_4.tStart = t  # local t and not account for scr refresh
        instruction_text_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_text_4, 'tStartRefresh')  # time at next scr refresh
        # update status
        instruction_text_4.status = STARTED
        instruction_text_4.setAutoDraw(True)
    
    # if instruction_text_4 is active this frame...
    if instruction_text_4.status == STARTED:
        # update params
        pass
    
    # *end_instr_6* updates
    waitOnFlip = False
    
    # if end_instr_6 is starting this frame...
    if end_instr_6.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        end_instr_6.frameNStart = frameN  # exact frame index
        end_instr_6.tStart = t  # local t and not account for scr refresh
        end_instr_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_instr_6, 'tStartRefresh')  # time at next scr refresh
        # update status
        end_instr_6.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(end_instr_6.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(end_instr_6.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if end_instr_6.status == STARTED and not waitOnFlip:
        theseKeys = end_instr_6.getKeys(keyList=['space'], waitRelease=False)
        _end_instr_6_allKeys.extend(theseKeys)
        if len(_end_instr_6_allKeys):
            end_instr_6.keys = _end_instr_6_allKeys[-1].name  # just the last key pressed
            end_instr_6.rt = _end_instr_6_allKeys[-1].rt
            end_instr_6.duration = _end_instr_6_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in fake_instructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "fake_instructions" ---
for thisComponent in fake_instructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "fake_instructions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "fake_instructions_2" ---
continueRoutine = True
# update component parameters for each repeat
end_instr_8.keys = []
end_instr_8.rt = []
_end_instr_8_allKeys = []
# keep track of which components have finished
fake_instructions_2Components = [instruction_text_6, end_instr_8]
for thisComponent in fake_instructions_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "fake_instructions_2" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instruction_text_6* updates
    
    # if instruction_text_6 is starting this frame...
    if instruction_text_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_text_6.frameNStart = frameN  # exact frame index
        instruction_text_6.tStart = t  # local t and not account for scr refresh
        instruction_text_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_text_6, 'tStartRefresh')  # time at next scr refresh
        # update status
        instruction_text_6.status = STARTED
        instruction_text_6.setAutoDraw(True)
    
    # if instruction_text_6 is active this frame...
    if instruction_text_6.status == STARTED:
        # update params
        pass
    
    # *end_instr_8* updates
    waitOnFlip = False
    
    # if end_instr_8 is starting this frame...
    if end_instr_8.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        end_instr_8.frameNStart = frameN  # exact frame index
        end_instr_8.tStart = t  # local t and not account for scr refresh
        end_instr_8.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_instr_8, 'tStartRefresh')  # time at next scr refresh
        # update status
        end_instr_8.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(end_instr_8.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(end_instr_8.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if end_instr_8.status == STARTED and not waitOnFlip:
        theseKeys = end_instr_8.getKeys(keyList=['space'], waitRelease=False)
        _end_instr_8_allKeys.extend(theseKeys)
        if len(_end_instr_8_allKeys):
            end_instr_8.keys = _end_instr_8_allKeys[-1].name  # just the last key pressed
            end_instr_8.rt = _end_instr_8_allKeys[-1].rt
            end_instr_8.duration = _end_instr_8_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in fake_instructions_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "fake_instructions_2" ---
for thisComponent in fake_instructions_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "fake_instructions_2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "fake_instructions_3" ---
continueRoutine = True
# update component parameters for each repeat
end_instr_9.keys = []
end_instr_9.rt = []
_end_instr_9_allKeys = []
# keep track of which components have finished
fake_instructions_3Components = [env_logos, instruction_text_7, end_instr_9]
for thisComponent in fake_instructions_3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "fake_instructions_3" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *env_logos* updates
    
    # if env_logos is starting this frame...
    if env_logos.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        env_logos.frameNStart = frameN  # exact frame index
        env_logos.tStart = t  # local t and not account for scr refresh
        env_logos.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(env_logos, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'env_logos.started')
        # update status
        env_logos.status = STARTED
        env_logos.setAutoDraw(True)
    
    # if env_logos is active this frame...
    if env_logos.status == STARTED:
        # update params
        pass
    
    # *instruction_text_7* updates
    
    # if instruction_text_7 is starting this frame...
    if instruction_text_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_text_7.frameNStart = frameN  # exact frame index
        instruction_text_7.tStart = t  # local t and not account for scr refresh
        instruction_text_7.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_text_7, 'tStartRefresh')  # time at next scr refresh
        # update status
        instruction_text_7.status = STARTED
        instruction_text_7.setAutoDraw(True)
    
    # if instruction_text_7 is active this frame...
    if instruction_text_7.status == STARTED:
        # update params
        pass
    
    # *end_instr_9* updates
    waitOnFlip = False
    
    # if end_instr_9 is starting this frame...
    if end_instr_9.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        end_instr_9.frameNStart = frameN  # exact frame index
        end_instr_9.tStart = t  # local t and not account for scr refresh
        end_instr_9.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_instr_9, 'tStartRefresh')  # time at next scr refresh
        # update status
        end_instr_9.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(end_instr_9.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(end_instr_9.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if end_instr_9.status == STARTED and not waitOnFlip:
        theseKeys = end_instr_9.getKeys(keyList=['space'], waitRelease=False)
        _end_instr_9_allKeys.extend(theseKeys)
        if len(_end_instr_9_allKeys):
            end_instr_9.keys = _end_instr_9_allKeys[-1].name  # just the last key pressed
            end_instr_9.rt = _end_instr_9_allKeys[-1].rt
            end_instr_9.duration = _end_instr_9_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in fake_instructions_3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "fake_instructions_3" ---
for thisComponent in fake_instructions_3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "fake_instructions_3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "fake_instructions_4" ---
continueRoutine = True
# update component parameters for each repeat
end_instr_10.keys = []
end_instr_10.rt = []
_end_instr_10_allKeys = []
# keep track of which components have finished
fake_instructions_4Components = [selection_img, instruction_text_8, end_instr_10]
for thisComponent in fake_instructions_4Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "fake_instructions_4" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *selection_img* updates
    
    # if selection_img is starting this frame...
    if selection_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        selection_img.frameNStart = frameN  # exact frame index
        selection_img.tStart = t  # local t and not account for scr refresh
        selection_img.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(selection_img, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'selection_img.started')
        # update status
        selection_img.status = STARTED
        selection_img.setAutoDraw(True)
    
    # if selection_img is active this frame...
    if selection_img.status == STARTED:
        # update params
        pass
    
    # *instruction_text_8* updates
    
    # if instruction_text_8 is starting this frame...
    if instruction_text_8.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_text_8.frameNStart = frameN  # exact frame index
        instruction_text_8.tStart = t  # local t and not account for scr refresh
        instruction_text_8.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_text_8, 'tStartRefresh')  # time at next scr refresh
        # update status
        instruction_text_8.status = STARTED
        instruction_text_8.setAutoDraw(True)
    
    # if instruction_text_8 is active this frame...
    if instruction_text_8.status == STARTED:
        # update params
        pass
    
    # *end_instr_10* updates
    waitOnFlip = False
    
    # if end_instr_10 is starting this frame...
    if end_instr_10.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        end_instr_10.frameNStart = frameN  # exact frame index
        end_instr_10.tStart = t  # local t and not account for scr refresh
        end_instr_10.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_instr_10, 'tStartRefresh')  # time at next scr refresh
        # update status
        end_instr_10.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(end_instr_10.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(end_instr_10.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if end_instr_10.status == STARTED and not waitOnFlip:
        theseKeys = end_instr_10.getKeys(keyList=['space'], waitRelease=False)
        _end_instr_10_allKeys.extend(theseKeys)
        if len(_end_instr_10_allKeys):
            end_instr_10.keys = _end_instr_10_allKeys[-1].name  # just the last key pressed
            end_instr_10.rt = _end_instr_10_allKeys[-1].rt
            end_instr_10.duration = _end_instr_10_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in fake_instructions_4Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "fake_instructions_4" ---
for thisComponent in fake_instructions_4Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "fake_instructions_4" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "fake_instructions_5" ---
continueRoutine = True
# update component parameters for each repeat
end_instr_11.keys = []
end_instr_11.rt = []
_end_instr_11_allKeys = []
# keep track of which components have finished
fake_instructions_5Components = [ind_stock, instruction_text_9, end_instr_11, fake_reward_txt]
for thisComponent in fake_instructions_5Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "fake_instructions_5" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *ind_stock* updates
    
    # if ind_stock is starting this frame...
    if ind_stock.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ind_stock.frameNStart = frameN  # exact frame index
        ind_stock.tStart = t  # local t and not account for scr refresh
        ind_stock.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ind_stock, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'ind_stock.started')
        # update status
        ind_stock.status = STARTED
        ind_stock.setAutoDraw(True)
    
    # if ind_stock is active this frame...
    if ind_stock.status == STARTED:
        # update params
        pass
    
    # *instruction_text_9* updates
    
    # if instruction_text_9 is starting this frame...
    if instruction_text_9.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_text_9.frameNStart = frameN  # exact frame index
        instruction_text_9.tStart = t  # local t and not account for scr refresh
        instruction_text_9.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_text_9, 'tStartRefresh')  # time at next scr refresh
        # update status
        instruction_text_9.status = STARTED
        instruction_text_9.setAutoDraw(True)
    
    # if instruction_text_9 is active this frame...
    if instruction_text_9.status == STARTED:
        # update params
        pass
    
    # *end_instr_11* updates
    waitOnFlip = False
    
    # if end_instr_11 is starting this frame...
    if end_instr_11.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        end_instr_11.frameNStart = frameN  # exact frame index
        end_instr_11.tStart = t  # local t and not account for scr refresh
        end_instr_11.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_instr_11, 'tStartRefresh')  # time at next scr refresh
        # update status
        end_instr_11.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(end_instr_11.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(end_instr_11.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if end_instr_11.status == STARTED and not waitOnFlip:
        theseKeys = end_instr_11.getKeys(keyList=['space'], waitRelease=False)
        _end_instr_11_allKeys.extend(theseKeys)
        if len(_end_instr_11_allKeys):
            end_instr_11.keys = _end_instr_11_allKeys[-1].name  # just the last key pressed
            end_instr_11.rt = _end_instr_11_allKeys[-1].rt
            end_instr_11.duration = _end_instr_11_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # *fake_reward_txt* updates
    
    # if fake_reward_txt is starting this frame...
    if fake_reward_txt.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        fake_reward_txt.frameNStart = frameN  # exact frame index
        fake_reward_txt.tStart = t  # local t and not account for scr refresh
        fake_reward_txt.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(fake_reward_txt, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'fake_reward_txt.started')
        # update status
        fake_reward_txt.status = STARTED
        fake_reward_txt.setAutoDraw(True)
    
    # if fake_reward_txt is active this frame...
    if fake_reward_txt.status == STARTED:
        # update params
        pass
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in fake_instructions_5Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "fake_instructions_5" ---
for thisComponent in fake_instructions_5Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "fake_instructions_5" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "fake_instructions_6" ---
continueRoutine = True
# update component parameters for each repeat
end_instr_12.keys = []
end_instr_12.rt = []
_end_instr_12_allKeys = []
# keep track of which components have finished
fake_instructions_6Components = [ind_stock_2, instruction_text_10, end_instr_12, fake_reward_txt_2]
for thisComponent in fake_instructions_6Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "fake_instructions_6" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *ind_stock_2* updates
    
    # if ind_stock_2 is starting this frame...
    if ind_stock_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ind_stock_2.frameNStart = frameN  # exact frame index
        ind_stock_2.tStart = t  # local t and not account for scr refresh
        ind_stock_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ind_stock_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'ind_stock_2.started')
        # update status
        ind_stock_2.status = STARTED
        ind_stock_2.setAutoDraw(True)
    
    # if ind_stock_2 is active this frame...
    if ind_stock_2.status == STARTED:
        # update params
        pass
    
    # *instruction_text_10* updates
    
    # if instruction_text_10 is starting this frame...
    if instruction_text_10.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_text_10.frameNStart = frameN  # exact frame index
        instruction_text_10.tStart = t  # local t and not account for scr refresh
        instruction_text_10.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_text_10, 'tStartRefresh')  # time at next scr refresh
        # update status
        instruction_text_10.status = STARTED
        instruction_text_10.setAutoDraw(True)
    
    # if instruction_text_10 is active this frame...
    if instruction_text_10.status == STARTED:
        # update params
        pass
    
    # *end_instr_12* updates
    waitOnFlip = False
    
    # if end_instr_12 is starting this frame...
    if end_instr_12.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        end_instr_12.frameNStart = frameN  # exact frame index
        end_instr_12.tStart = t  # local t and not account for scr refresh
        end_instr_12.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_instr_12, 'tStartRefresh')  # time at next scr refresh
        # update status
        end_instr_12.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(end_instr_12.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(end_instr_12.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if end_instr_12.status == STARTED and not waitOnFlip:
        theseKeys = end_instr_12.getKeys(keyList=['space'], waitRelease=False)
        _end_instr_12_allKeys.extend(theseKeys)
        if len(_end_instr_12_allKeys):
            end_instr_12.keys = _end_instr_12_allKeys[-1].name  # just the last key pressed
            end_instr_12.rt = _end_instr_12_allKeys[-1].rt
            end_instr_12.duration = _end_instr_12_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # *fake_reward_txt_2* updates
    
    # if fake_reward_txt_2 is starting this frame...
    if fake_reward_txt_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        fake_reward_txt_2.frameNStart = frameN  # exact frame index
        fake_reward_txt_2.tStart = t  # local t and not account for scr refresh
        fake_reward_txt_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(fake_reward_txt_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'fake_reward_txt_2.started')
        # update status
        fake_reward_txt_2.status = STARTED
        fake_reward_txt_2.setAutoDraw(True)
    
    # if fake_reward_txt_2 is active this frame...
    if fake_reward_txt_2.status == STARTED:
        # update params
        pass
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in fake_instructions_6Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "fake_instructions_6" ---
for thisComponent in fake_instructions_6Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "fake_instructions_6" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "fake_instructions_7" ---
continueRoutine = True
# update component parameters for each repeat
end_instr_13.keys = []
end_instr_13.rt = []
_end_instr_13_allKeys = []
# keep track of which components have finished
fake_instructions_7Components = [env_logos_2, instruction_text_11, end_instr_13]
for thisComponent in fake_instructions_7Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "fake_instructions_7" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *env_logos_2* updates
    
    # if env_logos_2 is starting this frame...
    if env_logos_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        env_logos_2.frameNStart = frameN  # exact frame index
        env_logos_2.tStart = t  # local t and not account for scr refresh
        env_logos_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(env_logos_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'env_logos_2.started')
        # update status
        env_logos_2.status = STARTED
        env_logos_2.setAutoDraw(True)
    
    # if env_logos_2 is active this frame...
    if env_logos_2.status == STARTED:
        # update params
        pass
    
    # *instruction_text_11* updates
    
    # if instruction_text_11 is starting this frame...
    if instruction_text_11.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_text_11.frameNStart = frameN  # exact frame index
        instruction_text_11.tStart = t  # local t and not account for scr refresh
        instruction_text_11.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_text_11, 'tStartRefresh')  # time at next scr refresh
        # update status
        instruction_text_11.status = STARTED
        instruction_text_11.setAutoDraw(True)
    
    # if instruction_text_11 is active this frame...
    if instruction_text_11.status == STARTED:
        # update params
        pass
    
    # *end_instr_13* updates
    waitOnFlip = False
    
    # if end_instr_13 is starting this frame...
    if end_instr_13.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        end_instr_13.frameNStart = frameN  # exact frame index
        end_instr_13.tStart = t  # local t and not account for scr refresh
        end_instr_13.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_instr_13, 'tStartRefresh')  # time at next scr refresh
        # update status
        end_instr_13.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(end_instr_13.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(end_instr_13.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if end_instr_13.status == STARTED and not waitOnFlip:
        theseKeys = end_instr_13.getKeys(keyList=['space'], waitRelease=False)
        _end_instr_13_allKeys.extend(theseKeys)
        if len(_end_instr_13_allKeys):
            end_instr_13.keys = _end_instr_13_allKeys[-1].name  # just the last key pressed
            end_instr_13.rt = _end_instr_13_allKeys[-1].rt
            end_instr_13.duration = _end_instr_13_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in fake_instructions_7Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "fake_instructions_7" ---
for thisComponent in fake_instructions_7Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "fake_instructions_7" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "fake_instructions_8" ---
continueRoutine = True
# update component parameters for each repeat
end_instr_14.keys = []
end_instr_14.rt = []
_end_instr_14_allKeys = []
# keep track of which components have finished
fake_instructions_8Components = [selection_img_2, instruction_text_12, end_instr_14]
for thisComponent in fake_instructions_8Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "fake_instructions_8" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *selection_img_2* updates
    
    # if selection_img_2 is starting this frame...
    if selection_img_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        selection_img_2.frameNStart = frameN  # exact frame index
        selection_img_2.tStart = t  # local t and not account for scr refresh
        selection_img_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(selection_img_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'selection_img_2.started')
        # update status
        selection_img_2.status = STARTED
        selection_img_2.setAutoDraw(True)
    
    # if selection_img_2 is active this frame...
    if selection_img_2.status == STARTED:
        # update params
        pass
    
    # *instruction_text_12* updates
    
    # if instruction_text_12 is starting this frame...
    if instruction_text_12.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_text_12.frameNStart = frameN  # exact frame index
        instruction_text_12.tStart = t  # local t and not account for scr refresh
        instruction_text_12.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_text_12, 'tStartRefresh')  # time at next scr refresh
        # update status
        instruction_text_12.status = STARTED
        instruction_text_12.setAutoDraw(True)
    
    # if instruction_text_12 is active this frame...
    if instruction_text_12.status == STARTED:
        # update params
        pass
    
    # *end_instr_14* updates
    waitOnFlip = False
    
    # if end_instr_14 is starting this frame...
    if end_instr_14.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        end_instr_14.frameNStart = frameN  # exact frame index
        end_instr_14.tStart = t  # local t and not account for scr refresh
        end_instr_14.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_instr_14, 'tStartRefresh')  # time at next scr refresh
        # update status
        end_instr_14.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(end_instr_14.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(end_instr_14.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if end_instr_14.status == STARTED and not waitOnFlip:
        theseKeys = end_instr_14.getKeys(keyList=['space'], waitRelease=False)
        _end_instr_14_allKeys.extend(theseKeys)
        if len(_end_instr_14_allKeys):
            end_instr_14.keys = _end_instr_14_allKeys[-1].name  # just the last key pressed
            end_instr_14.rt = _end_instr_14_allKeys[-1].rt
            end_instr_14.duration = _end_instr_14_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in fake_instructions_8Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "fake_instructions_8" ---
for thisComponent in fake_instructions_8Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "fake_instructions_8" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "fake_instructions_9" ---
continueRoutine = True
# update component parameters for each repeat
end_instr_15.keys = []
end_instr_15.rt = []
_end_instr_15_allKeys = []
# keep track of which components have finished
fake_instructions_9Components = [ind_stock_3, instruction_text_13, end_instr_15, fake_reward_txt_3]
for thisComponent in fake_instructions_9Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "fake_instructions_9" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *ind_stock_3* updates
    
    # if ind_stock_3 is starting this frame...
    if ind_stock_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        ind_stock_3.frameNStart = frameN  # exact frame index
        ind_stock_3.tStart = t  # local t and not account for scr refresh
        ind_stock_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(ind_stock_3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'ind_stock_3.started')
        # update status
        ind_stock_3.status = STARTED
        ind_stock_3.setAutoDraw(True)
    
    # if ind_stock_3 is active this frame...
    if ind_stock_3.status == STARTED:
        # update params
        pass
    
    # *instruction_text_13* updates
    
    # if instruction_text_13 is starting this frame...
    if instruction_text_13.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_text_13.frameNStart = frameN  # exact frame index
        instruction_text_13.tStart = t  # local t and not account for scr refresh
        instruction_text_13.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_text_13, 'tStartRefresh')  # time at next scr refresh
        # update status
        instruction_text_13.status = STARTED
        instruction_text_13.setAutoDraw(True)
    
    # if instruction_text_13 is active this frame...
    if instruction_text_13.status == STARTED:
        # update params
        pass
    
    # *end_instr_15* updates
    waitOnFlip = False
    
    # if end_instr_15 is starting this frame...
    if end_instr_15.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        end_instr_15.frameNStart = frameN  # exact frame index
        end_instr_15.tStart = t  # local t and not account for scr refresh
        end_instr_15.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_instr_15, 'tStartRefresh')  # time at next scr refresh
        # update status
        end_instr_15.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(end_instr_15.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(end_instr_15.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if end_instr_15.status == STARTED and not waitOnFlip:
        theseKeys = end_instr_15.getKeys(keyList=['space'], waitRelease=False)
        _end_instr_15_allKeys.extend(theseKeys)
        if len(_end_instr_15_allKeys):
            end_instr_15.keys = _end_instr_15_allKeys[-1].name  # just the last key pressed
            end_instr_15.rt = _end_instr_15_allKeys[-1].rt
            end_instr_15.duration = _end_instr_15_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # *fake_reward_txt_3* updates
    
    # if fake_reward_txt_3 is starting this frame...
    if fake_reward_txt_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        fake_reward_txt_3.frameNStart = frameN  # exact frame index
        fake_reward_txt_3.tStart = t  # local t and not account for scr refresh
        fake_reward_txt_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(fake_reward_txt_3, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'fake_reward_txt_3.started')
        # update status
        fake_reward_txt_3.status = STARTED
        fake_reward_txt_3.setAutoDraw(True)
    
    # if fake_reward_txt_3 is active this frame...
    if fake_reward_txt_3.status == STARTED:
        # update params
        pass
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in fake_instructions_9Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "fake_instructions_9" ---
for thisComponent in fake_instructions_9Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "fake_instructions_9" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "fake_instructions_10" ---
continueRoutine = True
# update component parameters for each repeat
end_instr_17.keys = []
end_instr_17.rt = []
_end_instr_17_allKeys = []
# keep track of which components have finished
fake_instructions_10Components = [instruction_text_15, end_instr_17]
for thisComponent in fake_instructions_10Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "fake_instructions_10" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instruction_text_15* updates
    
    # if instruction_text_15 is starting this frame...
    if instruction_text_15.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_text_15.frameNStart = frameN  # exact frame index
        instruction_text_15.tStart = t  # local t and not account for scr refresh
        instruction_text_15.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_text_15, 'tStartRefresh')  # time at next scr refresh
        # update status
        instruction_text_15.status = STARTED
        instruction_text_15.setAutoDraw(True)
    
    # if instruction_text_15 is active this frame...
    if instruction_text_15.status == STARTED:
        # update params
        pass
    
    # *end_instr_17* updates
    waitOnFlip = False
    
    # if end_instr_17 is starting this frame...
    if end_instr_17.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        end_instr_17.frameNStart = frameN  # exact frame index
        end_instr_17.tStart = t  # local t and not account for scr refresh
        end_instr_17.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_instr_17, 'tStartRefresh')  # time at next scr refresh
        # update status
        end_instr_17.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(end_instr_17.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(end_instr_17.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if end_instr_17.status == STARTED and not waitOnFlip:
        theseKeys = end_instr_17.getKeys(keyList=['space'], waitRelease=False)
        _end_instr_17_allKeys.extend(theseKeys)
        if len(_end_instr_17_allKeys):
            end_instr_17.keys = _end_instr_17_allKeys[-1].name  # just the last key pressed
            end_instr_17.rt = _end_instr_17_allKeys[-1].rt
            end_instr_17.duration = _end_instr_17_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in fake_instructions_10Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "fake_instructions_10" ---
for thisComponent in fake_instructions_10Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "fake_instructions_10" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "fake_instructions_11" ---
continueRoutine = True
# update component parameters for each repeat
end_instr_18.keys = []
end_instr_18.rt = []
_end_instr_18_allKeys = []
# keep track of which components have finished
fake_instructions_11Components = [instruction_text_16, end_instr_18, avg_reward_img]
for thisComponent in fake_instructions_11Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "fake_instructions_11" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instruction_text_16* updates
    
    # if instruction_text_16 is starting this frame...
    if instruction_text_16.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_text_16.frameNStart = frameN  # exact frame index
        instruction_text_16.tStart = t  # local t and not account for scr refresh
        instruction_text_16.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_text_16, 'tStartRefresh')  # time at next scr refresh
        # update status
        instruction_text_16.status = STARTED
        instruction_text_16.setAutoDraw(True)
    
    # if instruction_text_16 is active this frame...
    if instruction_text_16.status == STARTED:
        # update params
        pass
    
    # *end_instr_18* updates
    waitOnFlip = False
    
    # if end_instr_18 is starting this frame...
    if end_instr_18.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        end_instr_18.frameNStart = frameN  # exact frame index
        end_instr_18.tStart = t  # local t and not account for scr refresh
        end_instr_18.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_instr_18, 'tStartRefresh')  # time at next scr refresh
        # update status
        end_instr_18.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(end_instr_18.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(end_instr_18.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if end_instr_18.status == STARTED and not waitOnFlip:
        theseKeys = end_instr_18.getKeys(keyList=['space'], waitRelease=False)
        _end_instr_18_allKeys.extend(theseKeys)
        if len(_end_instr_18_allKeys):
            end_instr_18.keys = _end_instr_18_allKeys[-1].name  # just the last key pressed
            end_instr_18.rt = _end_instr_18_allKeys[-1].rt
            end_instr_18.duration = _end_instr_18_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # *avg_reward_img* updates
    
    # if avg_reward_img is starting this frame...
    if avg_reward_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        avg_reward_img.frameNStart = frameN  # exact frame index
        avg_reward_img.tStart = t  # local t and not account for scr refresh
        avg_reward_img.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(avg_reward_img, 'tStartRefresh')  # time at next scr refresh
        # update status
        avg_reward_img.status = STARTED
        avg_reward_img.setAutoDraw(True)
    
    # if avg_reward_img is active this frame...
    if avg_reward_img.status == STARTED:
        # update params
        pass
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in fake_instructions_11Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "fake_instructions_11" ---
for thisComponent in fake_instructions_11Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "fake_instructions_11" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "fake_instructions_12" ---
continueRoutine = True
# update component parameters for each repeat
end_instr_16.keys = []
end_instr_16.rt = []
_end_instr_16_allKeys = []
# keep track of which components have finished
fake_instructions_12Components = [instruction_text_14, end_instr_16]
for thisComponent in fake_instructions_12Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "fake_instructions_12" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instruction_text_14* updates
    
    # if instruction_text_14 is starting this frame...
    if instruction_text_14.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_text_14.frameNStart = frameN  # exact frame index
        instruction_text_14.tStart = t  # local t and not account for scr refresh
        instruction_text_14.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_text_14, 'tStartRefresh')  # time at next scr refresh
        # update status
        instruction_text_14.status = STARTED
        instruction_text_14.setAutoDraw(True)
    
    # if instruction_text_14 is active this frame...
    if instruction_text_14.status == STARTED:
        # update params
        pass
    
    # *end_instr_16* updates
    waitOnFlip = False
    
    # if end_instr_16 is starting this frame...
    if end_instr_16.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        end_instr_16.frameNStart = frameN  # exact frame index
        end_instr_16.tStart = t  # local t and not account for scr refresh
        end_instr_16.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_instr_16, 'tStartRefresh')  # time at next scr refresh
        # update status
        end_instr_16.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(end_instr_16.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(end_instr_16.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if end_instr_16.status == STARTED and not waitOnFlip:
        theseKeys = end_instr_16.getKeys(keyList=['space'], waitRelease=False)
        _end_instr_16_allKeys.extend(theseKeys)
        if len(_end_instr_16_allKeys):
            end_instr_16.keys = _end_instr_16_allKeys[-1].name  # just the last key pressed
            end_instr_16.rt = _end_instr_16_allKeys[-1].rt
            end_instr_16.duration = _end_instr_16_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in fake_instructions_12Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "fake_instructions_12" ---
for thisComponent in fake_instructions_12Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "fake_instructions_12" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "fake_instructions_13" ---
continueRoutine = True
# update component parameters for each repeat
end_instr_19.keys = []
end_instr_19.rt = []
_end_instr_19_allKeys = []
# keep track of which components have finished
fake_instructions_13Components = [instruction_text_17, end_instr_19]
for thisComponent in fake_instructions_13Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "fake_instructions_13" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instruction_text_17* updates
    
    # if instruction_text_17 is starting this frame...
    if instruction_text_17.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_text_17.frameNStart = frameN  # exact frame index
        instruction_text_17.tStart = t  # local t and not account for scr refresh
        instruction_text_17.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_text_17, 'tStartRefresh')  # time at next scr refresh
        # update status
        instruction_text_17.status = STARTED
        instruction_text_17.setAutoDraw(True)
    
    # if instruction_text_17 is active this frame...
    if instruction_text_17.status == STARTED:
        # update params
        pass
    
    # *end_instr_19* updates
    waitOnFlip = False
    
    # if end_instr_19 is starting this frame...
    if end_instr_19.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        end_instr_19.frameNStart = frameN  # exact frame index
        end_instr_19.tStart = t  # local t and not account for scr refresh
        end_instr_19.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_instr_19, 'tStartRefresh')  # time at next scr refresh
        # update status
        end_instr_19.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(end_instr_19.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(end_instr_19.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if end_instr_19.status == STARTED and not waitOnFlip:
        theseKeys = end_instr_19.getKeys(keyList=['space'], waitRelease=False)
        _end_instr_19_allKeys.extend(theseKeys)
        if len(_end_instr_19_allKeys):
            end_instr_19.keys = _end_instr_19_allKeys[-1].name  # just the last key pressed
            end_instr_19.rt = _end_instr_19_allKeys[-1].rt
            end_instr_19.duration = _end_instr_19_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in fake_instructions_13Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "fake_instructions_13" ---
for thisComponent in fake_instructions_13Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "fake_instructions_13" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "fake_instructions_14" ---
continueRoutine = True
# update component parameters for each repeat
end_instr_20.keys = []
end_instr_20.rt = []
_end_instr_20_allKeys = []
# keep track of which components have finished
fake_instructions_14Components = [instruction_text_18, end_instr_20]
for thisComponent in fake_instructions_14Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "fake_instructions_14" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instruction_text_18* updates
    
    # if instruction_text_18 is starting this frame...
    if instruction_text_18.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_text_18.frameNStart = frameN  # exact frame index
        instruction_text_18.tStart = t  # local t and not account for scr refresh
        instruction_text_18.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_text_18, 'tStartRefresh')  # time at next scr refresh
        # update status
        instruction_text_18.status = STARTED
        instruction_text_18.setAutoDraw(True)
    
    # if instruction_text_18 is active this frame...
    if instruction_text_18.status == STARTED:
        # update params
        pass
    
    # *end_instr_20* updates
    waitOnFlip = False
    
    # if end_instr_20 is starting this frame...
    if end_instr_20.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        end_instr_20.frameNStart = frameN  # exact frame index
        end_instr_20.tStart = t  # local t and not account for scr refresh
        end_instr_20.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_instr_20, 'tStartRefresh')  # time at next scr refresh
        # update status
        end_instr_20.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(end_instr_20.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(end_instr_20.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if end_instr_20.status == STARTED and not waitOnFlip:
        theseKeys = end_instr_20.getKeys(keyList=['space'], waitRelease=False)
        _end_instr_20_allKeys.extend(theseKeys)
        if len(_end_instr_20_allKeys):
            end_instr_20.keys = _end_instr_20_allKeys[-1].name  # just the last key pressed
            end_instr_20.rt = _end_instr_20_allKeys[-1].rt
            end_instr_20.duration = _end_instr_20_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in fake_instructions_14Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "fake_instructions_14" ---
for thisComponent in fake_instructions_14Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "fake_instructions_14" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "real_instructions" ---
continueRoutine = True
# update component parameters for each repeat
end_instr_7.keys = []
end_instr_7.rt = []
_end_instr_7_allKeys = []
# keep track of which components have finished
real_instructionsComponents = [instruction_text_5, end_instr_7]
for thisComponent in real_instructionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "real_instructions" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instruction_text_5* updates
    
    # if instruction_text_5 is starting this frame...
    if instruction_text_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_text_5.frameNStart = frameN  # exact frame index
        instruction_text_5.tStart = t  # local t and not account for scr refresh
        instruction_text_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_text_5, 'tStartRefresh')  # time at next scr refresh
        # update status
        instruction_text_5.status = STARTED
        instruction_text_5.setAutoDraw(True)
    
    # if instruction_text_5 is active this frame...
    if instruction_text_5.status == STARTED:
        # update params
        pass
    
    # *end_instr_7* updates
    waitOnFlip = False
    
    # if end_instr_7 is starting this frame...
    if end_instr_7.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        end_instr_7.frameNStart = frameN  # exact frame index
        end_instr_7.tStart = t  # local t and not account for scr refresh
        end_instr_7.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_instr_7, 'tStartRefresh')  # time at next scr refresh
        # update status
        end_instr_7.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(end_instr_7.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(end_instr_7.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if end_instr_7.status == STARTED and not waitOnFlip:
        theseKeys = end_instr_7.getKeys(keyList=['space'], waitRelease=False)
        _end_instr_7_allKeys.extend(theseKeys)
        if len(_end_instr_7_allKeys):
            end_instr_7.keys = _end_instr_7_allKeys[-1].name  # just the last key pressed
            end_instr_7.rt = _end_instr_7_allKeys[-1].rt
            end_instr_7.duration = _end_instr_7_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in real_instructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "real_instructions" ---
for thisComponent in real_instructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "real_instructions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "real_instructions_2" ---
continueRoutine = True
# update component parameters for each repeat
end_instr_4.keys = []
end_instr_4.rt = []
_end_instr_4_allKeys = []
# keep track of which components have finished
real_instructions_2Components = [investors, instr_txt, end_instr_4]
for thisComponent in real_instructions_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "real_instructions_2" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *investors* updates
    
    # if investors is starting this frame...
    if investors.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        investors.frameNStart = frameN  # exact frame index
        investors.tStart = t  # local t and not account for scr refresh
        investors.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(investors, 'tStartRefresh')  # time at next scr refresh
        # update status
        investors.status = STARTED
        investors.setAutoDraw(True)
    
    # if investors is active this frame...
    if investors.status == STARTED:
        # update params
        pass
    
    # *instr_txt* updates
    
    # if instr_txt is starting this frame...
    if instr_txt.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_txt.frameNStart = frameN  # exact frame index
        instr_txt.tStart = t  # local t and not account for scr refresh
        instr_txt.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_txt, 'tStartRefresh')  # time at next scr refresh
        # update status
        instr_txt.status = STARTED
        instr_txt.setAutoDraw(True)
    
    # if instr_txt is active this frame...
    if instr_txt.status == STARTED:
        # update params
        pass
    
    # *end_instr_4* updates
    waitOnFlip = False
    
    # if end_instr_4 is starting this frame...
    if end_instr_4.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
        # keep track of start time/frame for later
        end_instr_4.frameNStart = frameN  # exact frame index
        end_instr_4.tStart = t  # local t and not account for scr refresh
        end_instr_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_instr_4, 'tStartRefresh')  # time at next scr refresh
        # update status
        end_instr_4.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(end_instr_4.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(end_instr_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if end_instr_4.status == STARTED and not waitOnFlip:
        theseKeys = end_instr_4.getKeys(keyList=['space'], waitRelease=False)
        _end_instr_4_allKeys.extend(theseKeys)
        if len(_end_instr_4_allKeys):
            end_instr_4.keys = _end_instr_4_allKeys[-1].name  # just the last key pressed
            end_instr_4.rt = _end_instr_4_allKeys[-1].rt
            end_instr_4.duration = _end_instr_4_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in real_instructions_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "real_instructions_2" ---
for thisComponent in real_instructions_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "real_instructions_2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "real_instructions_2_5" ---
continueRoutine = True
# update component parameters for each repeat
end_instr_21.keys = []
end_instr_21.rt = []
_end_instr_21_allKeys = []
# keep track of which components have finished
real_instructions_2_5Components = [investors_2_sample, instr_txt_3, end_instr_21]
for thisComponent in real_instructions_2_5Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "real_instructions_2_5" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *investors_2_sample* updates
    
    # if investors_2_sample is starting this frame...
    if investors_2_sample.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        investors_2_sample.frameNStart = frameN  # exact frame index
        investors_2_sample.tStart = t  # local t and not account for scr refresh
        investors_2_sample.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(investors_2_sample, 'tStartRefresh')  # time at next scr refresh
        # update status
        investors_2_sample.status = STARTED
        investors_2_sample.setAutoDraw(True)
    
    # if investors_2_sample is active this frame...
    if investors_2_sample.status == STARTED:
        # update params
        pass
    
    # *instr_txt_3* updates
    
    # if instr_txt_3 is starting this frame...
    if instr_txt_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_txt_3.frameNStart = frameN  # exact frame index
        instr_txt_3.tStart = t  # local t and not account for scr refresh
        instr_txt_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_txt_3, 'tStartRefresh')  # time at next scr refresh
        # update status
        instr_txt_3.status = STARTED
        instr_txt_3.setAutoDraw(True)
    
    # if instr_txt_3 is active this frame...
    if instr_txt_3.status == STARTED:
        # update params
        pass
    
    # *end_instr_21* updates
    waitOnFlip = False
    
    # if end_instr_21 is starting this frame...
    if end_instr_21.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
        # keep track of start time/frame for later
        end_instr_21.frameNStart = frameN  # exact frame index
        end_instr_21.tStart = t  # local t and not account for scr refresh
        end_instr_21.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_instr_21, 'tStartRefresh')  # time at next scr refresh
        # update status
        end_instr_21.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(end_instr_21.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(end_instr_21.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if end_instr_21.status == STARTED and not waitOnFlip:
        theseKeys = end_instr_21.getKeys(keyList=['space'], waitRelease=False)
        _end_instr_21_allKeys.extend(theseKeys)
        if len(_end_instr_21_allKeys):
            end_instr_21.keys = _end_instr_21_allKeys[-1].name  # just the last key pressed
            end_instr_21.rt = _end_instr_21_allKeys[-1].rt
            end_instr_21.duration = _end_instr_21_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in real_instructions_2_5Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "real_instructions_2_5" ---
for thisComponent in real_instructions_2_5Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "real_instructions_2_5" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "real_instructions_3" ---
continueRoutine = True
# update component parameters for each repeat
end_instr_5.keys = []
end_instr_5.rt = []
_end_instr_5_allKeys = []
# keep track of which components have finished
real_instructions_3Components = [reward_demo, instr_txt_2, end_instr_5]
for thisComponent in real_instructions_3Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "real_instructions_3" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *reward_demo* updates
    
    # if reward_demo is starting this frame...
    if reward_demo.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        reward_demo.frameNStart = frameN  # exact frame index
        reward_demo.tStart = t  # local t and not account for scr refresh
        reward_demo.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(reward_demo, 'tStartRefresh')  # time at next scr refresh
        # update status
        reward_demo.status = STARTED
        reward_demo.setAutoDraw(True)
    
    # if reward_demo is active this frame...
    if reward_demo.status == STARTED:
        # update params
        pass
    
    # *instr_txt_2* updates
    
    # if instr_txt_2 is starting this frame...
    if instr_txt_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_txt_2.frameNStart = frameN  # exact frame index
        instr_txt_2.tStart = t  # local t and not account for scr refresh
        instr_txt_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_txt_2, 'tStartRefresh')  # time at next scr refresh
        # update status
        instr_txt_2.status = STARTED
        instr_txt_2.setAutoDraw(True)
    
    # if instr_txt_2 is active this frame...
    if instr_txt_2.status == STARTED:
        # update params
        pass
    
    # *end_instr_5* updates
    waitOnFlip = False
    
    # if end_instr_5 is starting this frame...
    if end_instr_5.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
        # keep track of start time/frame for later
        end_instr_5.frameNStart = frameN  # exact frame index
        end_instr_5.tStart = t  # local t and not account for scr refresh
        end_instr_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_instr_5, 'tStartRefresh')  # time at next scr refresh
        # update status
        end_instr_5.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(end_instr_5.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(end_instr_5.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if end_instr_5.status == STARTED and not waitOnFlip:
        theseKeys = end_instr_5.getKeys(keyList=['space'], waitRelease=False)
        _end_instr_5_allKeys.extend(theseKeys)
        if len(_end_instr_5_allKeys):
            end_instr_5.keys = _end_instr_5_allKeys[-1].name  # just the last key pressed
            end_instr_5.rt = _end_instr_5_allKeys[-1].rt
            end_instr_5.duration = _end_instr_5_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in real_instructions_3Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "real_instructions_3" ---
for thisComponent in real_instructions_3Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "real_instructions_3" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "training" ---
continueRoutine = True
# update component parameters for each repeat
training_stims.setImage('stimuli/example_pairing.png')
training_choice.keys = []
training_choice.rt = []
_training_choice_allKeys = []
# keep track of which components have finished
trainingComponents = [training_stims, training_choice, training_instr, one_txt, two_txt]
for thisComponent in trainingComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "training" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *training_stims* updates
    
    # if training_stims is starting this frame...
    if training_stims.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        training_stims.frameNStart = frameN  # exact frame index
        training_stims.tStart = t  # local t and not account for scr refresh
        training_stims.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(training_stims, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'training_stims.started')
        # update status
        training_stims.status = STARTED
        training_stims.setAutoDraw(True)
    
    # if training_stims is active this frame...
    if training_stims.status == STARTED:
        # update params
        pass
    
    # *training_choice* updates
    waitOnFlip = False
    
    # if training_choice is starting this frame...
    if training_choice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        training_choice.frameNStart = frameN  # exact frame index
        training_choice.tStart = t  # local t and not account for scr refresh
        training_choice.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(training_choice, 'tStartRefresh')  # time at next scr refresh
        # update status
        training_choice.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(training_choice.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(training_choice.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if training_choice.status == STARTED and not waitOnFlip:
        theseKeys = training_choice.getKeys(keyList=['1','2'], waitRelease=False)
        _training_choice_allKeys.extend(theseKeys)
        if len(_training_choice_allKeys):
            training_choice.keys = _training_choice_allKeys[-1].name  # just the last key pressed
            training_choice.rt = _training_choice_allKeys[-1].rt
            training_choice.duration = _training_choice_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # *training_instr* updates
    
    # if training_instr is starting this frame...
    if training_instr.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        training_instr.frameNStart = frameN  # exact frame index
        training_instr.tStart = t  # local t and not account for scr refresh
        training_instr.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(training_instr, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'training_instr.started')
        # update status
        training_instr.status = STARTED
        training_instr.setAutoDraw(True)
    
    # if training_instr is active this frame...
    if training_instr.status == STARTED:
        # update params
        pass
    
    # *one_txt* updates
    
    # if one_txt is starting this frame...
    if one_txt.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        one_txt.frameNStart = frameN  # exact frame index
        one_txt.tStart = t  # local t and not account for scr refresh
        one_txt.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(one_txt, 'tStartRefresh')  # time at next scr refresh
        # update status
        one_txt.status = STARTED
        one_txt.setAutoDraw(True)
    
    # if one_txt is active this frame...
    if one_txt.status == STARTED:
        # update params
        pass
    
    # *two_txt* updates
    
    # if two_txt is starting this frame...
    if two_txt.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        two_txt.frameNStart = frameN  # exact frame index
        two_txt.tStart = t  # local t and not account for scr refresh
        two_txt.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(two_txt, 'tStartRefresh')  # time at next scr refresh
        # update status
        two_txt.status = STARTED
        two_txt.setAutoDraw(True)
    
    # if two_txt is active this frame...
    if two_txt.status == STARTED:
        # update params
        pass
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in trainingComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "training" ---
for thisComponent in trainingComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if training_choice.keys in ['', [], None]:  # No response was made
    training_choice.keys = None
thisExp.addData('training_choice.keys',training_choice.keys)
if training_choice.keys != None:  # we had a response
    thisExp.addData('training_choice.rt', training_choice.rt)
    thisExp.addData('training_choice.duration', training_choice.duration)
thisExp.nextEntry()
# the Routine "training" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "training_reward_display" ---
continueRoutine = True
# update component parameters for each repeat
next_key_2.keys = []
next_key_2.rt = []
_next_key_2_allKeys = []
# keep track of which components have finished
training_reward_displayComponents = [training_reward_display_text, fake_training_reward, next_key_2]
for thisComponent in training_reward_displayComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "training_reward_display" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *training_reward_display_text* updates
    
    # if training_reward_display_text is starting this frame...
    if training_reward_display_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        training_reward_display_text.frameNStart = frameN  # exact frame index
        training_reward_display_text.tStart = t  # local t and not account for scr refresh
        training_reward_display_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(training_reward_display_text, 'tStartRefresh')  # time at next scr refresh
        # update status
        training_reward_display_text.status = STARTED
        training_reward_display_text.setAutoDraw(True)
    
    # if training_reward_display_text is active this frame...
    if training_reward_display_text.status == STARTED:
        # update params
        pass
    
    # *fake_training_reward* updates
    
    # if fake_training_reward is starting this frame...
    if fake_training_reward.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        fake_training_reward.frameNStart = frameN  # exact frame index
        fake_training_reward.tStart = t  # local t and not account for scr refresh
        fake_training_reward.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(fake_training_reward, 'tStartRefresh')  # time at next scr refresh
        # update status
        fake_training_reward.status = STARTED
        fake_training_reward.setAutoDraw(True)
    
    # if fake_training_reward is active this frame...
    if fake_training_reward.status == STARTED:
        # update params
        pass
    
    # *next_key_2* updates
    waitOnFlip = False
    
    # if next_key_2 is starting this frame...
    if next_key_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        next_key_2.frameNStart = frameN  # exact frame index
        next_key_2.tStart = t  # local t and not account for scr refresh
        next_key_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(next_key_2, 'tStartRefresh')  # time at next scr refresh
        # update status
        next_key_2.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(next_key_2.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(next_key_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if next_key_2.status == STARTED and not waitOnFlip:
        theseKeys = next_key_2.getKeys(keyList=['space'], waitRelease=False)
        _next_key_2_allKeys.extend(theseKeys)
        if len(_next_key_2_allKeys):
            next_key_2.keys = _next_key_2_allKeys[-1].name  # just the last key pressed
            next_key_2.rt = _next_key_2_allKeys[-1].rt
            next_key_2.duration = _next_key_2_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in training_reward_displayComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "training_reward_display" ---
for thisComponent in training_reward_displayComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if next_key_2.keys in ['', [], None]:  # No response was made
    next_key_2.keys = None
thisExp.addData('next_key_2.keys',next_key_2.keys)
if next_key_2.keys != None:  # we had a response
    thisExp.addData('next_key_2.rt', next_key_2.rt)
    thisExp.addData('next_key_2.duration', next_key_2.duration)
thisExp.nextEntry()
# the Routine "training_reward_display" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "att_check_primer" ---
continueRoutine = True
# update component parameters for each repeat
next_key.keys = []
next_key.rt = []
_next_key_allKeys = []
# keep track of which components have finished
att_check_primerComponents = [training_reward_display_text_2, next_key]
for thisComponent in att_check_primerComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "att_check_primer" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *training_reward_display_text_2* updates
    
    # if training_reward_display_text_2 is starting this frame...
    if training_reward_display_text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        training_reward_display_text_2.frameNStart = frameN  # exact frame index
        training_reward_display_text_2.tStart = t  # local t and not account for scr refresh
        training_reward_display_text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(training_reward_display_text_2, 'tStartRefresh')  # time at next scr refresh
        # update status
        training_reward_display_text_2.status = STARTED
        training_reward_display_text_2.setAutoDraw(True)
    
    # if training_reward_display_text_2 is active this frame...
    if training_reward_display_text_2.status == STARTED:
        # update params
        pass
    
    # *next_key* updates
    waitOnFlip = False
    
    # if next_key is starting this frame...
    if next_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        next_key.frameNStart = frameN  # exact frame index
        next_key.tStart = t  # local t and not account for scr refresh
        next_key.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(next_key, 'tStartRefresh')  # time at next scr refresh
        # update status
        next_key.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(next_key.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(next_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if next_key.status == STARTED and not waitOnFlip:
        theseKeys = next_key.getKeys(keyList=['space'], waitRelease=False)
        _next_key_allKeys.extend(theseKeys)
        if len(_next_key_allKeys):
            next_key.keys = _next_key_allKeys[-1].name  # just the last key pressed
            next_key.rt = _next_key_allKeys[-1].rt
            next_key.duration = _next_key_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in att_check_primerComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "att_check_primer" ---
for thisComponent in att_check_primerComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if next_key.keys in ['', [], None]:  # No response was made
    next_key.keys = None
thisExp.addData('next_key.keys',next_key.keys)
if next_key.keys != None:  # we had a response
    thisExp.addData('next_key.rt', next_key.rt)
    thisExp.addData('next_key.duration', next_key.duration)
thisExp.nextEntry()
# the Routine "att_check_primer" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "att_check_1" ---
continueRoutine = True
# update component parameters for each repeat
att1_resp.keys = []
att1_resp.rt = []
_att1_resp_allKeys = []
# keep track of which components have finished
att_check_1Components = [q1, resps, text, att1_resp]
for thisComponent in att_check_1Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "att_check_1" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *q1* updates
    
    # if q1 is starting this frame...
    if q1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        q1.frameNStart = frameN  # exact frame index
        q1.tStart = t  # local t and not account for scr refresh
        q1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(q1, 'tStartRefresh')  # time at next scr refresh
        # update status
        q1.status = STARTED
        q1.setAutoDraw(True)
    
    # if q1 is active this frame...
    if q1.status == STARTED:
        # update params
        pass
    
    # *resps* updates
    
    # if resps is starting this frame...
    if resps.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        resps.frameNStart = frameN  # exact frame index
        resps.tStart = t  # local t and not account for scr refresh
        resps.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(resps, 'tStartRefresh')  # time at next scr refresh
        # update status
        resps.status = STARTED
        resps.setAutoDraw(True)
    
    # if resps is active this frame...
    if resps.status == STARTED:
        # update params
        pass
    
    # *text* updates
    
    # if text is starting this frame...
    if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text.frameNStart = frameN  # exact frame index
        text.tStart = t  # local t and not account for scr refresh
        text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
        # update status
        text.status = STARTED
        text.setAutoDraw(True)
    
    # if text is active this frame...
    if text.status == STARTED:
        # update params
        pass
    
    # *att1_resp* updates
    waitOnFlip = False
    
    # if att1_resp is starting this frame...
    if att1_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        att1_resp.frameNStart = frameN  # exact frame index
        att1_resp.tStart = t  # local t and not account for scr refresh
        att1_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(att1_resp, 'tStartRefresh')  # time at next scr refresh
        # update status
        att1_resp.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(att1_resp.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(att1_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if att1_resp.status == STARTED and not waitOnFlip:
        theseKeys = att1_resp.getKeys(keyList=['1','2','3'], waitRelease=False)
        _att1_resp_allKeys.extend(theseKeys)
        if len(_att1_resp_allKeys):
            att1_resp.keys = _att1_resp_allKeys[-1].name  # just the last key pressed
            att1_resp.rt = _att1_resp_allKeys[-1].rt
            att1_resp.duration = _att1_resp_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in att_check_1Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "att_check_1" ---
for thisComponent in att_check_1Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# check responses
if att1_resp.keys in ['', [], None]:  # No response was made
    att1_resp.keys = None
thisExp.addData('att1_resp.keys',att1_resp.keys)
if att1_resp.keys != None:  # we had a response
    thisExp.addData('att1_resp.rt', att1_resp.rt)
    thisExp.addData('att1_resp.duration', att1_resp.duration)
thisExp.nextEntry()
# the Routine "att_check_1" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "att_1_feedback" ---
continueRoutine = True
# update component parameters for each repeat
# Run 'Begin Routine' code from att1_code
wrong_resp = "Wrong! Your task in this experiment is to gather as many points as possible."
correct_resp = "Correct!"
feedback_txt = None

att1_resp_key = att1_resp.keys

if att1_resp_key != "2":
    feedback_txt = wrong_resp
else:
    feedback_txt = correct_resp
text_2.setText(feedback_txt)
continue_feed.keys = []
continue_feed.rt = []
_continue_feed_allKeys = []
# keep track of which components have finished
att_1_feedbackComponents = [text_2, continue_feed]
for thisComponent in att_1_feedbackComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "att_1_feedback" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_2* updates
    
    # if text_2 is starting this frame...
    if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_2.frameNStart = frameN  # exact frame index
        text_2.tStart = t  # local t and not account for scr refresh
        text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
        # add timestamp to datafile
        thisExp.timestampOnFlip(win, 'text_2.started')
        # update status
        text_2.status = STARTED
        text_2.setAutoDraw(True)
    
    # if text_2 is active this frame...
    if text_2.status == STARTED:
        # update params
        pass
    
    # *continue_feed* updates
    waitOnFlip = False
    
    # if continue_feed is starting this frame...
    if continue_feed.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        continue_feed.frameNStart = frameN  # exact frame index
        continue_feed.tStart = t  # local t and not account for scr refresh
        continue_feed.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(continue_feed, 'tStartRefresh')  # time at next scr refresh
        # update status
        continue_feed.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(continue_feed.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(continue_feed.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if continue_feed.status == STARTED and not waitOnFlip:
        theseKeys = continue_feed.getKeys(keyList=['space'], waitRelease=False)
        _continue_feed_allKeys.extend(theseKeys)
        if len(_continue_feed_allKeys):
            continue_feed.keys = _continue_feed_allKeys[-1].name  # just the last key pressed
            continue_feed.rt = _continue_feed_allKeys[-1].rt
            continue_feed.duration = _continue_feed_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in att_1_feedbackComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "att_1_feedback" ---
for thisComponent in att_1_feedbackComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# Run 'End Routine' code from att1_code
thisExp.addData('att_response', att1_resp_key)
# the Routine "att_1_feedback" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- Prepare to start Routine "exp_start_primer" ---
continueRoutine = True
# update component parameters for each repeat
end_instr_22.keys = []
end_instr_22.rt = []
_end_instr_22_allKeys = []
# keep track of which components have finished
exp_start_primerComponents = [instruction_text_19, end_instr_22]
for thisComponent in exp_start_primerComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "exp_start_primer" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instruction_text_19* updates
    
    # if instruction_text_19 is starting this frame...
    if instruction_text_19.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_text_19.frameNStart = frameN  # exact frame index
        instruction_text_19.tStart = t  # local t and not account for scr refresh
        instruction_text_19.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_text_19, 'tStartRefresh')  # time at next scr refresh
        # update status
        instruction_text_19.status = STARTED
        instruction_text_19.setAutoDraw(True)
    
    # if instruction_text_19 is active this frame...
    if instruction_text_19.status == STARTED:
        # update params
        pass
    
    # *end_instr_22* updates
    waitOnFlip = False
    
    # if end_instr_22 is starting this frame...
    if end_instr_22.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        end_instr_22.frameNStart = frameN  # exact frame index
        end_instr_22.tStart = t  # local t and not account for scr refresh
        end_instr_22.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_instr_22, 'tStartRefresh')  # time at next scr refresh
        # update status
        end_instr_22.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(end_instr_22.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(end_instr_22.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if end_instr_22.status == STARTED and not waitOnFlip:
        theseKeys = end_instr_22.getKeys(keyList=['space'], waitRelease=False)
        _end_instr_22_allKeys.extend(theseKeys)
        if len(_end_instr_22_allKeys):
            end_instr_22.keys = _end_instr_22_allKeys[-1].name  # just the last key pressed
            end_instr_22.rt = _end_instr_22_allKeys[-1].rt
            end_instr_22.duration = _end_instr_22_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in exp_start_primerComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "exp_start_primer" ---
for thisComponent in exp_start_primerComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "exp_start_primer" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('tables/data.xlsx'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # --- Prepare to start Routine "choice" ---
    continueRoutine = True
    # update component parameters for each repeat
    # Run 'Begin Routine' code from trial_code
    image_path = path_condition_mapper[pairing]
    stimuli_img.setImage(image_path)
    choices.keys = []
    choices.rt = []
    _choices_allKeys = []
    # keep track of which components have finished
    choiceComponents = [stimuli_img, choices]
    for thisComponent in choiceComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "choice" ---
    routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *stimuli_img* updates
        
        # if stimuli_img is starting this frame...
        if stimuli_img.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            stimuli_img.frameNStart = frameN  # exact frame index
            stimuli_img.tStart = t  # local t and not account for scr refresh
            stimuli_img.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stimuli_img, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'stimuli_img.started')
            # update status
            stimuli_img.status = STARTED
            stimuli_img.setAutoDraw(True)
        
        # if stimuli_img is active this frame...
        if stimuli_img.status == STARTED:
            # update params
            pass
        
        # *choices* updates
        waitOnFlip = False
        
        # if choices is starting this frame...
        if choices.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            choices.frameNStart = frameN  # exact frame index
            choices.tStart = t  # local t and not account for scr refresh
            choices.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(choices, 'tStartRefresh')  # time at next scr refresh
            # update status
            choices.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(choices.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(choices.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if choices.status == STARTED and not waitOnFlip:
            theseKeys = choices.getKeys(keyList=['1','2'], waitRelease=False)
            _choices_allKeys.extend(theseKeys)
            if len(_choices_allKeys):
                choices.keys = _choices_allKeys[-1].name  # just the last key pressed
                choices.rt = _choices_allKeys[-1].rt
                choices.duration = _choices_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in choiceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "choice" ---
    for thisComponent in choiceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if choices.keys in ['', [], None]:  # No response was made
        choices.keys = None
    trials.addData('choices.keys',choices.keys)
    if choices.keys != None:  # we had a response
        trials.addData('choices.rt', choices.rt)
        trials.addData('choices.duration', choices.duration)
    # the Routine "choice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "reward_display" ---
    continueRoutine = True
    # update component parameters for each repeat
    # Run 'Begin Routine' code from reward_code
    chosen_pair = choices.keys
    if chosen_pair == "1":
        obtained_reward = a1_reward
    
    if chosen_pair == "2":
        obtained_reward = a2_reward
        
    
    obtained_reward = float(obtained_reward)
    
    if obtained_reward >= 0:
        sign = "+"
        reward_color = [-1.0000, 0.0039, -1.0000]
        
    if obtained_reward < 0:
        sign = ""
        reward_color = [1, -1, -1]
        
    displayed_reward = sign + str(obtained_reward) + "$"
    reward_display_text.setColor(reward_color, colorSpace='rgb')
    reward_display_text.setText(displayed_reward)
    # keep track of which components have finished
    reward_displayComponents = [reward_display_text]
    for thisComponent in reward_displayComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "reward_display" ---
    routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 1.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *reward_display_text* updates
        
        # if reward_display_text is starting this frame...
        if reward_display_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            reward_display_text.frameNStart = frameN  # exact frame index
            reward_display_text.tStart = t  # local t and not account for scr refresh
            reward_display_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(reward_display_text, 'tStartRefresh')  # time at next scr refresh
            # update status
            reward_display_text.status = STARTED
            reward_display_text.setAutoDraw(True)
        
        # if reward_display_text is active this frame...
        if reward_display_text.status == STARTED:
            # update params
            pass
        
        # if reward_display_text is stopping this frame...
        if reward_display_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > reward_display_text.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                reward_display_text.tStop = t  # not accounting for scr refresh
                reward_display_text.frameNStop = frameN  # exact frame index
                # update status
                reward_display_text.status = FINISHED
                reward_display_text.setAutoDraw(False)
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in reward_displayComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "reward_display" ---
    for thisComponent in reward_displayComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # Run 'End Routine' code from reward_code
    thisExp.addData('choices', choices.keys)
    thisExp.addData('rewards', obtained_reward)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-1.000000)
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials'


# --- Prepare to start Routine "end_screen" ---
continueRoutine = True
# update component parameters for each repeat
end_key.keys = []
end_key.rt = []
_end_key_allKeys = []
# keep track of which components have finished
end_screenComponents = [end_text, end_key]
for thisComponent in end_screenComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
frameN = -1

# --- Run Routine "end_screen" ---
routineForceEnded = not continueRoutine
while continueRoutine:
    # get current time
    t = routineTimer.getTime()
    tThisFlip = win.getFutureFlipTime(clock=routineTimer)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *end_text* updates
    
    # if end_text is starting this frame...
    if end_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        end_text.frameNStart = frameN  # exact frame index
        end_text.tStart = t  # local t and not account for scr refresh
        end_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_text, 'tStartRefresh')  # time at next scr refresh
        # update status
        end_text.status = STARTED
        end_text.setAutoDraw(True)
    
    # if end_text is active this frame...
    if end_text.status == STARTED:
        # update params
        pass
    
    # *end_key* updates
    waitOnFlip = False
    
    # if end_key is starting this frame...
    if end_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        end_key.frameNStart = frameN  # exact frame index
        end_key.tStart = t  # local t and not account for scr refresh
        end_key.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(end_key, 'tStartRefresh')  # time at next scr refresh
        # update status
        end_key.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(end_key.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(end_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if end_key.status == STARTED and not waitOnFlip:
        theseKeys = end_key.getKeys(keyList=['space'], waitRelease=False)
        _end_key_allKeys.extend(theseKeys)
        if len(_end_key_allKeys):
            end_key.keys = _end_key_allKeys[-1].name  # just the last key pressed
            end_key.rt = _end_key_allKeys[-1].rt
            end_key.duration = _end_key_allKeys[-1].duration
            # a response ends the routine
            continueRoutine = False
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        routineForceEnded = True
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in end_screenComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# --- Ending Routine "end_screen" ---
for thisComponent in end_screenComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "end_screen" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# --- End experiment ---
# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
