// Array of special characters to be included in password

function getPasswordLength() {
  var possibleLength = prompt("Please enter a password length");
  if(possibleLength === null){
    return
  }
  if (possibleLength >= 10 && possibleLength <= 64) {
    return possibleLength;
  }
  console.log(possibleLength);
  return null;
}
function getPossibleCharacters(){
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

  function getPasswordOptions(){
    var possibleChar = []

    var passLength = prompt ('The password needs to be between 10 and 64 characters.')
  if ((passLength < 10 || (passLength > 64)){
    alert('Try again! The password should be between 10 to 64 characters.');
    return getPasswordOptions();
  }
  }
  

  var wantsSpecial = confirm('Would you like special characters?');
 if (wantsSpecial) {
  possibleChar = possibleChar.concat(specialCharacters);
 }
  var wantsNumeric = confirm('Would you like numeric characters?');
  if (wantsNumeric) {
   possibleChar = possibleChar.concat(numericCharacters));
  var wantsUpper = confirm ('Would you like uppercase?');
  if (wantsUpper) {
    possibleChar = possibleChar.concat(upperCasedCharacters);
  var wantsLower = confirm ('Would you like lower case?');
  if (wantsLower) {
    possibleChar = possibleChar.concat(lowerCasedCharacters);

alert("Nice! You have created a password.")

// Function to prompt user for password options
function generatePassword() {
  var passLength = getPasswordLength();
  if(passLength === null){
    alert("you should have selected a value between 10 and 64. Try again!")
    return
  }
  var characterOptions = getPossibleCharacters()
  if(characterOptions === null){
    alert("you should have selected at least one data type! Try again!")
    return
  }
  if (characterOptions.length < 1){
alert('Choose one character option at least please.');
returngetPasswordOptions();
  }


function getRandom(Array) {
  return Array[Math.floor(Math.random()* Array.length)];

}

function generatePassword(){

  var userOptions = getPasswordOptions();
  var password = "";

  for (var i = 0; i < userOptions.passLength; i++){
    var charSet = getRandom(userOptions.characterOptions);
    password= password.concat(getRandom(charSet));
  }
  return password;
}




var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

