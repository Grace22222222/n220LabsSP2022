//Grace Payne
//2/3/2022
//N220

//Bouncing Ball Refactor

//INSTRUCTIONS

//Take your ball bounce assignment and recode it using an object to store the ball's size, color, and velocity. No global variables or hardcoded values should be used in your update function.

//BALL BOUNCE INSTRUCTIONS

//Make a canvas 800 px x 600 px     Create a sketch with a circle moving left and down at 5px per update. This speed should be stored as separate speed variables in your code (this is required to solve this problem).    Assume a 'world bounds' for this object to be 800x600   When the ball reaches the edge of the bounds, bounce it by multiplying the associated velocity variable by *= -1, to make the ball be moving in the opposite direction. If you have found a hit on the right or left bounds, it should be the x velocity variable you are modifying. If its on the top or bottom bounds, you should be modifying the y velocity variable.



//Setup Object and Start Position

//let xPos= 50;

//let yPos= 50;

let objBall ={

    x:50, y:50, ballColor:"99FF33", size:25

} ;


//Setup

function setup() {

    createCanvas(800,600)

    fill(objBall.ballColor);
    circle(objBall.x, objBall.y, objBall.size);

}

function draw() {

    //background(255);
    x=50 +5;
    y=50 -5;

}

