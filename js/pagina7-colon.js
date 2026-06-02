let telon_1;
let telon_2;
let telon_3;
let salon_dorado;

let logo;
let logo_derecha;

let urls = [
  "pagina4-logia.html",
  "pagina9-multimedia.html",
  "pagina8-medicina.html",
  "pagina10-ingenieria.html"
];

let bandera1 = false

let botonesX = [];
let botonesY = [];
let radioBoton = 36; 

function preload() {

  telon_1 = loadImage('img/pagina7_colon/telon_01.jpg');
  telon_2 = loadImage('img/pagina7_colon/telon_02.jpg');
  telon_3 = loadImage('img/pagina7_colon/telon_03.jpg');
  salon_dorado = loadImage('img/pagina7_colon/salon-dorado1.jpg');

  logo = loadImage('img/pagina7_colon/logo.png');
  logo_derecha = loadImage('img/pagina7_colon/logo2.png');

}

function setup() {

  let canvas = createCanvas(360, 640);

  telon_1.resize(360, 640);
  telon_2.resize(360, 640);
  telon_3.resize(360, 640);
  salon_dorado.resize(360, 640)

  logo.resize(300, 300);
  logo_derecha.resize(300, 300);

  telon_1.filter(THRESHOLD, 0.2);
  telon_2.filter(THRESHOLD, 0.2);
  telon_3.filter(THRESHOLD, 0.2);

  // circulos para hacer nexos 

  let centroX = 10;
  let centroY = 640;
  let radioMenu = 215; 

  let angulos = [
    radians(-86), 
    radians(-69), 
    radians(-52), 
    radians(-35), 

  ];

  for (let i = 0; i < 4; i++) {
    botonesX[i] = centroX + cos(angulos[i]) * radioMenu;
    botonesY[i] = centroY + sin(angulos[i]) * radioMenu;
  }
}

function draw() {

  background(0);

  /* solo tres imágenes
  let a1 = map(sin(frameCount * 0.018), -1, 1, 20, 110);
  let a2 = map(sin(frameCount * 0.018 + TWO_PI / 3), -1, 1, 20, 110);
  let a3 = map(sin(frameCount * 0.018 + TWO_PI * 2 / 3), -1, 1, 20, 110);

  let x1 = map(noise(frameCount * 0.02), 0, 1, -8, 8);
  let y1 = map(noise(frameCount * 0.02 + 100), 0, 1, -8, 8);

  let x2 = map(noise(frameCount * 0.02 + 200), 0, 1, -8, 8);
  let y2 = map(noise(frameCount * 0.02 + 300), 0, 1, -8, 8);

  let x3 = map(noise(frameCount * 0.02 + 400), 0, 1, -8, 8);
  let y3 = map(noise(frameCount * 0.02 + 500), 0, 1, -8, 8);
  */

  let velocidad = 0.018;
  let a1 = map(sin(frameCount * velocidad), -1, 1, 20, 110);
  let a2 = map(sin(frameCount * velocidad + HALF_PI), -1, 1, 20, 110);
  let a3 = map(sin(frameCount * velocidad + PI), -1, 1, 20, 110);
  let a4 = map(sin(frameCount * velocidad + HALF_PI * 3), -1, 1, 20, 80);

  let nVel = 0.02;

  //panel izq
  let x1 = map(noise(frameCount * nVel), 0, 1, -8, 8);
  let y1 = map(noise(frameCount * nVel + 100), 0, 1, -8, 8);
  
  //telon
  let x2 = map(noise(frameCount * nVel + 200), 0, 1, -8, 8);
  let y2 = map(noise(frameCount * nVel + 300), 0, 1, -8, 8);
 
  //panel derecho
  let x3 = map(noise(frameCount * nVel + 400), 0, 1, -8, 8);
  let y3 = map(noise(frameCount * nVel + 500), 0, 1, -8, 8);

  //salon dorado
  let x4 = map(noise(frameCount * nVel + 600), 0, 1, -8, 8);
  let y4 = map(noise(frameCount * nVel + 700), 0, 1, -8, 8);

  blendMode(SCREEN);

  tint(255, a1);
  image(telon_1, x1, y1);

  tint(255, a2);
  image(telon_2, x2, y2);

  tint(255, a3);
  image(telon_3, x3, y3);

  tint(255, a4);
  image(salon_dorado, x4, y4);

  noTint();

  blendMode(BLEND);

  fill(0, 140);
  rect(0, 0, width, height);

  dibujarLogos();

  
  //nexos();

  if (bandera1) {
    cuadroFinal();
  }

  
}

function dibujarLogos() {
  
  push();
  tint(0, 255); 
  image(logo, 0, 360);
  noTint(); 
  pop();

  /*
   push();
  tint(0, 255); 
  image(logo_derecha, 60, 0);
  noTint(); 
  pop(); */


}

function textos() {
  push();
  fill(255, 180);
  textSize(10);
  textFont('sans-serif'); 
  
  let separacion = 250; 
  let velocidad = frameCount * 1; 
  let totalCopias = 5;
  let loop_total = totalCopias * separacion;
  
  // coordenadas
  for (let i = 0; i < totalCopias; i++) {
    let yPos = (velocidad + (i * separacion)) % loop_total;

    push();
    translate(345, yPos - separacion); 
    rotate(HALF_PI);
    text( '34°36′31″S 58°24′32″O / -34.60861, -58.40889', 0, 0);
    pop();
  }
  
  pop();
  
}

function nexos() {
  push();
  noStroke();
  
  let sobreCualquierBoton = false;

 for (let i = 0; i < 4; i++) {
    let d = dist(mouseX, mouseY, botonesX[i], botonesY[i]);
    
    if (d < radioBoton / 2) {
      fill(0);
      sobreCualquierBoton = true;
    } else {
      fill(0,10); 
    }
    
    ellipse(botonesX[i], botonesY[i], radioBoton, radioBoton);
  }

  if (sobreCualquierBoton) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }
  
  pop();
}

function mousePressed() {
  for (let i = 0; i < 4; i++) {
    let d = dist(mouseX, mouseY, botonesX[i], botonesY[i]);

    if (d < radioBoton / 2) {
      bandera1 = true;

      setTimeout(() => {
        location.replace(urls[i]);
      }, 15000);

      break;
    }
  }
}

function cuadroFinal () {


            push();
                stroke (255)
                fill (0, 200)
                rect (20, 20, 320, 550)
            pop();
            push();
                fill (255, 255);
                textAlign (CENTER);
      
                textFont ('Courier New');
                textSize (20);
                text ( "Cada hombre es una isla. Atrapado en sí mismo, emocionalmente aislado, incapaz de comunicarse, al hombre le horroriza la civilización, la gente, las ciudades, las situaciones que requieren capacidad para comprender y establecer relaciones con los demás",
                     25, 80, 315, 615);
            pop();

}
