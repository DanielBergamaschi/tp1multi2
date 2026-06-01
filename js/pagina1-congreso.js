let videoCongreso;

let fuenteLed;
let fuenteBlue;
let fuenteFaith;
let fuenteQuake;

let palabras = [];
let destellos = [];
let particulas = [];
let sellos = [];
let linksOcultos = [];
let audioActivo = false;
let ultimoToque = -20;
let lenteX = 180;
let lenteY = 320;

let intensidadLuz = 15;
let aumentoIntensidad = 1;
let intensidadFlecha = 0;
let posicionFlecha = -50;

function preload(){
  fuenteLed = loadFont("fuentes/ledlight.otf");
  fuenteBlue = loadFont("fuentes/blue_screen/Blue Screen Personal Use.ttf");
  fuenteFaith = loadFont("fuentes/faith_collapsing/Faith Collapsing.ttf");
  fuenteQuake = loadFont("fuentes/quake/dpquake_.ttf");
}

function setup(){
  pixelDensity(1);
  let canvas = createCanvas(360, 640);
  canvas.parent("canvasDiv");
  frameRate(15);

  videoCongreso = createVideo("videos/congreso.mp4");
  videoCongreso.volume(0.45);
  videoCongreso.elt.muted = false;
  videoCongreso.elt.setAttribute("playsinline", "");
  videoCongreso.loop();
  videoCongreso.hide();
  intentarAudioInicio(videoCongreso);

  crearPalabras();
  crearDestellos();
  crearParticulas();
  crearLinksOcultos();
}

function draw(){
  background(0);

  fondoVideo();
  luz();
  distorsionCuadrados();
  distorsionLineas();
  palabrasMoviles();
  dibujarParticulas();
  dibujarDestellos();
  dibujarSellos();
  lenteInteractiva();
}

function fondoVideo(){
  push();
  tint(255, 135);
  image(videoCongreso, 0, 0, width, height);
  pop();

  noStroke();
  fill(0, 118);
  rect(0, 0, width, height);

  for(let y = 0; y < height; y += 8){
    fill(255, 10);
    rect(0, y, width, 1);
  }
}

function luz(){
  intensidadLuz += aumentoIntensidad;

  if(intensidadLuz >= 50){
    aumentoIntensidad = -1;
  }
  else if(intensidadLuz <= 15){
    aumentoIntensidad = 1;
  }

  intensidadLuz = constrain(intensidadLuz, 15, 50);
}

function distorsionCuadrados(){
  noStroke();
  rectMode(CENTER);

  for(let i = 0; i < 12; i++){
    fill(random(80, 220), random(18, 52));
    rect(random(0, width), random(0, height), random(8, 26), random(45, 130));
  }

  rectMode(CORNER);
}

function distorsionLineas(){
  stroke(random(150, 255), 28);
  strokeWeight(1);

  for(let y = 0; y < height; y += random(42, 110)){
    line(0, y, width, y + random(-4, 4));
  }

  for(let x = 0; x < width; x += random(46, 120)){
    line(x, 0, x + random(-4, 4), height);
  }
}

function flechasCentro(){
  if(intensidadFlecha >= 50){
    intensidadFlecha = 0;
    posicionFlecha = -50;
  }

  intensidadFlecha += 1;
  posicionFlecha += 1;

  push();
  translate(0, posicionFlecha);
  fill(255, intensidadFlecha * 2.4);
  noStroke();

  for(let i = 0; i < height + 220; i += 200){
    push();
    translate(0, i);
    quad(120, 10, 120, 40, 180, 90, 180, 60);
    quad(180, 60, 180, 90, 240, 40, 240, 10);
    pop();
  }

  pop();
}

