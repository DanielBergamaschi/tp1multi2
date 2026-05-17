let imagen1;
let imagen2;

let randomGaleria = 0;

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


    push();


        fill (255, 100);
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
        {posicionTextoX: 230, posicionTextoY: 360, texto: "En polvo te convertirás"},
        {posicionTextoX: 230, posicionTextoY: 360, texto: "Tempus fugit"},
        

    ]

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