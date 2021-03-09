const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Recursively asks the questions from the input survey.
const askQuestion = (survey, questionNum) => {
  // If we've finished all the questions, log the profile and exit.
  if (questionNum === Object.keys(survey).length) {
    console.log(`Thanks, here's your profile!`);
    console.log(`${survey[0].a} (${survey[1].a}) enjoys ${survey[2].a} while listening to ${survey[3].a}, loves to eat ${survey[5].a} for ${survey[4].a}, plays ${survey[6].a}, and has an uncanny knack for ${survey[7].a}.`);
    console.log(`Enjoy!`);
    rl.close();
    return true;
  } else {
    //Otherwise, ask the current question, with a callback function to store the question answer and ask the next question.
    rl.question(survey[questionNum].q + " ", (answer) => {
      survey[questionNum]["a"] = answer;
      askQuestion(survey, questionNum + 1);
    });
  }
};

// Once the survey is complete, every "a" key should have a value.
const survey = [
  { q: `What's your name? Nicknames fine too!`, a: null },
  { q: `What are your pronouns?`, a: null },
  { q: `What's an activity you like doing?`, a: null },
  { q: `What do you listen to while doing that?`, a: null },
  { q: `Which meal is your favourite (eg: dinner, brunch, etc.)?`, a: null },
  { q: `What's your favourite thing to eat for that meal?`, a: null },
  { q: `Which sport is your absolute favourite?`, a: null },
  { q: `What is your superpower? In a few words, tell us what you are amazing at!`, a: null },
];

//Kick everything off by asking the first question!
askQuestion(survey, 0);