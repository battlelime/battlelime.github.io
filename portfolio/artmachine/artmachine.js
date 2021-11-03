var img;
var initials ='jt'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
  img = loadImage('grass.png');  // cat.jpg needs to be next to this .js file
  img2 = loadImage('tree.png'); 
// you can link to an image on your github account
//  img = loadImage('https://dma-git.github.io/images/74.png');
}

function setup() {
createCanvas(600, 400);  // canvas size
background(screenbg);   // use our background screen color
}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool; green pens for grass!
    fill(59, 217, 59); 
    noStroke(); 
    ellipse(mouseX, mouseY, 50, 50);
    
  } else if (toolChoice == '2') { // second tool; blue pens for water & sky!
    fill(48, 183, 255); 
    noStroke(); 
    ellipse(mouseX, mouseY, 50, 50);
    
  } else if (toolChoice == '3') { // third tool; yellow colors for sunlight!
    fill(247, 210, 0); 
    noStroke(); 
    ellipse(mouseX, mouseY, 50, 50);
    
  } else if (toolChoice == '4') { // fourth tool; white pen for light!
    fill(255, 248, 235); 
    noStroke(); 
    ellipse(mouseX, mouseY, 25, 25);
    
  } else if (key == '5') { // fifth tool; nighttime colors!
    fill(10, 43, 94); 
    noStroke(); 
    ellipse(mouseX, mouseY, 50, 50);
    
  } else if (toolChoice == '6') { // sixth tool; orange colors for sunlight!
    fill(235, 114, 49); 
    noStroke(); 
    ellipse(mouseX, mouseY, 50, 50);
    
  } else if (toolChoice == '7') { // seventh tool; tree
    image(img2, mouseX - 100, mouseY - 100, 200, 200);
    
  } else if (toolChoice == '8') { // eigth tool;
    fill(300, 100, 0, 80);
    rect(mouseX, mouseY, 20, 20);
    
  } else if (toolChoice == '9') { // ninth tool; 
    fill(300, 100, 0, 80);
    rect(mouseX, mouseY, 40, 40);
    
  } else if (toolChoice == '0') { // tenth tool; 
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 200, 150);
    
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX - 50, mouseY - 25, 100, 50); 
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);
}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == '=') {
    background(screenbg); // set the screen back to the background color
    key = 1; // set the toolChoice back to its default value
    
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'png');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second 
}
