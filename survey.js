const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const askQuestion = (survey, questionNum) => {
  rl.question(survey[questionNum].question + " ", (answer) => {
    survey[questionNum]["answer"] = answer;
    console.log(survey);
    rl.close();
  });
};

const survey = [
  { question: `What's your name? Nicknames fine too!` },
  { question: `What are your pronouns?` },
  { question: `What's an activity you like doing?` },
  { question: `What do you listen to while doing that?` },
  { question: `Which meal is your favourite (eg: dinner, brunch, etc.)?` },
  { question: `What's your favourite thing to eat for that meal?` },
  { question: `Which sport is your absolute favourite?` },
  { question: `What is your superpower? In a few words, tell us what you are amazing at!` },
];

askQuestion(survey, 0);