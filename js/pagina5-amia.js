let videoAmia;
let ledFuente;
let marcas = [];
let pulsos = [];
let fragmentos = [];
let linksOcultos = [];
let audioActivo = false;
let ultimoToque = -20;
let focoX = 180;
let focoY = 320;

function preload(){
  ledFuente = loadFont("fuentes/ledlight.otf");
}

function setup(){
  let canvas = createCanvas(360, 640);
  canvas.parent("canvasDiv");
  frameRate(24);

  videoAmia = createVideo("videos/amia.mp4");
  videoAmia.elt.muted = false;
  videoAmia.volume(0.45);
  videoAmia.elt.setAttribute("playsinline", "");
  videoAmia.loop();
  videoAmia.hide();
  intentarAudioInicio(videoAmia);

  crearMarcas();
  crearFragmentos();
  crearLinksOcultos();
}

function draw(){
  background(0);
  fondoVideo();
  grillaArchivo();
  simboloFracturado();
  dibujarFragmentos();
  dibujarPulsos();
  marcasFlotantes();
  focoTactil();
  placaCentral();
}

function fondoVideo(){
  push();
  tint(255, 118);
  image(videoAmia, -95, 0, 550, 640);
  pop();

  noStroke();
  fill(0, 132);
  rect(0, 0, width, height);

  for(let y = 0; y < height; y += 4){
    fill(255, y % 12 === 0 ? 13 : 5);
    rect(0, y, width, 1);
  }
}

function crearMarcas(){
  marcas = [
    "EMBAJADA DE ISRAEL", "17 MAR 1992", "AMIA", "18 JUL 1994",
    "ARCHIVO", "JUSTICIA", "MEMORIA", "PASTEUR", "ARROYO",
    "HUELLA", "NOMBRE", "TESTIMONIO", "SILENCIO", "CIUDAD"
  ];
}

function crearFragmentos(){
  for(let i = 0; i < 34; i++){
    fragmentos.push({
      x: random(16, width - 16),
      y: random(40, height - 80),
      w: random(18, 82),
      h: random(4, 28),
      fase: random(TWO_PI),
      alpha: random(24, 105)
    });
  }
}

function crearLinksOcultos(){
  linksOcultos = [
    { x: 0, y: 0, w: 120, h: 150, pagina: "pagina8-medicina.html" },
    { x: 240, y: 0, w: 120, h: 150, pagina: "pagina9-multimedia.html" },
    { x: 0, y: 490, w: 130, h: 150, pagina: "pagina6-once.html" },
    { x: 230, y: 490, w: 130, h: 150, pagina: "pagina3-iglesia.html" }
  ];
}

function grillaArchivo(){
  strokeWeight(1);

  for(let x = 0; x <= width; x += 18){
    stroke(255, x % 72 === 0 ? 26 : 9);
    line(x + random(-0.4, 0.4), 0, x, height);
  }

  for(let y = 0; y <= height; y += 18){
    stroke(255, y % 72 === 0 ? 26 : 9);
    line(0, y, width, y + random(-0.4, 0.4));
  }

  noFill();
  stroke(255, 42);
  rect(18 + random(-1, 1), 28 + random(-1, 1), width - 36, height - 56);
}

function simboloFracturado(){
  push();
  translate(width / 2, 284);
  rotate(sin(frameCount * 0.012) * 0.03);

  noFill();
  stroke(255, 215, 155, 95 + sin(frameCount * 0.04) * 50);
  strokeWeight(1.4);
  triangulo(-64, 28, 64, 28, 0, -82);
  triangulo(-64, -28, 64, -28, 0, 82);

  stroke(255, 72);
  for(let i = 0; i < 10; i++){
    line(random(-76, 76), random(-86, 86), random(-76, 76), random(-86, 86));
  }
  pop();
}

function triangulo(x1, y1, x2, y2, x3, y3){
  line(x1, y1, x2, y2);
  line(x2, y2, x3, y3);
  line(x3, y3, x1, y1);
}

function dibujarFragmentos(){
  noStroke();
  rectMode(CENTER);

  for(let frag of fragmentos){
    let movimiento = sin(frameCount * 0.04 + frag.fase) * 8;
    fill(255, frag.alpha);
    rect(frag.x + movimiento, frag.y, frag.w, frag.h);

    if(frameCount % 35 === 0 && random() < 0.22){
      frag.x = random(16, width - 16);
      frag.y = random(40, height - 80);
    }
  }

  rectMode(CORNER);
}

function dibujarPulsos(){
  for(let i = pulsos.length - 1; i >= 0; i--){
    let pulso = pulsos[i];
    pulso.radio += 5.5;
    pulso.alpha -= 5;

    noFill();
    stroke(255, 232, 185, pulso.alpha);
    circle(pulso.x, pulso.y, pulso.radio);
    circle(pulso.x, pulso.y, pulso.radio * 0.42);

    if(pulso.alpha <= 0){
      pulsos.splice(i, 1);
    }
  }
}

function marcasFlotantes(){
  textFont("Courier New");
  textAlign(CENTER, CENTER);

  for(let i = 0; i < marcas.length; i++){
    let y = (frameCount * 0.52 + i * 55) % 560 + 32;
    let x = 52 + (i % 4) * 84 + sin(frameCount * 0.014 + i) * 8;

    fill(255, 92);
    textSize(9 + (i % 3));
    text(marcas[i], x, y);
  }
}

function focoTactil(){
  focoX = lerp(focoX, mouseX || width / 2, 0.08);
  focoY = lerp(focoY, mouseY || height / 2, 0.08);

  noFill();
  stroke(255, 180);
  line(focoX - 18, focoY, focoX + 18, focoY);
  line(focoX, focoY - 18, focoX, focoY + 18);

  stroke(255, 48);
  circle(focoX, focoY, 74 + sin(frameCount * 0.08) * 12);
}

function placaCentral(){
  push();
  translate(width / 2, 410);
  rectMode(CENTER);

  fill(0, 196);
  stroke(255, 96);
  rect(0, 0, 248, 116);

  noStroke();
  textAlign(CENTER, CENTER);
  textFont(ledFuente);
  textSize(32);
  fill(255, 238);
  text("AMIA", 0, -26);

  textFont("Courier New");
  textSize(10);
  fill(255, 176);
  text("archivo / memoria / embajada", 0, 16);
  text(audioActivo ? "audio activo" : "tocar para activar audio", 0, 40);
  pop();
}

function activarAudio(){
  if(videoAmia && !audioActivo){
    videoAmia.elt.muted = false;
    videoAmia.volume(0.45);
    videoAmia.loop();
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

  pulsos.push({ x: x, y: y, radio: 12, alpha: 220 });
  focoX = x;
  focoY = y;

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

function touchStarted(){
  const toque = touches.length > 0 ? touches[0] : { x: mouseX, y: mouseY };
  return manejarToque(toque.x, toque.y);
}

function touchMoved(){
  const toque = touches.length > 0 ? touches[0] : { x: mouseX, y: mouseY };
  focoX = constrain(toque.x, 0, width);
  focoY = constrain(toque.y, 0, height);
  return false;
}
