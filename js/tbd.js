var letters = ['א','אַ','אָ','ב','בֿ','ג','ד','ה','ו','וּ','װ','ױ','ז','ח','ט','י','יִ','ײ','ײַ','כּ','כ','ך','ל','מ','ם','נ','ן','ס','ע','פּ','פֿ','ף','צ','ץ','ק','ר','ש','שׂ','תּ','ת'];

var names = ['shtumer alef','pasekh alef','komets alef', 'beys','veys','giml','daled','hey','vov','melupm vov','tsvey vovn','vov yud','zayen','khes','tes','yud','khirek yud','tsvey yudn','pasekh tsvey yudn','kof','khof','langer khof','lamed','mem','shlos mem','nun','langer nun','samekh','ayen','pey','fey','langer fey','tsadek','langer tsadek','kuf','reysh','shin','sin','tof','sof'];

var sounds = ['silent','ah','oh','buh','vuh','guh','duh','huh','oo','oo','vuh','oy','zz','kh','tuh','yuh/ih/ee','ih/ee','ay','ai','kuh','kh','kh','luh','muh','muh','nuh','nuh','suh','eh','puh','fuh','fuh','tsuh','tsuh','kuh','rrr','sh','suh','tuh','suh'];

var types = ['silent','vowel','vowel','consonant','hebrew only','consonant','consonant','consonant','vowel','vowel','consonant','diphthong','consonant','hebrew only','consonant','vowel/consonant','vowel','diphthong','diphthong','hebrew only','consonant','final form','consonant','consonant','final form','consonant','final form', 'consonant','vowel','consonant','consonant','final form','consonant','final form','consonant','consonant','consonant','hebrew only','hebrew only','hebrew only'];

//console.log(`${letters.length}
//    ${types.length}`);

var allLetters = [];

function letter(letter,name,sound,type){
    this.letter = letter;
    this.name = name;
    this.sound = sound;
    this.type = type;

    allLetters.push(this);
}

for( let i = 0; i < letters.length; i++){
    //console.log(letters[i]);
    new letter(letters[i],names[i],sounds[i],types[i]);
}

console.log(allLetters);