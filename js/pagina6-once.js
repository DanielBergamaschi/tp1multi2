let edificio;
let gato_fortuna;
//let ropa;

let ventana_1;
let ventana_2;
let ventana_3; 
let ventana_4; 
let ventana_5;
let ventana_6;
let ventana_7;
let ventana_8;
let ventana_9;

function preload(){
  
  edificio = loadImage('img/pagina6_once/edificios.png');
  
  gato_fortuna = loadImage('img/pagina6_once/gato_fortuna.gif');
  
  //ropa = loadImage('img/pagina6_once/ropitah.png');
  
}

function setup() {
  
  let canvas = createCanvas(360, 640); // estándar 9:6

  background(0);
  
  edificio.resize(width, height);
  edificio.filter(THRESHOLD, 0.3);
  edificio.filter(INVERT, 0.2);

  gato_fortuna.resize(60,70);
  //ropa.resize(60,120);
  
 
  
  // fila 1 
  ventana_1 = createGraphics(60, 70);
  ventana_2 = createGraphics(60, 70);
  ventana_3 = createGraphics(60, 70); 
  
  // fila 2 
  ventana_4 = createGraphics(60, 100);
  ventana_5 = createGraphics(60, 100);
  ventana_6 = createGraphics(60, 100); 
  
  // fila 3 
  ventana_7 = createGraphics(60, 120);
  ventana_8 = createGraphics(60, 120);
  ventana_9 = createGraphics(60, 120); 
  
  frameRate(30); 
}

function draw() {
  background(0);
  
  // fondo
  image(edificio, 0, 0);
  
  armar_ventana_1();
  armar_ventana_2();
  armar_ventana_3();
  armar_ventana_4();
  armar_ventana_5();
  armar_ventana_6();
  armar_ventana_7();
  armar_ventana_8();
  armar_ventana_9();
  
  // fila 1
  image(ventana_1, 40, 50);  
  image(ventana_2, 151, 50); 
  image(ventana_3, 262, 50);
  
  // fila 2
  image(ventana_4, 40, 220);  
  image(ventana_5, 151, 220); 
  image(ventana_6, 262, 220);
  
  // fila 3
  image(ventana_7, 40, 450);  
  image(ventana_8, 151, 450); 
  image(ventana_9, 262, 450);
  
}


// letras
function armar_ventana_1() {
  ventana_1.background(0);
  ventana_1.fill(255);  
  ventana_1.textAlign(CENTER, CENTER);
  ventana_1.textSize(14);
  
  if (frameCount % 30 < 22) { 
    ventana_1.text("한국 가게", ventana_1.width / 2, ventana_1.height / 2 );
    ventana_1.textSize(11);
   
  }
}

// ruido
function armar_ventana_2() {
 
ventana_2.loadPixels();
  
  for (let x = 0; x < ventana_2.width; x++) {
    for (let y = 0; y < ventana_2.height; y++) {
      let colorEstatica = random(1) > 0.5 ? 255 : 0;
      ventana_2.set(x, y, color(colorEstatica));
    }
  }
  
  ventana_2.updatePixels();
}

// gatito fortuna
function armar_ventana_3() {
  ventana_3.background(255); 
  ventana_3.image(gato_fortuna, 0, 0);
  gato_fortuna.filter(THRESHOLD, 0.5);
}


// cartel neon
function armar_ventana_4() {
  ventana_4.background(255);
  ventana_4.fill(0);
  ventana_4.textAlign(LEFT, TOP);
  ventana_4.textSize(9);
  
  for (let y = 4; y < ventana_4.height; y += 11) {
    if (random(1) > 0.4) {
      ventana_4.text("SYS_BABEL_06", 4, y);
    } else {
      ventana_4.text("무너진_바벨", 4, y); 
    }
  }
}

// ojo
function armar_ventana_5() {
  ventana_5.background(0);
  ventana_5.fill(255);
  ventana_5.noStroke();
  
  let cX = ventana_5.width / 2;
  let cY = ventana_5.height / 2;
  
  ventana_5.ellipse(cX, cY, 55, 22);
  
  let pupilaX = map(mouseX, 0, width, cX - 8, cX + 8, true);
  let pupilaY = map(mouseY, 0, height, cY - 3, cY + 3, true);
  
  ventana_5.fill(0);
  ventana_5.ellipse(pupilaX, pupilaY, 15, 15);
}

// reloj
function armar_ventana_6() {
  ventana_6.background(0);
  ventana_6.fill(255);
  ventana_6.noStroke();
  ventana_6.textFont('Courier New'); 
  ventana_6.textStyle(BOLD);
  ventana_6.textAlign(CENTER, CENTER);
  
  let centroX = ventana_6.width / 2;
  let centroY = ventana_6.height / 2;

  //parpadeo
  if (frameCount % 30 < 15) {
    ventana_6.textSize(16);
    ventana_6.text("11:11", centroX, centroY);
  } else {
    ventana_6.textSize(16);
    ventana_6.text("11 11", centroX, centroY); 
  }

}


// bangalí
 function armar_ventana_7() {
  ventana_7.background(0);
  ventana_7.fill(255);
  ventana_7.textSize(9);
  ventana_7.textAlign(CENTER, TOP);
  ventana_7.text(
    "যখন আমরা একই কোড ব্যবহার করি না, তখন আমরা কীভাবে যোগাযোগ করি?", 5, 5, ventana_7.width - 10, ventana_7.height - 10);
}

//ropa colgada
function armar_ventana_8() {
  
  //ventana_8.background(255);
  //image(ropa, 151, 450);
  
  ventana_8.background(255);
  //ventana_8.image(ropa, 0, 0);
}

// tickets
function armar_ventana_9() {
  ventana_9.background(0);
  ventana_9.fill(255);
  ventana_9.textAlign(CENTER, TOP);
  ventana_9.textSize(10);
  
  let desplace = (frameCount * 2) % 40;
  
  for (let y = -20; y < ventana_9.height; y += 16) {
    let numAleatorio = floor(noise(y, frameCount * 0.1) * 9999);
    ventana_9.text("$" + numAleatorio, ventana_9.width / 2, y + desplace);
  }
}


// conexión entre páginas 

function nexos() {

  // ventana_1
  if (
    mouseX > 40 &&
    mouseX < 100 &&
    mouseY > 50 &&
    mouseY < 120
  ) {
    location.replace("pagina5-amia.html");
  }

  // ventana_2
  if (
    mouseX > 151 &&
    mouseX < 211 &&
    mouseY > 50 &&
    mouseY < 120
  ) {
    location.replace("pagina9-multimedia.html");
  }

  // ventana_3
  if (
    mouseX > 262 &&
    mouseX < 322 &&
    mouseY > 50 &&
    mouseY < 120
  ) {
    location.replace("pagina4-logia.html");
  }

  // ventana_7
  if (
    mouseX > 40 &&
    mouseX < 100 &&
    mouseY > 450 &&
    mouseY < 570
  ) {
    location.replace("pagina3-iglesia.html");
  }

  // ventana_8
  if (
    mouseX > 151 &&
    mouseX < 211 &&
    mouseY > 450 &&
    mouseY < 570
  ) {
    location.replace("Pagina1-congreso.html");
  }

  // ventana_9
  if (
    mouseX > 262 &&
    mouseX < 322 &&
    mouseY > 450 &&
    mouseY < 570
  ) {
    location.replace("pagina2-barolo.html");
  }
}


function mousePressed() {
  nexos();
}