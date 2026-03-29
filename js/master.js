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
//var letters = ['אַ','אָ','ב','בֿ','ג','ד','ה','ו','וּ','װ','ױ','ז','ח','ט','י','יִ','ײ','ײַ','כּ','כ','ך','ל','מ','ם','נ','ן','ס','ע','פּ','פֿ','ץ','ק','ר','ש','שׂ','תּ','ת'];

//var names = ['pasekh alef','komets alef', 'beys','veys','giml','daled','hey','vov','melupm vov','tsvey vovn','vov yud','zayen','khes','tes','yud','khirek yud','tsvey yudn','pasekh tsvey yudn','kof','khof','langer khof','lamed','mem','shlos mem','nun','langer nun','samekh','ayen','pey','fey','langer fey','tsadek','langer tsadek','kuf','reysh','shin','sin','tof','sof'];

//var sounds = ['ah','oh','buh','vuh','guh','duh','huh','oo','oo','vuh','oy','zz','kh','tuh','yuh/ih/ee','ih/ee','ay','ai','kuh','kh','kh','luh','muh','muh','nuh','nuh','suh','eh','puh','fuh','fuh','tsuh','tsuh','kuh','rrr','sh','suh','tuh','suh'];





//randomizer
function getRandomIndex(min,max){
    return Math.floor(Math.random() * (max - min +1) + min);
}

//grabs a random letter then generates an arr with that letter and it's data
function generate (letters, names, sounds){
    var x = getRandomIndex(0,letters.length -1);
    console.log(x);
    console.log('letter: ' + letters[x]);
    console.log('name: ' + names[x]);
    console.log('sound: ' + sounds[x]);
    return([letters[x],names[x],sounds[x]]);
}

//shows the print form of the letter and asks for its name
function askName(letters,names,sounds) {
    var values = generate(letters, names, sounds);
    console.log(values);
    var input1 = prompt(`What is the name of the letter ${values[0]}`);
    if(input1 == values[1]){
        alert(`Correct! The letter ${values[0]} is called ${values[1]} and makes the sound ${values[2]}`);
        correctAnswers++;
    }else{
        alert(`Wrong! This lettter ${values[0]} is called ${values[1]}`);
    }
}

//shows the print form of a letter and asks for the sound it makes
function askSound(letters,names,sounds) {
    var values = generate(letters, names, sounds);
    console.log(values);
    var input1 = prompt(`What sound does ${values[0]} make?`);
    if(input1 == values[2]){
        alert(`Correct! The letter ${values[0]} (${values[1]}) makes the sound ${values[2]}.`);
        correctAnswers++;
    }else{
        alert(`Incorrect! The letter ${values[0]} (${values[1]}) makes the sound ${values[2]}`);
    }
}

