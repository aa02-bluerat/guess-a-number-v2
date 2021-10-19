const messageBox = document.querySelector('.message');
const numberBox = document.querySelector('.number');
const guessBox = document.querySelector('.guess');
const scoreBox = document.querySelector('.score');
const highscoreBox = document.querySelector('.highscore');
const bgChange = document.querySelector('body');

let secretNumber = Math.floor(Math.random()*20)+1 ; //for random number
console.log(typeof secretNumber);
console.log(secretNumber);
let bestScore = 0;

function resetGame(){
    secretNumber = Math.floor(Math.random()*20)+1;
    numberBox.textContent=secretNumber;
    scoreBox.textContent=10;
    messageBox.textContent='Start guessing...';
    bgChange.style.backgroundColor = '#303030';
    console.log(secretNumber);
}

function resetWinGame(){
    setTimeout( function(){ //add delay 3secs b4 code below executes
        scoreBox.textContent=10;
        secretNumber = Math.floor(Math.random()*20)+1;
        numberBox.textContent='?';
        numberBox.style.width = '15rem';
        numberBox.style.fontSize = '6rem';
        messageBox.textContent='Start guessing...';
        bgChange.style.backgroundColor = '#303030';
        console.log(secretNumber);
    },3000); 
}

function winGame(){
    if (Number(scoreBox.textContent)>=bestScore){
        bestScore=scoreBox.textContent;
        highscoreBox.textContent = bestScore;
        resetWinGame()      
    }
    else{
        highscoreBox.textContent = bestScore;
        resetWinGame()
    }
}

function loseGame(){
    scoreBox.textContent-=1;
}

function noPlay(){
    scoreBox.textContent-=0;
}

function backgroundLose(){
    bgChange.style.backgroundColor = '#ff9999';
}

function backgroundWin(){
    bgChange.style.backgroundColor = '#6fa364';
    numberBox.style.width = '380px';
    numberBox.style.fontSize = '100px';
}



document.querySelector('.btn.again').addEventListener('click', 
    function(){
        resetGame();
    }
);


document.querySelector('.check').addEventListener('click', 
    function(){
        const guess = Number(guessBox.value);
        console.log(guess);
        messageBox.textContent=`Your guess is ${guess}`;

        if (!guess || guess===0){
            messageBox.textContent=`You did not input any number`;
            noPlay();
        }
        else if (guess == secretNumber){
            messageBox.textContent=`Your guess is CORRECT!`;
            numberBox.textContent=secretNumber;
            backgroundWin();
            winGame();
            
        }
        else if (((guess+1) == secretNumber) || ((guess-1) == secretNumber) ){
            messageBox.textContent=`VERY CLOSE!`;
            loseGame();
            backgroundLose();
        }
        else if (guess < secretNumber){
            messageBox.textContent=`Your guess is LESS than the secret number`;
            loseGame();
            backgroundLose();
        }
        else if (guess > secretNumber){
            messageBox.textContent=`Your guess is GREATER than the secret number`;
            loseGame();
            backgroundLose();
        }

        guessBox.value='';

        if (scoreBox.textContent==0){
            messageBox.textContent=`GAME OVER`;
            resetGame();
        }
        else{}
    }
    
);




    

