'use strict'

//game ideas:
// name of this letter
// sound this letter makes
// letter type?
// lookalike:
    //which of these is x letter?
// match final forms to regular forms
// match hebrew letters to letters with the same sound
//letters with grammar rules


// Master data, includes entire alef-beys and related data
var letters = ['א','אַ','אָ','ב','בֿ','ג','ד','ה','ו','וּ','װ','ױ','ז','ח','ט','י','יִ','ײ','ײַ','כּ','כ','ך','ל','מ','ם','נ','ן','ס','ע','פּ','פֿ','ף','צ','ץ','ק','ר','ש','שׂ','תּ','ת'];

var names = ['shtumer alef','pasekh alef','komets alef', 'beys','veys','giml','daled','hey','vov','melupm vov','tsvey vovn','vov yud','zayen','khes','tes','yud','khirek yud','tsvey yudn','pasekh tsvey yudn','kof','khof','langer khof','lamed','mem','shlos mem','nun','langer nun','samekh','ayen','pey','fey','langer fey','tsadek','langer tsadek','kuf','reysh','shin','sin','tof','sof'];

var sounds = ['silent','ah','oh','buh','vuh','guh','duh','huh','oo','oo','vuh','oy','zz','kh','tuh','yuh/ih/ee','ih/ee','ay','ai','kuh','kh','kh','luh','muh','muh','nuh','nuh','suh','eh','puh','fuh','fuh','tsuh','tsuh','kuh','rrr','sh','suh','tuh','suh'];

var types = ['silent','vowel','vowel','consonant','hebrew only','consonant','consonant','consonant','vowel','vowel','consonant','diphthong','consonant','hebrew only','consonant','vowel/consonant','vowel','diphthong','diphthong','hebrew only','consonant','final form','consonant','consonant','final form','consonant','final form', 'consonant','vowel','consonant','consonant','final form','consonant','final form','consonant','consonant','consonant','hebrew only','hebrew only','hebrew only'];

var allLetters = [];

//constructor function
function letter(letter,name,sound,type){
    this.letter = letter;
    this.name = name;
    this.sound = sound;
    this.type = type;

    allLetters.push(this);
}

//create all letter objects
for( let i = 0; i < letters.length; i++){
    //console.log(letters[i]);
    var f = new letter(letters[i],names[i],sounds[i],types[i]);
}
console.log(allLetters);

 for(let i = 0; i < allLetters.length; i++){
    var f = allLetters[i];
        //add look alikes
    if(f.name=='giml'){f.lookAlike = allLetters[25];}
    if(f.name=='nun'){f.lookAlike=allLetters[5];}
    if(f.name=='beys'){f.lookAlike=allLetters[19];}
    if(f.name=='khof'){f.lookAlike=allLetters[3];}
    if(f.name=='samekh'){f.lookAlike=allLetters[24];}
    if(f.name=='shlos mem'){f.lookAlike=allLetters[27];}
    if(f.name=='khes'){f.lookAlike=allLetters[7];}
    if(f.name=='hey'){f.lookAlike=allLetters[13];}
    if(f.name=='daled'){f.lookAlike=allLetters[35];}
    if(f.name=='reysh'){f.lookAlike=allLetters[6];}
    if(f.name=='vov'){f.lookAlike=allLetters[26],allLetters[12];}
    if(f.name=='langer nun'){f.lookAlike=allLetters[8];}
    if(f.name=='zayen'){f.lookAlike=allLetters[8];}
        //add final forms and reverse
    if(f.name=='khof'){f.finalForm=allLetters[21];}
    if(f.name=='langer khof'){f.finalFormOf=allLetters[20]}
    if(f.name=='mem'){f.finalForm=allLetters[24];}
    if(f.name=='shlos mem'){f.finalFormOf=allLetters[23]}
    if(f.name=='nun'){f.finalForm=allLetters[26];}
    if(f.name=='langer nun'){f.finalFormOf=allLetters[25];}
    if(f.name=='fey'){f.finalForm=allLetters[31];}
    if(f.name=='langer fey'){f.finalFormOf=allLetters[30]}
    if(f.name=='tsadek'){f.finalForm=allLetters[33];}
    if(f.name=='langer tsadek'){f.finalFormOf=allLetters[32]}
}


/* for( let i = 0; i < letters.length; i++){
    if(allLetters[i].finalForm || allLetters[i].finalFormOf){console.log(allLetters[i]);}
} */

//console.log(allLetters);
//randomizer
function getRandomIndex(min,max){
    return Math.floor(Math.random() * (max - min +1) + min);
}

//grabs a random letter then generates an arr with that letter and it's data
function generate (letters){
    var x = getRandomIndex(0,letters.length -1);
    console.log(x);
    return letters[x];
    //console.log('letter: ' + letters[x]);
    //console.log('name: ' + names[x]);
    //console.log('sound: ' + sounds[x]);
    //return([letters[x],names[x],sounds[x]]);
}


//shows the print form of the letter and asks for its name
function askName(letters) {
    var values = generate(letters);
    console.log(values);
    var input1 = prompt(`What is the name of the letter ${values.letter}`);
     if(input1 == values.name){
        alert(`Correct! The letter ${values.letter} is called ${values.name} and makes the sound ${values.sound}`);
        correctAnswers++;
    }else{
        alert(`Wrong! This lettter ${values.letter} is called ${values.name}`);
    }
}


//shows the print form of a letter and asks for the sound it makes
function askSound(letters) {
    var values = generate(letters);
    console.log(values);
    var input1 = prompt(`What sound does ${values.letter} make?`);
    if(input1 == values.sound){
        alert(`Correct! The letter ${values.letter} (${values.name}) makes the sound ${values.sound}.`);
        correctAnswers++;
    }else{
        alert(`Incorrect! The letter ${values.letter} (${values.name}) makes the sound ${values.sound}`);
    }
}

