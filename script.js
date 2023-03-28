let n1 = Math.floor(Math.random()*6) + 1;
let n2 = Math.floor(Math.random()*6) + 1;

let images1 = "images/dice"+ n1 +".png";
let images2 = "images/dice"+ n2 +".png";
 
document.querySelector(".dice .img1").setAttribute("src",images1);
document.querySelector(".dice .img2").setAttribute("src",images2);


if(n1 > n2){
    document.querySelector("h1").innerHTML = "Player 1 wins!!";
}
else if(n1 === n2){
    document.querySelector("h1").innerHTML = "Draw 🤘";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 wins!!";
}