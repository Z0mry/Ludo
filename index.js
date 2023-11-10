var randomNumber1 = Math.random () *6;
randomNumber1 =Math.floor(randomNumber1) +1; 

console.log ("images/"+"dice"+randomNumber1+".png")


var randomNumber2 = Math.random () *6;
randomNumber2 =Math.floor(randomNumber2) +1; 

console.log ("images/"+"dice"+randomNumber2+".png")


document.querySelector("img").setAttribute("src","images/"+"dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/"+"dice"+randomNumber2+".png");

if (randomNumber1>randomNumber2)(document.querySelector("h1").innerHTML=" Player 1 Win")
else if  (randomNumber1<randomNumber2)(document.querySelector("h1").innerHTML="Player 2 Win")
else if  (randomNumber1===randomNumber2)(document.querySelector("h1").innerHTML="Draw!")
else document.querySelector("h1").innerHTML="Refresh Me"