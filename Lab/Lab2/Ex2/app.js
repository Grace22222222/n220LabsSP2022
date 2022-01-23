//Grace Payne
//1/23/2022
//N220

//Ever Larger, Until Not

//Size Change & Color Randomization

var randomR;
var randomG;
var randomB;
let size=1;

//Canvas Creation & Circle Color

function setup() {
    createCanvas(800,600);
    randomR=Math.floor(Math.random()*256);
    randomG=Math.floor(Math.random()*256);
    randomB=Math.floor(Math.random()*256);
}


//Circle Creation

function draw() {

    circle(400,300,size);
    fill(randomR,randomG,randomB);
    size=size+1;

//Circle Reset

        if (size==200) {

            setup();
            size=1;
        
        }

}
