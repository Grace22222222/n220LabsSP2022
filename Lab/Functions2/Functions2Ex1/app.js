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

    //if (VorNam %7 ==0) {//is divisible by 7}

    /*divisble by 7*/
    if (numberType.value %7 == 0) {

        let numPlus = numberType.value;

        numberType.value = "";

        let numMin = `${numPlus}`;

        diviNum.innerHTML = numMin + " is divisible by 7";
    } else {

        let numPlus = numberType.value;

        numberType.value = "";

        let numMin = `${numPlus}`;

        diviNum.innerHTML = numMin + " is not divisible by 7";

    }

    
} 


divButton();
diviNum.innerHTML = "";