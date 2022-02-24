//Grace Payne
//2/21/2022
//N220

//Runner Up

let Sonic = document.getElementById("Speed");

//Create an Array with the 3 best times

//Best times: 10:30, 12:00, 2:40

let times= ["10:30", "12:00", "2:40"];

for (let i=0; i<times.length;i++) {

    Sonic.innerHTML+=times[i]+ "&nbsp;";

}

//Write code so times go in order from lowest to highest
//Show second and third place times in different div's