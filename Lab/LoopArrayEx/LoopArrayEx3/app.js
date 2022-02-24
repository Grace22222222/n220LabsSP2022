//Grace Payne
//2/21/2022
//N220

//Runner Up

let Sonic = document.getElementById("Speed");

//Create an Array with the 3 best times

//Best times: 10:30, 12:00, 2:40

let times= [8.50, 10.30, 12.1];

for (let i=0; i<times.length;i++) {

    Sonic.innerHTML+=times[i]+ "&nbsp;";

}

//Write code so times go in order from lowest to highest (Already did that)

//Show second and third place times in different div's (Not a loop)



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