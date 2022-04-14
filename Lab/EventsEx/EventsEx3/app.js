//Grace Payne
//4/10/2022
//N220

//Flash Cards

//Application with 3 buttons that ask questions. 
//Each button should have a data answer attribute that lists the answer
let questions = document.getElementById("questions");

let elements = document.getElementsByClassName("QNA");

for(let i = 0; i < elements.length; i++) {

    elements[i].addEventListener("click", function(){

        buttonClick(i);

    });

}

//Use only one function and that function must make use of the button's data attribute
function buttonClick(x) {
    
//When button is clicked, display the answer to button's question in a div
    questions.innerHTML= elements[x].dataset.answer;

}
