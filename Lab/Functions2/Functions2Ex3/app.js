//Grace Payne
//3/29/2022
//N220


//Change Styles

let squareOne = document.getElementById("squareOne");
let squareTwo = document.getElementById("squareTwo");
let squareThree = document.getElementById("squareThree");

//Make the HTML element as an input 
    //Change the style of that element to have a background color of blue and smaller width than it's height

function changeStyle() {

    squareOne.style.backgroundColor= "#0000FF";
    squareOne.style.height= "100px";
    squareOne.style.width= "50px";

}
//Make function for each div that changes the style of the div clicked using the changestyle function

function changeStyle2() {

    squareTwo.style.backgroundColor= "#0000FF";
    squareTwo.style.height= "100px";
    squareTwo.style.width= "70px";

}

function changeStyle3() {

    squareThree.style.backgroundColor= "#0000FF";
    squareThree.style.height= "100px";
    squareThree.style.width= "90px";

}

function square1() {

    squareOne.style.backgroundColor= "#FF0000";
    squareOne.style.height= "100px";
    squareOne.style.width= "100px";
    //squareOne.style.right= "100px";

}

square1(); 
function square2() {

    squareTwo.style.backgroundColor= "#FF0000";
    squareTwo.style.height= "100px";
    squareTwo.style.width= "100px";

}

square2();

function square3() {

    squareThree.style.backgroundColor= "#FF0000";
    squareThree.style.height= "100px";
    squareThree.style.width= "100px";

}
square3();


squareOne.onclick = function() {changeStyle()};
squareTwo.onclick = function() {changeStyle2()};
squareThree.onclick = function() {changeStyle3()};