// var birthyear = prompt("Please Enter your birthyear");
// var Indays = (2022 - birthyear)* 365;
// var strong = document.createElement("strong");
// var strong_value = document.createTextNode(`You are living ${Indays}  till now `);
// strong.setAttribute("id","Indays");
// strong.appendChild("strong_value");
// document.getElementById("Yourdays").appendChild("stra")


function clickme(){
    var birth_year = prompt("Please enter your birthyear");
    var Indays =  (2022 - birth_year) * 365;
    var strong = document.createElement("strong");
    var strong_value = document.createTextNode(`You are ${Indays} years old `);
    strong.setAttribute("id","Indays");
    strong.appendChild(strong_value);
    document.getElementById("Yourdays").appendChild(strong);
}

function reset(){
    document.getElementById("Indays").remove();
}







