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
    /*function polarPoint(r) {

        x==r*Math.sin(mouseX);
        y==Math.cos(mouseY);
    
        return createVector(x,y);
    
    
    } */

    res==polarPoint();
    circle(res.x,res.y,10);
    //I put this in because no matter what I do, I can't figure this out. It's better to give half of the effort, than all of the effort and get nothing in result
    fill(0,200,150);

}



function polarPoint(r) {

    x==r*Math.sin(mouseX);
    y==Math.cos(mouseY);

    return createVector(x,y);


} 