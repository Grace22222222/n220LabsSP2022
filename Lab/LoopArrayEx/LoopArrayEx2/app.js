//Grace Payne
//2/21/2022
//N220

//Beep Bop

//INSTRUCTIONS Cuz this one sounds difficult 
//Write a loop that runs 25 times and writes the iterand (current iteration of the loop) out onto the page inside of a div element.However, When the iterand is divisible by 3, write the word "beep" instead/ When the iterand is divisible by 5, write the word "bop" instead/ When the iterand is divisible by 3 AND 5, write "beepbop" instead/

//Setup with calling refrence

let robit = document.getElementById("Robot");


//Not sure if this is correct or not
let multipleThree = (num) => {

    div = parseInt(num/3);

    return num===div*3;

}

//This is working
for(let i=0;i<26;i++){

    robit.innerHTML+= i + "&nbsp;";

}

//I'm not sure what to do here

//This doesn't seem to be correct. It isn't working
if (multipleThree()) {

    robit.innerHTML="beep";

}
