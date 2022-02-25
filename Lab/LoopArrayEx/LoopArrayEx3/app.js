//Grace Payne
//2/21/2022
//N220

//Runner Up

let Sonic = document.getElementById("Speed");

//Create an Array with the 3 best times

//Best times: 10:30, 12:00, 2:40

let times= [8.50, 10.30, 12.1];

//Write code so times go in order from lowest to highest (Already did that)

//Show second and third place times in different div's (Not a loop)

Sonic.innerHTML+=times[0]+ "&nbsp;";
Sonic.innerHTML+=times[1]+ "&nbsp;";
Sonic.innerHTML+=times[2]+ "&nbsp;";

//Got rid of the loops as I was told to not do them in a loop

//CLASSWORK 
/*

let res=numCount([30,19,31,2,9,22]);
console.log(res);


function numCount (numbers) {


    var count=0;

    for(var i=0;i<numbers.length;i++) {

        

        if (numbers[i] > 20) {

            count= count+1

        } 
            console.log(count);
    }

    if(count<= 3) {

        return count;

    }

    if(count> 3) {

        return -1;

    }


} */