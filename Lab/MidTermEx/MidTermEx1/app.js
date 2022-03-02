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
/*
var B ="Button"
var U ="Buttn"
var T ="Btton"
var TT ="Buuton"
var O ="Butoon"
var N ="Botun"
*/
//Space for top text

let words=["Button ", "Buttn ", "Btton ", "Buuton ", "Butoon ", "Botun "];

for (let i=0; i<words.length;i++) {

    Clackity.innerHTML+= words[i];

}

function Bback() {

    //Clackity.onclick = function(){high()};
    words[1].onclick = function(){high()};

}

Bback();


function high() {
    console.log(Clackity);
    Clackity.style.backgroundColor="#a7bed3";
    
}


/*
function callAll() {

    Clackity.innerHTML= "Button" + "&nbsp;" + "Buttn" + "&nbsp;" + "Btton" + "&nbsp;" + "Buuton" + "&nbsp;" + "Butoon" + "&nbsp;" + "Botun";
     
}

callAll();

function Backk() {

    //Clackity.style.backgroundColor="#a7bed3";
    //Clackity.setAttribute(onclick, backgroundColor="#a7bed3")

}

Clackity.onclick = function(){Backk()};
*/


//I couldn't finish these. I did my best, but with other work and due to my own misunderstandings, I just couldn't get these to work no matter how hard I tried. I am so so so sorry