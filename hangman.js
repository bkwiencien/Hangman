var myWord="water";
array = ["w","a","t","e","r"];
var newyWord = "";
var word = "water";
var done=false;
var letterguesedraw = " ";
var letterguessed = " ";
var sofar = "     ";
var initialString = "__ __ __ __ __";
function yes() {
while (!done) {
 letterguessedraw = prompt("guess a letter");
 letterguessed = letterguessedraw.toLowerCase();
 console.log(letterguessed);
}
}

