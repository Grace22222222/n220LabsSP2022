//Grace Payne
//2/3/2022
//N220

//Virtual Pet

//INSTRUCTIONS

//Create an object with properties for the x, y, and size of a circle. Add one more property: offsetX   In the draw function,       if the mouse is down - subtract 1 from offsetX, down to a lowest number of zero   if the mouse is up - add 1 to offsetX   draw the circle at mouseX and mouseY, but offset in the x direction by the amount of offsetX.   ( use if(mousePressed) { to check if the mouse is down. )

//Setup

function setup() {

    createCanvas(500,500);

}

//Setting up Object

let objBall ={

    x:20, y:20, ballColor:"990000", size:50


} ;

//Drawing

function draw() {

    var x = Event.offsetX;

        if(mousePressed) {

            offsetX-= 1;

        }

        else {

            offsetX+= 1;

        }

        circle(objBall.x, objBall.y, objBall.size);

}