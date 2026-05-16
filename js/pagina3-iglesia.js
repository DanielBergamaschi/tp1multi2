let imagen1;
let imagen2;
let imagen3;

let galeria;

let intensidadLuz = 15

let aumentoIntensidad = 1


function preload () {

    imagen1 = loadImage ("img/pagina3-iglesia/iglesia2.jpg");
    imagen2 = loadImage ("img/pagina3-iglesia/iglesia1.jpg");
    imagen3 = loadImage ("img/pagina3-iglesia/iglesia3.jpg");


}

function setup() {
    let canvas = createCanvas(360, 2000);
    canvas.parent('canvasDiv');



}



function draw() {
  background(0, 60);
  frameRate (20);

  crearGaleria ()
    
  luz ()
    
  cuadradosDistorsion ();

  lineasDistorsion ();

    console.log (intensidadLuz);

    push();
        tint (255, intensidadLuz);
        image (imagen1, random (0, 2), 2000-640+random (0, 2), 360, 640);
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
        line (random (0, 360), 0, random (0, 360), 2000);
        line (0, i, 320, i);
      }  

}

function lineasCentro (){




    
}