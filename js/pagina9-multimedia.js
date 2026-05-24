let imagen1;

let nexos;
let randomNexos = 0;

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
            
            

            location.replace("pagina6-once.html")

            
        } else if (mouseX >= 5 && mouseX < 55 && mouseY <= 45 && mouseY >= 5) {
            
            

            location.replace("pagina7-colon.html")

            
        } else if (mouseX >= 190 && mouseX < 270 && mouseY <= 330 && mouseY >= 280) {
            
            

            location.replace("pagina8-medicina.html")

            
        } else if (mouseX >= 300 && mouseX < 350 && mouseY <= 110 && mouseY >= 70) {
            
            

            location.replace("pagina10-ingenieria.html")

            
        }

}