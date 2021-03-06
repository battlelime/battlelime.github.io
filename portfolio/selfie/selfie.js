var points = [];
var mult = 0.005;

function setup(){
  createCanvas(600, 600); 
  background(30);
  noiseDetail(0); 
  
  var density = 20;
  var space = width / density; 
  
  for (var x = 0; x < width; x+= space){
    for (var y = 0; y < height; y+= space){
      var p = createVector(x, y); 
      points.push(p); 
    }
  }
}

function draw(){
  noStroke();
  
  for (var i = 0; i < points.length; i++){
    var r = map(points[i].x, 0, width, 50, 255);
    var g = map(points[i].y, 0, height, 50, 255);
    var b = map(points[i].x, 0, width, 255, 50); 
    
    fill(r, g, b); 
    
    var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720);
    
    points[i].add(createVector(cos(angle), sin(angle)));
    
    ellipse(points[i].x, points[i].y, 1); 
  }
 
  // Neck
  noStroke();
  fill(191, 128, 64);
  triangle(230, 370, 300, 600, 360, 370);
  triangle(230, 370, 199, 470, 270, 500);
  triangle(360, 370, 401, 470, 260, 520);
  
  // Outfit
  fill(0);
  rect(199, 420, 200, 300); 
  triangle(100, 500, 199, 600, 199, 460);
  triangle(500, 500, 399, 600, 399, 460);
  triangle(100, 500, 50, 600, 300, 600);
  triangle(500, 500, 399, 600, 550, 600);
  
  // Hair behind head
  fill(0);
  triangle(300, 120, 140, 375, 250, 420);
  triangle(300, 120, 440, 375, 350, 420);
  
  // Upper head
  noStroke();
  fill(198, 140, 83);
  ellipse(300, 226, 200, 200);
  
  // Lower head
  fill(198, 140, 83);
  beginShape();
  vertex(199, 225);
  vertex(230, 370);
  vertex(300, 420);
  vertex(360, 370);
  vertex(401, 225); 
  endShape();
  
  // Mouth
  fill(0);
  triangle(300, 365, 275, 380, 320, 380);
  
  // Hair infront of head
  fill(0);
  triangle(300, 110, 150, 300, 175, 390);
  triangle(300, 120, 450, 300, 400, 390);
  triangle(302, 110, 175, 180, 180, 390);
  triangle(302, 110, 420, 180, 400, 390);
  triangle(302, 110, 280, 135, 315, 135);
  
  // Glasses
  fill(0);
  rect(285, 255, 40, 10); 
  rect(215, 250, 70, 45);
  rect(310, 250, 70, 45);
  
  // Controller
  fill(133, 132, 131);
  beginShape();
  vertex(210, 650);
  vertex(260, 500);
  vertex(360, 500);
  vertex(410, 650); 
  vertex(380, 660);
  vertex(335, 565);
  vertex(285, 565);
  vertex(235, 660);
  endShape();
  
  // Buttons
  fill(196, 14, 59);
  ellipse(335, 530, 10, 10); 
  
  fill(0, 255, 76);
  ellipse(345, 520, 10, 10);
  
  fill(207, 91, 137);
  ellipse(355, 530, 10, 10);
  
  fill(0, 140, 255);
  ellipse(345, 540, 10, 10);
  
  fill(0);
  rect(270, 515, 10, 30);
  rect(260, 525, 30, 10); 
  
  // Hand
  fill(198, 140, 83);
  ellipse(275, 600, 100, 100); 
}
