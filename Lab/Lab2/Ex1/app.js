//Grace Payne
//1/20/2022
//N220

//Puck Side


//Canvas Creation



function setup() {
    createCanvas(400,300);
}


//Circle Creation

function draw() {

    circle(mouseX,mouseY,50);
        if (mouseX >200) {

            fill(255,0,0);

        }

        if (mouseX <200) {

            fill(0,0,255);

        }

}




/*

//IN CLASS WORK

let size = 10;

//Canvas Set up

    function setup() {

        createCanvas(500,500);

    }


//Circle 

    function draw () {

        circle(mouseX,mouseY,10);

    }
    
//Sizing

    function draw () {

        
        size = size+15;
        console.log(size);

        circle (mouseX,mouseY,size)

    }

//If Statment

*/
