let curvaVelo1 = 0;
let curvaVelo2 = 0;

let curvaVelo1Y = 0;
let curvaVelo2Y = 0;

let bandera1 = true;
let bandera2 = true;
let bandera3 = true;
let bandera4 = true;
let bandera5 = true;
let bandera6 = true;

let cuadroTextoX = 0;
let cuadroTextoY = 0;

let ledLightFuente;

let imagen1;
let imagen2;
let imagen3;
let imagen4;
let imagen5;

let galeria;



function preload () {


    ledLightFuente = loadFont('fuentes/ledlight.otf');
    imagen1 = loadImage ("img/pagina4_logia/logia5.jpg");
    imagen2 = loadImage ("img/pagina4_logia/logia6.jpg");
    imagen3 = loadImage ("img/pagina4_logia/logia7.jpg");
    imagen4 = loadImage ("img/pagina4_logia/logia8.jpg");
    imagen5 = loadImage ("img/pagina4_logia/logia9.jpg");




}

function setup() {
    let canvas = createCanvas(300, 480);
    canvas.parent('canvasDiv');



  
}

function draw() {
  background(0, 20);
  frameRate (5);

    crearGaleria ();

  
   imagen1Funcion ();

   cuadradosTexto ();

    push ();
        noFill ();
        stroke (150, 150);
        strokeWeight (1);
        //veloMaya ();
    pop();


}


function movimientoVelo () {

        if (curvaVelo1 <= 180 && bandera1 === true) 
        {curvaVelo1 += 2*0.50} 
        else if (curvaVelo1 >= 120 && bandera1 === true) 
        {bandera1 = false}
        else if (curvaVelo1 > 120 && bandera1 === false)
        {curvaVelo1 -= 2*0.50}
        else if (curvaVelo1 == 120 && bandera1 === false) {bandera1 = true}

        if (curvaVelo2 <= 180 && bandera2 === true) 
        {curvaVelo2 += 2*0.25} 
        else if (curvaVelo2 >= 120 && bandera2 === true) 
        {bandera2 = false}
        else if (curvaVelo2 > 120 && bandera2 === false)
        {curvaVelo2 -= 2*0.25}
        else if (curvaVelo2 == 120 && bandera2 === false) {bandera2 = true}

         if (curvaVelo1Y <= 480 && bandera3 === true) 
        {curvaVelo1Y += 2*1.25} 
        else if (curvaVelo1Y >= 0 && bandera3 === true) 
        {bandera3 = false}
        else if (curvaVelo1Y > 0 && bandera3 === false)
        {curvaVelo1Y -= 2*1.25}
        else if (curvaVelo1Y == 0 && bandera3 === false) {bandera3 = true}

         if (curvaVelo2Y <= 480 && bandera4 === true) 
        {curvaVelo2Y += 2*1.25} 
        else if (curvaVelo2Y >= 0 && bandera4 === true) 
        {bandera4 = false}
        else if (curvaVelo2Y > 0 && bandera4 === false)
        {curvaVelo2Y -= 2*1.25}
        else if (curvaVelo2Y == 0 && bandera4 === false) {bandera4 = true}
}

function veloMaya () {

    movimientoVelo ();

    for (i = 0; i < 300; i += 10) {

        bezier (i+random (1, 5), 0, curvaVelo1, curvaVelo1Y, curvaVelo2, curvaVelo2Y, i-random (1,5), 480)


    }


}

function cajaTexto () {

        /*if (cuadroTextoX <= 100 && bandera5 === true) 
        {cuadroTextoX += 2*1.25} 
        else if (cuadroTextoX >= 0 && bandera5 === true) 
        {bandera5 = false}
        else if (cuadroTextoX > 0 && bandera5 === false)
        {cuadroTextoX -= 2*1.25}
        else if (cuadroTextoX == 0 && bandera5 === false) {bandera5 = true}


         if (cuadroTextoY <= 300 && bandera6 === true) 
        {cuadroTextoY += 2*1.25} 
        else if (cuadroTextoY >= 0 && bandera6 === true) 
        {bandera6 = false}
        else if (cuadroTextoY > 0 && bandera6 === false)
        {cuadroTextoY -= 2*1.25}
        else if (cuadroTextoY == 0 && bandera6 === false) {bandera6 = true}*/

        cuadroTextoX = random (0, 300);
        cuadroTextoY = random (0, 480);


}

function cuadradosTexto () {

    cajaTexto ();

    push();
        stroke (255, 50);
        strokeWeight (1);
        fill (0, 20);
        rect (cuadroTextoX-5, cuadroTextoY-15, cuadroTextoX+20, cuadroTextoY+10);
    pop();

    push();
        fill (255, 100);
        textFont (ledLightFuente);
        textSize (12);
        text ("El Eden esta bajo nuestros pies dijeron los rebeldes y con ese grito degollaron a los que escuchaban las voces del cielo", cuadroTextoX, cuadroTextoY, cuadroTextoX, cuadroTextoY);
    pop();



}


function imagen1Funcion () {

    push();
        tint (255, 20);
        for (i = 0; i < 5; i += 1) {
            image (galeria[i].imagen, galeria[i].posicionX, galeria[i].posicionY, galeria[i].ancho/4, galeria[i].largo/4);
        }
    pop();


}


function crearGaleria () {

    galeria = [
        
        {imagen:imagen1, ancho:613, largo:261, posicionX: random (15, 20), posicionY: random (15, 20),},
        {imagen:imagen2, ancho:156, largo:562, posicionX: random (95,), posicionY: 360,},
        {imagen:imagen3, ancho:708, largo:198, posicionX: random (0, 5), posicionY: random (195, 200),},
        {imagen:imagen4, ancho:72, largo:324, posicionX: random (275, 280), posicionY: 100,},
        {imagen:imagen5, ancho:189, largo:528, posicionX: random (0, 10), posicionY: random (295, 300),},

    ]

}