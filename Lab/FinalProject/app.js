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

let memeGame = document.getElementById("memeGame");

let cardRem;
let lastCard;

let cards = document.getElementsByClassName("card");

let replayButton = document.getElementById("replayButton");


replayButton.style.visibility="hidden";

for(let i = 0; i < cards.length; i++) {

    cards[i].addEventListener("click",function(event){

        console.log(cardRem);
        console.log(event.target.dataset.color);
        event.target.style.backgroundColor = event.target.dataset.color;
        
        if (cardRem != null){




            //Tells if the cards match
            //CLICK THEM SLOWLY
            if (cardRem == event.target.dataset.color) {

                console.log(lastCard);
                
                setTimeout(visi,1000);

                function visi() {  

                lastCard.style.visibility="hidden";
                event.target.style.visibility="hidden";
                checkWin();

                }
                
                
                

            } else {

                //No matches
                setTimeout(noVisi,1000);

                function noVisi() {

                lastCard.style.backgroundColor= "#FFFFFF";
                event.target.style.backgroundColor= "#FFFFFF";

                }
               

            }

            cardRem=null;

        } else{

            cardRem = event.target.dataset.color;
            lastCard = event.target;

        }

       

        

    });
    
}
function checkWin() {
 //set variable "stillGoing" to false

        //for every card in cards
            // check to see if they are set to 'visible'
            //if not, set StillGoing to true
            var StillGoing = false;

            for (i=0;i<cards.length;i++) {
    
                let card=cards[i];
    
                if (card.style.visibility!="hidden") {
    
                    StillGoing= true;
    
                } else {
                    console.log("hidden");
                }
    
            }
            //if stillGoing is false..
            console.log(StillGoing);
            if (StillGoing == false) {
    
                
                replayButton.style.visibility="visible";
                
    
            } else{
    
                StillGoing = true;
                replayButton.style.visibility="hidden";
    
            }
}

//Use hard coded colors until you finish the game
/*
var randomColorR = Math.floor(Math.random()*256);
var randomColorG = Math.floor(Math.random()*256);
var randomColorB = Math.floor(Math.random()*256);
*/
//Create the 16 cards. Need to use a loop of some kind
//For now using normal functions to test
function card1(){
    //Randomized color test = WORKS
    //Will save for later
    //cardGin1.style.backgroundColor= "rgb("+randomColorR+","+randomColorG+","+randomColorB+")";

    cardGin1.style.outline = "2px dotted black";
    cardGin1.style.height= "100px";
    cardGin1.style.width= "70px";
    cardGin1.style.margin= "5px";
    cardGin1.style.cssFloat= "left";

}

function card2(){

    cardGin2.style.outline = "2px dotted black";
    cardGin2.style.height= "100px";
    cardGin2.style.width= "70px";
    cardGin2.style.margin= "5px";
    cardGin2.style.cssFloat= "left";

}

function card3(){

    cardGin3.style.outline = "2px dotted black";
    cardGin3.style.height= "100px";
    cardGin3.style.width= "70px";
    cardGin3.style.margin= "5px";
    cardGin3.style.cssFloat= "left";

}

function card4(){

    cardGin4.style.outline = "2px dotted black";
    cardGin4.style.height= "100px";
    cardGin4.style.width= "70px";
    cardGin4.style.margin= "5px";
    cardGin4.style.cssFloat= "left";

}

function card5(){

    cardGin5.style.outline = "2px dotted black";
    cardGin5.style.height= "100px";
    cardGin5.style.width= "70px";
    cardGin5.style.margin= "120px 0px 0px -315px";
    cardGin5.style.cssFloat= "left";

}

function card6(){

    cardGin6.style.outline = "2px dotted black";
    cardGin6.style.height= "100px";
    cardGin6.style.width= "70px";
    cardGin6.style.margin= "120px 0px 0px -235px";
    cardGin6.style.cssFloat= "left";

}

function card7(){

    cardGin7.style.outline = "2px dotted black";
    cardGin7.style.height= "100px";
    cardGin7.style.width= "70px";
    cardGin7.style.margin= "120px 0px 0px -155px";
    cardGin7.style.cssFloat= "left";

}

function card8(){

    cardGin8.style.outline = "2px dotted black";
    cardGin8.style.height= "100px";
    cardGin8.style.width= "70px";
    cardGin8.style.margin= "120px 0px 0px -75px";
    cardGin8.style.cssFloat= "left";

}

function card9(){

    cardGin9.style.outline = "2px dotted black";
    cardGin9.style.height= "100px";
    cardGin9.style.width= "70px";
    cardGin9.style.margin= "235px 0px 0px -315px";
    cardGin9.style.cssFloat= "left";

}

function card10(){

    cardGin10.style.outline = "2px dotted black";
    cardGin10.style.height= "100px";
    cardGin10.style.width= "70px";
    cardGin10.style.margin= "235px 0px 0px -235px";
    cardGin10.style.cssFloat= "left";

}

function card11(){

    cardGin11.style.outline = "2px dotted black";
    cardGin11.style.height= "100px";
    cardGin11.style.width= "70px";
    cardGin11.style.margin= "235px 0px 0px -155px";
    cardGin11.style.cssFloat= "left";

}

function card12(){

    cardGin12.style.outline = "2px dotted black";
    cardGin12.style.height= "100px";
    cardGin12.style.width= "70px";
    cardGin12.style.margin= "235px 0px 0px -75px";
    cardGin12.style.cssFloat= "left";

}

function card13(){

    cardGin13.style.outline = "2px dotted black";
    cardGin13.style.height= "100px";
    cardGin13.style.width= "70px";
    cardGin13.style.margin= "350px 0px 0px -315px";
    cardGin13.style.cssFloat= "left";

}

function card14(){

    cardGin14.style.outline = "2px dotted black";
    cardGin14.style.height= "100px";
    cardGin14.style.width= "70px";
    cardGin14.style.margin= "350px 0px 0px -235px";
    cardGin14.style.cssFloat= "left";

}

function card15(){

    cardGin15.style.outline = "2px dotted black";
    cardGin15.style.height= "100px";
    cardGin15.style.width= "70px";
    cardGin15.style.margin= "350px 0px 0px -155px";
    cardGin15.style.cssFloat= "left";

}

function card16(){

    cardGin16.style.outline = "2px dotted black";
    cardGin16.style.height= "100px";
    cardGin16.style.width= "70px";
    cardGin16.style.margin= "350px 0px 0px -75px";
    cardGin16.style.cssFloat= "left";

}


function buttonStyle() {

    replayButton.style.backgroundColor="#748596";
    replayButton.style.outline="2px dotted black";
    replayButton.innerHTML=" Play Again?";
    replayButton.style.height="25px";
    replayButton.style.width="100px";
    replayButton.style.margin= "0px 0px 0px 400px";
            
    

}

buttonStyle();

//Reset the game
function replay() {

    location.reload();

}
        




card1();
card2();
card3();
card4();
card5();
card6();
card7();
card8();
card9();
card10();
card11();
card12();
card13();
card14();
card15();
card16();


