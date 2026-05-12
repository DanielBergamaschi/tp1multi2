let cuadroTextoX = 0;
let cuadroTextoY = 0;

let ledLightFuente;

let imagen1;
let imagen2;
let imagen3;
let imagen4;
let imagen5;

let galeria;

let mostrarCuadro = false;

let cajaTexto1;

let cuadroTamanioX = 0;
let cuadroTamanioY = 0;



function preload () {


    ledLightFuente = loadFont('fuentes/ledlight.otf');
    imagen1 = loadImage ("img/pagina4_logia/logia5.jpg");
    imagen2 = loadImage ("img/pagina4_logia/logia6.jpg");
    imagen3 = loadImage ("img/pagina4_logia/logia7.jpg");
    imagen4 = loadImage ("img/pagina4_logia/logia8.jpg");
    imagen5 = loadImage ("img/pagina4_logia/logia9.jpg");




}

function setup() {
    let canvas = createCanvas(360, 640);
    canvas.parent('canvasDiv');


    setInterval(() => {
        mostrarCuadro = !mostrarCuadro; //revisar operador ternario
        
        if (mostrarCuadro) {
            cajaTexto(); 
        }
    }, 500);


  
}

function draw() {
  background(0, 20);
  frameRate (20);

    crearGaleria ();

  

    if (mostrarCuadro) {
            imagen1Funcion ();
            cuadradosTexto();


        }

    
}


function cajaTexto () {

        cuadroTextoX = random (0, 360);
        cuadroTextoY = random (0, 640);

        cuadroTamanioX = random (70, 100);
        cuadroTamanioY = random (100, 150);

}

function cuadradosTexto () {




    push();

        cajaTexto1 = ledLightFuente.textBounds ("El Eden esta bajo nuestros pies dijeron los rebeldes y con ese grito degollaron a los que escuchaban las voces del cielo", cuadroTextoX, cuadroTextoY, 12)

        stroke (255, 50);
        strokeWeight (1);
        fill (0, 20);
        rect (cajaTexto1.x-4, cajaTexto1.y-4, cuadroTamanioX, cuadroTamanioY+5);
    pop();

        push();
            for (let i = 1; i < 20; i +=5) {
            noFill()
            stroke(255, 50 / i); 
            strokeWeight(i);
            rect (cajaTexto1.x-4, cajaTexto1.y-4, cuadroTamanioX, cuadroTamanioY+5);
        }
        pop();

    push();
        fill (255, 100);
        textFont (ledLightFuente);
        textSize (12);
        text ("El Eden esta bajo nuestros pies dijeron los rebeldes y con ese grito degollaron a los que escuchaban las voces del cielo", cuadroTextoX, cuadroTextoY, cuadroTamanioX, cuadroTamanioY);
    pop();

    

}


function imagen1Funcion () {

    push();
        tint (255, 150);
        for (i = 0; i < 5; i += 1) {
            image (galeria[i].imagen, galeria[i].posicionX, galeria[i].posicionY, galeria[i].ancho/4, galeria[i].largo/4);
        }
    pop();


}


function crearGaleria () {

    galeria = [
        
        {imagen:imagen1, ancho:613, largo:261, posicionX: random (0, 360), posicionY: random (0, 640),},
        {imagen:imagen2, ancho:156, largo:562, posicionX: random (0, 360), posicionY: random (0, 640),},
        {imagen:imagen3, ancho:708, largo:198, posicionX: random (0, 360), posicionY: random (0, 640),},
        {imagen:imagen4, ancho:72, largo:324, posicionX: random (0, 360), posicionY: random (0, 640),},
        {imagen:imagen5, ancho:189, largo:528, posicionX: random (0, 360), posicionY: random (0, 640),},

    ]

}