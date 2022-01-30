//Grace Payne
//1/25/2022
//N220


//Polar Points

//Setup

function setup() {

    createCanvas(500,500);


}   

//translate(100,100);

function draw() {

    //circle(100,100,10);
    //translate(100,100);
    res==polarPoint();
    circle(res.x,res.y,10);

}


function polarPoint(r) {

    x==r*Math.sin(mouseX);
    y==Math.cos(mouseY);

    return createVector(x,y);


}