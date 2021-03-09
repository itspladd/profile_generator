const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const askQuestion = (survey, questionNum) => {
  if (questionNum === Object.keys(survey).length) {
    console.log(survey);
    rl.close();
    return true;
  } else {
    rl.question(survey[questionNum].q + " ", (answer) => {
      survey[questionNum]["a"] = answer;
      askQuestion(survey, questionNum + 1);
    });
  }
};

const survey = [
  { q: `What's your name? Nicknames fine too!` },
  { q: `What are your pronouns?` },
  { q: `What's an activity you like doing?` },
  { q: `What do you listen to while doing that?` },
  { q: `Which meal is your favourite (eg: dinner, brunch, etc.)?` },
  { q: `What's your favourite thing to eat for that meal?` },
  { q: `Which sport is your absolute favourite?` },
  { q: `What is your superpower? In a few words, tell us what you are amazing at!` },
];

askQuestion(survey, 0);