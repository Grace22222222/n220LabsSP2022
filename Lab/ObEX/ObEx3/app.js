//Grace Payne
//2/3/2022
//N220

//World Wrap Refactor

//INSTRUCTIONS

//Take your ball bounce assignment or world wrap and recode it using an object to store the ball's size, color, and velocity. No global variables or hardcoded values should be used in your update function.

//World Wrap for example



//let xPos=10;

//Setup Object and Start Position

let objBall ={

    x:10, y:50, ballColor:"#99FF33", size:40

} ;


//Setup

function setup() {

    createCanvas(800,600);

}

//Draw

function draw() {

    background(255);

    circle(objBall.x, objBall.y, objBall.size);
    
    fill(objBall.ballColor);

    objBall.x=objBall.x + 5;

        if (objBall.x==800){

            objBall.x=10;

        }


//Tried this out with position instead, yet it wouldn't work with the object functions. Not sure how to get it to work, as I know it is possible, yet I couldn't figure it out. I found another way to get it to work however

    /*xPos=xPos+5;

    
        if (xPos==800){

            xPos=10;

        }
*/
}

