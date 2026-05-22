let cuadroTextoX = 0;
let cuadroTextoY = 0;

let ledLightFuente;

let imagen1;
let imagen2;
let imagen3;
let imagen4;
let imagen5;
let imagen6;
let imagen7;
let imagen8;
let imagen9;
let imagen10;
let imagen11;
let imagen12;
let imagen13;


let galeria;

let mostrarCuadro = false;

let cajaTexto1;

let cuadroTamanioX = 0;
let cuadroTamanioY = 0;

let randomGaleria = 0;



function preload () {


    ledLightFuente = loadFont('fuentes/ledlight.otf');
    imagen1 = loadImage ("img/pagina4_logia/logia5.jpg");
    imagen2 = loadImage ("img/pagina4_logia/logia6.jpg");
    imagen3 = loadImage ("img/pagina4_logia/logia7.jpg");
    imagen4 = loadImage ("img/pagina4_logia/logia8.jpg");
    imagen5 = loadImage ("img/pagina4_logia/logia9.jpg");
    imagen6 = loadImage ("img/pagina4_logia/rostro1.jpg");
    imagen7 = loadImage ("img/pagina4_logia/rostro2.jpg");
    imagen8 = loadImage ("img/pagina4_logia/logia10.jpg");
    imagen9 = loadImage ("img/pagina4_logia/logia11.jpg");
    imagen10 = loadImage ("img/pagina4_logia/logia12.jpg");
    imagen11 = loadImage ("img/pagina4_logia/oculto1.png");
    imagen12 = loadImage ("img/pagina4_logia/oculto2.png");






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

    setInterval(() => {
        mostrarCuadro = !mostrarCuadro; 
        
        if (mostrarCuadro) {
            imagen2Funcion(); 
        }
    }, 1000);


     setInterval(() => {
        mostrarCuadro = !mostrarCuadro; 
        
        if (mostrarCuadro) {imagen3Funcion (); 

        }
    }, 1300);


  
}

function draw() {
  background(0, 20);
  frameRate (13);

    crearGaleria ();

  

    if (mostrarCuadro) {
            imagen1Funcion ();
            cuadradosTexto();
            


        }

    
}


function cajaTexto () {

        cuadroTextoX1 = random (80, 100);
        cuadroTextoY1 = random (40, 60);

        cuadroTextoX2 = random (210, 250);
        cuadroTextoY2 = random (500, 520);

        cuadroTamanioX = random (70, 110);
        cuadroTamanioY = random (80, 100);

        randomGaleria = floor(random(8, 18));

}

function cuadradosTexto () {




    push();

        cajaTexto1 = ledLightFuente.textBounds (galeria[randomGaleria].texto, galeria[randomGaleria].posicionTextoX, galeria[randomGaleria].posicionTextoY, 12)

        stroke (255, 50);
        strokeWeight (1);
        fill (0, 20);
        rect (cajaTexto1.x-4, cajaTexto1.y-4, cuadroTamanioX+10, cuadroTamanioY+5);
    pop();

        push();
            for (let i = 1; i < 20; i +=5) {
            noFill()
            stroke(255, 50 / i); 
            strokeWeight(i);
            rect (cajaTexto1.x-4, cajaTexto1.y-4, cuadroTamanioX+10, cuadroTamanioY+5);
        }
        pop();

    push();
        fill (255, 255);
        textAlign (CENTER);
        textFont (ledLightFuente);
        textSize (12);
        text (galeria[randomGaleria].texto, galeria[randomGaleria].posicionTextoX, galeria[randomGaleria].posicionTextoY, cuadroTamanioX, cuadroTamanioY);
    pop();

    

}


function imagen1Funcion () {

    push();
        tint (255, 150);
        for (i = 0; i < 8; i += 1) {
            image (galeria[i].imagen, galeria[i].posicionX, galeria[i].posicionY, galeria[i].ancho/4, galeria[i].largo/4);
        }
    pop();

   


}

function imagen2Funcion () {

    push();
        tint (255, 255);
            for (i = 18; i < 20; i += 1) {
            image (galeria[i].imagen, galeria[i].posicionX, galeria[i].posicionY, galeria[i].ancho/4, galeria[i].largo/4);
        }
    pop();

    push();
        fill (255, 5);
        stroke (255)
        strokeWeight (2);
        
        rect (210, 150, 363/4, 408/4, 5);
    pop ();


    push();
        fill (255, 5);
        stroke (255)
        strokeWeight (2)   
        rect (60, 430, 363/4, 408/4, 5);
    pop ();

}

