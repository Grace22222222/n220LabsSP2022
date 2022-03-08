//Grace Payne
//d/2022
//N220

//Greeter

let txtWord = document.getElementById("txtWord");
let wordPerson = document.getElementById("wordPerson");

function generateWord() {

    //Input
    let readMe = txtWord.value;

    //Add text to typed word
    let wordsA = "Hello " + `${readMe}`;

    wordPerson.innerHTML = wordsA;

    //Delete text in box
    txtWord.value = "";

    //Show text in console
    console.log(wordsA);

}







//CLASSWORK
/*
let txtWord = document.getElementById("txtWord");
let wordPerson = document.getElementById("wordPerson");

function generateWord() {

    //Input
    let readMe = txtWord.value;

    //Triple Input
    let wordsA = `${readMe} ${readMe} ${readMe}`; 

    //OR 
    /*

    Replace let wordsA with let times = Number(txtTimes.value);

    let val = "";
    

    for (let i=0; i< times; i++) {
        val += readMe + " ";

    }

    


    //Show Result
    wordPerson.innerHTML = wordsA;

    txtWord.value = "";

    console.log(readMe);
}

*/
