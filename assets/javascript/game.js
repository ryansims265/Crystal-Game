var userscoreintial = 0;
var winsintial = 0;
var lossesintial = 0;

//Computer chooses a random number 
var min = 1;
var max = 99; 
var randomnum = Math.floor(Math.random() * 120 + 19);
console.log("Target Score is " + randomnum);

$("#random-number").text("Target Score: " + randomnum);
$("#winnumber").text("Wins: " + winsintial);
$("#lossnumber").text("Losses: " + lossesintial);
$("#user-score").text("Your score is: " + userscoreintial);


//Set up each jewel variables 
var j1 = Math.floor(Math.random() * 11 + 1);
var j2 = Math.floor(Math.random() * 11 + 1);
var j3 = Math.floor(Math.random() * 11 + 1);
var j4 = Math.floor(Math.random() * 11 + 1);

console.log("J1 is " + j1);
console.log("J2 is " + j2);
console.log("J3 is " + j3);
console.log("J4 is " + j4);


//Random values are assigned to each of the gem gifs and listen for the on-click event 
function reset() {
    randomnum = [Math.floor(Math.random() * 120) + 19];
    j1 = Math.floor(Math.random() * 11 + 1);
    j2 = Math.floor(Math.random() * 11 + 1);
    j3 = Math.floor(Math.random() * 11 + 1);
    j4 = Math.floor(Math.random() * 11 + 1);
    userscoreintial = 0;
    $("#random-number").text("Target Score: " + randomnum);
    $("#winnumber").text("Wins: " + winsintial);
    $("#lossnumber").text("Losses: " + lossesintial);
    $("#user-score").text("Your score is: " + userscoreintial);
    console.log("J1 is " + j1);
    console.log("J2 is " + j2);
    console.log("J3 is " + j3);
    console.log("J4 is " + j4);
    console.log("Target Score is " + randomnum);

}

function win (){
    winsintial++;
    alert("You Won!");
    $("#winnumber").text("wins: " + winsintial);
    reset();
    console.log("You Won")
}

function lose (){
    lossesintial++;
    alert("You Lost!");
    $("#lossnumber").text("Losses: " + lossesintial);
    reset();
    console.log("You Lost")
}


$("#gif1").click(function () {
        userscoreintial = userscoreintial + j1;
        console.log("Your score is: " + userscoreintial);
        $("#user-score").text("Your score: " + userscoreintial);
        if (userscoreintial == randomnum) {
            win();
        }
        else if (userscoreintial > randomnum) {
            lose();
        }
    });

$("#gif2").click(function () {
        userscoreintial = userscoreintial + j2;
        console.log("Your score is: " + userscoreintial);
        $("#user-score").text("Your score: " + userscoreintial);

        if (userscoreintial == randomnum) {
            win();
        }
        else if (userscoreintial > randomnum) {
            lose();
        }

$("#gif3").click(function () {
            userscoreintial = userscoreintial + j3;
            console.log("Your score is: " + userscoreintial);
            $("#user-score").text("Your score: " + userscoreintial);
    
            if (userscoreintial == randomnum) {
                win();
            }
            else if (userscoreintial > randomnum) {
                lose();
            }
});

$("#gif4").click(function () {
            userscoreintial = userscoreintial + j4;
            console.log("Your score is: " + userscoreintial);
            $("#user-score").text("Your score: " + userscoreintial);
    
            if (userscoreintial == randomnum) {
                win();
            }
            else if (userscoreintial > randomnum) {
                lose();
            }
        });
    });
