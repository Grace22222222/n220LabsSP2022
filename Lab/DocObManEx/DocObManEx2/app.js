//Grace Payne
//2/15/2022
//N220

//McDiv'ns

//Funny fast food clown honk honk

let clown = document.getElementById("ronald");

var ger="clowns";
var bur= "mc";
var orderNum=0;


//ronald.style.height="100";
//ronald.style.width="100";

//Used color to make sure the div was working properly
//ronald.style.backgroundColor="#FFFF55";

ronald.innerHTML=ger;

function fry() {

    orderNum=orderNum+1;
    ronald.innerHTML=bur+ronald.innerHTML;

    if (orderNum>2) {

        ronald.innerHTML=ger+ger+ger;

    }
    //I believe I did this correctly

    //Take what's in it
    //Store it
    //Add 'Mc' to the variable
    //Add to document
    //["mc" + clowns]

    console.log(orderNum);
}

ronald.onclick = function() {fry()};
//I'm surprised I managed to stick with the whole fast food thing