/**
 * Bouncing Ball with Vectors 
 * 
 * Demonstration of using vectors to control motion 
 * of a body.
 */
 
let location1;  // Location of shape
let velocity1;  // Velocity of shape
let gravity1;   // Gravity acts at the shape's acceleration

let location2;  // Location of ball_2
let velocity2;  // Velocity of ball_2
let gravity2;   // Gravity of ball_2

function setup() {
  createCanvas(640,360);
  location1 = createVector(100,100);
  velocity1 = createVector(1.5,2.1);
  gravity1 = createVector(0,0.2);
  
  location2 = createVector(10,50);
  velocity2 = createVector(2,2.6);
  gravity2 = createVector(0,0.3);
    
}

function draw() {
  background(0);
  
  // Add velocity to the location.
  location1.add(velocity1);
  // Add gravity to velocity
  velocity1.add(gravity1);
  // Add velocity1 to the location1.
  location2.add(velocity2);
  // Add gravity1 to velocity1
  velocity2.add(gravity2);
  
  // Bounce off edges
  if ((location1.x > width) || (location1.x < 0)) {
    velocity1.x = velocity1.x * -1;
  }
  
  if (location1.y > height) {
    // We're reducing velocity ever so slightly 
    // when it hits the bottom of the window
    velocity1.y = velocity1.y * -0.95; 
    location1.y = height;
  }
  // Bounce off edges
  if ((location2.x > width) || (location2.x < 0)) {
  velocity2.x = velocity2.x * -1;
  
  }
  
  if (location2.y > height) {
  // We're reducing velocity1 ever so slightly 
  // when it hits the bottom of the window
  velocity2.y = velocity2.y * -0.95; 
  location2.y = height;
  }

  // Display circle at location vector
  stroke(255);
  strokeWeight(2);
  fill(127);
  ellipse(location1.x,location1.y,48,48);
  ellipse(location2.x,location2.y,70,70);
}