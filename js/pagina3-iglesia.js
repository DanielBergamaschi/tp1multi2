let imagen1;
let imagen2;
let imagen3;
let imagen4;
let imagen5;

let galeria;

let intensidadLuz = 15

let aumentoIntensidad = 1

let movimientoFlecha = 1;
let intesidadFlecha = 0;
let posicionFlecha = -50;


function preload () {

    imagen1 = loadImage ("img/pagina3-iglesia/iglesia2.jpg");
    imagen2 = loadImage ("img/pagina3-iglesia/iglesia1.jpg");
    imagen3 = loadImage ("img/pagina3-iglesia/iglesia3.jpg");
    imagen4 = loadImage ("img/pagina3-iglesia/angel1.png");
    imagen5 = loadImage ("img/pagina3-iglesia/angel2.png");

    


}

function setup() {
    let canvas = createCanvas(360, 2000);
    canvas.parent('canvasDiv');



}



function draw() {
  background(0, 60);
  frameRate (20);

  crearGaleria ()
    
  luz ();
    
  cuadradosDistorsion ();

  lineasDistorsion ();

  lineasCentro ();


  textoEspiral() 


    push();
        tint (255, intensidadLuz);
        image (imagen1, random (0, 2), 2000-640+random (0, 2), 360, 640);
    pop();

    push();
        tint (255, intensidadLuz);
        image (imagen4, random (10, 15), random (5, 15), 360/3, 640/3);
        image (imagen5, random (225, 230), random (5, 15), 360/3, 640/3);

    pop();



}


function crearGaleria () {

galeria = [{imagen: imagen1,}, {imagen: imagen2,}, {imagen: imagen3},]



}

function interiorMovil () {


    push();
        tint (255, 100);
        image (galeria[floor(random (0,3))].imagen, random (0, 3), random (0, 3), 360, 640);
    pop();


}


function luz () {

    intensidadLuz+=aumentoIntensidad;


    if (intensidadLuz == 50) {
        aumentoIntensidad = -1
    } else if (intensidadLuz == 15) {
        aumentoIntensidad = 1
    }

    intensidadLuz = constrain (intensidadLuz, 15, 50);

}

//___________________CUADRADOS DISTORSION___________


function cuadradosDistorsion () {

    noStroke ();
    fill (random (20, 100), 25);
      rectMode (CENTER);
      for (i = 0; i < 400; i += 15) {
          rect (random (0, 360), random (0, 2000), 20, 100)
        }

}

function lineasDistorsion () {

   
      stroke (random (150, 255), 20);
      strokeWeight (1,2);
      
      for (i = 0; i < 2000; i += random (1, 100)) {
        line (i, 0, i, 2000);
        line (0, i, 360, i);
      }  

      for (i = 0; i < 360; i += random (1, 100)) {
        line (i, 0, i, 2000);
      }  

}

function lineasCentro (){



if (intesidadFlecha == 0) {
        movimientoFlecha = 1
    } else if (intesidadFlecha == 50) {
            intesidadFlecha = 0
            posicionFlecha = 0
    }


push ();
    fill (255, intesidadFlecha+=movimientoFlecha);
    noStroke ();

    for (i = 0; i < 600; i += 200) {
        translate (0, posicionFlecha+=movimientoFlecha)

        quad (120, 10, 120, 40, 180, 90, 180, 60);
        quad (180, 60, 180, 90, 240, 40, 240, 10);
    }
pop();


    
}


function textoEspiral() {
  push();
  textFont('Courier New');
  textSize(20); 
  const fraseEspiral = "El Señor bajó para observar la ciudad y la torre que los hombres estaban construyendo. 6 Entonces el Señor dijo: «Todos forman un solo pueblo y hablan un solo idioma; esto es solo el comienzo de sus obras y todo lo que se propongan lo podrán lograr. Será mejor que bajemos a confundir su idioma para que ya no se entiendan entre ellos mismos». De esta manera el Señor los dispersó desde allí por toda la tierra; por lo tanto, dejaron de construir la ciudad. 9 Por eso a la ciudad se le llamó Babel, porque fue allí donde el Señor confundió el lenguaje de todos los habitantes de la tierra y los dispersó por todo el mundo.";
  const total = fraseEspiral.length;
  
  translate(width / 2, height / 2 );
  
  for (let i = 0; i < total; i++) {
    const angulo = i * 0.18 + frameCount * 0.005 ; 
    const radio = i * 0.2 - intensidadLuz*3.5;
    const x = cos(angulo) * radio;
    const y = sin(angulo) * radio;
    
    fill(255, intesidadFlecha-50);
    textAlign(CENTER, CENTER);
    text(fraseEspiral[i % total], x, y);
  }
  pop();
}