let telon_1;
let telon_2;
let telon_3;

function preload() {

  telon_1 = loadImage('img/pagina7_colon/telon_01.jpg');
  telon_2 = loadImage('img/pagina7_colon/telon_02.jpg');
  telon_3 = loadImage('img/pagina7_colon/telon_03.jpg');

}

function setup() {

  let canvas = createCanvas(360, 640);

  telon_1.resize(360, 640);
  telon_2.resize(360, 640);
  telon_3.resize(360, 640);

  telon_1.filter(THRESHOLD, 0.2);
  telon_2.filter(THRESHOLD, 0.2);
  telon_3.filter(THRESHOLD, 0.2);
}

function draw() {

  background(0);

  let a1 = map(sin(frameCount * 0.018), -1, 1, 20, 110);
  let a2 = map(sin(frameCount * 0.018 + TWO_PI / 3), -1, 1, 20, 110);
  let a3 = map(sin(frameCount * 0.018 + TWO_PI * 2 / 3), -1, 1, 20, 110);

  let x1 = map(noise(frameCount * 0.02), 0, 1, -8, 8);
  let y1 = map(noise(frameCount * 0.02 + 100), 0, 1, -8, 8);

  let x2 = map(noise(frameCount * 0.02 + 200), 0, 1, -8, 8);
  let y2 = map(noise(frameCount * 0.02 + 300), 0, 1, -8, 8);

  let x3 = map(noise(frameCount * 0.02 + 400), 0, 1, -8, 8);
  let y3 = map(noise(frameCount * 0.02 + 500), 0, 1, -8, 8);

  blendMode(SCREEN);

  tint(255, a1);
  image(telon_1, x1, y1);

  tint(255, a2);
  image(telon_2, x2, y2);

  tint(255, a3);
  image(telon_3, x3, y3);

  noTint();

  blendMode(BLEND);

  fill(0, 140);
  rect(0, 0, width, height);
}