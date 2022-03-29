//Grace Payne
//3/29/2022
//N220


//Is Divisible By Seven

//Create application with input and button
let numberType = document.getElementById("numberType");
let diviNum = document.getElementById("diviNum");

//button checks if input is divisble by 7 or not
//function should return either true or false
function divButton() {

    //Maybe make an if statement to make this work out

    if (numberType.value == /*divisble by 7*/) {



    }

    let numPlus = numberType.value;

    let numMin = `${numPlus}` + " is not divisble by 7";

    numberType.value = "";

    diviNum.innerHTML = numMin;

} 