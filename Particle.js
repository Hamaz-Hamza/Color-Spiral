class Particle{
  constructor(){
    this.distanceFromCentre = random(50, 700);
    this.x = mouseX;
    this.y = mouseY;
    this.angularVelocity = random(0.005, 0.01);
    this.angle = random(2*PI);
    this.hue = random(200,250);
  }
  
  update(){
    let targetX = mouseX + cos(this.angle)*this.distanceFromCentre;
    let targetY = mouseY + sin(this.angle)*this.distanceFromCentre;
    this.x += (targetX-this.x) * 0.075;
    this.y += (targetY-this.y) * 0.075;
    this.angle += this.angularVelocity;
  }
  
  
  draw(){
    colorMode(HSB);
    noStroke();
    fill(this.hue,100,100);
    circle(this.x, this.y, 10);
  }
}
