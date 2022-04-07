//Grace Payne
//3/29/2022
//N220


//Check Win Function



//Create an application that: 

//Takes input from the user in a text field

let oneType = document.getElementById("oneType");
let winThree = document.getElementById("winThree");


function winnerLos() {

    var zeroType;

    zeroType = document.getElementById("oneType").value;

//Splits the input into an array
    arrayOne = zeroType.split(",");
//Uses a loop to check to see if there are three "1s" in a row in the array

//Make loop that tells you how many ones are in the input
    for (let i = 0; i < arrayOne.length; i++){

        console.log(arrayOne[i]);
//Displays the word "winner" or "not winner" on the document
        if (zeroType == "111") {

            winThree.innerHTML = "Winner!";

        } else {

            winThree.innerHTML = "Not Winner";

    }

    oneType.value = "";



    }

    

}

/*

Check Win Function

Taking the above problem description, change the interaction to employ a function to check to see if there is a winner. The function should


Accept an array of numbers
Loop through the array checking for the win condition
Return true if a win is found, and false is if is not found
 

Use this function to modify the rest of your application to employ it.

*/