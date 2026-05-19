let imagen1;
let imagen2;

let randomGaleria = 0;

let nexos;
let randomNexos = 0;
let nexoX1 = 70;
let nexoY1 = 315;
let nexoRadio = 60;

let nexoX2 = 230;
let nexoY2 = 360;

let intensidadLuz = 0

let aumentoIntensidad = 1


function preload () {

    imagen1 = loadImage ("img/pagina8-medicina/craneo3.jpg");


}



function setup() {
    let canvas = createCanvas(360, 640);
    canvas.parent('canvasDiv');

    crearGaleria ();

}



function draw() {
  background(0, 60);
  frameRate (20);


    randomGaleria = floor(random (0, 12));


    push();
        tint (255, 100);
        image (imagen1, random (0,3), random (40, 43), 585, 600);
    pop();


    luz ();

    push();


        fill (255, intensidadLuz);
        textAlign (CENTER);
        textFont ('Courier New');
        textSize (12);
        text (galeria[randomGaleria].texto, galeria[randomGaleria].posicionTextoX, galeria[randomGaleria].posicionTextoY, 30, 50);
    pop();




}


function crearGaleria () {

    galeria = [
        
        {posicionTextoX: 70, posicionTextoY: 335, texto:"Dust to dust"},
        {posicionTextoX: 70, posicionTextoY: 335, texto:"Le temps passe"},
        {posicionTextoX: 70, posicionTextoY: 335, texto:"la mort vient"},
        {posicionTextoX: 70, posicionTextoY: 335, texto:"Bedenke, dass du sterblich bist"},
        {posicionTextoX: 70, posicionTextoY: 335, texto:"Ricordati che devi morire"},
        {posicionTextoX: 70, posicionTextoY: 335, texto:"Mono no aware (物の哀れ)"},
        {posicionTextoX: 230, posicionTextoY: 360, texto: "Shogyō mujō (諸行無常)"},
        {posicionTextoX: 230, posicionTextoY: 360, texto: "Marana-sati (मरणसति)"},
        {posicionTextoX: 230, posicionTextoY: 360, texto: "In niz bogzared (این نیز بگذرد)"},
        {posicionTextoX: 230, posicionTextoY: 360, texto: "Polvo eres"},
        {posicionTextoX: 230, posicionTextoY: 360, texto: "al polvo volverás"},
        {posicionTextoX: 230, posicionTextoY: 360, texto: "Tempus fugit"},
        

    ]

}


function nexo () {

    randomNexos = floor(random (0,6));


    nexos = [

        {pagina: "pagina5-amia.html"},
        {pagina: "pagina6-once.html"},
        {pagina: "pagina7-colon.html"},
        {pagina: "pagina9-multimedia.html"},
        {pagina: "pagina10-ingenieria.html"},


    ]


}

  function mousePressed () {

    let botonNexo1 = dist(mouseX, mouseY, nexoX1, nexoY1);


    if (botonNexo1 < nexoRadio) {

    nexo ();

    location.replace(nexos[randomNexos].pagina)

    }

    let botonNexo2 = dist(mouseX, mouseY, nexoX2, nexoY2);


    if (botonNexo2 < nexoRadio) {

    nexo ();

    location.replace(nexos[randomNexos].pagina)

    }

  }


function luz () {

    intensidadLuz+=aumentoIntensidad;


    if (intensidadLuz == 100) {
        aumentoIntensidad = -1
    } else if (intensidadLuz == 0) {
        aumentoIntensidad = 1
    }

    intensidadLuz = constrain (intensidadLuz, 0, 100);

}



/*
function leerTexto () {


    if () {

    



    } else if () {



    } 

    else {
        
        push();
            fill (255, 100);
            textAlign (CENTER);
            textFont ('Courier New');
            textSize (12);
            text (galeria[randomGaleria].texto, galeria[randomGaleria].posicionTextoX, galeria[randomGaleria].posicionTextoY, 30, 50);
        pop();}




}*/