function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(frameCount*0.1%255,frameCount+20%255,frameCount*2%255);
  stroke(frameCount%255,frameCount%255,255);
  translate(frameCount*0.5%windowWidth,frameCount*0.5%windowHeight)
  rotate(frameCount*0.02);
  fill((frameCount+150)%255,(frameCount+50)%255,(frameCount+250)%255);
  square(0,0,frameCount%windowWidth);
  fill((frameCount+50)%255,(frameCount+100)%255,(frameCount+200)%255);
  stroke((frameCount+50)%200,(frameCount+100)%200,(frameCount+200)%255);
  strokeWeight(frameCount*0.1%20);
  rotate(frameCount*0.01)
  circle(width/5,frameCount%500,frameCount%800);
  stroke((frameCount+50)%255,(frameCount+100)%255,(frameCount+200)%255);
  strokeWeight(((frameCount+10)%200)*0.1);
  fill((frameCount+50)%200,(frameCount+100)%200,(frameCount+200)%255);
  circle(frameCount%500,height/5,frameCount%200);
  fill(frameCount+20%200,frameCount+220%255,frameCount%150)

  // rotateY(frameCount*0.05);
  // box(frameCount*0.01%400);
}
