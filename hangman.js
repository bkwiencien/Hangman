var myWord="water";
array = ["w","a","t","e","r"];
var newyWord = "";
var word = "water";
var done=false;
var letterGuesedRaw = " ";
var letterGuessed = " ";
var sofar = "     ";
var initialString = "__ __ __ __ __";
var firstLetter = "  __ __ __ __"
var secondLetter = " __  __ __ __";
function getData() {
 while (!done) {
  var input=document.getElementById("userinput")
   letterGuessedRaw = input.value;
   len = letterGuessedRaw.length;
   if (len > 1) {
     letterGuessedRaw = letterGuessedRaw.charAt(0);
     letterGuessed = lertterGuessedRaw.toLowerCase();
   }
  console.log("you guessed " + letterGuessed);
}
}

