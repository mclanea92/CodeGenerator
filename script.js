// Assignment Code
var generateBtn = document.querySelector("#generate");

// First function.  This first makes arrays with the specific character elements like below.
function makePassword() {
  const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const sCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
  const lowerletter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const upperletter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var passwordarray = [];

  var passwordLength = getPWLength();



  
  //Confirm added to find out boolean true or false and to be added to the passwordarray array.
  var numbers = confirm("Would you like Numbers? (Yes-OK ; No-Cancel)")
  var special = confirm("Would you like Special characters? (Yes-OK ; No-Cancel)")
  var lower = confirm("Would you like Lowercase letters? (Yes-OK ; No-Cancel)")
  var upper = confirm("Would you like Uppercase letters? (Yes-OK ; No-Cancel)")
  

// This is where if the specific element is considered 'true' from the confirms above. It 
// will add it to the open array 'passwordarray' with characters from their orginal array
if (numbers) {
passwordarray = passwordarray.concat(number);
}

if (special) {
passwordarray = passwordarray.concat(sCharacter);
}

if (lower) {
  passwordarray = passwordarray.concat(lowerletter);
}

if (upper) {
  passwordarray = passwordarray.concat(upperletter);
}

// else {
//   window.alert("Please select at least one type.")}

var passwordString = "";
for (var i = 0; i < passwordLength; i++) {
passwordString += passwordarray[Math.floor(Math.random() * (passwordarray.length))];
console.log(passwordString)


}

return passwordString;
}


// Write password to the #password input
function writePassword() {
  var password = makePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



function getPWLength() {
  var pLength = 0;
  while ((pLength < 8 ) || (pLength > 128)) {
    pLength = parseInt(window.prompt("How many characters do you want from (8 - 128)?"));

    if (isNaN(pLength)) {
      pLength = 0;
    }
  }
  return pLength;
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);