//Grace Payne
//1/25/2022
//N220


//Red Remover



//Instructions

//Write a function that takes a color as an argument ( you can use new Color(170, 200, 150) ) sets the red component of that color to zero  ( colorVariableArgumentName.setRed(0) ) Returns that new color without red

//Then, test this function by drawing a circle to the screen using the result. You might have something like: 

//let noRed = removeRed( new Color(170, 200, 150) );

//fill(noRed);

//draw circle


//Setup

let noRed = removeRed(new Color(170,200,150));

function setup() {

    createCanvas(400,400);


}   



/*colorVariableArguementName.setRed(0);*/

/*let noRed = removeRed(new Color(170,200,150));*/

/*fill(noRed);*/

//Draw and Fill Circle

function draw() {

    circle(200,200,50);
    fill(noRed);
    colorVariableArguementName.setRed(0);

}

