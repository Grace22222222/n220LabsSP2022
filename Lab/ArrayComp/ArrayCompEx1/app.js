//Grace Payne
//3/29/2022
//N220


//It's just average

//Takes a list of comma seprarated numbers
//Splits list into an array of numbers
//Converts the string version of the numbers into number versions
//Loops through the array and sums up the values
//Calculates the average of the array
//Displays the average and the sum to the user

let averaType = document.getElementById("averaType");
let numberIn = document.getElementById("numberIn");
averaType.innerHTML = "Type some numbers! Be sure to put commas between them!";
var total = 0;
var ave = 0;
var numArray;


function calcuNum() {

    var numType;

    numType = document.getElementById("numberIn").value;

    //console.log(numType);

    numberIn.value = "";

    numArray = numType.split(",");

    sumAve();
    
    averaType.innerHTML= "Average: " + ave + " | Sum: " + total;

    
}


calcuNum();

//numberIn.value = "";



function sumAve() {

    for (let i=0; i<numArray.length; i++){

        var curNum = Number(numArray[i]);
        
        total = total + curNum;

        console.log(total);


    }

    ave = total / numArray.length;

    console.log(ave);

}

















//CLASSWORK
/*
let scores = [3,4,9,12,55,20];
let res =scores.filter(score => score % 2 ==0);
console.log(res);


var grid =[

    ["x","o","o"]
    ["o","x","o"]
    ["x","x","o"]
]

let res = grid["x","x","x"]["o","o","o"];
console.log=(res);
*/