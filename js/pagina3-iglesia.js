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


let nexoX = 180;
let nexoY = 1000;
let nexoRadio = 50;

let nexoX2 = 180;
let nexoY2 = 720;

let nexoX3 = 180;
let nexoY3 = 1255;

let nexoX4 = 180;
let nexoY4 = 1650;

let bandera1 = false;


function preload () {

    imagen1 = loadImage ("img/pagina3-iglesia/iglesia2.jpg");
    imagen4 = loadImage ("img/pagina3-iglesia/angel1.png");
    imagen5 = loadImage ("img/pagina3-iglesia/angel2.png");
    imagen3 = loadImage ("img/pagina3-iglesia/angeles1.png");
    imagen2 = loadImage ("img/pagina3-iglesia/angeles2.png");

    


}

function setup() {
    let canvas = createCanvas(360, 2000);
    canvas.parent('canvasDiv');



}



function draw() {
  background(0, 60);
  frameRate (20);

  crearGaleria ()
    
  textos ();

  luz ();
    
  cuadradosDistorsion ();

  lineasDistorsion ();

  lineasCentro ();


  textoEspiral();

  cruzAbajo ();


    push();
        tint (255, intensidadLuz-10);
        image (imagen1, random (0, 2), 2000-640+random (0, 2), 360, 640);
    pop();

    push();
        tint (255, intensidadLuz);
        image (imagen4, random (10, 15), random (5, 15), 360/3, 640/3);
        image (imagen5, random (225, 230), random (5, 15), 360/3, 640/3);

    pop();

    push();
        tint (255, intensidadLuz);
        imageMode (CENTER);
        image (imagen2, random (177, 183), random (1250, 1265), 865/3, 345/3);
        image (imagen3, random (177, 183), random (715, 730), 865/3, 323/3);

    pop();

    push ();
        if (bandera1) {

        cuadroFinal ();


        }
    pop ();


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
        line (0, i, 360, i);
      }  

      for (i = 0; i < 360; i += random (1, 100)) {
        line (i, 0, i, 2000);
      }  

    push();
        stroke (0, 255)
        line (0, 0, 0, 2000);
    pop();


}

function lineasCentro (){



if (intesidadFlecha == 0) {
        movimientoFlecha = 1
    } else if (intesidadFlecha == 110) {
            intesidadFlecha = 0
            posicionFlecha = 0
    }


push ();
    fill (255, intesidadFlecha+=movimientoFlecha);
    noStroke ();
    rectMode (CENTER);
    for (i = 0; i < 3; i += 1) {
        translate (0, posicionFlecha+=movimientoFlecha)


        rect (180, 10, 120, 20);
        rect (180, -25, 20, 50)
        rect (180, 85, 20, 130)

        

        //quad (120, 10, 120, 40, 180, 90, 180, 60);
        //quad (180, 60, 180, 90, 240, 40, 240, 10);
    }
pop();


    
}



function cruzAbajo () {


    push ();

        translate (0, 1650)
        fill (intensidadLuz, intensidadLuz);
        //stroke (0, 255);
        //noFill ();
         for (let i = 1; i < 25; i +=1) {
            stroke(60, 100 / i); 
            strokeWeight(i);
        rect (180, 10, 120, 20);
        rect (180, -25, 20, 50)
        rect (180, 85, 20, 130)
         }
    pop ();

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

  function mousePressed () {

    let botonNexo = dist(mouseX, mouseY, nexoX, nexoY);


    if (botonNexo < nexoRadio) {


            bandera1 = true;

            setTimeout(cambiarPagina1, 10000)
        

    }
    
    let botonNexo2 = dist(mouseX, mouseY, nexoX2, nexoY2);


    if (botonNexo2 < nexoRadio) {

            bandera1 = true;

            setTimeout(cambiarPagina2, 10000)

    }

    let botonNexo3 = dist(mouseX, mouseY, nexoX3, nexoY3);


    if (botonNexo3 < nexoRadio) {

            bandera1 = true;

            setTimeout(cambiarPagina3, 10000)


    }

    let botonNexo4 = dist(mouseX, mouseY, nexoX4, nexoY4);


    if (botonNexo4 < nexoRadio) {

            bandera1 = true;

            setTimeout(cambiarPagina4, 10000)

    }
  }

  function cambiarPagina1 () {


    location.replace("Pagina1-congreso.html")

}

function cambiarPagina2 () {


    location.replace("pagina2-barolo.html")

}

function cambiarPagina3 () {


    location.replace("pagina5-amia.html")

}

function cambiarPagina4 () {


    location.replace("pagina6-once.html")
}


  function cuadroFinal () {


            push();
                rectMode (CORNERS);
                stroke (255)
                fill (0, 200)
                rect (20, 20, 340, 1980)
            pop();
            push();
                fill (255, 255);
                textAlign (CENTER);
                textFont ('Courier New');
                textSize (20);
                text ( "Tenía entonces toda la tierra una sola lengua y unas mismas palabras. Y aconteció que, cuando salieron de oriente, hallaron una llanura en la tierra de Sinar, y se asentaron allí. Y se dijeron unos a otros: Vamos, hagamos ladrillo y cozámoslo con fuego. Y les sirvió el ladrillo en lugar de piedra, y el asfalto en lugar de mezcla. Y dijeron: Vamos, edifiquémonos una ciudad y una torre, cuya cúspide llegue al cielo; y hagámonos un nombre, por si fuéremos esparcidos sobre la faz de toda la tierra. Y descendió Jehová para ver la ciudad y la torre que edificaban los hijos de los hombres. Y dijo Jehová: He aquí el pueblo es uno, y todos estos tienen un solo lenguaje; y han comenzado la obra, y nada les hará desistir ahora de lo que han pensado hacer. Ahora, pues, descendamos, y confundamos allí su lengua, para que ninguno entienda el habla de su compañero. Así los esparció Jehová desde allí sobre la faz de toda la tierra, y dejaron de edificar la ciudad. Por esto fue llamado el nombre de ella Babel, porque allí confundió Jehová el lenguaje de toda la tierra, y desde allí los esparció sobre la faz de toda la tierra...",
                     180, 1020, 315, 1980);
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
        fill (50, intensidadLuz);
        text('-34.61028, -58.40333-34.61028, -58.40333-34.61028, -58.40333 -34.61028, -58.40333 -34.61028, -58.40333', 0, 0);
        pop();
    }
    
    pop();
  
}