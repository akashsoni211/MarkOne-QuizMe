var readlineSync = require('readline-sync')
var score = 0
var currentUser = ""

var highScore = [
  {
    name: "Akash",
    score: "3"
  },
  {
    name: "Akki",
    score: "4"
  }
]

questionOne = {
  question: "Where Do I live = ",
  answer: "Didwana"
}

questionTwo = {
  question: "Thing That is close to my heart = ",
  answer: "Computers"
}

questionThree = {
  question: "what was my first programming langauge= ",
  answer: "c"
}

questionFour = {
  question: " My birth date= ",
  answer: "5"
}

questionFive = {
  question: "My favorite color=  ",
  answer: "black"
}

var question = [questionOne, questionTwo, questionThree, questionFour, questionFive]

function welcome() {
  currentUser = readlineSync.question("Enter Your Name = ")
  console.log("Welcome " + currentUser + " \n Best Of Luck")
}

function play(question, rightanswer) {
  var useranswer = readlineSync.question(question)
  if (useranswer.toUpperCase == rightanswer.toUpperCase) {
    console.log("Right Answer")
    score += 1
  }
  else {
    console.log("Wrong Answer")
  }
  console.log("Current score = " + score)
  console.log(" ___________________ ")
}

function game() {
  for (var itr = 0; itr < question.length; itr++) {
    play(question[itr].question, question[itr].answer)
  }
}

function showScore() {
  console.log("yaah " + currentUser + " You got " + score + " Points\n")
  
  console.log("HighScores: \n")
  for (var itr = 0; itr < highScore.length; itr++) {  
    console.log("Name:" + highScore[itr].name + ": Score = " + highScore[itr].score +"\n")
  }
  console.log("If you got highest score then these than send me snapshot i will update")

}

welcome()
game()
showScore()
