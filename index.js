//random number 1
var random_number1 = Math.floor(Math.random()*6) + 1;

var random_image1 = "images/dice"+ random_number1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",random_image1);

//random number 2
var random_number2 = Math.floor(Math.random()*6) + 1;

var random_image2 = "images/dice"+ random_number2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",random_image2);

//Results
if( random_number1>random_number2 ){
  document.querySelector("h1").innerHTML= "Player 1 Wins";
}
else if( random_number1<random_number2) {
  document.querySelector("h1").innerHTML= "Player 2 Wins";
}
else{
  document.querySelector("h1").innerHTML= "Its a Draw!";
}
