var message1 = document.querySelector("#msg1");
var message2 = document.querySelector("#msg2");
var message3 = document.querySelector("#msg3");
var button = document.querySelector("#btn");
var result =Math.floor(Math.random()*10)+1;
 
var noofguess=0;

var guessesnum=[];

function play(){
    var guess =document.querySelector("#guess")
    var userguess = guess.value;
    if(userguess < 1 || userguess > 10){
        alert("1 to 10")
    }else{
        guessesnum.push(userguess);
        noofguess=noofguess+1;
        if(userguess < result){
            message1.textContent="Your Guess is: LOW";
            message2.textContent="number of guess:" + noofguess;
            message3.textContent="guessed number are:" + guessesnum;
        }
        else if(userguess > result){
            message1.textContent="Your Guess is: High";
            message2.textContent="number of guess:" + noofguess;
            message3.textContent="guessed number are:" + guessesnum;
        }
        else if(userguess = result){
            message1.textContent="You Won";
            message2.textContent="The number is:" + noofguess;
            message3.textContent="You Guessed:" + noofguess;
        }
    }

    function clear(){
        guess.value=""
    }

    button.addEventListener("click",clear)

}
