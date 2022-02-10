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


//Tried putting mouseX both as the x variable, and the value of it in the objBall function. Neither worked and caused errors
let objBall ={

    x:100, y:100, ballColor:"#99FFFF", size:50


} ;

//Drawing

let offsetX=100;

//Had to put mouseX and mouseY within the circle function in order to get it to work. Not sure why I thought putting it in the object function would work now that I think about it

function draw() {

    background(255);
    fill(objBall.ballColor);
    circle(mouseX+offsetX, mouseY, objBall.size);
    
    if(offsetX<=0) {

        offsetX=0;

    }

    if(mouseIsPressed) {

        offsetX+= -1;

    }

    else{

        offsetX+= +1;
    }


    /*

    var x = Event.offsetX;

        if(mousePressed) {

            offsetX-= 1;

        }

        else {

            offsetX+= 1;

        }

    */

}