//Grace Payne
//2/21/2022
//N220

//Favorray

let Flapflap = document.getElementById("SeaPancake");

//Write five favorite things
//Favorite things: Cats, sushi, games, apple orchards, and Autumn

let things=["Cats","Sushi","Games","Apple Orchards","Autumn"];

for (let i=0;i<things.length;i++) {

    Flapflap.innerHTML+= things[i] + "&nbsp;" + "is one of my favorite things" +"&nbsp;";

}