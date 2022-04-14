//Grace Payne
//4/10/2022
//N220

//Color Changer



let colorBox1 = document.getElementById("colorBox1");
let colorBox2 = document.getElementById("colorBox2");
let colorBox3 = document.getElementById("colorBox3");

let boxes = document.getElementsByClassName("box");

cubeColor1(); 
cubeColor2(); 
cubeColor3();

//Use only one event handler, and write event listeners to respond to a click on each element. Each element should change to a different color. One red, One green, One blue. 
for(let i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener("click",function(event){

        console.log(event.target.dataset.color);
        event.target.style.backgroundColor= event.target.dataset.color;

    });
    
}


function buttonClick(x) {

    if (x == 0) {

        buttonClick1();

    }
    if (x == 1) {

        buttonClick2();

    }
    if (x == 2) {

        buttonClick3();

    }

}

//Make three gray square divs. 200px by 200px, all floated to the left. Margin of 5px

function cubeColor1() {

    colorBox1.style.backgroundColor= "#555555";
    colorBox1.style.height= "200px";
    colorBox1.style.width= "200px";
    colorBox1.style.margin= "5px";
    colorBox1.style.cssFloat= "left";

}

function cubeColor2() {

    colorBox2.style.backgroundColor= "#555555";
    colorBox2.style.height= "200px";
    colorBox2.style.width= "200px";
    colorBox2.style.margin= "5px";
    colorBox2.style.cssFloat= "left";
    
}

function cubeColor3() {

    colorBox3.style.backgroundColor= "#555555";
    colorBox3.style.height= "200px";
    colorBox3.style.width= "200px";
    colorBox3.style.margin= "5px";
    colorBox3.style.cssFloat= "left";

}

//Use a data attribute on elements to store the color to change to
function buttonClick1() {

    colorBox1.dataset.color= "#990000";
    cubeColor1();
}
function buttonClick2() {

    colorBox2.dataset.color= "#009900";
    cubeColor2();
   
}
function buttonClick3() {

    colorBox3.dataset.color= "#000099";
    cubeColor3();

}

