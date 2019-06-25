//Define intial variables 
var userscoreintial = 0;
var winsintial = 0;
var lossesintial = 0;

//Computer chooses a random number 
var min = 1;
var max = 99; 
var randomnum = Math.floor(Math.random() * (+max - +min)) + +min;
console.log(randomnum);

//Random values are assigned to each of the gem gifs and listen for the on-click event 
document.getElementById("gif1").onclick=function (){
    console.log("Gif 1 on-click works");
}

document.getElementById("gif2").onclick=function (){
    console.log("Gif 2 on-click works");
    userscoreintial + 10;
    console.log(userscoreintial);
}

document.getElementById("gif3").onclick=function (){
    console.log("Gif 3 on-click works");
}

document.getElementById("gif4").onclick=function (){
    console.log("Gif 4 on-click works");
}




//When each gif is clicked the value is added to the user score

//When the user score equals the computerscore, the user wins, 1 is added to the wins, the user and ckomputer score both reset. The user score goes to 0 and the computer selects a new random nunber 
//New random values are assigned to the gifs each time 

document.getElementById("gif1").v

document.getElementById("user-score").textContent = "Your score: " + userscoreintial;
document.getElementById("random-number").textContent = "Target Score: " + randomnum;

document.getElementById("winnumber").textContent = "Wins: " + winsintial;
document.getElementById("lossnumber").textContent = "Losses: " + lossesintial; 
