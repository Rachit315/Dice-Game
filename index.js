var randomNumber1 =Math.random()
var lol=Math.floor((randomNumber1 * 6)+1)
var random = "dice"+lol+".png";
var randomimg = "images/"+random;

var img1 = document.querySelectorAll("img")[0]


img1.setAttribute("src",randomimg)

var randomNumber2 =Math.random()
var lol1=Math.floor((randomNumber2 * 6)+1)
var random1 = "dice"+lol1+".png";
var randomimg1 = "images/"+random1;

var img2 = document.querySelectorAll("img")[1]


img2.setAttribute("src",randomimg1)

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 won 🏆";
}else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 won 🏆";
}else{
    document.querySelector("h1").innerHTML = "DRAW";
}