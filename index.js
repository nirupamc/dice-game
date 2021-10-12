var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;
const firstDiceImage = "images/dice" + randomNumber1 + ".png" ;
var randomImageSource = "image/" + firstDiceImage ;
document.querySelector("img")[0].setAttribute("src" , "randomImageSource");

var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;
const secondDiceImage = "images/dice" + randomNumber2 + ".png" ;
var randomImageSource2 = "image/" + secondDiceImage ;
document.querySelector("img")[1].setAttribute("src" , "randomImageSource2 ");
