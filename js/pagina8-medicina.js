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
    
    textos ();

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

    if (bandera1) {

    cuadroFinal ();


    }

    

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

            bandera1 = true;

            setTimeout(cambiarPagina5, 10000)


        }

        let botonNexo2 = dist(mouseX, mouseY, nexoX2, nexoY2);


        if (botonNexo2 < nexoRadio) {


              bandera1 = true;

            setTimeout(cambiarPagina1, 10000)


        

        }

        let botonNexo3 = dist(mouseX, mouseY, nexoX3, nexoY3);


        if (botonNexo3 < nexoRadio) {

            bandera1 = true;

            setTimeout(cambiarPagina2, 10000)


        }

        let botonNexo4 = dist(mouseX, mouseY, nexoX4, nexoY4);


        if (botonNexo4 < nexoRadio) {

            bandera1 = true;

            setTimeout(cambiarPagina3, 10000)


        }

        let botonNexo5 = dist(mouseX, mouseY, nexoX5, nexoY5);


        if (botonNexo5 < nexoRadio) {

            bandera1 = true;

            setTimeout(cambiarPagina4, 10000)


        }

  }


  function cambiarPagina1 () {


location.replace("pagina6-once.html")

}

function cambiarPagina2 () {


        location.replace("pagina7-colon.html")

}

function cambiarPagina3 () {


        location.replace("pagina9-multimedia.html")

}

function cambiarPagina4 () {


        location.replace("pagina10-ingenieria.html")
}

function cambiarPagina5 () {


            location.replace("pagina5-amia.html")

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
                textSize (14);
                text ( "Así, el fenómeno más simple, y para colmo el más elemental —el de la nutrición— es un ejemplo típico de esta interacción maléfica, ya que el acto mismo de nutrirse, de sostener la vida, implica específicamente la muerte de otras especies vivientes. Cada nacimiento, cada perpetuación de la vida, aumenta el dominio de la muerte. Es un círculo sin fin, tan vertiginoso como el torbellino de las estrellas o el ciclo del tiempo. En este círculo interminable, el simple hecho de vivir, de respirar, alimentarse, dormir y despertar, implica la existencia y el crecimiento del mal. Lo que los darwinistas llaman selección natural y la supervivencia del más apto son la prueba flagrante de la depravación fundamental del universo. Pues, en última instancia, si este mundo fuera la obra de un Dios bueno y justo —y no la de un demiurgo incompetente y profundamente malévolo— habría que imputar a ese Dios los pensamientos e imaginaciones más infames, los actos de represión más despiadados. Pues ¿cómo podría un Dios supremo haber concebido las increíbles secuencias, mecanismos, masacres y aniquilaciones que constituyen la práctica misma de la vida?...",
                     25, 25, 315, 615);
            pop();

}

function textos() {
    push();
    fill(255, 180);
    textSize(10);
    textFont('sans-serif'); 
    
    let separacion = 300; 
    let velocidad = frameCount * 1; 
    let totalCopias = 5;
    let loop_total = totalCopias * separacion;
    
    // coordenadas
    for (let i = 0; i < totalCopias; i++) {
        let yPos = (velocidad + (i * separacion)) % loop_total;

        push();
        translate(345, yPos - separacion); 
        rotate(HALF_PI);
        text('-34.59833, -58.39833 -34.59833, -58.39833 -34.59833, -58.39833', 0, 0);
        pop();
    }
    
    pop();
  
}