//Grace Payne
//1/25/2022
//N220


//Red Remover


//let noRed= removeRed(new Color(170,200,150));
//colorVariableArgumentName.setRed(0);

//Setup



function setup() {

    createCanvas(400,400);


}   

//circle

function removeRed(cB) {

    
    cB.setRed(0);

    return cB;
    

    //color(170,200,150);

}



//fill(noRed);

function draw() {


    circle(200,200,50);
    let noRed= removeRed(new Color(170,200,150));
    fill(noRed);




}