function textoEspiral(){
  const frase = "El poder observa la ciudad. La ley baja sobre la arquitectura. Congreso, Babel, Estado, sombra. ";

  push();
  textFont("Courier New");
  textSize(12);
  textAlign(CENTER, CENTER);
  translate(width / 2, height / 2);

  for(let i = 0; i < frase.length * 2; i++){
    const angulo = i * 0.18 + frameCount * 0.006;
    const radio = i * 0.72 - intensidadLuz * 1.45;
    const x = cos(angulo) * radio;
    const y = sin(angulo) * radio;

    fill(255, 232, 185, constrain(intensidadFlecha * 3, 20, 150));
    text(frase[i % frase.length], x, y);
  }

  pop();
}

function crearPalabras(){
  palabras = [];

  const textos = [
    "PODER", "CONTROL", "ESTADO", "LEY", "SOMBRAS",
    "POLITICA", "NACION", "SISTEMA", "CONGRESO"
  ];

  const fuentes = [fuenteBlue, fuenteLed, fuenteFaith, fuenteQuake];
  const baseTam = min(width, height);

  for(let i = 0; i < textos.length; i++){
    palabras.push({
      texto: textos[i],
      fuente: fuentes[i % fuentes.length],
      x: random(20, width - 20),
      y: random(height * 0.10, height * 0.92),
      tam: random(baseTam * 0.040, baseTam * 0.086),
      velX: random([-1, 1]) * random(0.55, 1.65),
      velY: random([-1, 1]) * random(0.35, 1.15),
      giro: random(-0.22, 0.22),
      giroVel: random([-1, 1]) * random(0.004, 0.014),
      fase: random(TWO_PI),
      alpha: random(88, 170)
    });
  }
}

function crearLinksOcultos(){
  linksOcultos = [
    { x: 0, y: 0, w: width * 0.34, h: height * 0.28, pagina: "pagina3-iglesia.html" },
    { x: width * 0.66, y: 0, w: width * 0.34, h: height * 0.28, pagina: "pagina6-once.html" },
    { x: width * 0.32, y: height * 0.76, w: width * 0.36, h: height * 0.24, pagina: "pagina2-barolo.html" }
  ];
}

function palabrasMoviles(){
  textAlign(CENTER, CENTER);

  for(let palabra of palabras){
    palabra.x += palabra.velX + sin(frameCount * 0.06 + palabra.fase) * 0.45;
    palabra.y += palabra.velY + cos(frameCount * 0.05 + palabra.fase) * 0.35;
    palabra.giro += palabra.giroVel;

    if(palabra.x > width + 120) palabra.x = -120;
    if(palabra.x < -130) palabra.x = width + 120;
    if(palabra.y > height + 70) palabra.y = -70;
    if(palabra.y < -80) palabra.y = height + 70;

    push();
    translate(palabra.x, palabra.y);
    rotate(palabra.giro + sin(frameCount * 0.025 + palabra.fase) * 0.12);
    textFont(palabra.fuente);
    textSize(palabra.tam);
    fill(255, 235, 185, palabra.alpha);
    stroke(255, 215, 120, 34);
    strokeWeight(1);
    text(palabra.texto, 0, 0);
    pop();
  }
}

function crearDestellos(){
  for(let i = 0; i < 32; i++){
    destellos.push({
      x: random(width),
      y: random(height),
      tam: random(1.5, 5.5),
      fase: random(TWO_PI),
      velocidad: random(0.035, 0.09),
      angulo: random(TWO_PI)
    });
  }
}

function dibujarDestellos(){
  for(let d of destellos){
    const pulso = (sin(frameCount * d.velocidad + d.fase) + 1) / 2;
    const alpha = map(pulso, 0, 1, 0, 235);
    const largo = d.tam * map(pulso, 0, 1, 5, 13);

    push();
    translate(d.x, d.y);
    rotate(d.angulo + frameCount * 0.004);
    stroke(255, 238, 190, alpha);
    strokeWeight(1);
    line(-largo, 0, largo, 0);
    line(0, -largo, 0, largo);
    noStroke();
    fill(255, 245, 210, alpha);
    circle(0, 0, d.tam);
    pop();

    if(pulso < 0.02 && random() < 0.02){
      d.x = random(width);
      d.y = random(height);
    }
  }
}

