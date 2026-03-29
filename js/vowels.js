

//var vowelLetters = ['אַ','אָ','ו','וּ','י','יִ','ע'];

//var vowelNames = ['pasekh alef','komets alef','vov','melupm vov','yud','khirek yud','ayen']

//var vowelSounds = ['ah','oh','oo','oo','yuh/ih/ee','ih/ee','eh'];
var vowels = [];
//console.log(allLetters);
for(let i = 0; i < allLetters.length; i++){
    //if(allLetters[i].type == 'vowel'){ vowels.push(allLetters[i])}
    //console.log(allLetters[i].type);
    if(allLetters[i].type.includes('vowel')){vowels.push(allLetters[i]);}
}


var correctAnswers = 0;
console.log(vowels);


function askQuestions(){
    var roundsSTR = prompt('How many rounds would you like to play?');
    var rounds = parseInt(roundsSTR);
    for(let i = 0; i < rounds; i++){
        var q = Math.floor(Math.random() * (1 - 0 +1) + 0);
        if(q == 0){
            askName(vowels);
        }else{
            askSound(vowels);
        }
    }
    

    alert(`Great job! You got ${correctAnswers} out of ${rounds}`);
}

askQuestions();