
correctAnswers = 0;
console.log(allLetters);

function askQuestions(){
    var roundsSTR = prompt('How many rounds would you like to play?');
    var rounds = parseInt(roundsSTR);
    for(let i = 0; i < rounds; i++){
        var q = Math.floor(Math.random() * (1 - 0 +1) + 0);
        if(q == 0){
            askName(allLetters);
        }else{
            askSound(allLetters);
        }
    }
    alert(`Great job! You got ${correctAnswers} out of ${rounds}`);
}

//askQuestions();