//Grace Payne
//1/25/2022
//N220


//Polar Points

//Setup

function setup() {

    createCanvas(500,500);
    polarPoint(100) ;

}   


function polarPoint(r) {

    x=r*Math.sin(mouseX);
    y=r*Math.cos(mouseY);
    

    return createVector(x,y);


}


function draw() {

    translate(100,100);
    //circle(res.x,res.y,10);
    //circle(100,100,10);
    //translate(100,100);
    res=polarPoint(40);
    circle(res.x,res.y,10);
    
    

}


