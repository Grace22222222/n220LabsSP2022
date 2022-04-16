//Grace Payne
//4/16/2022
//N220

//Memory Game

/*
Requirements: 

1. A 4x4 grid of facedown cards. 16 cards

2.Reveal the value of a facedown card on click

3.If two revealed cards match, remove them

4.If two revealed cards do not match, return them to face down

5.A ‘replay game’ option when the game is over

6.Use setTimeout to keep both face up cards visible for two seconds before hiding / removing them

Must include half of these options: mouse interaction, 2 global variables access and modified in response to user input, an array that is accessed or modified in response to user interaction, an if/else if/else block, a loop, an object that is modified during application runtime, manipulating the document object
*/

//Want to use colors to match instead of numbers/symbols/etc
//Want to make the colors random each time, so the game can be either easy or difficult depending on the RNG
//Also want to try to make an easy and hard mode??

let memeGame = document.getElementById("memeGame");
let cardGin1 = document.getElementById("cardGin1");

var randomColor = Math.floor(Math.random()*256);

//Create the 16 cards. Need to use a loop of some kind
//For now using normal functions to test
function card1(){

    cardGin1.style.backgroundColor="#669911";
    cardGin1.style.height= "100px";
    cardGin1.style.width= "70px";
    cardGin1.style.margin= "5px";
    cardGin1.style.cssFloat= "left";

}

function card2(){

    cardGin2.style.backgroundColor="#669911";
    cardGin2.style.height= "100px";
    cardGin2.style.width= "70px";
    cardGin2.style.margin= "5px";
    cardGin2.style.cssFloat= "left";

}

function card3(){

    cardGin3.style.backgroundColor="#669911";
    cardGin3.style.height= "100px";
    cardGin3.style.width= "70px";
    cardGin3.style.margin= "5px";
    cardGin3.style.cssFloat= "left";

}

function card4(){

    cardGin4.style.backgroundColor="#669911";
    cardGin4.style.height= "100px";
    cardGin4.style.width= "70px";
    cardGin4.style.margin= "5px";
    cardGin4.style.cssFloat= "left";

}
card1();
card2();
card3();
card4();