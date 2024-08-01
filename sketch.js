let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {
  
  createCanvas(400, 400);
  background(color(60,48,52));
  cor = color(random(0,255),random(0,255),random(0,255));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}

function draw() {
  
  fill(cor);
  circle(posicaoHorizontal,posicaoVertical,75);
  
  if(mouseX < posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal - 1;
  }
  
  if(mouseX > posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal + 1;
  }

  if(mouseY < posicaoVertical) {
    posicaoVertical--;
  }

  if(mouseY > posicaoVertical) {
    posicaoVertical++;
  }

  if(mouseIsPressed) {
    cor = color(random(0,255), random(0,255),  random(0,255),  random(0,100));
  }


}


