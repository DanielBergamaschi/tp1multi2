let palacio_barolo;
let infierno_dante;
let palacio_barolo_fachada;
let barolo_ascii;

let frase = "Amor nos condujo a la misma muerte";
let indice = 0;

//let fuente_gotica;

function preload() {
  
  palacio_barolo = loadImage('img/pagina2_barolo/Palacio-Barolo-en-1922.jpg');
  //infierno_dante = loadImage('infierno-de-dante.jpg');
  palacio_barolo_fachada = loadImage('img/pagina2_barolo/barolo-fachada-umbral.jpg');
  barolo_ascii=loadImage('img/pagina2_barolo/barolo-ascii-negro.png');
  //fuente_gotica = loadFont('assets/fuente_gotica.ttf');
}

function setup() {
  
  let canvas = createCanvas(360, 640);//estándar 9:6
  //createCanvas(windowWidth, windowHeight);//responsive
  canvas.parent('canvasDiv');
  
  background(0);
  barolo_ascii.resize(width, height);
  
  palacio_barolo.resize(width/2, 0);
  palacio_barolo.filter(THRESHOLD, 0.5);
  
  palacio_barolo_fachada.resize(width/2, 0);
  //infierno_dante.resize(width/2, 0);
  
  
}

function draw() {
  background(0);
  image(barolo_ascii, 220,100, width/2, height/2); 
  image(palacio_barolo, 20, 0, width/2, height/2); 
  image(palacio_barolo_fachada, 100, 250, width/2, height/2); 
  
  //image(infierno_dante, 300, 150, width/4, height/4); 
  
  textos();
  
  
}

function textos() {
  
push();
    fill(255, 0, 0); 
    let oscilacion = sin(frameCount * 0.05) * 1; 
    textStyle(BOLD);
    textSize(18 + oscilacion); 
    textFont('IM Fell English');
    text('Arder es el precio', 155, 30);
  pop(); 
  
push();
    fill(255, 0, 0, 180);
    textSize(10);
    textFont('sans-serif'); 
    
    let separacion = 300; 
    let velocidad = frameCount * 1; 
    let totalCopias = 5;
    let loop_total = totalCopias * separacion;
    
    // calcula la posición base y le suma el desplazamiento
for (let i = 0; i < totalCopias; i++) {
    
      let yPos = (velocidad + (i * separacion)) % loop_total;
      
  // resta margen para que aparezcan desde fuera de la pantalla
      push();
        translate(345, yPos - separacion); 
        rotate(HALF_PI);
        text('34°36′34″S 58°23′09″O / -34.609555555556, -58.385861111111', 0, 0);
      pop();
    }
  
pop();
  
  /*
  push()
  let transparencia = map(sin(frameCount * 0.1), -1, 1, 100, 255);
  fill(255, 0, 0, transparencia); 
  textSize(12);
  text('34°36′34″S 58°23′09″O / -34.609555555556, -58.385861111111', 15, 50);
  pop();
  */
  
  push();
    fill(255);
    textSize(14);
    textStyle(ITALIC);
    let corte = frase.substring(0, indice);
    text(corte, 50, 600);
    
    // velocidad de escritura
    if (frameCount % 7 == 0 && indice < frase.length) {
      indice++;
    }
  pop();
  
  //textStyle(ITALIC);
  //text('Amor nos condujo a la misma muerte',100,600);  
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}