//Grace Payne
//2/15/2022
//N220

//Peak Pixels

//Setup

let shapeD = document.getElementById("shape");

var num="100";
nump=num+"px";
shape.style.height=nump;
shape.style.width=nump;
shape.style.backgroundColor="#00FF66";

//Had an issue with placement of the styles below

//shape.style.height="100px";
//shape.style.width="100px";


//varName+"px"



function sizeChange() {

    //shape.style.height=shape.style.height*"1.1";
    //shape.style.width=shape.style.width*"1.1";
    num=num*"1.1";
    nump=num+"px";
    shape.style.height=nump;
    shape.style.width=nump;


}

shape.onclick = function() {sizeChange()};

