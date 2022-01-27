//Grace Payne
//1/25/2022
//N220


//Polar Points

//Setup

function setup() {

    createCanvas(500,500);


}   


function draw() {

    circle(res.x,res.y,10);


}

function polarPoint(r) {

    x==r*Math.sin(mouseX);
    y==Math.cos(mouseX);

    return createVector(x,y);


}