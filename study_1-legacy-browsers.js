/**************** 
 * Study_1 Test *
 ****************/


// store info about the experiment session:
let expName = 'study_1';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
flowScheduler.add(instructions_2RoutineBegin());
flowScheduler.add(instructions_2RoutineEachFrame());
flowScheduler.add(instructions_2RoutineEnd());
flowScheduler.add(instructions_3RoutineBegin());
flowScheduler.add(instructions_3RoutineEachFrame());
flowScheduler.add(instructions_3RoutineEnd());
flowScheduler.add(fake_instructionsRoutineBegin());
flowScheduler.add(fake_instructionsRoutineEachFrame());
flowScheduler.add(fake_instructionsRoutineEnd());
flowScheduler.add(fake_instructions_2RoutineBegin());
flowScheduler.add(fake_instructions_2RoutineEachFrame());
flowScheduler.add(fake_instructions_2RoutineEnd());
flowScheduler.add(fake_instructions_3RoutineBegin());
flowScheduler.add(fake_instructions_3RoutineEachFrame());
flowScheduler.add(fake_instructions_3RoutineEnd());
flowScheduler.add(fake_instructions_4RoutineBegin());
flowScheduler.add(fake_instructions_4RoutineEachFrame());
flowScheduler.add(fake_instructions_4RoutineEnd());
flowScheduler.add(fake_instructions_5RoutineBegin());
flowScheduler.add(fake_instructions_5RoutineEachFrame());
flowScheduler.add(fake_instructions_5RoutineEnd());
flowScheduler.add(fake_instructions_6RoutineBegin());
flowScheduler.add(fake_instructions_6RoutineEachFrame());
flowScheduler.add(fake_instructions_6RoutineEnd());
flowScheduler.add(fake_instructions_7RoutineBegin());
flowScheduler.add(fake_instructions_7RoutineEachFrame());
flowScheduler.add(fake_instructions_7RoutineEnd());
flowScheduler.add(fake_instructions_8RoutineBegin());
flowScheduler.add(fake_instructions_8RoutineEachFrame());
flowScheduler.add(fake_instructions_8RoutineEnd());
flowScheduler.add(fake_instructions_9RoutineBegin());
flowScheduler.add(fake_instructions_9RoutineEachFrame());
flowScheduler.add(fake_instructions_9RoutineEnd());
flowScheduler.add(fake_instructions_10RoutineBegin());
flowScheduler.add(fake_instructions_10RoutineEachFrame());
flowScheduler.add(fake_instructions_10RoutineEnd());
flowScheduler.add(fake_instructions_11RoutineBegin());
flowScheduler.add(fake_instructions_11RoutineEachFrame());
flowScheduler.add(fake_instructions_11RoutineEnd());
flowScheduler.add(fake_instructions_12RoutineBegin());
flowScheduler.add(fake_instructions_12RoutineEachFrame());
flowScheduler.add(fake_instructions_12RoutineEnd());
flowScheduler.add(fake_instructions_13RoutineBegin());
flowScheduler.add(fake_instructions_13RoutineEachFrame());
flowScheduler.add(fake_instructions_13RoutineEnd());
flowScheduler.add(fake_instructions_14RoutineBegin());
flowScheduler.add(fake_instructions_14RoutineEachFrame());
flowScheduler.add(fake_instructions_14RoutineEnd());
flowScheduler.add(real_instructionsRoutineBegin());
flowScheduler.add(real_instructionsRoutineEachFrame());
flowScheduler.add(real_instructionsRoutineEnd());
flowScheduler.add(real_instructions_2RoutineBegin());
flowScheduler.add(real_instructions_2RoutineEachFrame());
flowScheduler.add(real_instructions_2RoutineEnd());
flowScheduler.add(real_instructions_2_5RoutineBegin());
flowScheduler.add(real_instructions_2_5RoutineEachFrame());
flowScheduler.add(real_instructions_2_5RoutineEnd());
flowScheduler.add(real_instructions_3RoutineBegin());
flowScheduler.add(real_instructions_3RoutineEachFrame());
flowScheduler.add(real_instructions_3RoutineEnd());
flowScheduler.add(trainingRoutineBegin());
flowScheduler.add(trainingRoutineEachFrame());
flowScheduler.add(trainingRoutineEnd());
flowScheduler.add(training_reward_displayRoutineBegin());
flowScheduler.add(training_reward_displayRoutineEachFrame());
flowScheduler.add(training_reward_displayRoutineEnd());
flowScheduler.add(att_check_primerRoutineBegin());
flowScheduler.add(att_check_primerRoutineEachFrame());
flowScheduler.add(att_check_primerRoutineEnd());
flowScheduler.add(att_check_1RoutineBegin());
flowScheduler.add(att_check_1RoutineEachFrame());
flowScheduler.add(att_check_1RoutineEnd());
flowScheduler.add(att_1_feedbackRoutineBegin());
flowScheduler.add(att_1_feedbackRoutineEachFrame());
flowScheduler.add(att_1_feedbackRoutineEnd());
flowScheduler.add(exp_start_primerRoutineBegin());
flowScheduler.add(exp_start_primerRoutineEachFrame());
flowScheduler.add(exp_start_primerRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(end_screenRoutineBegin());
flowScheduler.add(end_screenRoutineEachFrame());
flowScheduler.add(end_screenRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'tables/data.xlsx', 'path': 'tables/data.xlsx'},
    {'name': 'stimuli/stock_symbol.png', 'path': 'stimuli/stock_symbol.png'},
    {'name': 'stimuli/envs.png', 'path': 'stimuli/envs.png'},
    {'name': 'stimuli/selection.png', 'path': 'stimuli/selection.png'},
    {'name': 'stimuli/stock.png', 'path': 'stimuli/stock.png'},
    {'name': 'stimuli/stock2.png', 'path': 'stimuli/stock2.png'},
    {'name': 'stimuli/plot.png', 'path': 'stimuli/plot.png'},
    {'name': 'stimuli/training_investors.png', 'path': 'stimuli/training_investors.png'},
    {'name': 'stimuli/example_pairing.png', 'path': 'stimuli/example_pairing.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'stimuli/standard/both_trad_2.png', 'path': 'stimuli/standard/both_trad_2.png'},
    {'name': 'stimuli/standard/both_trad_3.png', 'path': 'stimuli/standard/both_trad_3.png'},
    {'name': 'stimuli/side_flip/both_trad_2.png', 'path': 'stimuli/side_flip/both_trad_2.png'},
    {'name': 'stimuli/side_flip/both_trad_3.png', 'path': 'stimuli/side_flip/both_trad_3.png'},
    {'name': 'stimuli/color_flip/both_trad_2.png', 'path': 'stimuli/color_flip/both_trad_2.png'},
    {'name': 'stimuli/color_flip/both_trad_3.png', 'path': 'stimuli/color_flip/both_trad_3.png'},
    {'name': 'stimuli/color_and_side_flip/both_trad_2.png', 'path': 'stimuli/color_and_side_flip/both_trad_2.png'},
    {'name': 'stimuli/color_and_side_flip/both_trad_3.png', 'path': 'stimuli/color_and_side_flip/both_trad_3.png'},
    {'name': 'stimuli/stock2.png', 'path': 'stimuli/stock2.png'},
    {'name': 'stimuli/standard/a1_tech_a2_trad.png', 'path': 'stimuli/standard/a1_tech_a2_trad.png'},
    {'name': 'stimuli/standard/a1_trad_a2_tech.png', 'path': 'stimuli/standard/a1_trad_a2_tech.png'},
    {'name': 'stimuli/standard/both_tech.png', 'path': 'stimuli/standard/both_tech.png'},
    {'name': 'stimuli/standard/both_trad.png', 'path': 'stimuli/standard/both_trad.png'},
    {'name': 'stimuli/side_flip/a1_tech_a2_trad.png', 'path': 'stimuli/side_flip/a1_tech_a2_trad.png'},
    {'name': 'stimuli/side_flip/a1_trad_a2_tech.png', 'path': 'stimuli/side_flip/a1_trad_a2_tech.png'},
    {'name': 'stimuli/side_flip/both_tech.png', 'path': 'stimuli/side_flip/both_tech.png'},
    {'name': 'stimuli/side_flip/both_trad.png', 'path': 'stimuli/side_flip/both_trad.png'},
    {'name': 'stimuli/color_flip/a1_tech_a2_trad.png', 'path': 'stimuli/color_flip/a1_tech_a2_trad.png'},
    {'name': 'stimuli/color_flip/a1_trad_a2_tech.png', 'path': 'stimuli/color_flip/a1_trad_a2_tech.png'},
    {'name': 'stimuli/color_flip/both_tech.png', 'path': 'stimuli/color_flip/both_tech.png'},
    {'name': 'stimuli/color_flip/both_trad.png', 'path': 'stimuli/color_flip/both_trad.png'},
    {'name': 'stimuli/color_and_side_flip/a1_tech_a2_trad.png', 'path': 'stimuli/color_and_side_flip/a1_tech_a2_trad.png'},
    {'name': 'stimuli/color_and_side_flip/a1_trad_a2_tech.png', 'path': 'stimuli/color_and_side_flip/a1_trad_a2_tech.png'},
    {'name': 'stimuli/color_and_side_flip/both_tech.png', 'path': 'stimuli/color_and_side_flip/both_tech.png'},
    {'name': 'stimuli/color_and_side_flip/both_trad.png', 'path': 'stimuli/color_and_side_flip/both_trad.png'},
    {'name': 'stimuli/envs.png', 'path': 'stimuli/envs.png'},
    {'name': 'stimuli/example_pairing.png', 'path': 'stimuli/example_pairing.png'},
    {'name': 'stimuli/next.png', 'path': 'stimuli/next.png'},
    {'name': 'stimuli/plot.png', 'path': 'stimuli/plot.png'},
    {'name': 'stimuli/selection.png', 'path': 'stimuli/selection.png'},
    {'name': 'stimuli/stock.png', 'path': 'stimuli/stock.png'},
    {'name': 'stimuli/stock_symbol.png', 'path': 'stimuli/stock_symbol.png'},
    {'name': 'stimuli/training_investors.png', 'path': 'stimuli/training_investors.png'},
    {'name': 'stimuli/training_stims.png', 'path': 'stimuli/training_stims.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://app.prolific.com/submissions/complete?cc=C1M4HHIA', '');


  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);


  return Scheduler.Event.NEXT;
}


