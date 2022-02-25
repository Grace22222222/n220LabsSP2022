//Grace Payne
//2/21/2022
//N220

//UI Navigation Highlighter

//Make thing with 6 div's, each a different word
//The words: Button, Buttn, Btton, Buuton, Butoon, Botun

//When click, change background color and make bold, remove hightlight from others

//Add clicked div's text into a seperate div on top

//Setup
let Clackity= document.getElementById("Clickity");

var B ="Button"
var U ="Buttn"
var T ="Btton"
var TT ="Buuton"
var O ="Butoon"
var N ="Botun"

//Space for top text

function callAll() {

    Clackity.innerHTML= B+"&nbsp;"+U+"&nbsp;"+T+"&nbsp;"+TT+"&nbsp;"+O+"&nbsp;"+N+"&nbsp;";
    
}

callAll();
/*
function Backk() {

    //Clackity.style.backgroundColor="#a7bed3";
    B.setAttribute(onclick, backgroundColor="#a7bed3")

}

B.onclick = function(){Backk()};
*/
