//Grace Payne
//1/25/2022
//N220


//Drawing Drawer



//Setup

function setup() {
    createCanvas(800,600);


}    


function draw() {

    drawBus1(100,200);
    drawBus2(50,100)
    drawBus3(300,50)

}

//Drawing buses

//Had to make multiple functions of drawBus because I couldn't get the circles to change with the arguements

//Had to input the change in the circle size and placement by hand

function drawBus1(x,y) {


    fill(255,211,0);
    rect(x,y,200,100);
    fill(0,0,0);
    circle(150,300,60);
    circle(250,300,60);

}

function drawBus2(x,y) {


    fill(255,211,0);
    rect(x,y,100,50);
    fill(0,0,0);
    circle(80,150,30);
    circle(120,150,30);

}

function drawBus3(x,y) {


    fill(255,211,0);
    rect(x,y,175,75);
    fill(0,0,0);
    circle(350,125,55);
    circle(425,125,55);

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