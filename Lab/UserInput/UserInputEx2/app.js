//Grace Payne
//3/10/2022
//N220


//Password Protected


//Make two input and one button
let user = document.getElementById("user");
let pass = document.getElementById("pass");
let time = document.getElementById("time");

//When button is clicked, make sure user wrote these words
//Username and Password

function checkText() {

    //Don't need this actually
    //let readThis = user.value;

    //If correct, write Success, if wrong, write Wrong information
    //Use only one if statement
    if ((user.value== "Username") && (pass.value== "Password")) {

        let textA = "Success";
        time.innerHTML = textA;
        user.value= "";
        pass.value= "";

    } else {

        let textA = "Wrong Information";
        time.innerHTML = textA;
        user.value= "";
        pass.value= "";

    }
    
}




//IN CLASSWORK
/*
//Setup
let time= document.getElementById("time");


let word= "Kronos";
//Word with removed vowels would be Krns
let char=word[1];

//For Loop to write on page
for (let i=0; i<word.length;i++) {

    time.innerHTML+= word[i];

    removeV();

}


//Function which will remove vowels
function removeV() {

    

}
*/
