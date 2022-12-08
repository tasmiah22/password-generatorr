// Array of special characters to be included in password

  var specialCharacters = [
    "@",
    "%",
    "+",
    "\\",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    ".",
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
 
  // password options prompt with global array //

  function getPasswordOptions(){
    var possibleChar = []

  

    var passLength = prompt ('The password needs to be between 10 and 64 characters.')
  if ((passLength < 10 || (passLength > 64))){
    alert('Try again! The password should be between 10 to 64 characters.');
    return getPasswordOptions();
  
  }
  

  var wantsSpecial = confirm('Would you like special characters?');
 if (wantsSpecial) {
  possibleChar = possibleChar.concat(specialCharacters);
 }
  var wantsNumeric = confirm('Would you like numeric characters?');
  if (wantsNumeric) {
   possibleChar = possibleChar.concat(numericCharacters);
  }
  var wantsUpper = confirm ('Would you like uppercase?');
  if (wantsUpper) {
    possibleChar = possibleChar.concat(upperCasedCharacters);
  }
  var wantsLower = confirm ('Would you like lower case?');
  if (wantsLower) {
    possibleChar = possibleChar.concat(lowerCasedCharacters);

alert("Nice! You have created a password.")

  }

if (possibleChar.length < 1){
  alert('Select at least one character option please.');
  return getPasswordOptions();
}

// object to store the users options//
var userOptions = {passLength, possibleChar};
return userOptions;
} 

function getRandom(array) {
  return array[Math.floor(Math.random()* array.length)];

}

// function to generate the password using the users options/ input // 
function generatePassword(){

  var userOptions = getPasswordOptions();
  var password = "";

  for (var i = 0; i < userOptions.passLength; i++){
    var charSet = getRandom(userOptions.possibleChar);
    password= password.concat(getRandom(charSet));
  }
  return password;
}




var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);