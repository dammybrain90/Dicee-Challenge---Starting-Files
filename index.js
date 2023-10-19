var numb=Math.floor((Math.random()*6))+1
var randomImag="images/"+"dice"+numb+".png"
var numb2=Math.floor((Math.random()*6))+1
var randomImag2="images/"+"dice"+numb2+".png"
document.querySelectorAll('img')[0].setAttribute("src",randomImag)
document.querySelectorAll('img')[1].setAttribute("src",randomImag2)

if (numb>numb2){document.querySelector("h1").innerHTML="Player 1 wins"}
else if(numb<numb2){document.querySelector("h1").innerHTML="Player 2 wins"}
else{document.querySelector("h1").innerHTML="draw!"}