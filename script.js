var word;
var guesses;
var guessedLetters = [];

function startGame(){
    word = getWord();
    guesses = 6;
    guessedLetters = [];
    document.getElementById("start").style.display = "none";
    document.getElementById("keyboard").style.display = "inline-block";
    document.getElementById("default").style.display = "inline-block";
    document.getElementById("selection").style.display = "none";
    printWord();

}

function getWord(){
    var difficulty = document.getElementById("difficulty").value;
    console.log(difficulty);
    var category = document.getElementById("categories").value;
    console.log(category);
    var foodarr = ["EGG","PEA","HAM","FIG","JAM","CHIP","LEEK","CORN","RICE","CAKE","RUTABAGA","CARROT","SCHNITZEL","HAMBURGER","CARBONARA"];
    var animalsarr = ["CAT","DOG","RAT","PIG","EMU","BEAR","LION","FISH","GOAT","DUCK","GECKO","PIZZLY","NARWHAL","ELEPHANT","LIGER"];
    var colorsarr = ["RED","BLUE","YELLOW","GREEN","ORANGE","MAROON","SIENNA","LIME","CYAN","KHAKI","CHARTREUSE","GOLDENROD","AQUAMARINE","AMETHYST","HONEYDEW"];
    var arr;
    if(category == "food"){
        arr = foodarr;
    }
    if(category == "animals"){
        arr = animalsarr;
    }

    if(category == "colors"){
        arr = colorsarr;
    }
    var num;
    if(difficulty == "easy"){
        num = Math.floor(Math.random() * 5);
    }
    if(difficulty == "medium"){
        num = Math.floor(Math.random() * (9 - 4) + 5);
    }
    if(difficulty == "hard"){
        num =  Math.floor(Math.random() * (14 - 9) + 10);
    }
    console.log(arr[num]);
    return arr[num];
}

function guessLetter(letter){
    var arr = ["img/gallows6.png","img/gallows5.png","img/gallows3.png","img/gallows4.png","img/gallows2.png","img/gallows1.png"];
    guessedLetters += letter;
    console.log(word.indexOf(letter));
    if(word.indexOf(letter) == -1){
        guesses -= 1;
        console.log(guesses);
        document.getElementById("gallows").src = arr[guesses];
        if(guesses == 0){
            end();
        }
    }
    document.getElementById(letter).disabled = true;
    document.getElementById(letter).style.backgroundColor = "saddlebrown";
    document.getElementById(letter).style.border = "3px solid #59260B";
    document.getElementById(letter).style.boxShadow = "0 3px #59260B";
    printWord();
}

function end(){
    document.getElementById("reset").style.display = "inline-block";
    document.getElementById("keyboard").style.display = "none";
}

function printWord(){
    var wordPrint = "";
    if(guesses > 0){
        for(var i = 0; i < word.length; i++){
            if(guessedLetters.includes(word[i])){
                wordPrint += word[i];
            } else {
                wordPrint += "_";
            }
        }
        if(wordPrint == word){
            document.getElementById("word").style.color = "green";
            document.getElementById("word").innerHTML = word;
            end();
        }
    } else {
        wordPrint = word;
        document.getElementById("word").style.color = "red";
        end();
    }

    console.log(wordPrint);
    document.getElementById("word").innerHTML = wordPrint;
}

function reset(){
    for(var i = 0; i < guessedLetters.length; i++){
        console.log(guessedLetters[i]);
        document.getElementById(guessedLetters[i]).disabled = false;
        document.getElementById(guessedLetters[i]).style.backgroundColor = "peru";
        document.getElementById(guessedLetters[i]).style.border = "3px solid saddlebrown";
        document.getElementById(guessedLetters[i]).style.boxShadow = "0 3px saddlebrown";
    }
    document.getElementById("start").style.display = "inline-block";
    document.getElementById("reset").style.display = "none"
    document.getElementById("word").innerHTML = "";
    document.getElementById("word").style.color = "saddlebrown";
    document.getElementById("gallows").src = "img/gallows.png";
    document.getElementById("default").style.display = "none";
    document.getElementById("selection").style.display = "inline-block";
    guessedLetters = [];
    word = "";
    guesses = "";
}
