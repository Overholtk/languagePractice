var allLetters = ['אַ','אָ','ב','בֿ','ג','ד','ה','ו','וּ','װ','ױ','ז','ח','ט','י','יִ','ײ','ײַ','כּ','כ','ך','ל','מ','ם','נ','ן','ס','ע','פּ','פֿ','ץ','ק','ר','ש','שׂ','תּ','ת'];

var allNames = ['pasekh alef','komets alef', 'beys','veys','giml','daled','hey','vov','melupm vov','tsvey vovn','vov yud','zayen','khes','tes','yud','khirek yud','tsvey yudn','pasekh tsvey yudn','kof','khof','langer khof','lamed','mem','shlos mem','nun','langer nun','samekh','ayen','pey','fey','langer fey','tsadek','langer tsadek','kuf','reysh','shin','sin','tof','sof'];

var allSounds = ['ah','oh','buh','vuh','guh','duh','huh','oo','oo','vuh','oy','zz','kh','tuh','yuh/ih/ee','ih/ee','ay','ai','kuh','kh','kh','luh','muh','muh','nuh','nuh','suh','eh','puh','fuh','fuh','tsuh','tsuh','kuh','rrr','sh','suh','tuh','suh'];


correctAnswers = 0;

function askType(){

}

function askQuestions(){
    var roundsSTR = prompt('How many rounds would you like to play?');
    var rounds = parseInt(roundsSTR);
    for(let i = 0; i < rounds; i++){
        var q = Math.floor(Math.random() * (1 - 0 +1) + 0);
        if(q == 0){
            askName(allLetters, allNames, allSounds);
        }else{
            askSound(allLetters, allNames, allSounds);
        }
    }
    alert(`Great job! You got ${correctAnswers} out of ${rounds}`);
}

askQuestions();