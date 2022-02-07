//Grace Payne
//2/3/2022
//N220

//Data Driven display

//INSTRUCTIONS

//Make an object with all the properties for a graphic on the screen - width, height, color, position. Perhaps more. In your create or draw function draw that object to the screen using the data in your object. Then, create a function that takes one argument and draws an object to the screen using that argument. Pass your object to that function as an argument, and have the function draw the object to the screen

//Setup

function setup() {

    createCanvas(500,500);

}

//Setting up object

let objBox ={

    x:50, y:50, boxColor:"FF7733", size:50 

} ;

//Drawing

function draw() {

    
    square(objBox.x, objBox.y, objBox.size);
    fill(objBox.boxColor);

}