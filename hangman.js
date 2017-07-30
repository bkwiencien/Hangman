var myWord="water";
array = ["w","a","t","e","r"];
var newyWord = "";
var word = "water";
var done=false;
var lertterGuessedRaw = " ";
var letterGuessedRaw = " ";
var sofar = "     ";
var initialString = "__ __ __ __ __";
var firstLetter = "  __ __ __ __"
var secondLetter = " __  __ __ __";
function getData() {
 while (!done) {
  var input=document.getElementById("userinput")
   letterGuessedRaw = input.value;
   console.log(letterGuessedRaw);
   len = letterGuessedRaw.length;
   letterGuessed = letterGuessedRaw.toLowerCase();
   console.log("len = " + len);
   if (len > 1) {
     letterGuessedRaw = letterGuessedRaw.charAt(0);
     letterGuessed = letterGuessedRaw.toLowerCase();
     console.log("in if you guessed " + letterGuessed);
     console.log("in if you guessed raw " + letterGuessedRaw);

     
   }
  console.log("you guessed " + letterGuessed);
   done = true;
}
}