function crearParticulas(){
  for(let i = 0; i < 45; i++){
    particulas.push({
      x: random(width),
      y: random(height),
      tam: random(1, 4),
      velX: random(-0.3, 0.3),
      velY: random(-0.3, 0.3)
    });
  }
}

function dibujarParticulas(){
  noStroke();
  fill(255, 230, 170, 28);

  for(let p of particulas){
    circle(p.x, p.y, p.tam);
    p.x += p.velX;
    p.y += p.velY;

    if(p.x > width) p.x = 0;
    if(p.x < 0) p.x = width;
    if(p.y > height) p.y = 0;
    if(p.y < 0) p.y = height;
  }
}

function dibujarSellos(){
  for(let i = sellos.length - 1; i >= 0; i--){
    let sello = sellos[i];
    sello.alpha -= 3;
    sello.radio += 1.8;

    push();
    translate(sello.x, sello.y);
    rotate(sello.giro + frameCount * 0.004);
    noFill();
    stroke(255, 228, 170, sello.alpha);
    rectMode(CENTER);
    rect(0, 0, sello.radio * 1.7, sello.radio, 2);
    line(-sello.radio * 0.65, 0, sello.radio * 0.65, 0);
    line(0, -sello.radio * 0.32, 0, sello.radio * 0.32);

    noStroke();
    fill(255, 235, 185, sello.alpha);
    textFont("Courier New");
    textSize(9);
    textAlign(CENTER, CENTER);
    text(sello.texto, 0, 0);
    pop();

    if(sello.alpha <= 0){
      sellos.splice(i, 1);
    }
  }
}

function lenteInteractiva(){
  lenteX = lerp(lenteX, mouseX || width / 2, 0.08);
  lenteY = lerp(lenteY, mouseY || height / 2, 0.08);

  push();
  noFill();
  stroke(255, 230, 170, 88);
  circle(lenteX, lenteY, 92 + sin(frameCount * 0.07) * 12);
  stroke(255, 52);
  line(lenteX - 58, lenteY, lenteX + 58, lenteY);
  line(lenteX, lenteY - 58, lenteX, lenteY + 58);
  pop();
}

function activarAudio(){
  if(videoCongreso && !audioActivo){
    videoCongreso.elt.muted = false;
    videoCongreso.volume(0.45);
    videoCongreso.loop();
    audioActivo = true;
  }
}

function intentarAudioInicio(video){
  const playPromise = video.elt.play();

  if(playPromise !== undefined){
    playPromise
      .then(() => {
        audioActivo = true;
      })
      .catch(() => {
        audioActivo = false;
      });
  }
}

function manejarToque(x, y){
  if(frameCount - ultimoToque < 5){
    return false;
  }

  ultimoToque = frameCount;
  activarAudio();

  lenteX = x;
  lenteY = y;
  sellos.push({
    x: x,
    y: y,
    radio: 42,
    alpha: 220,
    giro: random(-0.2, 0.2),
    texto: random(["LEY", "VOTO", "ACTA", "PODER"])
  });

  for(let link of linksOcultos){
    if(x >= link.x && x <= link.x + link.w && y >= link.y && y <= link.y + link.h){
      location.replace(link.pagina);
      return false;
    }
  }

  return false;
}

function mousePressed(){
  return manejarToque(mouseX, mouseY);
}

function mouseDragged(){
  lenteX = constrain(mouseX, 0, width);
  lenteY = constrain(mouseY, 0, height);
  return false;
}

function touchStarted(){
  const toque = touches.length > 0 ? touches[0] : { x: mouseX, y: mouseY };
  return manejarToque(toque.x, toque.y);
}

function touchMoved(){
  const toque = touches.length > 0 ? touches[0] : { x: mouseX, y: mouseY };
  lenteX = constrain(toque.x, 0, width);
  lenteY = constrain(toque.y, 0, height);
  return false;
}

function windowResized(){
  return false;
}
