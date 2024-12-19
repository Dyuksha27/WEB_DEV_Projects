var dice= Math.random() * 6;
var v=Math.floor(dice) + 1;

var randomDiceImg = "dice"+ v +".png";
var randomImgSrc ="./images/" + randomDiceImg; // we are making the img src from static to change acc to random number generated

var image1 =document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgSrc);

var dice2= Math.random() * 6;
var v2=Math.floor(dice2) + 1;

var randomDiceImg2 = "dice"+ v2 +".png";
var randomImgSrc2 ="./images/" + randomDiceImg2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImgSrc2);

if(v2 > v){
    document.querySelector("h1").innerHTML="Player 2 Wins!!";
}

else if(v> v2){
    document.querySelector("h1").innerHTML="Player 1 Wins!!";
}

else if(v === v2){
    document.querySelector("h1").innerHTML="It's a tie.";
}

else{
    alert("");
}