var welcomeClock;
var welcome_text;
var end_welcome;
var instructionsClock;
var instruction_text;
var end_instr;
var instructions_2Clock;
var instruction_text_2;
var end_instr_2;
var instructions_3Clock;
var instruction_text_3;
var end_instr_3;
var fake_instructionsClock;
var stocks_image;
var instruction_text_4;
var end_instr_6;
var fake_instructions_2Clock;
var instruction_text_6;
var end_instr_8;
var fake_instructions_3Clock;
var env_logos;
var instruction_text_7;
var end_instr_9;
var fake_instructions_4Clock;
var selection_img;
var instruction_text_8;
var end_instr_10;
var fake_instructions_5Clock;
var ind_stock;
var instruction_text_9;
var end_instr_11;
var fake_reward_txt;
var fake_instructions_6Clock;
var ind_stock_2;
var instruction_text_10;
var end_instr_12;
var fake_reward_txt_2;
var fake_instructions_7Clock;
var env_logos_2;
var instruction_text_11;
var end_instr_13;
var fake_instructions_8Clock;
var selection_img_2;
var instruction_text_12;
var end_instr_14;
var fake_instructions_9Clock;
var ind_stock_3;
var instruction_text_13;
var end_instr_15;
var fake_reward_txt_3;
var fake_instructions_10Clock;
var instruction_text_15;
var end_instr_17;
var fake_instructions_11Clock;
var instruction_text_16;
var end_instr_18;
var avg_reward_img;
var fake_instructions_12Clock;
var instruction_text_14;
var end_instr_16;
var fake_instructions_13Clock;
var instruction_text_17;
var end_instr_19;
var fake_instructions_14Clock;
var instruction_text_18;
var end_instr_20;
var real_instructionsClock;
var instruction_text_5;
var end_instr_7;
var real_instructions_2Clock;
var investors;
var instr_txt;
var end_instr_4;
var real_instructions_2_5Clock;
var investors_2_sample;
var instr_txt_3;
var end_instr_21;
var real_instructions_3Clock;
var reward_demo;
var instr_txt_2;
var end_instr_5;
var trainingClock;
var training_stims;
var training_choice;
var training_instr;
var one_txt;
var two_txt;
var training_reward_displayClock;
var training_reward_display_text;
var fake_training_reward;
var next_key_2;
var att_check_primerClock;
var training_reward_display_text_2;
var next_key;
var att_check_1Clock;
var q1;
var resps;
var text;
var att1_resp;
var att_1_feedbackClock;
var text_2;
var continue_feed;
var exp_start_primerClock;
var instruction_text_19;
var end_instr_22;
var choiceClock;
var conditionList;
var condition;
var stimuli_img;
var choices;
var reward_displayClock;
var reward_display_text;
var end_screenClock;
var end_text;
var end_key;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  welcome_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome_text',
    text: "Welcome to the 'spot the market insider' task!\nThis experiment aims to analyze whether people can identify market insiders making short-term bets by observing their investment decisions. Market insider are individuals, such as executives or employees, who have access to confidential and non-public information about a company, which could influence its stock price if it were publicly known.\n\nPress 'space' to start",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.045,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_welcome = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  instruction_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text',
    text: "In this experiment, your responses will be anonymized prior to analysis, ensuring no personal data is collected. We are interested in the collective response pattern from a broad participant group.\n\nPress 'space' to continue",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_instr = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions_2"
  instructions_2Clock = new util.Clock();
  instruction_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text_2',
    text: "During the task, you'll be selecting from various options, each providing a different number of game points. These points will be tallied at the end and converted into a bonus payment. You could earn up to an additional £3 based on your performance, which is separate from the guaranteed £2 completion reward.\n\nPress 'space' to continue",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_instr_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions_3"
  instructions_3Clock = new util.Clock();
  instruction_text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text_3',
    text: "This experiment is part two of a larger study. First, we'll show you what your peers did in part one. Then, we'll guide you through your own task in this study.\n\nPress 'space' to continue",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_instr_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fake_instructions"
  fake_instructionsClock = new util.Clock();
  stocks_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stocks_image', units : undefined, 
    image : 'stimuli/stock_symbol.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.2], size : [0.4, 0.4],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  instruction_text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text_4',
    text: 'In part one of the study, participants were tasked to invest into various stocks at a fictional stock market.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  end_instr_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fake_instructions_2"
  fake_instructions_2Clock = new util.Clock();
  instruction_text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text_6',
    text: 'The experiment took place over multiple rounds. At the beginning of each round, participants were assigned a specific category of stocks to invest in.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_instr_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fake_instructions_3"
  fake_instructions_3Clock = new util.Clock();
  env_logos = new visual.ImageStim({
    win : psychoJS.window,
    name : 'env_logos', units : undefined, 
    image : 'stimuli/envs.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.2], size : [0.7794, 0.216],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  instruction_text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text_7',
    text: "Two examples of the categories presented were 'Hygiene' and 'Furniture', indicated respectively by the images shown above. Each of these categories contained a unique selection of 4 possible stocks to invest in.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  end_instr_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fake_instructions_4"
  fake_instructions_4Clock = new util.Clock();
  selection_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'selection_img', units : undefined, 
    image : 'stimuli/selection.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.15], size : [0.9936, 0.5256],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  instruction_text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text_8',
    text: 'Once assigned their category for the round, participants were shown the stocks it contained (symbolized by the 4 images shown above) and asked to invest in one of them.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.045,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  end_instr_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fake_instructions_5"
  fake_instructions_5Clock = new util.Clock();
  ind_stock = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ind_stock', units : undefined, 
    image : 'stimuli/stock.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.1), 0.15], size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  instruction_text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text_9',
    text: 'After choosing a stock, the participants would be informed of the money they earned or lost by choosing this stock.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.045,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  end_instr_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  fake_reward_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'fake_reward_txt',
    text: '+1.4$',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, 0.15], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 0.0039, (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "fake_instructions_6"
  fake_instructions_6Clock = new util.Clock();
  ind_stock_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ind_stock_2', units : undefined, 
    image : 'stimuli/stock.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.1), 0.15], size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  instruction_text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text_10',
    text: 'Then the next round would begin.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.045,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  end_instr_12 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  fake_reward_txt_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fake_reward_txt_2',
    text: '+1.4$',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, 0.15], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 0.0039, (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "fake_instructions_7"
  fake_instructions_7Clock = new util.Clock();
  env_logos_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'env_logos_2', units : undefined, 
    image : 'stimuli/envs.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.2], size : [0.7794, 0.216],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  instruction_text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text_11',
    text: 'They would once again be randomly assigned one of the two categories of stocks.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  end_instr_13 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fake_instructions_8"
  fake_instructions_8Clock = new util.Clock();
  selection_img_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'selection_img_2', units : undefined, 
    image : 'stimuli/selection.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.15], size : [0.9936, 0.5256],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  instruction_text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text_12',
    text: 'Be shown the selection of stocks from the assigned category and asked to choose one of them.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.045,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  end_instr_14 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fake_instructions_9"
  fake_instructions_9Clock = new util.Clock();
  ind_stock_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ind_stock_3', units : undefined, 
    image : 'stimuli/stock2.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.1), 0.15], size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  instruction_text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text_13',
    text: 'Be shown the monetary reward they received or lost as a consequence of their chosen stock.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.045,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  end_instr_15 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  fake_reward_txt_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fake_reward_txt_3',
    text: '-2.7$',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, 0.15], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "fake_instructions_10"
  fake_instructions_10Clock = new util.Clock();
  instruction_text_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text_15',
    text: 'Each stock would yield a different amount of reward on average. Some stocks even changed their average reward over time.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_instr_17 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fake_instructions_11"
  fake_instructions_11Clock = new util.Clock();
  instruction_text_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text_16',
    text: 'You can see the rewards yielded by four of these stocks in the diagram above. The reward is displayed on the y-axis while the rounds of the experiment are displayed on the x-axis. Each of the four stocks is represented by a colored line.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_instr_18 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  avg_reward_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'avg_reward_img', units : undefined, 
    image : 'stimuli/plot.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.15], size : [1.28, 0.72],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "fake_instructions_12"
  fake_instructions_12Clock = new util.Clock();
  instruction_text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text_14',
    text: 'By repeating this process for multiple rounds, participants could learn which stocks generally made them the most money through a process of trial and error.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_instr_16 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fake_instructions_13"
  fake_instructions_13Clock = new util.Clock();
  instruction_text_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text_17',
    text: "However, some participants were randomly selected to receive 'insider information' that would help them make more profitable choices, thus giving them an advantage over the 'normal' participants.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_instr_19 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fake_instructions_14"
  fake_instructions_14Clock = new util.Clock();
  instruction_text_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text_18',
    text: "This is where you come in. In your task, you will be able to select an investor and check how much money they made when investing in different markets. You'll be asked repeatedly to choose the investor you want to investigate, because each investor placed several bets during our experiment. Remember that some investors may have been 'insiders' on specific markets.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_instr_20 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "real_instructions"
  real_instructionsClock = new util.Clock();
  instruction_text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text_5',
    text: "The detailed instructions for your task start now. \nPlease read them carefully. You can only score many points (and receive a large bonus payment) if you understand them well!\n\nPress 'space' to continue",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_instr_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "real_instructions_2"
  real_instructions_2Clock = new util.Clock();
  investors = new visual.ImageStim({
    win : psychoJS.window,
    name : 'investors', units : undefined, 
    image : 'stimuli/training_investors.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.2], size : [1.012, 0.338],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  instr_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_txt',
    text: 'As mentioned, you will choose between two prior participants (investors) to examine whether you can spot the market insider or not. Like yourself, these participants were ensured anonymity. For this reason, you will be able to tell them apart by the colored icons seen above.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  end_instr_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "real_instructions_2_5"
  real_instructions_2_5Clock = new util.Clock();
  investors_2_sample = new visual.ImageStim({
    win : psychoJS.window,
    name : 'investors_2_sample', units : undefined, 
    image : 'stimuli/example_pairing.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.15], size : [0.9058, 0.5425],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  instr_txt_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_txt_3',
    text: 'To simplify the experience, you will only see two investors and the category they were assigned to. You will not have to deal with the individual stocks nested within the categories the way the prior participants did.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  end_instr_21 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "real_instructions_3"
  real_instructions_3Clock = new util.Clock();
  reward_demo = new visual.TextStim({
    win: psychoJS.window,
    name: 'reward_demo',
    text: '+3.72$',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 0.0039, (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  instr_txt_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_txt_2',
    text: 'When you have chosen the investor you want to investigate, you will see the result as a numerical value on your screen after selection.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  end_instr_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "training"
  trainingClock = new util.Clock();
  training_stims = new visual.ImageStim({
    win : psychoJS.window,
    name : 'training_stims', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.1], size : [0.72464, 0.434],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  training_choice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  training_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'training_instr',
    text: "Let's do a practice round! Select one of the two investors by pressing their corresponding number on your keyboard.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  one_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'one_txt',
    text: '1',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.3), 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  two_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'two_txt',
    text: '2',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.3, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "training_reward_display"
  training_reward_displayClock = new util.Clock();
  training_reward_display_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'training_reward_display_text',
    text: "Very good! \nWhen you select an investor, the reward they earned will either be added to your points (if it's positive) or deducted from your points (if it's negative).\nAt the end of the experiment, we'll compare your total points with participants who weren't informed about the presence of market insiders the way you were. This will help us determine if you were successful in identifying the market insiders.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  fake_training_reward = new visual.TextStim({
    win: psychoJS.window,
    name: 'fake_training_reward',
    text: '+1.64$',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), 0.0039, (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  next_key_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "att_check_primer"
  att_check_primerClock = new util.Clock();
  training_reward_display_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'training_reward_display_text_2',
    text: "You have reached the end of the instructions! Before we begin the task, let's go over a couple of questions to see whether you understand your assignment.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  next_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "att_check_1"
  att_check_1Clock = new util.Clock();
  q1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'q1',
    text: 'What is your task in this experiment?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  resps = new visual.TextStim({
    win: psychoJS.window,
    name: 'resps',
    text: '1. To choose all investors about equally often.\n\n2. To gain as many points as possible.\n\n3. To find out which category is best.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Press the number key corresponding to your answer.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  att1_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "att_1_feedback"
  att_1_feedbackClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  continue_feed = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "exp_start_primer"
  exp_start_primerClock = new util.Clock();
  instruction_text_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text_19',
    text: "The experiment is about to begin. Remember:\n\n1. Some investors might have received insider information.\n2. Your task is to gather as many points as possible - choose whichever pairing of investor and condition you think will yield the highest reward.\n3. Select your chosen pairing by pressing the '1' or '2' key on your keyboard.\n\nPress 'space' to start the experiment",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_instr_22 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "choice"
  choiceClock = new util.Clock();
  // Run 'Begin Experiment' code from trial_code
  conditionList = ["standard", "color_flip", "side_flip", "color_and_side_flip"];
  condition = conditionList[Math.floor(Math.random() * 4)];
  
  psychoJS.experiment.addData("condition", condition);
  stimuli_img = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimuli_img', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1.2, 0.9],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  choices = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "reward_display"
  reward_displayClock = new util.Clock();
  reward_display_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'reward_display_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "end_screen"
  end_screenClock = new util.Clock();
  end_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'end_text',
    text: "You have reached the end of the experiment. Thank you for your participation!\n\nPress 'space' to save your data and be redirected to Prolific.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  end_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _end_welcome_allKeys;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome' ---
    t = 0;
    welcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_welcome.keys = undefined;
    end_welcome.rt = undefined;
    _end_welcome_allKeys = [];
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(welcome_text);
    welcomeComponents.push(end_welcome);
    
    welcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function welcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome' ---
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcome_text* updates
    if (t >= 0.0 && welcome_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_text.tStart = t;  // (not accounting for frame time here)
      welcome_text.frameNStart = frameN;  // exact frame index
      
      welcome_text.setAutoDraw(true);
    }

    
    // *end_welcome* updates
    if (t >= 0.0 && end_welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_welcome.tStart = t;  // (not accounting for frame time here)
      end_welcome.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_welcome.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_welcome.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_welcome.clearEvents(); });
    }

    if (end_welcome.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_welcome.getKeys({keyList: ['space'], waitRelease: false});
      _end_welcome_allKeys = _end_welcome_allKeys.concat(theseKeys);
      if (_end_welcome_allKeys.length > 0) {
        end_welcome.keys = _end_welcome_allKeys[_end_welcome_allKeys.length - 1].name;  // just the last key pressed
        end_welcome.rt = _end_welcome_allKeys[_end_welcome_allKeys.length - 1].rt;
        end_welcome.duration = _end_welcome_allKeys[_end_welcome_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    welcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome' ---
    welcomeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    end_welcome.stop();
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_instr_allKeys;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions' ---
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_instr.keys = undefined;
    end_instr.rt = undefined;
    _end_instr_allKeys = [];
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(instruction_text);
    instructionsComponents.push(end_instr);
    
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions' ---
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_text* updates
    if (t >= 0.0 && instruction_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text.tStart = t;  // (not accounting for frame time here)
      instruction_text.frameNStart = frameN;  // exact frame index
      
      instruction_text.setAutoDraw(true);
    }

    
    // *end_instr* updates
    if (t >= 0.0 && end_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_instr.tStart = t;  // (not accounting for frame time here)
      end_instr.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_instr.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_instr.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_instr.clearEvents(); });
    }

    if (end_instr.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_instr.getKeys({keyList: ['space'], waitRelease: false});
      _end_instr_allKeys = _end_instr_allKeys.concat(theseKeys);
      if (_end_instr_allKeys.length > 0) {
        end_instr.keys = _end_instr_allKeys[_end_instr_allKeys.length - 1].name;  // just the last key pressed
        end_instr.rt = _end_instr_allKeys[_end_instr_allKeys.length - 1].rt;
        end_instr.duration = _end_instr_allKeys[_end_instr_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions' ---
    instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    end_instr.stop();
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_instr_2_allKeys;
var instructions_2Components;
function instructions_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions_2' ---
    t = 0;
    instructions_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_instr_2.keys = undefined;
    end_instr_2.rt = undefined;
    _end_instr_2_allKeys = [];
    // keep track of which components have finished
    instructions_2Components = [];
    instructions_2Components.push(instruction_text_2);
    instructions_2Components.push(end_instr_2);
    
    instructions_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions_2' ---
    // get current time
    t = instructions_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_text_2* updates
    if (t >= 0.0 && instruction_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text_2.tStart = t;  // (not accounting for frame time here)
      instruction_text_2.frameNStart = frameN;  // exact frame index
      
      instruction_text_2.setAutoDraw(true);
    }

    
    // *end_instr_2* updates
    if (t >= 0.0 && end_instr_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_instr_2.tStart = t;  // (not accounting for frame time here)
      end_instr_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_instr_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_instr_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_instr_2.clearEvents(); });
    }

    if (end_instr_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_instr_2.getKeys({keyList: ['space'], waitRelease: false});
      _end_instr_2_allKeys = _end_instr_2_allKeys.concat(theseKeys);
      if (_end_instr_2_allKeys.length > 0) {
        end_instr_2.keys = _end_instr_2_allKeys[_end_instr_2_allKeys.length - 1].name;  // just the last key pressed
        end_instr_2.rt = _end_instr_2_allKeys[_end_instr_2_allKeys.length - 1].rt;
        end_instr_2.duration = _end_instr_2_allKeys[_end_instr_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructions_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions_2' ---
    instructions_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    end_instr_2.stop();
    // the Routine "instructions_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_instr_3_allKeys;
var instructions_3Components;
function instructions_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions_3' ---
    t = 0;
    instructions_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_instr_3.keys = undefined;
    end_instr_3.rt = undefined;
    _end_instr_3_allKeys = [];
    // keep track of which components have finished
    instructions_3Components = [];
    instructions_3Components.push(instruction_text_3);
    instructions_3Components.push(end_instr_3);
    
    instructions_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions_3' ---
    // get current time
    t = instructions_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_text_3* updates
    if (t >= 0.0 && instruction_text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text_3.tStart = t;  // (not accounting for frame time here)
      instruction_text_3.frameNStart = frameN;  // exact frame index
      
      instruction_text_3.setAutoDraw(true);
    }

    
    // *end_instr_3* updates
    if (t >= 0.0 && end_instr_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_instr_3.tStart = t;  // (not accounting for frame time here)
      end_instr_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_instr_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_instr_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_instr_3.clearEvents(); });
    }

    if (end_instr_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_instr_3.getKeys({keyList: ['space'], waitRelease: false});
      _end_instr_3_allKeys = _end_instr_3_allKeys.concat(theseKeys);
      if (_end_instr_3_allKeys.length > 0) {
        end_instr_3.keys = _end_instr_3_allKeys[_end_instr_3_allKeys.length - 1].name;  // just the last key pressed
        end_instr_3.rt = _end_instr_3_allKeys[_end_instr_3_allKeys.length - 1].rt;
        end_instr_3.duration = _end_instr_3_allKeys[_end_instr_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructions_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions_3' ---
    instructions_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    end_instr_3.stop();
    // the Routine "instructions_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_instr_6_allKeys;
var fake_instructionsComponents;
function fake_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fake_instructions' ---
    t = 0;
    fake_instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_instr_6.keys = undefined;
    end_instr_6.rt = undefined;
    _end_instr_6_allKeys = [];
    // keep track of which components have finished
    fake_instructionsComponents = [];
    fake_instructionsComponents.push(stocks_image);
    fake_instructionsComponents.push(instruction_text_4);
    fake_instructionsComponents.push(end_instr_6);
    
    fake_instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fake_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fake_instructions' ---
    // get current time
    t = fake_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stocks_image* updates
    if (t >= 0.0 && stocks_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stocks_image.tStart = t;  // (not accounting for frame time here)
      stocks_image.frameNStart = frameN;  // exact frame index
      
      stocks_image.setAutoDraw(true);
    }

    
    // *instruction_text_4* updates
    if (t >= 0.0 && instruction_text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text_4.tStart = t;  // (not accounting for frame time here)
      instruction_text_4.frameNStart = frameN;  // exact frame index
      
      instruction_text_4.setAutoDraw(true);
    }

    
    // *end_instr_6* updates
    if (t >= 0.5 && end_instr_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_instr_6.tStart = t;  // (not accounting for frame time here)
      end_instr_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_instr_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_instr_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_instr_6.clearEvents(); });
    }

    if (end_instr_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_instr_6.getKeys({keyList: ['space'], waitRelease: false});
      _end_instr_6_allKeys = _end_instr_6_allKeys.concat(theseKeys);
      if (_end_instr_6_allKeys.length > 0) {
        end_instr_6.keys = _end_instr_6_allKeys[_end_instr_6_allKeys.length - 1].name;  // just the last key pressed
        end_instr_6.rt = _end_instr_6_allKeys[_end_instr_6_allKeys.length - 1].rt;
        end_instr_6.duration = _end_instr_6_allKeys[_end_instr_6_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fake_instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fake_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fake_instructions' ---
    fake_instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    end_instr_6.stop();
    // the Routine "fake_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_instr_8_allKeys;
var fake_instructions_2Components;
function fake_instructions_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fake_instructions_2' ---
    t = 0;
    fake_instructions_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_instr_8.keys = undefined;
    end_instr_8.rt = undefined;
    _end_instr_8_allKeys = [];
    // keep track of which components have finished
    fake_instructions_2Components = [];
    fake_instructions_2Components.push(instruction_text_6);
    fake_instructions_2Components.push(end_instr_8);
    
    fake_instructions_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fake_instructions_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fake_instructions_2' ---
    // get current time
    t = fake_instructions_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_text_6* updates
    if (t >= 0.0 && instruction_text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text_6.tStart = t;  // (not accounting for frame time here)
      instruction_text_6.frameNStart = frameN;  // exact frame index
      
      instruction_text_6.setAutoDraw(true);
    }

    
    // *end_instr_8* updates
    if (t >= 0.5 && end_instr_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_instr_8.tStart = t;  // (not accounting for frame time here)
      end_instr_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_instr_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_instr_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_instr_8.clearEvents(); });
    }

    if (end_instr_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_instr_8.getKeys({keyList: ['space'], waitRelease: false});
      _end_instr_8_allKeys = _end_instr_8_allKeys.concat(theseKeys);
      if (_end_instr_8_allKeys.length > 0) {
        end_instr_8.keys = _end_instr_8_allKeys[_end_instr_8_allKeys.length - 1].name;  // just the last key pressed
        end_instr_8.rt = _end_instr_8_allKeys[_end_instr_8_allKeys.length - 1].rt;
        end_instr_8.duration = _end_instr_8_allKeys[_end_instr_8_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fake_instructions_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fake_instructions_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fake_instructions_2' ---
    fake_instructions_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    end_instr_8.stop();
    // the Routine "fake_instructions_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_instr_9_allKeys;
var fake_instructions_3Components;
function fake_instructions_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fake_instructions_3' ---
    t = 0;
    fake_instructions_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_instr_9.keys = undefined;
    end_instr_9.rt = undefined;
    _end_instr_9_allKeys = [];
    // keep track of which components have finished
    fake_instructions_3Components = [];
    fake_instructions_3Components.push(env_logos);
    fake_instructions_3Components.push(instruction_text_7);
    fake_instructions_3Components.push(end_instr_9);
    
    fake_instructions_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fake_instructions_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fake_instructions_3' ---
    // get current time
    t = fake_instructions_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *env_logos* updates
    if (t >= 0.0 && env_logos.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      env_logos.tStart = t;  // (not accounting for frame time here)
      env_logos.frameNStart = frameN;  // exact frame index
      
      env_logos.setAutoDraw(true);
    }

    
    // *instruction_text_7* updates
    if (t >= 0.0 && instruction_text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text_7.tStart = t;  // (not accounting for frame time here)
      instruction_text_7.frameNStart = frameN;  // exact frame index
      
      instruction_text_7.setAutoDraw(true);
    }

    
    // *end_instr_9* updates
    if (t >= 0.5 && end_instr_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_instr_9.tStart = t;  // (not accounting for frame time here)
      end_instr_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_instr_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_instr_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_instr_9.clearEvents(); });
    }

    if (end_instr_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_instr_9.getKeys({keyList: ['space'], waitRelease: false});
      _end_instr_9_allKeys = _end_instr_9_allKeys.concat(theseKeys);
      if (_end_instr_9_allKeys.length > 0) {
        end_instr_9.keys = _end_instr_9_allKeys[_end_instr_9_allKeys.length - 1].name;  // just the last key pressed
        end_instr_9.rt = _end_instr_9_allKeys[_end_instr_9_allKeys.length - 1].rt;
        end_instr_9.duration = _end_instr_9_allKeys[_end_instr_9_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fake_instructions_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fake_instructions_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fake_instructions_3' ---
    fake_instructions_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    end_instr_9.stop();
    // the Routine "fake_instructions_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_instr_10_allKeys;
var fake_instructions_4Components;
function fake_instructions_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fake_instructions_4' ---
    t = 0;
    fake_instructions_4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_instr_10.keys = undefined;
    end_instr_10.rt = undefined;
    _end_instr_10_allKeys = [];
    // keep track of which components have finished
    fake_instructions_4Components = [];
    fake_instructions_4Components.push(selection_img);
    fake_instructions_4Components.push(instruction_text_8);
    fake_instructions_4Components.push(end_instr_10);
    
    fake_instructions_4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fake_instructions_4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fake_instructions_4' ---
    // get current time
    t = fake_instructions_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *selection_img* updates
    if (t >= 0.0 && selection_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      selection_img.tStart = t;  // (not accounting for frame time here)
      selection_img.frameNStart = frameN;  // exact frame index
      
      selection_img.setAutoDraw(true);
    }

    
    // *instruction_text_8* updates
    if (t >= 0.0 && instruction_text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text_8.tStart = t;  // (not accounting for frame time here)
      instruction_text_8.frameNStart = frameN;  // exact frame index
      
      instruction_text_8.setAutoDraw(true);
    }

    
    // *end_instr_10* updates
    if (t >= 0.5 && end_instr_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_instr_10.tStart = t;  // (not accounting for frame time here)
      end_instr_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_instr_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_instr_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_instr_10.clearEvents(); });
    }

    if (end_instr_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_instr_10.getKeys({keyList: ['space'], waitRelease: false});
      _end_instr_10_allKeys = _end_instr_10_allKeys.concat(theseKeys);
      if (_end_instr_10_allKeys.length > 0) {
        end_instr_10.keys = _end_instr_10_allKeys[_end_instr_10_allKeys.length - 1].name;  // just the last key pressed
        end_instr_10.rt = _end_instr_10_allKeys[_end_instr_10_allKeys.length - 1].rt;
        end_instr_10.duration = _end_instr_10_allKeys[_end_instr_10_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fake_instructions_4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fake_instructions_4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fake_instructions_4' ---
    fake_instructions_4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    end_instr_10.stop();
    // the Routine "fake_instructions_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_instr_11_allKeys;
var fake_instructions_5Components;
function fake_instructions_5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fake_instructions_5' ---
    t = 0;
    fake_instructions_5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_instr_11.keys = undefined;
    end_instr_11.rt = undefined;
    _end_instr_11_allKeys = [];
    // keep track of which components have finished
    fake_instructions_5Components = [];
    fake_instructions_5Components.push(ind_stock);
    fake_instructions_5Components.push(instruction_text_9);
    fake_instructions_5Components.push(end_instr_11);
    fake_instructions_5Components.push(fake_reward_txt);
    
    fake_instructions_5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fake_instructions_5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fake_instructions_5' ---
    // get current time
    t = fake_instructions_5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ind_stock* updates
    if (t >= 0.0 && ind_stock.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ind_stock.tStart = t;  // (not accounting for frame time here)
      ind_stock.frameNStart = frameN;  // exact frame index
      
      ind_stock.setAutoDraw(true);
    }

    
    // *instruction_text_9* updates
    if (t >= 0.0 && instruction_text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text_9.tStart = t;  // (not accounting for frame time here)
      instruction_text_9.frameNStart = frameN;  // exact frame index
      
      instruction_text_9.setAutoDraw(true);
    }

    
    // *end_instr_11* updates
    if (t >= 0.5 && end_instr_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_instr_11.tStart = t;  // (not accounting for frame time here)
      end_instr_11.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_instr_11.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_instr_11.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_instr_11.clearEvents(); });
    }

    if (end_instr_11.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_instr_11.getKeys({keyList: ['space'], waitRelease: false});
      _end_instr_11_allKeys = _end_instr_11_allKeys.concat(theseKeys);
      if (_end_instr_11_allKeys.length > 0) {
        end_instr_11.keys = _end_instr_11_allKeys[_end_instr_11_allKeys.length - 1].name;  // just the last key pressed
        end_instr_11.rt = _end_instr_11_allKeys[_end_instr_11_allKeys.length - 1].rt;
        end_instr_11.duration = _end_instr_11_allKeys[_end_instr_11_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *fake_reward_txt* updates
    if (t >= 0.0 && fake_reward_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fake_reward_txt.tStart = t;  // (not accounting for frame time here)
      fake_reward_txt.frameNStart = frameN;  // exact frame index
      
      fake_reward_txt.setAutoDraw(true);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fake_instructions_5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fake_instructions_5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fake_instructions_5' ---
    fake_instructions_5Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    end_instr_11.stop();
    // the Routine "fake_instructions_5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_instr_12_allKeys;
var fake_instructions_6Components;
function fake_instructions_6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fake_instructions_6' ---
    t = 0;
    fake_instructions_6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_instr_12.keys = undefined;
    end_instr_12.rt = undefined;
    _end_instr_12_allKeys = [];
    // keep track of which components have finished
    fake_instructions_6Components = [];
    fake_instructions_6Components.push(ind_stock_2);
    fake_instructions_6Components.push(instruction_text_10);
    fake_instructions_6Components.push(end_instr_12);
    fake_instructions_6Components.push(fake_reward_txt_2);
    
    fake_instructions_6Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fake_instructions_6RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fake_instructions_6' ---
    // get current time
    t = fake_instructions_6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ind_stock_2* updates
    if (t >= 0.0 && ind_stock_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ind_stock_2.tStart = t;  // (not accounting for frame time here)
      ind_stock_2.frameNStart = frameN;  // exact frame index
      
      ind_stock_2.setAutoDraw(true);
    }

    
    // *instruction_text_10* updates
    if (t >= 0.0 && instruction_text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text_10.tStart = t;  // (not accounting for frame time here)
      instruction_text_10.frameNStart = frameN;  // exact frame index
      
      instruction_text_10.setAutoDraw(true);
    }

    
    // *end_instr_12* updates
    if (t >= 0.5 && end_instr_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_instr_12.tStart = t;  // (not accounting for frame time here)
      end_instr_12.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_instr_12.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_instr_12.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_instr_12.clearEvents(); });
    }

    if (end_instr_12.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_instr_12.getKeys({keyList: ['space'], waitRelease: false});
      _end_instr_12_allKeys = _end_instr_12_allKeys.concat(theseKeys);
      if (_end_instr_12_allKeys.length > 0) {
        end_instr_12.keys = _end_instr_12_allKeys[_end_instr_12_allKeys.length - 1].name;  // just the last key pressed
        end_instr_12.rt = _end_instr_12_allKeys[_end_instr_12_allKeys.length - 1].rt;
        end_instr_12.duration = _end_instr_12_allKeys[_end_instr_12_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *fake_reward_txt_2* updates
    if (t >= 0.0 && fake_reward_txt_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fake_reward_txt_2.tStart = t;  // (not accounting for frame time here)
      fake_reward_txt_2.frameNStart = frameN;  // exact frame index
      
      fake_reward_txt_2.setAutoDraw(true);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fake_instructions_6Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fake_instructions_6RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fake_instructions_6' ---
    fake_instructions_6Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    end_instr_12.stop();
    // the Routine "fake_instructions_6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_instr_13_allKeys;
var fake_instructions_7Components;
function fake_instructions_7RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fake_instructions_7' ---
    t = 0;
    fake_instructions_7Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_instr_13.keys = undefined;
    end_instr_13.rt = undefined;
    _end_instr_13_allKeys = [];
    // keep track of which components have finished
    fake_instructions_7Components = [];
    fake_instructions_7Components.push(env_logos_2);
    fake_instructions_7Components.push(instruction_text_11);
    fake_instructions_7Components.push(end_instr_13);
    
    fake_instructions_7Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fake_instructions_7RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fake_instructions_7' ---
    // get current time
    t = fake_instructions_7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *env_logos_2* updates
    if (t >= 0.0 && env_logos_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      env_logos_2.tStart = t;  // (not accounting for frame time here)
      env_logos_2.frameNStart = frameN;  // exact frame index
      
      env_logos_2.setAutoDraw(true);
    }

    
    // *instruction_text_11* updates
    if (t >= 0.0 && instruction_text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text_11.tStart = t;  // (not accounting for frame time here)
      instruction_text_11.frameNStart = frameN;  // exact frame index
      
      instruction_text_11.setAutoDraw(true);
    }

    
    // *end_instr_13* updates
    if (t >= 0.5 && end_instr_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_instr_13.tStart = t;  // (not accounting for frame time here)
      end_instr_13.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_instr_13.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_instr_13.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_instr_13.clearEvents(); });
    }

    if (end_instr_13.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_instr_13.getKeys({keyList: ['space'], waitRelease: false});
      _end_instr_13_allKeys = _end_instr_13_allKeys.concat(theseKeys);
      if (_end_instr_13_allKeys.length > 0) {
        end_instr_13.keys = _end_instr_13_allKeys[_end_instr_13_allKeys.length - 1].name;  // just the last key pressed
        end_instr_13.rt = _end_instr_13_allKeys[_end_instr_13_allKeys.length - 1].rt;
        end_instr_13.duration = _end_instr_13_allKeys[_end_instr_13_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fake_instructions_7Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fake_instructions_7RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fake_instructions_7' ---
    fake_instructions_7Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    end_instr_13.stop();
    // the Routine "fake_instructions_7" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_instr_14_allKeys;
var fake_instructions_8Components;
function fake_instructions_8RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fake_instructions_8' ---
    t = 0;
    fake_instructions_8Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_instr_14.keys = undefined;
    end_instr_14.rt = undefined;
    _end_instr_14_allKeys = [];
    // keep track of which components have finished
    fake_instructions_8Components = [];
    fake_instructions_8Components.push(selection_img_2);
    fake_instructions_8Components.push(instruction_text_12);
    fake_instructions_8Components.push(end_instr_14);
    
    fake_instructions_8Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fake_instructions_8RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fake_instructions_8' ---
    // get current time
    t = fake_instructions_8Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *selection_img_2* updates
    if (t >= 0.0 && selection_img_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      selection_img_2.tStart = t;  // (not accounting for frame time here)
      selection_img_2.frameNStart = frameN;  // exact frame index
      
      selection_img_2.setAutoDraw(true);
    }

    
    // *instruction_text_12* updates
    if (t >= 0.0 && instruction_text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text_12.tStart = t;  // (not accounting for frame time here)
      instruction_text_12.frameNStart = frameN;  // exact frame index
      
      instruction_text_12.setAutoDraw(true);
    }

    
    // *end_instr_14* updates
    if (t >= 0.5 && end_instr_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_instr_14.tStart = t;  // (not accounting for frame time here)
      end_instr_14.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_instr_14.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_instr_14.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_instr_14.clearEvents(); });
    }

    if (end_instr_14.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_instr_14.getKeys({keyList: ['space'], waitRelease: false});
      _end_instr_14_allKeys = _end_instr_14_allKeys.concat(theseKeys);
      if (_end_instr_14_allKeys.length > 0) {
        end_instr_14.keys = _end_instr_14_allKeys[_end_instr_14_allKeys.length - 1].name;  // just the last key pressed
        end_instr_14.rt = _end_instr_14_allKeys[_end_instr_14_allKeys.length - 1].rt;
        end_instr_14.duration = _end_instr_14_allKeys[_end_instr_14_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fake_instructions_8Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fake_instructions_8RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fake_instructions_8' ---
    fake_instructions_8Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    end_instr_14.stop();
    // the Routine "fake_instructions_8" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_instr_15_allKeys;
var fake_instructions_9Components;
function fake_instructions_9RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fake_instructions_9' ---
    t = 0;
    fake_instructions_9Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_instr_15.keys = undefined;
    end_instr_15.rt = undefined;
    _end_instr_15_allKeys = [];
    // keep track of which components have finished
    fake_instructions_9Components = [];
    fake_instructions_9Components.push(ind_stock_3);
    fake_instructions_9Components.push(instruction_text_13);
    fake_instructions_9Components.push(end_instr_15);
    fake_instructions_9Components.push(fake_reward_txt_3);
    
    fake_instructions_9Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fake_instructions_9RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fake_instructions_9' ---
    // get current time
    t = fake_instructions_9Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ind_stock_3* updates
    if (t >= 0.0 && ind_stock_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ind_stock_3.tStart = t;  // (not accounting for frame time here)
      ind_stock_3.frameNStart = frameN;  // exact frame index
      
      ind_stock_3.setAutoDraw(true);
    }

    
    // *instruction_text_13* updates
    if (t >= 0.0 && instruction_text_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text_13.tStart = t;  // (not accounting for frame time here)
      instruction_text_13.frameNStart = frameN;  // exact frame index
      
      instruction_text_13.setAutoDraw(true);
    }

    
    // *end_instr_15* updates
    if (t >= 0.5 && end_instr_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_instr_15.tStart = t;  // (not accounting for frame time here)
      end_instr_15.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_instr_15.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_instr_15.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_instr_15.clearEvents(); });
    }

    if (end_instr_15.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_instr_15.getKeys({keyList: ['space'], waitRelease: false});
      _end_instr_15_allKeys = _end_instr_15_allKeys.concat(theseKeys);
      if (_end_instr_15_allKeys.length > 0) {
        end_instr_15.keys = _end_instr_15_allKeys[_end_instr_15_allKeys.length - 1].name;  // just the last key pressed
        end_instr_15.rt = _end_instr_15_allKeys[_end_instr_15_allKeys.length - 1].rt;
        end_instr_15.duration = _end_instr_15_allKeys[_end_instr_15_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *fake_reward_txt_3* updates
    if (t >= 0.0 && fake_reward_txt_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fake_reward_txt_3.tStart = t;  // (not accounting for frame time here)
      fake_reward_txt_3.frameNStart = frameN;  // exact frame index
      
      fake_reward_txt_3.setAutoDraw(true);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fake_instructions_9Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fake_instructions_9RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fake_instructions_9' ---
    fake_instructions_9Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    end_instr_15.stop();
    // the Routine "fake_instructions_9" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_instr_17_allKeys;
var fake_instructions_10Components;
function fake_instructions_10RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fake_instructions_10' ---
    t = 0;
    fake_instructions_10Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_instr_17.keys = undefined;
    end_instr_17.rt = undefined;
    _end_instr_17_allKeys = [];
    // keep track of which components have finished
    fake_instructions_10Components = [];
    fake_instructions_10Components.push(instruction_text_15);
    fake_instructions_10Components.push(end_instr_17);
    
    fake_instructions_10Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fake_instructions_10RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fake_instructions_10' ---
    // get current time
    t = fake_instructions_10Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_text_15* updates
    if (t >= 0.0 && instruction_text_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text_15.tStart = t;  // (not accounting for frame time here)
      instruction_text_15.frameNStart = frameN;  // exact frame index
      
      instruction_text_15.setAutoDraw(true);
    }

    
    // *end_instr_17* updates
    if (t >= 0.5 && end_instr_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_instr_17.tStart = t;  // (not accounting for frame time here)
      end_instr_17.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_instr_17.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_instr_17.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_instr_17.clearEvents(); });
    }

    if (end_instr_17.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_instr_17.getKeys({keyList: ['space'], waitRelease: false});
      _end_instr_17_allKeys = _end_instr_17_allKeys.concat(theseKeys);
      if (_end_instr_17_allKeys.length > 0) {
        end_instr_17.keys = _end_instr_17_allKeys[_end_instr_17_allKeys.length - 1].name;  // just the last key pressed
        end_instr_17.rt = _end_instr_17_allKeys[_end_instr_17_allKeys.length - 1].rt;
        end_instr_17.duration = _end_instr_17_allKeys[_end_instr_17_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fake_instructions_10Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fake_instructions_10RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fake_instructions_10' ---
    fake_instructions_10Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    end_instr_17.stop();
    // the Routine "fake_instructions_10" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_instr_18_allKeys;
var fake_instructions_11Components;
function fake_instructions_11RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fake_instructions_11' ---
    t = 0;
    fake_instructions_11Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_instr_18.keys = undefined;
    end_instr_18.rt = undefined;
    _end_instr_18_allKeys = [];
    // keep track of which components have finished
    fake_instructions_11Components = [];
    fake_instructions_11Components.push(instruction_text_16);
    fake_instructions_11Components.push(end_instr_18);
    fake_instructions_11Components.push(avg_reward_img);
    
    fake_instructions_11Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fake_instructions_11RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fake_instructions_11' ---
    // get current time
    t = fake_instructions_11Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_text_16* updates
    if (t >= 0.0 && instruction_text_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text_16.tStart = t;  // (not accounting for frame time here)
      instruction_text_16.frameNStart = frameN;  // exact frame index
      
      instruction_text_16.setAutoDraw(true);
    }

    
    // *end_instr_18* updates
    if (t >= 0.5 && end_instr_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_instr_18.tStart = t;  // (not accounting for frame time here)
      end_instr_18.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_instr_18.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_instr_18.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_instr_18.clearEvents(); });
    }

    if (end_instr_18.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_instr_18.getKeys({keyList: ['space'], waitRelease: false});
      _end_instr_18_allKeys = _end_instr_18_allKeys.concat(theseKeys);
      if (_end_instr_18_allKeys.length > 0) {
        end_instr_18.keys = _end_instr_18_allKeys[_end_instr_18_allKeys.length - 1].name;  // just the last key pressed
        end_instr_18.rt = _end_instr_18_allKeys[_end_instr_18_allKeys.length - 1].rt;
        end_instr_18.duration = _end_instr_18_allKeys[_end_instr_18_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *avg_reward_img* updates
    if (t >= 0.0 && avg_reward_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      avg_reward_img.tStart = t;  // (not accounting for frame time here)
      avg_reward_img.frameNStart = frameN;  // exact frame index
      
      avg_reward_img.setAutoDraw(true);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fake_instructions_11Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fake_instructions_11RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fake_instructions_11' ---
    fake_instructions_11Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    end_instr_18.stop();
    // the Routine "fake_instructions_11" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_instr_16_allKeys;
var fake_instructions_12Components;
function fake_instructions_12RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fake_instructions_12' ---
    t = 0;
    fake_instructions_12Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_instr_16.keys = undefined;
    end_instr_16.rt = undefined;
    _end_instr_16_allKeys = [];
    // keep track of which components have finished
    fake_instructions_12Components = [];
    fake_instructions_12Components.push(instruction_text_14);
    fake_instructions_12Components.push(end_instr_16);
    
    fake_instructions_12Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fake_instructions_12RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fake_instructions_12' ---
    // get current time
    t = fake_instructions_12Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_text_14* updates
    if (t >= 0.0 && instruction_text_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text_14.tStart = t;  // (not accounting for frame time here)
      instruction_text_14.frameNStart = frameN;  // exact frame index
      
      instruction_text_14.setAutoDraw(true);
    }

    
    // *end_instr_16* updates
    if (t >= 0.5 && end_instr_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_instr_16.tStart = t;  // (not accounting for frame time here)
      end_instr_16.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_instr_16.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_instr_16.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_instr_16.clearEvents(); });
    }

    if (end_instr_16.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_instr_16.getKeys({keyList: ['space'], waitRelease: false});
      _end_instr_16_allKeys = _end_instr_16_allKeys.concat(theseKeys);
      if (_end_instr_16_allKeys.length > 0) {
        end_instr_16.keys = _end_instr_16_allKeys[_end_instr_16_allKeys.length - 1].name;  // just the last key pressed
        end_instr_16.rt = _end_instr_16_allKeys[_end_instr_16_allKeys.length - 1].rt;
        end_instr_16.duration = _end_instr_16_allKeys[_end_instr_16_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fake_instructions_12Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fake_instructions_12RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fake_instructions_12' ---
    fake_instructions_12Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    end_instr_16.stop();
    // the Routine "fake_instructions_12" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_instr_19_allKeys;
var fake_instructions_13Components;
function fake_instructions_13RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fake_instructions_13' ---
    t = 0;
    fake_instructions_13Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_instr_19.keys = undefined;
    end_instr_19.rt = undefined;
    _end_instr_19_allKeys = [];
    // keep track of which components have finished
    fake_instructions_13Components = [];
    fake_instructions_13Components.push(instruction_text_17);
    fake_instructions_13Components.push(end_instr_19);
    
    fake_instructions_13Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fake_instructions_13RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fake_instructions_13' ---
    // get current time
    t = fake_instructions_13Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_text_17* updates
    if (t >= 0.0 && instruction_text_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text_17.tStart = t;  // (not accounting for frame time here)
      instruction_text_17.frameNStart = frameN;  // exact frame index
      
      instruction_text_17.setAutoDraw(true);
    }

    
    // *end_instr_19* updates
    if (t >= 0.5 && end_instr_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_instr_19.tStart = t;  // (not accounting for frame time here)
      end_instr_19.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_instr_19.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_instr_19.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_instr_19.clearEvents(); });
    }

    if (end_instr_19.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_instr_19.getKeys({keyList: ['space'], waitRelease: false});
      _end_instr_19_allKeys = _end_instr_19_allKeys.concat(theseKeys);
      if (_end_instr_19_allKeys.length > 0) {
        end_instr_19.keys = _end_instr_19_allKeys[_end_instr_19_allKeys.length - 1].name;  // just the last key pressed
        end_instr_19.rt = _end_instr_19_allKeys[_end_instr_19_allKeys.length - 1].rt;
        end_instr_19.duration = _end_instr_19_allKeys[_end_instr_19_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fake_instructions_13Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fake_instructions_13RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fake_instructions_13' ---
    fake_instructions_13Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    end_instr_19.stop();
    // the Routine "fake_instructions_13" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_instr_20_allKeys;
var fake_instructions_14Components;
function fake_instructions_14RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fake_instructions_14' ---
    t = 0;
    fake_instructions_14Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_instr_20.keys = undefined;
    end_instr_20.rt = undefined;
    _end_instr_20_allKeys = [];
    // keep track of which components have finished
    fake_instructions_14Components = [];
    fake_instructions_14Components.push(instruction_text_18);
    fake_instructions_14Components.push(end_instr_20);
    
    fake_instructions_14Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fake_instructions_14RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fake_instructions_14' ---
    // get current time
    t = fake_instructions_14Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_text_18* updates
    if (t >= 0.0 && instruction_text_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text_18.tStart = t;  // (not accounting for frame time here)
      instruction_text_18.frameNStart = frameN;  // exact frame index
      
      instruction_text_18.setAutoDraw(true);
    }

    
    // *end_instr_20* updates
    if (t >= 0.5 && end_instr_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_instr_20.tStart = t;  // (not accounting for frame time here)
      end_instr_20.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_instr_20.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_instr_20.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_instr_20.clearEvents(); });
    }

    if (end_instr_20.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_instr_20.getKeys({keyList: ['space'], waitRelease: false});
      _end_instr_20_allKeys = _end_instr_20_allKeys.concat(theseKeys);
      if (_end_instr_20_allKeys.length > 0) {
        end_instr_20.keys = _end_instr_20_allKeys[_end_instr_20_allKeys.length - 1].name;  // just the last key pressed
        end_instr_20.rt = _end_instr_20_allKeys[_end_instr_20_allKeys.length - 1].rt;
        end_instr_20.duration = _end_instr_20_allKeys[_end_instr_20_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fake_instructions_14Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fake_instructions_14RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fake_instructions_14' ---
    fake_instructions_14Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    end_instr_20.stop();
    // the Routine "fake_instructions_14" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_instr_7_allKeys;
var real_instructionsComponents;
function real_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'real_instructions' ---
    t = 0;
    real_instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_instr_7.keys = undefined;
    end_instr_7.rt = undefined;
    _end_instr_7_allKeys = [];
    // keep track of which components have finished
    real_instructionsComponents = [];
    real_instructionsComponents.push(instruction_text_5);
    real_instructionsComponents.push(end_instr_7);
    
    real_instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function real_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'real_instructions' ---
    // get current time
    t = real_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_text_5* updates
    if (t >= 0.0 && instruction_text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text_5.tStart = t;  // (not accounting for frame time here)
      instruction_text_5.frameNStart = frameN;  // exact frame index
      
      instruction_text_5.setAutoDraw(true);
    }

    
    // *end_instr_7* updates
    if (t >= 0.0 && end_instr_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_instr_7.tStart = t;  // (not accounting for frame time here)
      end_instr_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_instr_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_instr_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_instr_7.clearEvents(); });
    }

    if (end_instr_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_instr_7.getKeys({keyList: ['space'], waitRelease: false});
      _end_instr_7_allKeys = _end_instr_7_allKeys.concat(theseKeys);
      if (_end_instr_7_allKeys.length > 0) {
        end_instr_7.keys = _end_instr_7_allKeys[_end_instr_7_allKeys.length - 1].name;  // just the last key pressed
        end_instr_7.rt = _end_instr_7_allKeys[_end_instr_7_allKeys.length - 1].rt;
        end_instr_7.duration = _end_instr_7_allKeys[_end_instr_7_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    real_instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function real_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'real_instructions' ---
    real_instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    end_instr_7.stop();
    // the Routine "real_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_instr_4_allKeys;
var real_instructions_2Components;
function real_instructions_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'real_instructions_2' ---
    t = 0;
    real_instructions_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_instr_4.keys = undefined;
    end_instr_4.rt = undefined;
    _end_instr_4_allKeys = [];
    // keep track of which components have finished
    real_instructions_2Components = [];
    real_instructions_2Components.push(investors);
    real_instructions_2Components.push(instr_txt);
    real_instructions_2Components.push(end_instr_4);
    
    real_instructions_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function real_instructions_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'real_instructions_2' ---
    // get current time
    t = real_instructions_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *investors* updates
    if (t >= 0.0 && investors.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      investors.tStart = t;  // (not accounting for frame time here)
      investors.frameNStart = frameN;  // exact frame index
      
      investors.setAutoDraw(true);
    }

    
    // *instr_txt* updates
    if (t >= 0.0 && instr_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_txt.tStart = t;  // (not accounting for frame time here)
      instr_txt.frameNStart = frameN;  // exact frame index
      
      instr_txt.setAutoDraw(true);
    }

    
    // *end_instr_4* updates
    if (t >= 1 && end_instr_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_instr_4.tStart = t;  // (not accounting for frame time here)
      end_instr_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_instr_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_instr_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_instr_4.clearEvents(); });
    }

    if (end_instr_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_instr_4.getKeys({keyList: ['space'], waitRelease: false});
      _end_instr_4_allKeys = _end_instr_4_allKeys.concat(theseKeys);
      if (_end_instr_4_allKeys.length > 0) {
        end_instr_4.keys = _end_instr_4_allKeys[_end_instr_4_allKeys.length - 1].name;  // just the last key pressed
        end_instr_4.rt = _end_instr_4_allKeys[_end_instr_4_allKeys.length - 1].rt;
        end_instr_4.duration = _end_instr_4_allKeys[_end_instr_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    real_instructions_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function real_instructions_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'real_instructions_2' ---
    real_instructions_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    end_instr_4.stop();
    // the Routine "real_instructions_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_instr_21_allKeys;
var real_instructions_2_5Components;
function real_instructions_2_5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'real_instructions_2_5' ---
    t = 0;
    real_instructions_2_5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_instr_21.keys = undefined;
    end_instr_21.rt = undefined;
    _end_instr_21_allKeys = [];
    // keep track of which components have finished
    real_instructions_2_5Components = [];
    real_instructions_2_5Components.push(investors_2_sample);
    real_instructions_2_5Components.push(instr_txt_3);
    real_instructions_2_5Components.push(end_instr_21);
    
    real_instructions_2_5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function real_instructions_2_5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'real_instructions_2_5' ---
    // get current time
    t = real_instructions_2_5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *investors_2_sample* updates
    if (t >= 0.0 && investors_2_sample.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      investors_2_sample.tStart = t;  // (not accounting for frame time here)
      investors_2_sample.frameNStart = frameN;  // exact frame index
      
      investors_2_sample.setAutoDraw(true);
    }

    
    // *instr_txt_3* updates
    if (t >= 0.0 && instr_txt_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_txt_3.tStart = t;  // (not accounting for frame time here)
      instr_txt_3.frameNStart = frameN;  // exact frame index
      
      instr_txt_3.setAutoDraw(true);
    }

    
    // *end_instr_21* updates
    if (t >= 1 && end_instr_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_instr_21.tStart = t;  // (not accounting for frame time here)
      end_instr_21.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_instr_21.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_instr_21.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_instr_21.clearEvents(); });
    }

    if (end_instr_21.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_instr_21.getKeys({keyList: ['space'], waitRelease: false});
      _end_instr_21_allKeys = _end_instr_21_allKeys.concat(theseKeys);
      if (_end_instr_21_allKeys.length > 0) {
        end_instr_21.keys = _end_instr_21_allKeys[_end_instr_21_allKeys.length - 1].name;  // just the last key pressed
        end_instr_21.rt = _end_instr_21_allKeys[_end_instr_21_allKeys.length - 1].rt;
        end_instr_21.duration = _end_instr_21_allKeys[_end_instr_21_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    real_instructions_2_5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function real_instructions_2_5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'real_instructions_2_5' ---
    real_instructions_2_5Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    end_instr_21.stop();
    // the Routine "real_instructions_2_5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_instr_5_allKeys;
var real_instructions_3Components;
function real_instructions_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'real_instructions_3' ---
    t = 0;
    real_instructions_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_instr_5.keys = undefined;
    end_instr_5.rt = undefined;
    _end_instr_5_allKeys = [];
    // keep track of which components have finished
    real_instructions_3Components = [];
    real_instructions_3Components.push(reward_demo);
    real_instructions_3Components.push(instr_txt_2);
    real_instructions_3Components.push(end_instr_5);
    
    real_instructions_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function real_instructions_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'real_instructions_3' ---
    // get current time
    t = real_instructions_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *reward_demo* updates
    if (t >= 0.0 && reward_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reward_demo.tStart = t;  // (not accounting for frame time here)
      reward_demo.frameNStart = frameN;  // exact frame index
      
      reward_demo.setAutoDraw(true);
    }

    
    // *instr_txt_2* updates
    if (t >= 0.0 && instr_txt_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_txt_2.tStart = t;  // (not accounting for frame time here)
      instr_txt_2.frameNStart = frameN;  // exact frame index
      
      instr_txt_2.setAutoDraw(true);
    }

    
    // *end_instr_5* updates
    if (t >= 1 && end_instr_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_instr_5.tStart = t;  // (not accounting for frame time here)
      end_instr_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_instr_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_instr_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_instr_5.clearEvents(); });
    }

    if (end_instr_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_instr_5.getKeys({keyList: ['space'], waitRelease: false});
      _end_instr_5_allKeys = _end_instr_5_allKeys.concat(theseKeys);
      if (_end_instr_5_allKeys.length > 0) {
        end_instr_5.keys = _end_instr_5_allKeys[_end_instr_5_allKeys.length - 1].name;  // just the last key pressed
        end_instr_5.rt = _end_instr_5_allKeys[_end_instr_5_allKeys.length - 1].rt;
        end_instr_5.duration = _end_instr_5_allKeys[_end_instr_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    real_instructions_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function real_instructions_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'real_instructions_3' ---
    real_instructions_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    end_instr_5.stop();
    // the Routine "real_instructions_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _training_choice_allKeys;
var trainingComponents;
function trainingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'training' ---
    t = 0;
    trainingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    training_stims.setImage('stimuli/example_pairing.png');
    training_choice.keys = undefined;
    training_choice.rt = undefined;
    _training_choice_allKeys = [];
    // keep track of which components have finished
    trainingComponents = [];
    trainingComponents.push(training_stims);
    trainingComponents.push(training_choice);
    trainingComponents.push(training_instr);
    trainingComponents.push(one_txt);
    trainingComponents.push(two_txt);
    
    trainingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trainingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'training' ---
    // get current time
    t = trainingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *training_stims* updates
    if (t >= 0.0 && training_stims.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_stims.tStart = t;  // (not accounting for frame time here)
      training_stims.frameNStart = frameN;  // exact frame index
      
      training_stims.setAutoDraw(true);
    }

    
    // *training_choice* updates
    if (t >= 0.0 && training_choice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_choice.tStart = t;  // (not accounting for frame time here)
      training_choice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { training_choice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { training_choice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { training_choice.clearEvents(); });
    }

    if (training_choice.status === PsychoJS.Status.STARTED) {
      let theseKeys = training_choice.getKeys({keyList: ['1', '2'], waitRelease: false});
      _training_choice_allKeys = _training_choice_allKeys.concat(theseKeys);
      if (_training_choice_allKeys.length > 0) {
        training_choice.keys = _training_choice_allKeys[_training_choice_allKeys.length - 1].name;  // just the last key pressed
        training_choice.rt = _training_choice_allKeys[_training_choice_allKeys.length - 1].rt;
        training_choice.duration = _training_choice_allKeys[_training_choice_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *training_instr* updates
    if (t >= 0.0 && training_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_instr.tStart = t;  // (not accounting for frame time here)
      training_instr.frameNStart = frameN;  // exact frame index
      
      training_instr.setAutoDraw(true);
    }

    
    // *one_txt* updates
    if (t >= 0.0 && one_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      one_txt.tStart = t;  // (not accounting for frame time here)
      one_txt.frameNStart = frameN;  // exact frame index
      
      one_txt.setAutoDraw(true);
    }

    
    // *two_txt* updates
    if (t >= 0.0 && two_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      two_txt.tStart = t;  // (not accounting for frame time here)
      two_txt.frameNStart = frameN;  // exact frame index
      
      two_txt.setAutoDraw(true);
    }

    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trainingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trainingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'training' ---
    trainingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(training_choice.corr, level);
    }
    psychoJS.experiment.addData('training_choice.keys', training_choice.keys);
    if (typeof training_choice.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('training_choice.rt', training_choice.rt);
        psychoJS.experiment.addData('training_choice.duration', training_choice.duration);
        routineTimer.reset();
        }
    
    training_choice.stop();
    // the Routine "training" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _next_key_2_allKeys;
var training_reward_displayComponents;
function training_reward_displayRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'training_reward_display' ---
    t = 0;
    training_reward_displayClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    next_key_2.keys = undefined;
    next_key_2.rt = undefined;
    _next_key_2_allKeys = [];
    // keep track of which components have finished
    training_reward_displayComponents = [];
    training_reward_displayComponents.push(training_reward_display_text);
    training_reward_displayComponents.push(fake_training_reward);
    training_reward_displayComponents.push(next_key_2);
    
    training_reward_displayComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function training_reward_displayRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'training_reward_display' ---
    // get current time
    t = training_reward_displayClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *training_reward_display_text* updates
    if (t >= 0.0 && training_reward_display_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_reward_display_text.tStart = t;  // (not accounting for frame time here)
      training_reward_display_text.frameNStart = frameN;  // exact frame index
      
      training_reward_display_text.setAutoDraw(true);
    }

    
    // *fake_training_reward* updates
    if (t >= 0.0 && fake_training_reward.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fake_training_reward.tStart = t;  // (not accounting for frame time here)
      fake_training_reward.frameNStart = frameN;  // exact frame index
      
      fake_training_reward.setAutoDraw(true);
    }

    
    // *next_key_2* updates
    if (t >= 0.0 && next_key_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_key_2.tStart = t;  // (not accounting for frame time here)
      next_key_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { next_key_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { next_key_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { next_key_2.clearEvents(); });
    }

    if (next_key_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = next_key_2.getKeys({keyList: ['space'], waitRelease: false});
      _next_key_2_allKeys = _next_key_2_allKeys.concat(theseKeys);
      if (_next_key_2_allKeys.length > 0) {
        next_key_2.keys = _next_key_2_allKeys[_next_key_2_allKeys.length - 1].name;  // just the last key pressed
        next_key_2.rt = _next_key_2_allKeys[_next_key_2_allKeys.length - 1].rt;
        next_key_2.duration = _next_key_2_allKeys[_next_key_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    training_reward_displayComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function training_reward_displayRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'training_reward_display' ---
    training_reward_displayComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(next_key_2.corr, level);
    }
    psychoJS.experiment.addData('next_key_2.keys', next_key_2.keys);
    if (typeof next_key_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('next_key_2.rt', next_key_2.rt);
        psychoJS.experiment.addData('next_key_2.duration', next_key_2.duration);
        routineTimer.reset();
        }
    
    next_key_2.stop();
    // the Routine "training_reward_display" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _next_key_allKeys;
var att_check_primerComponents;
function att_check_primerRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'att_check_primer' ---
    t = 0;
    att_check_primerClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    next_key.keys = undefined;
    next_key.rt = undefined;
    _next_key_allKeys = [];
    // keep track of which components have finished
    att_check_primerComponents = [];
    att_check_primerComponents.push(training_reward_display_text_2);
    att_check_primerComponents.push(next_key);
    
    att_check_primerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function att_check_primerRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'att_check_primer' ---
    // get current time
    t = att_check_primerClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *training_reward_display_text_2* updates
    if (t >= 0.0 && training_reward_display_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      training_reward_display_text_2.tStart = t;  // (not accounting for frame time here)
      training_reward_display_text_2.frameNStart = frameN;  // exact frame index
      
      training_reward_display_text_2.setAutoDraw(true);
    }

    
    // *next_key* updates
    if (t >= 0.0 && next_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      next_key.tStart = t;  // (not accounting for frame time here)
      next_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { next_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { next_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { next_key.clearEvents(); });
    }

    if (next_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = next_key.getKeys({keyList: ['space'], waitRelease: false});
      _next_key_allKeys = _next_key_allKeys.concat(theseKeys);
      if (_next_key_allKeys.length > 0) {
        next_key.keys = _next_key_allKeys[_next_key_allKeys.length - 1].name;  // just the last key pressed
        next_key.rt = _next_key_allKeys[_next_key_allKeys.length - 1].rt;
        next_key.duration = _next_key_allKeys[_next_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    att_check_primerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function att_check_primerRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'att_check_primer' ---
    att_check_primerComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(next_key.corr, level);
    }
    psychoJS.experiment.addData('next_key.keys', next_key.keys);
    if (typeof next_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('next_key.rt', next_key.rt);
        psychoJS.experiment.addData('next_key.duration', next_key.duration);
        routineTimer.reset();
        }
    
    next_key.stop();
    // the Routine "att_check_primer" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _att1_resp_allKeys;
var att_check_1Components;
function att_check_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'att_check_1' ---
    t = 0;
    att_check_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    att1_resp.keys = undefined;
    att1_resp.rt = undefined;
    _att1_resp_allKeys = [];
    // keep track of which components have finished
    att_check_1Components = [];
    att_check_1Components.push(q1);
    att_check_1Components.push(resps);
    att_check_1Components.push(text);
    att_check_1Components.push(att1_resp);
    
    att_check_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function att_check_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'att_check_1' ---
    // get current time
    t = att_check_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *q1* updates
    if (t >= 0.0 && q1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q1.tStart = t;  // (not accounting for frame time here)
      q1.frameNStart = frameN;  // exact frame index
      
      q1.setAutoDraw(true);
    }

    
    // *resps* updates
    if (t >= 0.0 && resps.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resps.tStart = t;  // (not accounting for frame time here)
      resps.frameNStart = frameN;  // exact frame index
      
      resps.setAutoDraw(true);
    }

    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *att1_resp* updates
    if (t >= 0.0 && att1_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      att1_resp.tStart = t;  // (not accounting for frame time here)
      att1_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { att1_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { att1_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { att1_resp.clearEvents(); });
    }

    if (att1_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = att1_resp.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _att1_resp_allKeys = _att1_resp_allKeys.concat(theseKeys);
      if (_att1_resp_allKeys.length > 0) {
        att1_resp.keys = _att1_resp_allKeys[_att1_resp_allKeys.length - 1].name;  // just the last key pressed
        att1_resp.rt = _att1_resp_allKeys[_att1_resp_allKeys.length - 1].rt;
        att1_resp.duration = _att1_resp_allKeys[_att1_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    att_check_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function att_check_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'att_check_1' ---
    att_check_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(att1_resp.corr, level);
    }
    psychoJS.experiment.addData('att1_resp.keys', att1_resp.keys);
    if (typeof att1_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('att1_resp.rt', att1_resp.rt);
        psychoJS.experiment.addData('att1_resp.duration', att1_resp.duration);
        routineTimer.reset();
        }
    
    att1_resp.stop();
    // the Routine "att_check_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var wrong_resp;
var correct_resp;
var feedback_txt;
var att1_resp_key;
var _continue_feed_allKeys;
var att_1_feedbackComponents;
function att_1_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'att_1_feedback' ---
    t = 0;
    att_1_feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from att1_code
    wrong_resp = "Wrong! Your task in this experiment is to gather as many points as possible.";
    correct_resp = "Correct!";
    feedback_txt = null;
    att1_resp_key = att1_resp.keys;
    if ((att1_resp_key !== "2")) {
        feedback_txt = wrong_resp;
    } else {
        feedback_txt = correct_resp;
    }
    
    text_2.setText(feedback_txt);
    continue_feed.keys = undefined;
    continue_feed.rt = undefined;
    _continue_feed_allKeys = [];
    // keep track of which components have finished
    att_1_feedbackComponents = [];
    att_1_feedbackComponents.push(text_2);
    att_1_feedbackComponents.push(continue_feed);
    
    att_1_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function att_1_feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'att_1_feedback' ---
    // get current time
    t = att_1_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *continue_feed* updates
    if (t >= 0.5 && continue_feed.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_feed.tStart = t;  // (not accounting for frame time here)
      continue_feed.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { continue_feed.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { continue_feed.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { continue_feed.clearEvents(); });
    }

    if (continue_feed.status === PsychoJS.Status.STARTED) {
      let theseKeys = continue_feed.getKeys({keyList: ['space'], waitRelease: false});
      _continue_feed_allKeys = _continue_feed_allKeys.concat(theseKeys);
      if (_continue_feed_allKeys.length > 0) {
        continue_feed.keys = _continue_feed_allKeys[_continue_feed_allKeys.length - 1].name;  // just the last key pressed
        continue_feed.rt = _continue_feed_allKeys[_continue_feed_allKeys.length - 1].rt;
        continue_feed.duration = _continue_feed_allKeys[_continue_feed_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    att_1_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function att_1_feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'att_1_feedback' ---
    att_1_feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from att1_code
    psychoJS.experiment.addData("att_response", att1_resp_key);
    
    continue_feed.stop();
    // the Routine "att_1_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_instr_22_allKeys;
var exp_start_primerComponents;
function exp_start_primerRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp_start_primer' ---
    t = 0;
    exp_start_primerClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_instr_22.keys = undefined;
    end_instr_22.rt = undefined;
    _end_instr_22_allKeys = [];
    // keep track of which components have finished
    exp_start_primerComponents = [];
    exp_start_primerComponents.push(instruction_text_19);
    exp_start_primerComponents.push(end_instr_22);
    
    exp_start_primerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function exp_start_primerRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp_start_primer' ---
    // get current time
    t = exp_start_primerClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_text_19* updates
    if (t >= 0.0 && instruction_text_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text_19.tStart = t;  // (not accounting for frame time here)
      instruction_text_19.frameNStart = frameN;  // exact frame index
      
      instruction_text_19.setAutoDraw(true);
    }

    
    // *end_instr_22* updates
    if (t >= 0.0 && end_instr_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_instr_22.tStart = t;  // (not accounting for frame time here)
      end_instr_22.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_instr_22.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_instr_22.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_instr_22.clearEvents(); });
    }

    if (end_instr_22.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_instr_22.getKeys({keyList: ['space'], waitRelease: false});
      _end_instr_22_allKeys = _end_instr_22_allKeys.concat(theseKeys);
      if (_end_instr_22_allKeys.length > 0) {
        end_instr_22.keys = _end_instr_22_allKeys[_end_instr_22_allKeys.length - 1].name;  // just the last key pressed
        end_instr_22.rt = _end_instr_22_allKeys[_end_instr_22_allKeys.length - 1].rt;
        end_instr_22.duration = _end_instr_22_allKeys[_end_instr_22_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    exp_start_primerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp_start_primerRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp_start_primer' ---
    exp_start_primerComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    end_instr_22.stop();
    // the Routine "exp_start_primer" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'tables/data.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(choiceRoutineBegin(snapshot));
      trialsLoopScheduler.add(choiceRoutineEachFrame());
      trialsLoopScheduler.add(choiceRoutineEnd(snapshot));
      trialsLoopScheduler.add(reward_displayRoutineBegin(snapshot));
      trialsLoopScheduler.add(reward_displayRoutineEachFrame());
      trialsLoopScheduler.add(reward_displayRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var pathConditionMapper;
var image_path;
var _choices_allKeys;
var choiceComponents;
function choiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'choice' ---
    t = 0;
    choiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from trial_code
    pathConditionMapper = {
        "1:1+2:1": `stimuli/${condition}/both_tech.png`,
        "1:2+2:2": (
            trial > 28 ? `stimuli/${condition}/both_trad_3.png` :
            trial > 14 ? `stimuli/${condition}/both_trad_2.png` :
            `stimuli/${condition}/both_trad.png`
        ),
        "1:1+2:2": condition.indexOf("side_flip") === -1 ? `stimuli/${condition}/a1_tech_a2_trad.png` : `stimuli/${condition}/a1_trad_a2_tech.png`,
        "1:2+2:1": condition.indexOf("side_flip") === -1 ? `stimuli/${condition}/a1_trad_a2_tech.png` : `stimuli/${condition}/a1_tech_a2_trad.png`,
    };
    
    image_path = pathConditionMapper[pairing];
    
    stimuli_img.setImage(image_path);
    choices.keys = undefined;
    choices.rt = undefined;
    _choices_allKeys = [];
    // keep track of which components have finished
    choiceComponents = [];
    choiceComponents.push(stimuli_img);
    choiceComponents.push(choices);
    
    choiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function choiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'choice' ---
    // get current time
    t = choiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stimuli_img* updates
    if (t >= 0.0 && stimuli_img.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimuli_img.tStart = t;  // (not accounting for frame time here)
      stimuli_img.frameNStart = frameN;  // exact frame index
      
      stimuli_img.setAutoDraw(true);
    }

    
    // *choices* updates
    if (t >= 0.0 && choices.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choices.tStart = t;  // (not accounting for frame time here)
      choices.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { choices.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { choices.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { choices.clearEvents(); });
    }

    if (choices.status === PsychoJS.Status.STARTED) {
      let theseKeys = choices.getKeys({keyList: ['1', '2'], waitRelease: false});
      _choices_allKeys = _choices_allKeys.concat(theseKeys);
      if (_choices_allKeys.length > 0) {
        choices.keys = _choices_allKeys[_choices_allKeys.length - 1].name;  // just the last key pressed
        choices.rt = _choices_allKeys[_choices_allKeys.length - 1].rt;
        choices.duration = _choices_allKeys[_choices_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    choiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function choiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'choice' ---
    choiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(choices.corr, level);
    }
    psychoJS.experiment.addData('choices.keys', choices.keys);
    if (typeof choices.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('choices.rt', choices.rt);
        psychoJS.experiment.addData('choices.duration', choices.duration);
        routineTimer.reset();
        }
    
    choices.stop();
    // the Routine "choice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var chosen_pair;
var obtained_reward;
var sign;
var reward_color;
var displayed_reward;
var reward_displayComponents;
function reward_displayRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'reward_display' ---
    t = 0;
    reward_displayClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from reward_code
    chosen_pair = choices.keys;
    if ((chosen_pair === "1")) {
        obtained_reward = a1_reward;
    }
    if ((chosen_pair === "2")) {
        obtained_reward = a2_reward;
    }
    obtained_reward = Number.parseFloat(obtained_reward);
    if ((obtained_reward >= 0)) {
        sign = "+";
        reward_color = [(- 1.0), 0.0039, (- 1.0)];
    }
    if ((obtained_reward < 0)) {
        sign = "";
        reward_color = [1, (- 1), (- 1)];
    }
    displayed_reward = ((sign + obtained_reward.toString()) + "$");
    
    reward_display_text.setColor(new util.Color(reward_color));
    reward_display_text.setText(displayed_reward);
    // keep track of which components have finished
    reward_displayComponents = [];
    reward_displayComponents.push(reward_display_text);
    
    reward_displayComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function reward_displayRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'reward_display' ---
    // get current time
    t = reward_displayClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *reward_display_text* updates
    if (t >= 0.0 && reward_display_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reward_display_text.tStart = t;  // (not accounting for frame time here)
      reward_display_text.frameNStart = frameN;  // exact frame index
      
      reward_display_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (reward_display_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      reward_display_text.setAutoDraw(false);
    }
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    reward_displayComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function reward_displayRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'reward_display' ---
    reward_displayComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // Run 'End Routine' code from reward_code
    psychoJS.experiment.addData("choices", choices.keys);
    psychoJS.experiment.addData("rewards", obtained_reward);
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_key_allKeys;
var end_screenComponents;
function end_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end_screen' ---
    t = 0;
    end_screenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end_key.keys = undefined;
    end_key.rt = undefined;
    _end_key_allKeys = [];
    // keep track of which components have finished
    end_screenComponents = [];
    end_screenComponents.push(end_text);
    end_screenComponents.push(end_key);
    
    end_screenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function end_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_screen' ---
    // get current time
    t = end_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *end_text* updates
    if (t >= 0.0 && end_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_text.tStart = t;  // (not accounting for frame time here)
      end_text.frameNStart = frameN;  // exact frame index
      
      end_text.setAutoDraw(true);
    }

    
    // *end_key* updates
    if (t >= 0.0 && end_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_key.tStart = t;  // (not accounting for frame time here)
      end_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end_key.clearEvents(); });
    }

    if (end_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = end_key.getKeys({keyList: ['space'], waitRelease: false});
      _end_key_allKeys = _end_key_allKeys.concat(theseKeys);
      if (_end_key_allKeys.length > 0) {
        end_key.keys = _end_key_allKeys[_end_key_allKeys.length - 1].name;  // just the last key pressed
        end_key.rt = _end_key_allKeys[_end_key_allKeys.length - 1].rt;
        end_key.duration = _end_key_allKeys[_end_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    end_screenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_screen' ---
    end_screenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    end_key.stop();
    // the Routine "end_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