function imagen3Funcion () {

    push();
        tint (255, 255);
            for (i = 20; i < 22; i += 1) {
            image (galeria[i].imagen, galeria[i].posicionX, galeria[i].posicionY, galeria[i].ancho/4, galeria[i].largo/4);
        }
    pop();

    push();
        fill (255, 5);
        stroke (255)
        strokeWeight (2);
        
        rect (200, 350, 90, 90, 5);
    pop ();


    push();
        fill (255, 5);
        stroke (255)
        strokeWeight (2)   
        rect (80, 275, 90, 90, 5);
    pop ();



}

//SELECCION DE LINKS

  function mousePressed () {

        if (mouseX >= 210 && mouseX < 210+363/4 && mouseY <= 150+408/4 && mouseY >= 150) {
            
            
              location.replace("pagina2-barolo.html")

            
        } else if (mouseX >= 60 && mouseX < 60+363/4 && mouseY <=430+408/4 && mouseY >= 430) {
            
            
                          location.replace("pagina5-amia.html")

            
        }  else if (mouseX >= 80 && mouseX < 170 && mouseY <=365 && mouseY >= 275) {

            
                          location.replace("pagina6-once.html")

            
        }  else if (mouseX >= 200 && mouseX < 290 && mouseY <=440 && mouseY >= 350) {
            

                          location.replace("pagina7-colon.html")

            
        }
    }

function crearGaleria () {

    galeria = [
        //imagenes funcion 1
        {imagen:imagen1, ancho:613, largo:261, posicionX: random (0, 360), posicionY: random (0, 640),},
        {imagen:imagen2, ancho:156, largo:562, posicionX: random (0, 360), posicionY: random (0, 640),},
        {imagen:imagen3, ancho:708, largo:198, posicionX: random (0, 360), posicionY: random (0, 640),},
        {imagen:imagen4, ancho:72, largo:324, posicionX: random (0, 360), posicionY: random (0, 640),},
        {imagen:imagen5, ancho:189, largo:528, posicionX: random (0, 360), posicionY: random (0, 640),},
        {imagen:imagen8, ancho:1413/random (3,5), largo:3620/random (3,5), posicionX: random (0, 360), posicionY: random (0, 640),},
        {imagen:imagen9, ancho:2205/random (3,5), largo:2305/random (3,5), posicionX: random (0, 360), posicionY: random (0, 640),},
        {imagen:imagen10, ancho:1309/5, largo:3807/5, posicionX: random (0, 360), posicionY: random (0, 640),},
        //texto
        {posicionTextoX: 80, posicionTextoY: 60, texto:"oculta de la luz en las tinieblas de las cavernas primordiales"},
        {posicionTextoX: 80, posicionTextoY: 60, texto:"me habia familiarizado con los misterios oscuros de la vieja Tierra"},
        {posicionTextoX: 80, posicionTextoY: 60, texto:"hay una astucia oculta en el decadente orden cosmico que me ha atrapado"},
        {posicionTextoX: 80, posicionTextoY: 60, texto:"Buenos Aires ha sido llamada la ciudad de los encuentros"},
        {posicionTextoX: 80, posicionTextoY: 60, texto:"pero es mas que eso pero es mas que eso pero es mas que eso"},
        {posicionTextoX: 210, posicionTextoY: 500, texto: "es la ciudad de las la ciudad de las la ciudad de las la ciudad de las"},
        {posicionTextoX: 210, posicionTextoY: 500, texto: "con velos de atardecer tiernos sobre la ruina"},
        {posicionTextoX: 210, posicionTextoY: 500, texto: "donde se permite que el horror no muerto cruce"},
        {posicionTextoX: 210, posicionTextoY: 500, texto: "el abismo que se abre entre la conciencia y la materia"},
        {posicionTextoX: 210, posicionTextoY: 500, texto: "formas sin nombre acechan aun en los lugares tenebrosos del mundo"},
        //imagenes funcion 2 y 3
        {imagen:imagen6, ancho:363, largo:408, posicionX: 210, posicionY: 150,},
        {imagen:imagen7, ancho:363, largo:408, posicionX: 60, posicionY: 430,},
        {imagen:imagen12, ancho:360, largo:360, posicionX: 80, posicionY: 275,},
        {imagen:imagen11, ancho:360, largo:360, posicionX: 200, posicionY: 350,},

       

    ]

}