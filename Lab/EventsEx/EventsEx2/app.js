//Grace Payne
//4/10/2022
//N220

//Color Mixer



//1 div that will change colors to rgb color calculated


let mixBox = document.getElementById("mixBox");

let colorCombo = mixBox.style.backgroundColor;

//Make application that starts a div with a black color
function startBox() {

    mixBox.style.backgroundColor= "#000000";
    mixBox.style.width= "500px";
    mixBox.style.height= "100px";

}

//1 div that shows current calculated color
function mixboxText() {

    mixBox.innerHTML= "Current Color: RGB";
    

}

startBox();
mixboxText();
//User press 9 buttons associated with RGB which will change black div's colors
//Buttons should affect additively
//9 buttons. +1, +5, and +10 for each color
function RgbButt1() {

    colorCombo + "#010000";
    //mixBox.style.backgroundColor
}

console.log(mixBox.style.backgroundColor);

function RgbButt2() {

    colorCombo + "#050000";

}

function RgbButt3() {

    colorCombo + "#100000";

}

function rGbButt4() {

    colorCombo + "#000100";

}

function rGbButt5() {

    colorCombo + "#000500";

}

