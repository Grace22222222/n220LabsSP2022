//Grace Payne
//2/21/2022
//N220

//Rock Paper Scissors (Guard)

//Make four buttons, add space for score. Start it at 0 (Tie it to application/global variable)

//Generate random move for computer
//If chose guard, skip and submit half a point
//If won, add one, if lost, subtract one, if tied, nothing.
//Show results, (Player chose this, computer chose this), update score

let Loser= document.getElementById("Winner")

//Space for score

//Button Rock
const button = document.createElement("button");
button.innerText = "Rock"

button.id = 'RockButton'
button.addEventListener('click', () => {

    alert('Rock');

})
document.body.appendChild(button);

//Button Paper

const button2 = document.createElement("button2");
button.innerText = "Paper"

button.id = 'PaperButton'
button.addEventListener('click', () => {

    alert('Paper');

})
document.body.appendChild(button);

//Button Scissors

const button3 = document.createElement("button3");
button.innerText = "Scissors"

button.id = 'ScissorsButton'
button.addEventListener('click', () => {

    alert('Scissors');

})
document.body.appendChild(button);


/*
let rand= ["Rock ", "Paper ", "Scissors "];

for (let i=0; i< rand.length;i++) {

    Loser.innerHTML+= rand[i];

}
*/