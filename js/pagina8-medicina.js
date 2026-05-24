let imagen1;
let imagen2;
let imagen3;

let randomGaleria = 0;

let nexoX1 = 70;
let nexoY1 = 315;
let nexoRadio = 45;

let nexoX2 = 230;
let nexoY2 = 360;

let nexoX3 = 50;
let nexoY3 = 70;

let nexoX4 = 50;
let nexoY4 = 120;

let nexoX5 = 260;
let nexoY5 = 140;

let intensidadLuz = 0

let aumentoIntensidad = 1

let bandera1 = false;


function preload () {

    imagen1 = loadImage ("img/pagina8-medicina/craneo3.jpg");
    imagen2 = loadImage ("img/pagina8-medicina/reloj1.png");
    imagen3 = loadImage ("img/pagina8-medicina/pirata.jpg");



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
        tint (255, intensidadLuz);
        image (imagen3, random (0,3), random (6, 10), 800/8, 600/8);
    pop();

    push();
        fill (0, 45);
        noStroke();
        rect (0, 0, 100, 41);
    pop();

    push();
        tint (255, intensidadLuz);
        image (imagen2, random (0,3), random (90, 93), 800/10, 600/10);
    pop();


    luz ();

    push();


        fill (255, intensidadLuz);
        textAlign (CENTER);
        textFont ('Courier New');
        textSize (12);
        text (galeria[randomGaleria].texto, galeria[randomGaleria].posicionTextoX, galeria[randomGaleria].posicionTextoY, 30, 50);
    pop();

    cuadradosDistorsion ();

    lineasDistorsion ();


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


  function mousePressed () {

        let botonNexo1 = dist(mouseX, mouseY, nexoX1, nexoY1);


        if (botonNexo1 < nexoRadio) {


        location.replace("pagina5-amia.html")

        }

        let botonNexo2 = dist(mouseX, mouseY, nexoX2, nexoY2);


        if (botonNexo2 < nexoRadio) {


        location.replace("pagina6-once.html")

        }

        let botonNexo3 = dist(mouseX, mouseY, nexoX3, nexoY3);


        if (botonNexo3 < nexoRadio) {


        location.replace("pagina7-colon.html")

        }

        let botonNexo4 = dist(mouseX, mouseY, nexoX4, nexoY4);


        if (botonNexo4 < nexoRadio) {


        location.replace("pagina9-multimedia.html")

        }

        let botonNexo5 = dist(mouseX, mouseY, nexoX5, nexoY5);


        if (botonNexo5 < nexoRadio) {


        location.replace("pagina10-ingenieria.html")

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

//___________________CUADRADOS DISTORSION___________


function cuadradosDistorsion () {

    push ();
        noStroke ();
        fill (random (20, 100), 25);
        rectMode (CENTER);
        for (i = 0; i < 400; i += 15) {
            rect (random (0, 360), random (0, 640), 20, 100)
            }
    pop();

}

function lineasDistorsion () {

    push();
        stroke (random (150, 255), 20);
        strokeWeight (1,2);
        
        for (i = 0; i < 640; i += random (1, 100)) {
            line (0, i, 360, i);
        }  

        for (i = 0; i < 360; i += random (1, 100)) {
            line (i, 0, i, 2000);
        }  

    pop();

     push();
        stroke (0, 255)
        line (0, 0, 0, 640);
    pop();

}


function cuadroFinal () {


            push();
                stroke (255)
                fill (0, 200)
                rect (20, 20, 320, 620)
            pop();
            push();
                fill (255, 255);
                textAlign (CENTER);
                textFont ('Courier New');
                textSize (20);
                text ( "Oculta de la luz en las tinieblas de las cavernas primordiales, me había familiarizado con los misterios oscuros de la vieja Tierra. Hay una astucia oculta en el decadente orden cósmico que me ha atrapado. Buenos Aires ha sido llamada la ciudad de los encuentros, pero es más que eso: es la ciudad de los velos de atardecer tiernos sobre la ruina, donde se permite que el horror no muerto cruce el abismo que se abre entre la conciencia y la materia. Formas sin nombre acechan aún en los lugares tenebrosos del mundo... 𝑏̥̊⃝𝑎̥̊⃝𝑏̥̊⃝𝑒̥̊⃝𝑙̥̊⃝𝑏̥̊⃝ｂⓐｂ𝐄𝓛𝑎̥̊⃝𝑏̥̊⃝𝑒̥̊⃝ʅǝqɐq𝑙̥̊⃝",
                     25, 25, 315, 615);
            pop();

}