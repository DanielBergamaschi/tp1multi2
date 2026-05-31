let imagen1;

let nexos;
let randomNexos = 0;

let bandera1 = false;

function preload () {

    imagen1 = loadImage ("img/pagina9-multimedia/pantalla1.jpg");
  
    
}

function setup() {
    let canvas = createCanvas(360, 640);
    canvas.parent('canvasDiv');

}



function draw() {
  background(0, 60);
  frameRate (20);


   push();
        tint (255, 100);
        image (imagen1, random (0, 2), random (0, 2), 360, 640);
    pop();


    push();
        fill (255, random (20, 60));
        textAlign (CENTER);
        textFont ('Courier New');
        textSize (15);
        text ("ʅǝqɐq", random (220, 223), random (310, 311));
        text ("⧼*⧽*⧼*⧽*", random (223, 224), random (360, 361));
    pop();
  

    cuadradosDistorsion ();

    lineasDistorsion ();

    if (bandera1) {

    cuadroFinal ();


    }

}


//___________________CUADRADOS DISTORSION___________


function cuadradosDistorsion () {

    noStroke ();
    fill (random (20, 100), 25);
      rectMode (CENTER);
      for (i = 0; i < 400; i += 15) {
          rect (random (0, 360), random (0, 640), 20, 100)
        }

}

function lineasDistorsion () {

   
      stroke (random (150, 255), 20);
      strokeWeight (1,2);
      
      for (i = 0; i < 640; i += random (1, 100)) {
        line (0, i, 360, i);
      }  

      for (i = 0; i < 360; i += random (1, 100)) {
        line (i, 0, i, 2000);
      }  

      push();
        stroke (0, 255)
        line (0, 0, 0, 640);
    pop();

}

function mousePressed () {


 if (mouseX >= 140 && mouseX < 220 && mouseY <= 445 && mouseY >= 395) {
            
            bandera1 = true;

            setTimeout(cambiarPagina1, 20000)     


            
        } else if (mouseX >= 5 && mouseX < 55 && mouseY <= 45 && mouseY >= 5) {
            
            
            bandera1 = true;

            setTimeout(cambiarPagina2, 20000)

            
        } else if (mouseX >= 190 && mouseX < 270 && mouseY <= 330 && mouseY >= 280) {
            
             bandera1 = true;

            setTimeout(cambiarPagina3, 20000)


            
        } else if (mouseX >= 300 && mouseX < 350 && mouseY <= 110 && mouseY >= 70) {
            
            
            bandera1 = true;

            setTimeout(cambiarPagina4, 20000)

            
        }

}

function cambiarPagina1 () {


            location.replace("pagina6-once.html")

}

function cambiarPagina2 () {


            location.replace("pagina7-colon.html")

}

function cambiarPagina3 () {


            location.replace("pagina8-medicina.html")

}

function cambiarPagina4 () {


            location.replace("pagina10-ingenieria.html")
}

function cuadroFinal () {


            push();
                stroke (255)
                fill (0, 200)
                rect (180, 320, 320, 620)
            pop();
            push();
                fill (255, 255);
                textAlign (CENTER);
                textFont ('Courier New');
                textSize (14.5);
                text ( "Babel es equivalente al Infocalipsis. Es un virus que tiende a dividir las lenguas en vez de hacerlas converger. El cerebro humano recién nacido no tiene estructura. A medida que el niño aprende un idioma, el cerebro en desarrollo se estructura adecuadamente, y el lenguaje queda grabado en el Hardware. Un virus del lenguaje es un virus informático que puede convertirse en un virus neurológico, puede modificar el ADN del núcleo celular. El metaverso es una estructura ficticia hecha de programas y los programas no son sino una forma del habla: una que los ordenadores pueden entender. Hemos dejado de ser seres humanos para pasar a ser vectores o huéspedes de información autorreplicante. La propia sociedad es producto de la infección del virus y la transición de las sociedades nómades a las agriculturas se produjo a partir de la programación neurolingüística. En forma binaria, un virus puede rebotar de un sitio a otro del universo a la velocidad de la luz. Existe una relación directa entre magia, programación y virosidad ... 𝑏̥̊⃝𝑎̥̊⃝𝑏̥̊⃝𝑒̥̊⃝𝑙̥̊⃝𝑏̥̊⃝ｂⓐｂ𝐄𝓛𝑎̥̊⃝𝑏̥̊⃝𝑒̥̊⃝ʅǝqɐq𝑙̥̊⃝",
                     180, 320, 315, 615);
            pop();

}