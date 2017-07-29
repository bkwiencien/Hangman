var myWord="water";
var array = ["w","a","t","e","r"];
var done=false;
var letterguesedraw = " ";
var letterguessed = " ";
function yes() {
while (!done) {
 letterguessedraw = prompt("guess a letter");
 letterguessed = letterguessedraw.toLowerCase();
 console.log(letterguessed);
}
}

