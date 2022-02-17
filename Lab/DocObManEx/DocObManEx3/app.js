//Grace Payne
//2/15/2022
//N220

//Over and Out

let pilot = document.getElementById("plane");


var col="#000000";

var lor="#0055FF";

//col=lor+"#000000";

plane.style.height="100px";
plane.style.width="100px";
plane.style.backgroundColor= lor;




//Having a hard time figuring out how to get the color to change
//Make another function to change the color back? Yes
function colorChange() {

    plane.style.backgroundColor= col;


}

function colorBack() {

    plane.style.backgroundColor= lor;

}


//Use onmouseover and onmouseout
plane.onmouseover = function() {colorChange()};
plane.onmouseout = function() {colorBack()};













//divs don't work, don't know why I tried this
//<div onmouseover="colorChange()"> </div>

/*

function MouseOver(plane) {

    plane.style.backgroundColor = "#000000";

}
*/

/*
function onmouseover() {

    //plane.style.backgroundColor="#000000";

    //document.getElementById("plane").style.backgroundColor="#000000";

} */
