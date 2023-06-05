let particles = [];
let numberOfBalls = 500;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numberOfBalls; i++) particles[i] = new Particle();
}

function draw() {
  background(0,0.05);
  for (let i = 0; i < particles.length; i++){
    particles[i].update();
    particles[i].draw();
    particles[i].hue += 0.25;
    particles[i].hue %= 360;
  }
}
