// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function makePassword() {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    const sCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?",
     "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];

    const lowerletter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
     "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    const upperletter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var passwordarray = [];

    var passwordLength = getPWLength();

    var eleSelect = true;
  if (eleSelect == true) {
    var number = getPass("Numbers")
    var special = getPass("Special")
    var lower = getPass("Lowercase")
    var upper = getPass("Uppercase")

      if ((lower) || (upper) || (number) || (special)) {
        eleSelect = false;
      }
    }
  
  else {
      window.alert("Please select at least 1 type.")
    return generatePassword()
  }
}


if (number) {
  passwordarray = passwordarray.concat(numbers);
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

