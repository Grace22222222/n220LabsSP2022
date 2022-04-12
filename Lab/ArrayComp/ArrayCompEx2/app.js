//Grace Payne
//3/29/2022
//N220


//Make Divs

let divArray = document.getElementById("divArray");

//Given the array 
let objects = [

 { color: "#FF0000", height: 100, width: 300 },

 { color: "#FFFF00", height: 200, width: 200 },

 { color: "#ff0000", height: 300, width: 100 },

];


//Write a loop that creates 3 divs based on the data. Should only hae one document.createElement in code
for (let i = 0; i<objects.length; i++){



    let cubeTemp = document.createElement("div") //Only one of these!

    cubeTemp.innerHTML= objects[i].color;

    //three lines of code that change the style of cubeTemp

    cubeTemp.style.backgroundColor = objects[i].color;
    cubeTemp.style.height = objects[i].height + "px";
    cubeTemp.style.width = objects[i].width + "px";

    //= objects[i];
    //divArray.innerHTML = cubeArray;

    console.log(cubeTemp);

    document.body.appendChild(cubeTemp);

    
}


