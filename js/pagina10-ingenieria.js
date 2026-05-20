let videoIngenieria;
let ledFuente;
let nodos = [];
let formulas = [];
let linksOcultos = [];
let puntoCarga;
let pulso = 0;
let audioActivo = false;
let ultimoToque = -20;

function preload(){
  ledFuente = loadFont("fuentes/ledlight.otf");
}

function setup(){
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasDiv");
  frameRate(24);

  videoIngenieria = createVideo("videos/ingenieria.mp4");
  videoIngenieria.elt.muted = false;
  videoIngenieria.volume(0.45);
  videoIngenieria.elt.setAttribute("playsinline", "");
  videoIngenieria.loop();
  videoIngenieria.hide();
  intentarAudioInicio(videoIngenieria);

  puntoCarga = createVector(width / 2, height / 2);
  crearNodos();
  crearFormulas();
  crearLinksOcultos();
}

function draw(){
  background(0);
  fondoVideo();
  grillaPlano();
  dibujarEstructura();
  ondasDeCarga();
  formulasMoviles();
  panelCentral();
  cursorCarga();
}

function fondoVideo(){
  push();
  tint(255, 118);
  image(videoIngenieria, 0, 0, width, height);
  pop();

  noStroke();
  fill(0, 116);
  rect(0, 0, width, height);

  filter(GRAY);
}

function crearNodos(){
  nodos = [];

  for(let y = 92; y <= 500; y += 68){
    for(let x = 34; x <= 326; x += 73){
      nodos.push({
        baseX: x,
        baseY: y,
        x: x,
        y: y,
        fase: random(TWO_PI)
      });
    }
  }
}

function crearFormulas(){
  formulas = [
    "sigma = F / A", "M = F x d", "delta = P L^3 / 48EI",
    "NODO 10", "PLANTA", "CARGA", "RETICULA", "EQUILIBRIO",
    "UBA INGENIERIA"
  ];
}

function crearLinksOcultos(){
  linksOcultos = [
    { x: 0, y: 0, w: 120, h: 160, pagina: "pagina8-medicina.html" },
    { x: 240, y: 0, w: 120, h: 160, pagina: "pagina9-multimedia.html" },
    { x: 115, y: 500, w: 130, h: 140, pagina: "pagina7-colon.html" }
  ];
}

function grillaPlano(){
  strokeWeight(1);

  for(let x = 0; x <= width; x += 18){
    stroke(255, x % 72 === 0 ? 58 : 18);
    line(x + random(-0.4, 0.4), 0, x, height);
  }

  for(let y = 0; y <= height; y += 18){
    stroke(255, y % 72 === 0 ? 58 : 18);
    line(0, y, width, y + random(-0.4, 0.4));
  }

  noFill();
  stroke(255, 90);
  rect(18, 26, width - 36, height - 52);
}

function dibujarEstructura(){
  for(let nodo of nodos){
    let d = dist(puntoCarga.x, puntoCarga.y, nodo.baseX, nodo.baseY);
    let empuje = map(d, 0, 260, 26, 0, true);
    let angulo = atan2(nodo.baseY - puntoCarga.y, nodo.baseX - puntoCarga.x);

    nodo.x = nodo.baseX + cos(angulo) * empuje + sin(frameCount * 0.03 + nodo.fase) * 2;
    nodo.y = nodo.baseY + sin(angulo) * empuje + cos(frameCount * 0.025 + nodo.fase) * 2;
  }

  strokeWeight(1.2);

  for(let i = 0; i < nodos.length; i++){
    let a = nodos[i];

    for(let j = i + 1; j < nodos.length; j++){
      let b = nodos[j];
      let dBase = dist(a.baseX, a.baseY, b.baseX, b.baseY);

      if(dBase < 104){
        let tension = dist(a.x, a.y, b.x, b.y) - dBase;
        let alpha = map(abs(tension), 0, 24, 46, 210, true);
        stroke(tension > 4 ? 245 : 145, alpha);
        line(a.x, a.y, b.x, b.y);
      }
    }
  }

  noStroke();
  for(let nodo of nodos){
    let d = dist(puntoCarga.x, puntoCarga.y, nodo.x, nodo.y);
    fill(map(d, 0, 280, 255, 120, true), 210);
    circle(nodo.x, nodo.y, map(d, 0, 280, 7, 3, true));
  }
}

function ondasDeCarga(){
  pulso = (pulso + 2.8) % 180;

  noFill();
  stroke(255, map(pulso, 0, 180, 150, 0));
  circle(puntoCarga.x, puntoCarga.y, pulso);

  stroke(180, map(pulso, 0, 180, 120, 0));
  circle(puntoCarga.x, puntoCarga.y, pulso * 0.55);
}

function formulasMoviles(){
  textFont("Courier New");
  textSize(10);

  for(let i = 0; i < formulas.length; i++){
    let x = 24 + (i % 3) * 106;
    let y = (frameCount * 0.42 + i * 78) % 560 + 36;

    fill(255, 94);
    text(formulas[i], x + random(-0.7, 0.7), y);
  }
}

function panelCentral(){
  push();
  translate(width / 2, 324);
  rectMode(CENTER);

  fill(0, 196);
  stroke(255, 132);
  rect(0, 0, 254, 128);

  for(let i = 1; i < 16; i += 5){
    noFill();
    stroke(255, 62 / i);
    strokeWeight(i);
    rect(0, 0, 254, 128);
  }

  noStroke();
  fill(255, 238);
  textAlign(CENTER, CENTER);
  textFont(ledFuente);
  textSize(24);
  text("INGENIERIA", 0, -32);

  textFont("Courier New");
  textSize(10);
  fill(235, 190);
  text("arrastrar estructura", 0, 18);
  text(audioActivo ? "audio activo" : "tocar para activar audio", 0, 40);
  pop();
}

function cursorCarga(){
  stroke(255, 200);
  line(puntoCarga.x - 16, puntoCarga.y, puntoCarga.x + 16, puntoCarga.y);
  line(puntoCarga.x, puntoCarga.y - 16, puntoCarga.x, puntoCarga.y + 16);
  noStroke();
  fill(255, 180);
  circle(puntoCarga.x, puntoCarga.y, 8);
}

function activarAudio(){
  if(videoIngenieria && !audioActivo){
    videoIngenieria.elt.muted = false;
    videoIngenieria.volume(0.45);
    videoIngenieria.loop();
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
  puntoCarga.x = constrain(x, 20, width - 20);
  puntoCarga.y = constrain(y, 20, height - 20);

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
  puntoCarga.x = constrain(mouseX, 20, width - 20);
  puntoCarga.y = constrain(mouseY, 20, height - 20);
  return false;
}

function touchStarted(){
  const toque = touches.length > 0 ? touches[0] : { x: mouseX, y: mouseY };
  return manejarToque(toque.x, toque.y);
}

function touchMoved(){
  const toque = touches.length > 0 ? touches[0] : { x: mouseX, y: mouseY };
  puntoCarga.x = constrain(toque.x, 20, width - 20);
  puntoCarga.y = constrain(toque.y, 20, height - 20);
  return false;
}

function windowResized(){

  resizeCanvas(windowWidth, windowHeight);

}