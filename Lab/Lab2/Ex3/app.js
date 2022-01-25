//Grace Payne
//1/24/2022
//N220

//World Wrap

//Position Start

var xPos=10;

//Canvas Creation

function setup() {
    createCanvas(800,600);
}


//Circle Creation & Movement


function draw() {

    background(255);
    circle(xPos,50,50);
    fill(0,215,167);
    xPos=xPos+5;

        if (xPos==800){

            xPos=10;

        }

}