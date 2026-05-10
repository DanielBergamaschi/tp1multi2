let curvaVelo1 = 0;
let curvaVelo2 = 0;

let bandera1 = true;
let bandera2 = true;



function setup() {
    let canvas = createCanvas(300, 480);
    canvas.parent('canvasDiv');

 // palacio_barolo.filter(THRESHOLD, 0.5);
  
}

function draw() {
  background(0, 20);
  frameRate (20);
  
    push ();
        noFill ();
        stroke (150, 150);
        strokeWeight (1);
        veloMaya ();
    pop();
  
}


function movimientoVelo () {

        if (curvaVelo1 <= 300 && bandera1 === true) 
        {curvaVelo1 += 2*1.50} 
        else if (curvaVelo1 >= 0 && bandera1 === true) 
        {bandera1 = false}
        else if (curvaVelo1 > 0 && bandera1 === false)
        {curvaVelo1 -= 2*1.50}
        else if (curvaVelo1 == 0 && bandera1 === false) {bandera1 = true}

        if (curvaVelo2 <= 300 && bandera2 === true) 
        {curvaVelo2 += 2*1.25} 
        else if (curvaVelo2 >= 0 && bandera2 === true) 
        {bandera2 = false}
        else if (curvaVelo2 > 0 && bandera2 === false)
        {curvaVelo2 -= 2*1.25}
        else if (curvaVelo2 == 0 && bandera2 === false) {bandera2 = true}
    }

function veloMaya () {

    movimientoVelo ();

    for (i = 0; i < 300; i += 10) {

        bezier (i+random (1, 5), 0, curvaVelo1, 0, curvaVelo2, 0, i-random (1,5), 480)


    }


}