let imagen1;
let imagen2;

function preload () {

    imagen1 = loadImage ("img/pagina8-medicina/esqueleto1.png");
    imagen2 = loadImage ("img/pagina8-medicina/esqueleto2.png");


}



function setup() {
    let canvas = createCanvas(1070*2, 640);
    canvas.parent('canvasDiv');



}



function draw() {
  background(0, 60);
  frameRate (20);



    push();
        tint (255, 255);
        image (imagen1, 0, 640-168*2, 1070*2, 168*2);
    pop();


}