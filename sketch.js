var canva;

var participantCount, gameState;
var database, quiz, question;
var participant;

function setup(){
  canvas = createCanvas(850,400);
  database=firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  
}
