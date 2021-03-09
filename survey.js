const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Who lives in a pineapple under the sea? ", (answer) => {
  console.log(`Wrong. ${answer} lives in my head, rent-free.`);

  rl.close();
});