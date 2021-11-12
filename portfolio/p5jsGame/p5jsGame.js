// Location of global variables
var ballx = 300;
var bally = 300; 
var ballSize = 100; 
var score = 0; 
var misses = 0; 
var time = 30; 
var accuracy = 0; 
var evil = 5; 
var gameState = "MENU"; 


function setup() {
  createCanvas(750, 750);
  textAlign(CENTER); 
  textSize(30); 
} // End of setup


function draw() { 
  // Changing of game states 
  if(gameState == "MENU")
  {
    menu();
  }
  if(gameState == "AIM")
  {
    aimTrain();
  }
  if(gameState == "STATS")
  {
    stats(); 
  }
  if(gameState == "L1")
  {
    levelOne(); 
  }
  if(gameState == "TRASH")
  {
    trash(); 
  }
  if(gameState == "L2")
  {
    levelTwo();
  }
  if(gameState == "L3")
  {
    levelThree(); 
  }
  if(gameState == "WIN")
  {
    win(); 
  }
  
  //text("Score: " + score, width/2, 30); // Always display the score
} // End of draw


// Creation of the game menu
function menu() {
  // GUI for game options 
  fill(255, 0, 0); // 1st game option
  rect(0, 0, 375, 750);
  fill(0); 
  text("Aim Training", 187, 375); 
  
  fill(0, 0, 255); // 2nd game option
  rect(375, 0, 375, 750);
  fill(0); 
  text("Survival Mode", 561, 375);
  
  // GUI interactions
  if(mouseX < 376)
  {
    if(mouseIsPressed)
    {
      gameState = "AIM"; 
    }
  }
  if(mouseX > 375)
  {
    if( mouseIsPressed)
    {
      time = 10; 
      gameState = "L1"; 
    }
  }
}


// Creation of the aim traing game state
function aimTrain() { 
  background(225);  
  fill(0);
  text("Aim Training", width/2, height-20); 
  text("Score: " + score, width/2, 40); // Always display the score
  
  // Timer code
  if (frameCount % 60 == 0 && time > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    time = time - 1;
  }
  text(time, width/2, 80); 
  
  noStroke(0); 
  fill(255, 0, 0); 
    
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall < ballSize/2) // Measuring if the mouse is inside the ball
  {
    if(mouseIsPressed)
    {
      // Change the location of the ball
      ballSize = 100; 
      ballx = random(width);
      bally = random(height); 
      score = score + 1; 
      misses = misses + 0.2; 
    }
  }
  else 
  {
    if(mouseIsPressed) // If user pressed outside the ball
    {
      misses = misses + 0.2;  
    }
  }
  
  ellipse(ballx, bally, ballSize, ballSize); // The ball
  ballSize = ballSize - 1; 
  // End game conditions
  if(ballSize == 0)
  {
    gameState = "STATS"; 
  }
  if(time == 0)
  {
    gameState = "STATS"; 
  }
  
  //stroke(0);   
  //line(ballx, bally, mouseX, mouseY);
} // End of the aim training game state


function stats() {
  background(225);
  fill(0); 
  rect(0, 375, 750, 750); 
  text("Score: " + score, width/2, 150);
  accuracy = (score/misses) * 100;
  if(accuracy > 100)
  {
    accuracy = 100;
  }
  text("Accuracy: " + round(accuracy) + "%", width/2, 200); 
  
  fill(255); 
  text("Refresh the page!", width/2, 561);
}


