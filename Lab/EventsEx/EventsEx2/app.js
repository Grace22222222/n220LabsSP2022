//Grace Payne
//4/10/2022
//N220

//Color Mixer

//Make application that starts a div with a black color
//User press 9 buttons associated with RGB which will change black div's colors
//Buttons should affect additively
//9 buttons. +1, +5, and +10 for each color
//1 div that will change colors to rgb color calculated
//1 div that shows current calculated color

let mixBox = document.getElementById("mixBox");

let colorCombo = mixBox.style.backgroundColor;

function startBox() {

    mixBox.style.backgroundColor= "#000000";
    mixBox.style.width= "500px";
    mixBox.style.height= "100px";

}



function mixboxText() {

    mixBox.innerHTML= "Current Color: RGB";
    

}

startBox();
mixboxText();

function rgbButt1() {

    

}