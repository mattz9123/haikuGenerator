$(document).ready(function(){
    $("form").on("submit", addWord);
    $("button#generate").on("click", generateHaiku);
});

let wordsBySyllables = [
    [], // row 0 - 0 syllables
    ['cup', 'phone'], // row 1 - 1 syllables
    ['apple', 'bottle'], // row 2 - 2 syllables
    ['banana', 'amazement'], // row 3 - 3 syllables
    ['education', 'dictionary'], // row 4 - 4 syllables
    ['tonsillectomy', 'belletristical'], // row 5 - 5 syllables
    ['areopagitic', 'comfortability'], // row 6 - 6 syllables
    ['establishmentarian', 'unconventionality'] // row 7 - 7 syllables
];

function addWord(event){
    event.preventDefault();

    let word = $("input[name=choice]").val()
    let count = 1; //count starts at one since there is always at least 1
    $("input#word").val("").focus();
    for(let i = 0; i < word.length; i++){
        if (word[i] === "-") {
            count++
        }
    }
    if (count > 7){
        $("p#output").text("Word cannot have more than 7 syllables");
    }
    else if (count <= 7) {
        wordsBySyllables[count].push(word.split('-').join(''))
    }
}

let displayLine1 = "";

function generateHaiku(event){
    let arrayLength51 = Math.ceil(Math.random() * 5);
    let arrayLength7 = Math.ceil(Math.random() * 7);
    let arrayLength52 = Math.ceil(Math.random() * 5);

    let generatedWords51 = wordsBySyllables[arrayLength51];
    let generatedWords7 = wordsBySyllables[arrayLength7];
    let generatedWords52 = wordsBySyllables[arrayLength52];

    let word1length = generatedWords51.length;
    let word2length = generatedWords7.length;
    let word3length = generatedWords52.length;

    let randWord1 = Math.ceil(Math.random() * word1length - 1);
    let randWord2 = Math.ceil(Math.random() * word2length - 1);
    let randWord3 = Math.ceil(Math.random() * word3length - 1);

    let line1 = generatedWords51[randWord1];

    // [Math.ceil(Math.random() * wordsBySyllables[arrayLength][arrayLength.length])];
    $("p#output2").text(`${line1}`);
    $("p#output3").text(`${generatedWords7[randWord2]}`);
    $("p#output4").text(`${generatedWords52[randWord3]}`);
}
