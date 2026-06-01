let videoIngenieria;
let ledFuente;
let nodos = [];
let formulas = [];
let linksOcultos = [];
let puntoCarga;
let pulso = 0;
let audioActivo = false;
let ultimoToque = -20;
let mostrarTextoFinal = false;
let paginaPendiente = "";

function preload(){
  ledFuente = loadFont("fuentes/ledlight.otf");
}

function setup(){
  pixelDensity(1);
  let canvas = createCanvas(360, 640);
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
  cursorCarga();
  textos();

  if(mostrarTextoFinal){
    cuadroFinal();
  }
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

  const margenX = width * 0.10;
  const margenY = height * 0.15;
  const filas = 6;
  const columnas = 5;
  const pasoX = (width - margenX * 2) / (columnas - 1);
  const pasoY = (height * 0.68) / (filas - 1);

  for(let fila = 0; fila < filas; fila++){
    for(let col = 0; col < columnas; col++){
      let x = margenX + col * pasoX;
      let y = margenY + fila * pasoY;

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
    { x: 0, y: 0, w: width * 0.34, h: height * 0.28, pagina: "pagina8-medicina.html" },
    { x: width * 0.66, y: 0, w: width * 0.34, h: height * 0.28, pagina: "pagina9-multimedia.html" },
    { x: width * 0.32, y: height * 0.76, w: width * 0.36, h: height * 0.24, pagina: "pagina7-colon.html" }
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

      if(dBase < width * 0.28){
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
    let x = width * 0.08 + (i % 3) * width * 0.29;
    let y = (frameCount * 0.42 + i * height * 0.12) % (height * 0.86) + height * 0.06;

    fill(255, 94);
    text(formulas[i], x + random(-0.7, 0.7), y);
  }
}

function cursorCarga(){
  stroke(255, 200);
  line(puntoCarga.x - 16, puntoCarga.y, puntoCarga.x + 16, puntoCarga.y);
  line(puntoCarga.x, puntoCarga.y - 16, puntoCarga.x, puntoCarga.y + 16);
  noStroke();
  fill(255, 180);
  circle(puntoCarga.x, puntoCarga.y, 8);
}

function textos(){
  push();
  fill(255, 180);
  textSize(10);
  textFont("sans-serif");

  let separacion = 300;
  let velocidad = frameCount * 1;
  let totalCopias = 5;
  let loopTotal = totalCopias * separacion;
  let coordenadas = "Facultad de Ingenieria UBA Las Heras / GMS: 34°35′19″S 58°23′48″O / Decimal: -34.58861, -58.39667";

  for(let i = 0; i < totalCopias; i++){
    let yPos = (velocidad + (i * separacion)) % loopTotal;

    push();
    translate(width - 15, yPos - separacion);
    rotate(HALF_PI);
    text(coordenadas, 0, 0);
    pop();
  }

  pop();
}

function iniciarTransicion(pagina){
  if(mostrarTextoFinal){
    return;
  }

  mostrarTextoFinal = true;
  paginaPendiente = pagina;

  setTimeout(() => {
    location.replace(paginaPendiente);
  }, 10000);
}

function cuadroFinal(){
  push();
  stroke(255);
  strokeWeight(1);
  fill(0, 220);
  rect(20, 20, 320, 600);
  pop();

  push();
  fill(255);
  textAlign(CENTER);
  textFont("Courier New");
  textSize(19);
  text(
    "Oculta de la luz en las tinieblas de las cavernas primordiales, me había familiarizado con los misterios oscuros de la vieja Tierra. Hay una astucia oculta en el decadente orden cósmico que me ha atrapado. Buenos Aires ha sido llamada la ciudad de los encuentros, pero es más que eso: es la ciudad de los velos de atardecer tiernos sobre la ruina, donde se permite que el horror no muerto cruce el abismo que se abre entre la conciencia y la materia. Formas sin nombre acechan aún en los lugares tenebrosos del mundo... 𝑏̥̊⃝𝑎̥̊⃝𝑏̥̊⃝𝑒̥̊⃝𝑙̥̊⃝𝑏̥̊⃝ｂⓐｂ𝐄𝓛𝑎̥̊⃝𝑏̥̊⃝𝑒̥̊⃝ʅǝqɐq𝑙̥̊⃝",
    26,
    30,
    308,
    585
  );
  pop();
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
      iniciarTransicion(link.pagina);
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
  return false;
}
