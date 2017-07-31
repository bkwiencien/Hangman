var myWord="water";
array = ["w","a","t","e","r"];
var newyWord = "";
var guessedArray = ["__ ","__ ","__ ","__ ","__ "];
var word = "water";
var done=false;
var lertterGuessedRaw = " ";
var letterGuessedRaw = " ";
var alreadyGuessed = " ";
var sofar = "     ";
var initialString = "__ __ __ __ __";
var currentLine   = "__ __ __ __ __";
var firstLetter = "  __ __ __ __"
var secondLetter = " __  __ __ __";
var numberOfGuesses = 0;
var searchStatus = 0;
function getData() {
 if (!done) {
  var input=document.getElementById("userinput")
   letterGuessedRaw = input.value;
   len = letterGuessedRaw.length;
   letterGuessed = letterGuessedRaw.toLowerCase();
   if (len > 1) {
     letterGuessedRaw = letterGuessedRaw.charAt(0);
   }
     letterGuessed = letterGuessedRaw.toLowerCase();
     alreadyGuessed = alreadyGuessed + letterGuessed;
     numberOfGuesses++;
     searchStatus = searchFor(letterGuessed);
     if (searchStatus == -1) {
        var element1 = document.getElementById("resulto");
        element1.innerHTML = "result: " + "there is no " + letterGuessed;
     } 
     if (searchStatus > -1) {
        var element2 = document.getElementById("resulto");
        console.log("element2 = " + element2);
        element2.innerHTML = "success";
        updateCurrentLine(letterGuessed,searchStatus);
     }
     var element  = document.getElementById("guessesline");
     element.innerHTML = "Guesses so far " + alreadyGuessed;
     if (numberOfGuesses >9) {
       done = true;
     }
}
}
function searchFor(thisLetter) {
 var indexo = "water".search(thisLetter);
 var notFound = -1;
 if (indexo >= 0) {
   return(indexo);
 }
 return (notFound); 
}
function updateCurrentLine(letter,ind) {
  guessedArray[ind] = letter;
  var element5 = document.getElementById("lineo");
  element5.innerHTML = guessedArray.toString();
}

