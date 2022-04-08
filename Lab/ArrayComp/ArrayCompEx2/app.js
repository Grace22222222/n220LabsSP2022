//Grace Payne
//3/29/2022
//N220


//Make Divs

//Given the array 
let divArray = document.getElementById("divArray");

let objects = [

 { color: "#FF0000", height: 100, width: 300 },

 { color: "#FFFF00", height: 200, width: 200 },

 { color: "#ff0000", height: 300, width: 100 },

];


//Write a loop that creates 3 divs based on the data. Should only hae one document.createElement in code
for (let i = 0; i<objects.length; i++){

    let cubeArray = document.createElement("div") //Only one of these!

    divArray.innerHTML = cubeArray;

    console.log(cubeArray);

    
    

}

