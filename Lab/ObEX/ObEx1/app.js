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

    x:50, y:50, boxColor:"#FF7733", size:50 

} ;

function sox(r) {

    circle(250,250,r);
    

}

//Drawing

function draw() {

    sox(50);
    square(objBox.x, objBox.y, objBox.size);
    fill(objBox.boxColor);

}



/*
//In Class Work

//Setup

function setup() {

    createCanvas(600,600);

}

function outerTV() {

    rect(150,110,250,170);
    fill("#111111");


}

function innerTV() {

    rect(200,60,200,120);
    fill("#443399");


}


//Drawing

function draw() {


    innerTV();
    outerTV();
    

}

*/