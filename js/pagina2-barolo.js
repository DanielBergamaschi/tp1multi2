//variables imagenes
let palacio_barolo_fachada;
let barolo_ascii;
let barolo_ascii_oculto;

let pedazos = [];
let filas = 3;
let cols = 3;

//variables textos
let frase = "Amor nos condujo a la misma muerte";
let indice = 0;

//variable video
let video;

function preload() {
  palacio_barolo_fachada = loadImage('img/pagina2_barolo/barolo-fachada-umbral.jpg');
  barolo_ascii=loadImage('img/pagina2_barolo/barolo-ascii-negro.png');
  barolo_ascii_oculto = loadImage('img/pagina2_barolo/barolo7.png');
  
}

function setup() {
  
  let canvas = createCanvas(360, 640);//estándar 9:6
  //createCanvas(windowWidth, windowHeight);//responsive
  canvas.parent('canvasDiv');
  
  background(0);

  palacio_barolo_fachada.resize(width/2, 0);
  barolo_ascii.resize(width, height);
  barolo_ascii_oculto.resize(width, height);
  barolo_ascii_oculto.filter(INVERT);

  // Función para dividir imagen en pedazos 

 dividir_imagenes();
  
  videos();
  
}

function draw() {
  background(0);

  //cargo video
  image(video, 0, 300, width/4, height/4 );

  //cargo imágenes fijas
  image(barolo_ascii_oculto, 20, 0, width / 2, height / 2);
  //image(barolo_ascii, 220,100, width/2, height/2); 
  //image(palacio_barolo, 20, 0, width/2, height/2); 
  //image(palacio_barolo_fachada, 100, 250, width/2, height/2); 

  dibujar_pedazos();
 
 aparicion_opacidad();
  texto_espiral();

  textos();
  
}

function dividir_imagenes() {
   let w = palacio_barolo_fachada.width / cols;
  let h = palacio_barolo_fachada.height / filas;

  for (let y = 0; y < filas; y++) {
    for (let x = 0; x < cols; x++) {
      let recorte = palacio_barolo_fachada.get(x * w, y * h, w, h);
      
      pedazos.push({
        img: recorte,
        posX: random(0, width - 50), 
        posY: random(0, height - 70),
        ancho: 50,
        alto: 70,
        opacidad: 160
      });
    }
  }
  
}

function dibujar_pedazos() {
  // Cambia de posición y estado de forma más lenta (cada 60 cuadros / 1 segundo aprox)
  if (frameCount % 30 == 0) {
    for (let i = 0; i < pedazos.length; i++) {
      pedazos[i].posX = random(0, width - 50);
      pedazos[i].posY = random(0, height - 70);
      pedazos[i].ancho = random(20, 100);
      pedazos[i].alto = random(30, 140);
      pedazos[i].opacidad = random(50, 255);
    }
  }

  for (let i = 0; i < pedazos.length; i++) {
    push();
    tint(255, pedazos[i].opacidad); 
    image(
      pedazos[i].img, 
      pedazos[i].posX, 
      pedazos[i].posY, 
      pedazos[i].ancho, 
      pedazos[i].alto
    );
    pop();
  }
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

  /*
  // Amor nos condujo a la misma muerte
  push();
  fill(255);
  textSize(14);
  //textStyle(ITALIC);
  textFont('Intel One Mono');
  let corte = frase.substring(0, indice);
  text(corte, 30, 550);
  
  // velocidad de escritura
  if (frameCount % 7 == 0 && indice < frase.length) {
    indice++;
  }
  pop();
  */
  
}

function aparicion_opacidad() {
  
  let oscilacionLenta = sin(frameCount * 0.01); 
  let oscilacionRapida = cos(frameCount * 0.015);

  push();
  let alfa_ascii = map(oscilacionLenta, -1, 1, 50, 200); 
  tint(255, alfa_ascii); 
  image(barolo_ascii, 220, 100, width / 2, height / 2);
  pop();

}

function videos(){
    video = createVideo("videos/babel5.mp4");
    video.size(width, height);
    video.volume(0);
    video.elt.setAttribute('playsinline', '');
    video.loop();
    video.hide();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}