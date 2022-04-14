//Grace Payne
//4/10/2022
//N220

//Color Mixer


//Use data- to change color
//let red= 0 let green = 0 let blue= 0
//1 div that will change colors to rgb color calculated


let mixBox = document.getElementById("mixBox");

let change = document.getElementsByClassName("change");

let colorCombo = mixBox.style.backgroundColor;


let red = 0;
let green = 0;
let blue = 0;

//Make application that starts a div with a black color
function startBox() {

    mixBox.style.backgroundColor= "#000000";
    mixBox.style.width= "500px";
    mixBox.style.height= "100px";

}

//1 div that shows current calculated color
function mixboxText() {

    mixBox.innerHTML= "Current Color: " + mixBox.style.backgroundColor;
    //console.log("updatetext");

}

startBox();
mixboxText();


//User press 9 buttons associated with RGB which will change black div's colors
//Buttons should affect additively
//9 buttons. +1, +5, and +10 for each color
function blueButtEvent(event) {

    //console.log(event.target.dataset.change);
    
    blue += Number(event.target.dataset.change);
    let tmpcolor = "rgb("+red+","+green+","+ blue +")";
    console.log(tmpcolor);

    mixBox.style.backgroundColor= tmpcolor;
    mixboxText();
}

function greenButtEvent(event) {

    green += Number(event.target.dataset.change);
    let tmpcolor = "rgb("+red+","+green+","+ blue +")";
    console.log(tmpcolor);

    mixBox.style.backgroundColor= tmpcolor;

    mixboxText();
}

function redButtEvent(event) {

    red += Number(event.target.dataset.change);
    let tmpcolor = "rgb("+red+","+green+","+ blue +")";
    console.log(tmpcolor);

    mixBox.style.backgroundColor= tmpcolor;

    mixboxText();
}

console.log(mixBox.style.backgroundColor);
