//Grace Payne
//3/29/2022
//N220


//Make Random

let randNum = document.getElementById("randNum");
//let randomButton = document.getElementById("randomButton");


//Make a function that generates random number between 0 and 10

function randomButton() {

    //Generate Number
    //Show number

    numberRandom();

}

function numberRandom() {

    let generRan = Math.floor(Math.random()*11);


    randNum.innerHTML = generRan ;//random Number 0 - 10


}

