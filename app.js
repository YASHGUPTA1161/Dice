var randomnumber = Math.floor(Math.random()*6 + 1)
var imgsrc = "images/dice"+randomnumber+".png";
document.querySelectorAll("img")[0].setAttribute("src", imgsrc)

var randomnumber2 = Math.floor(Math.random()*6 + 1)
var imgsrc2 = "images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", imgsrc2)

if (randomnumber>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomnumber<randomnumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="It's a Draw";
}

