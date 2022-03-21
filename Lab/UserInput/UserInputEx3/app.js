//Grace Payne
//d/2022
//N220


//Number Guesser (Easier)


let guessIt = document.getElementById("guessIt");
let numberGuess = document.getElementById("numberGuess");

//Number should be hard coded between 1 and 20
//Number is: 13

function checkGuess() {

    //Tell user if number is too high, too low, or equal
    //Remove text from boxes */
    if (numberGuess.value == "13") {

        let numberA = numberGuess.value;
        guessIt.innerHTML= numberA + " You guessed it!";
        numberGuess.value= "";

    } else if (numberGuess.value <= "13") {

        let numberA = numberGuess.value;
        guessIt.innerHTML= numberA + " Too Low";
        numberGuess.value= "";

    } else if ( numberGuess.value >= "13") {

        let numberA = numberGuess.value;
        guessIt.innerHTML= numberA + " Too High";
        numberGuess.value= "";

    }
    
}    
    
