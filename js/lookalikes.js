var lookAlikes = []
var correctAnswers = 0;

for(let i =0; i < allLetters.length; i++){
    if(allLetters[i].lookAlike){
        //console.log(allLetters[i].letter);
        lookAlikes.push(allLetters[i]);
    }
}

console.log(lookAlikes);

function whichOne(){
    var values = generate(lookAlikes);
    console.log(values);
    var s = prompt(`Which of these letters is ${values.name}?
        ${values.letter} (1
        ${values.lookAlike.letter} (2`);
    console.log(s)
    while(s != '1' && s != '2' ){
        s = prompt('enter 1 or 2')
    }
        if(s=='1'){
            alert(`Correct! ${values.letter} is ${values.name} (${values.sound}), ${values.lookAlike.letter} is called ${values.lookAlike.name} (${values.lookAlike.sound})`);
            correctAnswers++;
        }else{
            alert(`Incorrect! ${values.lookAlike.letter} is called ${values.lookAlike.name} (${values.lookAlike.sound}). ${values.letter} is ${values.name} (${values.sound})`);
        }
    
}

function whichTwo(){
    var values = generate(lookAlikes);
    console.log(values);
    var s = prompt(`Which of these letters is ${values.lookAlike.name}?
        ${values.letter} (1
        ${values.lookAlike.letter} (2`);
    console.log(s)
    while(s != '1' && s != '2' ){
        s = prompt('enter 1 or 2')
    }
        if(s=='2'){
            alert(`Correct! ${values.lookAlike.letter} is ${values.lookAlike.name} (${values.lookAlike.sound}), ${values.letter} is called ${values.name} (${values.sound})`);
            correctAnswers++;
        }else{
            alert(`Incorrect! ${values.letter} is called ${values.name} (${values.sound}). ${values.lookAlike.letter} is ${values.lookAlike.name} (${values.lookAlike.sound})`);
        }
    
}

function askQuestions(){
    var roundsSTR = prompt('How many rounds would you like to play?');
    var rounds = parseInt(roundsSTR);
    for(let i = 0; i < rounds; i++){
        var q = Math.floor(Math.random() * (1 - 0 +1) + 0);
        if(q == 0){
            whichOne();
        }else{
            whichTwo();
        }
    }
    

    alert(`Great job! You got ${correctAnswers} out of ${rounds}`);
}

askQuestions();