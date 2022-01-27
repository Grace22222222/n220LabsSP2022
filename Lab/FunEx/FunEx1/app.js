//Grace Payne
//1/25/2022
//N220


//Drawing Drawer



//Setup

function setup() {
    createCanvas(800,600);


}    

//Drawing bus

function draw() {

    fill(255,211,0);
    rect(100,200,200,100);
    fill(0,0,0);
    circle(150,300,60);
    circle(250,300,60);

}













//Class work



//Exercise 1

/*

let R= 50;
let D= 50;


    //Setup

        function setup() {

            createCanvas(400,400);
            R= x+50;
            D= y*5;
            text("Hello world", R,D);

        }

*/
//Exercise 2



//Exercise 3

/*

    //Setup


    //tried to use let functions in order to set a negative or positive value, to see if I could add values to make the circle move with the cursor, but not be attached to it. Didn't exactly work
        let mouseX= +100;
        let mouseY= -100;

        function setup() {

            createCanvas(400,400);



        }

    //Drawing and filling circle
    
        function draw() {

            background(255);
            fill(255,165,0);

    //first set up the movement as mouseX, mouseY, to test if putting negatives in front would work
    
            circle(mouseX,mouseY,50);

    //negatives didn't seem to work, but if I moved my mouse near the end of the canvas, I would see the circle. Which means I'm probably on the right path, but I just need to figure out how to keep it within the canvas


    //wondered if there was a reflect function. There is one, but I am not sure how to use it. It could work
            reflect(mouseX,mouseY);


        }

*/