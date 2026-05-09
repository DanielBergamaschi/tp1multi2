let palacio_barolo;

//let fuente_gotica;

function preload() {
  
  palacio_barolo = loadImage('img/pagina2_barolo/Palacio-Barolo-en-1922.jpg');
  
  //fuente_gotica = loadFont('assets/fuente_gotica.ttf');
}

function setup() {
  //createCanvas(360, 640);//estándar 9:6
  createCanvas(windowWidth, windowHeight);

  palacio_barolo.resize(width/2, 0);
  palacio_barolo.filter(THRESHOLD, 0.5);
  
}

function draw() {
  background(0);
  
  textos();

  image(palacio_barolo, 50, 150, width/2, height/2); 
  
}

function textos() {
    
  fill(255); 
  textSize(12); 
  textFont('IM Fell English');
  text('Arder es el precio',100,70);
  textStyle(ITALIC);
  text('Amor nos condujo a la misma muerte',70,110);
  text('34°36′34″S 58°23′09″O / -34.609555555556, -58.385861111111', 15, 50);
};

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}