const congresoIglesiaSketch = (p) => {
  let iglesia;
  let angelIzq;
  let angelDer;
  let intensidadLuz = 15;
  let aumentoIntensidad = 1;
  let movimientoFlecha = 1;
  let intensidadFlecha = 0;
  let posicionFlecha = -50;

  p.preload = () => {
    iglesia = p.loadImage("img/pagina3-iglesia/iglesia2.jpg");
    angelIzq = p.loadImage("img/pagina3-iglesia/angel1.png");
    angelDer = p.loadImage("img/pagina3-iglesia/angel2.png");
  };

  p.setup = () => {
    const holder = document.getElementById("iglesiaEffectDiv");
    const w = holder ? holder.offsetWidth : p.windowWidth;
    const h = holder ? holder.offsetHeight : p.windowHeight;
    const canvas = p.createCanvas(w, h);

    canvas.parent("iglesiaEffectDiv");
    p.frameRate(20);
    p.clear();
  };

  p.draw = () => {
    p.clear();
    p.background(0, 18);

    luz();
    interiorMovil();
    cuadradosDistorsion();
    lineasDistorsion();
    lineasCentro();
    textoEspiral();
    angeles();
  };

  function luz(){
    intensidadLuz += aumentoIntensidad;

    if(intensidadLuz >= 50){
      aumentoIntensidad = -1;
    }
    else if(intensidadLuz <= 15){
      aumentoIntensidad = 1;
    }

    intensidadLuz = p.constrain(intensidadLuz, 15, 50);
  }

  function interiorMovil(){
    const ruido = p.random(0, 2);

    p.push();
    p.tint(255, intensidadLuz * 1.35);
    p.image(iglesia, ruido - 6, p.height - (p.width * 1.78) + ruido, p.width + 12, p.width * 1.78);
    p.pop();
  }

  function angeles(){
    const anchoAngel = p.width * 0.30;
    const altoAngel = anchoAngel * 1.78;
    const temblor = p.random(4, 12);

    p.push();
    p.tint(255, 185 + intensidadLuz);
    p.image(angelIzq, p.random(8, 14), temblor, anchoAngel, altoAngel);
    p.image(angelDer, p.width - anchoAngel - p.random(8, 14), temblor, anchoAngel, altoAngel);
    p.pop();
  }

  function cuadradosDistorsion(){
    p.noStroke();
    p.rectMode(p.CENTER);

    for(let i = 0; i < 34; i++){
      p.fill(p.random(80, 210), p.random(22, 58));
      p.rect(
        p.random(0, p.width),
        p.random(0, p.height),
        p.random(8, 28),
        p.random(45, 135)
      );
    }
  }

  function lineasDistorsion(){
    p.stroke(p.random(150, 255), 32);
    p.strokeWeight(1);

    for(let y = 0; y < p.height; y += p.random(18, 86)){
      p.line(0, y, p.width, y + p.random(-4, 4));
    }

    for(let x = 0; x < p.width; x += p.random(18, 90)){
      p.line(x, 0, x + p.random(-4, 4), p.height);
    }
  }

  function lineasCentro(){
    if(intensidadFlecha <= 0){
      movimientoFlecha = 1;
    }
    else if(intensidadFlecha >= 50){
      intensidadFlecha = 0;
      posicionFlecha = -50;
    }

    intensidadFlecha += movimientoFlecha;
    posicionFlecha += movimientoFlecha;

    p.push();
    p.translate((p.width - 360) / 2, posicionFlecha);
    p.fill(255, intensidadFlecha * 2.5);
    p.noStroke();

    for(let i = 0; i < p.height + 220; i += 200){
      p.push();
      p.translate(0, i);
      p.quad(120, 10, 120, 40, 180, 90, 180, 60);
      p.quad(180, 60, 180, 90, 240, 40, 240, 10);
      p.pop();
    }

    p.pop();
  }

  function textoEspiral(){
    const frase = "El poder observa la ciudad. La ley baja sobre la arquitectura. Congreso, Babel, Estado, sombra. ";
    const total = frase.length;

    p.push();
    p.textFont("Courier New");
    p.textSize(p.width < 380 ? 12 : 15);
    p.textAlign(p.CENTER, p.CENTER);
    p.translate(p.width / 2, p.height / 2);

    for(let i = 0; i < total * 2; i++){
      const angulo = i * 0.18 + p.frameCount * 0.006;
      const radio = i * 0.72 - intensidadLuz * 1.45;
      const x = p.cos(angulo) * radio;
      const y = p.sin(angulo) * radio;

      p.fill(255, 232, 185, p.constrain(intensidadFlecha * 3, 20, 150));
      p.text(frase[i % total], x, y);
    }

    p.pop();
  }

  p.windowResized = () => {
    const holder = document.getElementById("iglesiaEffectDiv");
    const w = holder ? holder.offsetWidth : p.windowWidth;
    const h = holder ? holder.offsetHeight : p.windowHeight;

    p.resizeCanvas(w, h);
  };
};

new p5(congresoIglesiaSketch);
