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

}

function nexo () {

    randomNexos = floor(random (0,4));


    nexos = [

        {pagina: "pagina6-once.html"},
        {pagina: "pagina7-colon.html"},
        {pagina: "pagina8-medicina.html"},
        {pagina: "pagina10-ingenieria.html"},

    ]


}


function mousePressed () {


 if (mouseX >= 140 && mouseX < 220 && mouseY <= 445 && mouseY >= 395) {
            
            
            nexo ();

            location.replace(nexos[randomNexos].pagina)

            
        }

}