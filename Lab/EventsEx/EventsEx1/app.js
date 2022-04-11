//Grace Payne
//4/10/2022
//N220

//Color Changer

//Make three gray square divs. 200px by 200px, all floated to the left. Margin of 5px

//Use only one event handler, and write event listeners to respond to a click on each element. Each element should change to a differeent color. One red, One green, One blue. 
//Use a data attribute on elements to store the color to change to

let colorBox1 = document.getElementById("colorBox1");
let colorBox2 = document.getElementById("colorBox2");
let colorBox3 = document.getElementById("colorBox3");

function cubeColor1() {

    colorBox1.style.backgroundColor= "#555555";
    colorBox1.style.height= "200px";
    colorBox1.style.width= "200px";
    colorBox1.style.margin= "5px";
    colorBox1.style.cssFloat= "left";

    colorBox2.style.backgroundColor= "#555555";
    colorBox2.style.height= "200px";
    colorBox2.style.width= "200px";
    colorBox2.style.margin= "5px";
    colorBox2.style.cssFloat= "left";

    colorBox3.style.backgroundColor= "#555555";
    colorBox3.style.height= "200px";
    colorBox3.style.width= "200px";
    colorBox3.style.margin= "5px";
    colorBox3.style.cssFloat= "left";

}


/*
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
*/
cubeColor1(); 
//cubeColor2(); 
//cubeColor3();

