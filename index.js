const readlineSync = require("readline-sync");
const chalk = require('chalk');

console.log(chalk.blue.bgWhite.bold("Welcome to the MAHABHARAT QUIZ!"));

console.log();
let score=0;
const userName = readlineSync.question(chalk.cyanBright("May i have your name? ")).trim();
console.log();
console.log(chalk.cyanBright("Hi",userName,"Let's get started!"));
console.log();
const hintString="(Enter hint to get a hint!) ";

const questionsList = [
  {
    question: "How was the epic Mahabharata written? ",
    options: {
      a: "Valmiki dictated the verses and Lord Ganesha wrote them down",
      b: "Sage Vyasa dictated the verses and Lord Ganesha wrote them down",
      c: "Ved Vyas Valmiki dictated the verses and Lord Krishna wrote them down"
    },
    answer: "b",
    hint:"the one who dictated is himself in the mahabharat! "
  },
  {
    question: "Which Pandava vowed to kill the evil Dushasana after he insulted Draupadi? ",
    options: {
      a: "Yudhishthira",
      b:"Arjuna",
      c:"Bhima"
    },
    answer: "c",
    hint:"he's considered to be the strongest among Pandava brothers "
  },
  {
    question: "Who was the youngest martyr in the War of Kurukshetra? ",
    options: {
      a: "Uttama – the son of King Virata",
      b:"Gatotkach – the son of Bheema",
      c:"Abhimanyu – the son of Arjuna"
    },
    answer: "c",
    hint:"he went into the chakravyuh all alone "
  },
  {
    question: "Which weapon did Lord Krishna use to kill Shishupala? ",
    options: {
      a: "Sudarshan Chakra",
      b: "Narayan Astra",
      c: "Pashupatastra",
    },
    answer: "a",
    hint:"the divine weapon of Lord Vishnu. The holy discus consists rotating dics"
  },
  {
    question: "Who is Kunti's oldest son? ",
    options: {
      a: "Yudhishthira",
      b:"Karna",
      c:"Arjuna"
    },
    answer: "b",
    hint:"He is the son of the sun god- Surya! "
  },
  
]

function quiz(question, options, answer, hint){

  console.log(chalk.cyanBright(question)+hintString);
  for (const option in options) {
  console.log(chalk.blueBright.bold(`${option}: ${options[option]}`));
}
  let userAnswer = readlineSync.question(chalk.cyanBright("Enter option ")).trim();
  if(userAnswer.toLowerCase()=="hint"){
    userAnswer = readlineSync.question(chalk.magenta(hint.toUpperCase()));
  }
  if(userAnswer.toLowerCase()==answer.toLowerCase().trim()){
    console.log(chalk.yellowBright("That's Correct"));
    score=score+1;
  }
  else{
    console.log(chalk.redBright("That's Wrong!"));
    console.log(chalk.yellow("Correct answer is ",options[answer].toLowerCase().trim()));
  }
  console.log(chalk.greenBright("Current Score: "),score);
  console.log("----------------------");
  console.log();
}


questionsList.map(questionElement => quiz(questionElement.question, questionElement.options,questionElement.answer, questionElement.hint));

const highScores = [
  {
    name:"Nikhil ",
    score:"5"
  },
  {
    name:"Sanya ",
    score:"4"
  }
];

console.log(chalk.green.bgWhite.underline.bold("YOU SCORED: "+score+" (Max-5)"));
console.log();
console.log(chalk.cyanBright("HIGH SCORES ARE :-"));
highScores.map(highScore => console.log(chalk.magentaBright(highScore.name.toUpperCase(), highScore.score)));
console.log(chalk.yellowBright("If you've scored more than current High Scores, contact me i'll update it "));