// Creation of level 1 of survival mode
function levelOne() {
  background(225);  
  fill(0);
  text("Wave 1", 60, 40); 
  text("OBJECTIVE: SURVIVE", width/2, 40);  
  
  // Timer code
  if (frameCount % 60 == 0 && time > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    time = time - 1;
  }
  text("Escape In: " + time, width/2, 80);
  text("Remaining: " + evil, width/2, 120);
  
  noCursor(); 
  fill(255, 0, 0); 
  noStroke(0); 
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall < ballSize/2) // Measuring if the mouse is inside the ball
  {
    if(mouseIsPressed)
    {
      // Change the location of the ball
      ballSize = 100; 
      ballx = random(width);
      bally = random(height);   
      evil = evil  - 1; 
    }
  }
  ellipse(ballx, bally, ballSize, ballSize);
  
  if(time == 0)
  {
    gameState = "TRASH";
  }
  if(evil == 0)
  {
    gameState = "L2";
    evil = 15;
    time = 10; 
  }
  
  // Crosshair code
  stroke(0);
  line(mouseX - 40, mouseY, mouseX - 10, mouseY); // Left   
  line(mouseX, mouseY - 10, mouseX, mouseY - 40); // Up
  line(mouseX + 10, mouseY, mouseX + 40, mouseY); // Right  
  line(mouseX, mouseY + 10, mouseX, mouseY + 40); // Down
  noStroke(0); 
} // End of level 1

function trash() {
  background(225);
  cursor(); 
  fill(0); 
  rect(0, 375, 750, 750); 
  text("You died.", width/2, 200); 
  
  fill(255); 
  text("Refresh the page!", width/2, 561); 
}

function levelTwo() {
  background(225);  
  fill(0);
  text("Wave 2", 60, 40);
  text("OBJECTIVE: SURVIVE", width/2, 40); 
  
  // Timer code
  if (frameCount % 60 == 0 && time > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    time = time - 1;
  }
  text("Escape In: " + time, width/2, 80);
  text("Remaining: " + evil, width/2, 120);
  
  noCursor(); 
  fill(255, 0, 0); 
  noStroke(0); 
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall < ballSize/2) // Measuring if the mouse is inside the ball
  {
    if(mouseIsPressed)
    {
      // Change the location of the ball
      ballSize = 100; 
      ballx = random(width);
      bally = random(height);   
      evil = evil  - 1; 
    }
  }
  ellipse(ballx, bally, ballSize, ballSize);
  
  if(time == 0)
  {
    gameState = "TRASH";
  }
  if(evil == 0)
  {
    gameState = "L3";
    evil = 15;
    time = 5; 
  }
  
  // Crosshair code
  stroke(0);
  line(mouseX - 40, mouseY, mouseX - 10, mouseY); // Left   
  line(mouseX, mouseY - 10, mouseX, mouseY - 40); // Up
  line(mouseX + 10, mouseY, mouseX + 40, mouseY); // Right  
  line(mouseX, mouseY + 10, mouseX, mouseY + 40); // Down
  noStroke(0);
}

function levelThree() {
  background(225);  
  fill(0);
  text("Wave 3", 60, 40);
  text("OBJECTIVE: SURVIVE", width/2, 40); 
  
  // Timer code
  if (frameCount % 60 == 0 && time > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    time = time - 1;
  }
  text("Escape In: " + time, width/2, 80);
  text("Remaining: " + evil, width/2, 120);
  
  noCursor(); 
  fill(255, 0, 0); 
  noStroke(0); 
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall < ballSize/2) // Measuring if the mouse is inside the ball
  {
    if(mouseIsPressed)
    {
      // Change the location of the ball
      ballSize = 100; 
      ballx = random(width);
      bally = random(height);   
      evil = evil  - 1; 
    }
  }
  ellipse(ballx, bally, ballSize, ballSize);
  
  if(time == 0)
  {
    gameState = "TRASH";
  }
  if(evil == 0)
  {
    gameState = "WIN";
  }
  
  // Crosshair code
  stroke(0);
  line(mouseX - 40, mouseY, mouseX - 10, mouseY); // Left   
  line(mouseX, mouseY - 10, mouseX, mouseY - 40); // Up
  line(mouseX + 10, mouseY, mouseX + 40, mouseY); // Right  
  line(mouseX, mouseY + 10, mouseX, mouseY + 40); // Down
  noStroke(0);
}

function win() {
  background(225);
  fill(0); 
  rect(0, 375, 750, 750); 
  text("You win you are actually cracked.", width/2, 150);
  fill(255); 
  text("Refresh the page! For more!", width/2, 561);
}
