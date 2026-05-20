//variables imagenes
let barolo_ascii_oculto;

//variables textos
let frase = "Amor nos condujo a la misma muerte";
let indice = 0;

// nexos
let nexoX;
let nexoY;
let nexo_radio = 45;
let random_nexos;

let nexos = [

  { pagina: "Pagina1-congreso.html" },
  { pagina: "pagina3-iglesia.html" },
  { pagina: "pagina4-logia.html" },
  { pagina: "pagina6-once.html" }

];

function preload() {
 
  barolo_ascii_oculto = loadImage('img/pagina2_barolo/barolo7.png');
  
}

function setup() {
  
  let canvas = createCanvas(360, 640);//estándar 9:6
  canvas.parent('canvasDiv');
  
  background(0);

  videos();

  barolo_ascii_oculto.resize(width, height);
  barolo_ascii_oculto.filter(INVERT);

  // centro del espiral
  nexoX = width / 2;
  nexoY = height / 2 - 50;
  
}

function draw() {
  background(0);

  push();
  tint(255, 65);
  image(video, 0, 0, width, height);
  pop();

  push();

  let movimientoX = sin(frameCount * 0.01) * 20;
  let movimientoY = cos(frameCount * 0.008) * 15;

  let escala = 1.08 + sin(frameCount * 0.01) * 0.03;

  let alpha_fondo = map(
  sin(frameCount * 0.02), -1,1,120,255);

  tint(255, alpha_fondo);

  translate(width / 2, height / 2);

  scale(escala);

  image(barolo_ascii_oculto, -width / 2 + movimientoX, -height / 2 + movimientoY, width, height);

  pop();


  texto_espiral();

  textos();
  
}

function texto_espiral() {
  push();
  textFont('Courier New');
  textSize(10); 
  const fraseEspiral = "ARDER ES EL PRECIO. ARDERE È IL PREZZO. ARDERE PRETIUM EST. জ্বলে যাওয়াই মূল্য· BRENNEN IST DER PREIS. BRÛLER EST LE PRIX. TO BURN IS THE PRICE. 타는 것이 대가다.";
  const total = fraseEspiral.length;
  
  translate(width / 2, height / 2 - 50);
  
  for (let i = 0; i < total * 3; i++) {
    const angulo = i * 0.18 + frameCount * 0.005; 
    const radio = 8 + i * 2.2;
    const x = cos(angulo) * radio;
    const y = sin(angulo) * radio;
    
    const alpha = map(i, 0, total * 3, 100, 255);
    fill(255, alpha);
    textAlign(CENTER, CENTER);
    text(fraseEspiral[i % total], x, y);
  }
  pop();
}

function textos() {
  push();
  fill(255, 180);
  textSize(10);
  textFont('sans-serif'); 
  
  let separacion = 300; 
  let velocidad = frameCount * 1; 
  let totalCopias = 5;
  let loop_total = totalCopias * separacion;
  
  // coordenadas
  for (let i = 0; i < totalCopias; i++) {
    let yPos = (velocidad + (i * separacion)) % loop_total;

    push();
    translate(345, yPos - separacion); 
    rotate(HALF_PI);
    text('34°36′34″S 58°23′09″O / -34.609555555556, -58.385861111111', 0, 0);
    pop();
  }
  
  pop();
  
}

function nexo() {

  random_nexos = floor(random(0, nexos.length));

  location.replace(nexos[random_nexos].pagina);

}


function mousePressed() {

  let boton_nexo = dist(mouseX, mouseY, nexoX, nexoY);

  if (boton_nexo < nexo_radio) {

    nexo();

  }

}

/*
function videos(){
    video = createVideo("videos/babel5.mp4");
    video.size(width, height);
    video.volume(0);
    video.elt.setAttribute('playsinline', '');
    video.loop();
    video.hide();
}*/

function videos() {

  video = createVideo(['videos/babel5.mp4']);

  video.size(width, height);

  // ocultar elemento html
  video.hide();

  // propiedades necesarias para mobile
  video.elt.muted = true;
  video.elt.autoplay = true;
  video.elt.loop = true;
  video.elt.playsInline = true;

  video.attribute('muted', '');
  video.attribute('playsinline', '');
  video.attribute('autoplay', '');
  video.attribute('loop', '');

  // intentar reproducir
  video.play();
}

function touchStarted() {

  if (video) {
    video.play();
  }

  return false;
}
