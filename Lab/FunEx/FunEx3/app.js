//Grace Payne
//1/25/2022
//N220


//Polar Points

//Setup

function setup() {

    createCanvas(500,500);
    polarPoint(100) ;

}   

//Polar Function

function polarPoint(r) {

    x=r*Math.sin(mouseX);
    y=r*Math.cos(mouseY);
    

    return createVector(x,y);


}

//Draw Circle

function draw() {

    translate(100,100);
    res=polarPoint(40);
    circle(res.x,res.y,10);
    
}


