// Assignment code here

//Setup list of special characters
const pwSpecialChars = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
// console.log ("Number of special characters:", pwSpecialChars.length);
// Setup list of numbers
const pwNumbers = [1,2,3,4,5,6,7,8,9,0]
// console.log ("Number of numbers:", pwNumbers.length);
// Setup list of lower case letters
const pwLCLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"]
// console.log ("first and thir lower case letters", pwLCLetters[0], pwLCLetters[2]);
// Setup list of upper case letters
const pwUCLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"]
// console.log ("first and thir upper case letters", pwUCLetters[0], pwUCLetters[2]);

var charCount = 0;
var i = 0;
var charType = 0;
var charLC = null;
var charUC = null;
var numericYorN = null;
var spCharYorN = null;
var LCLettersRandomNbr = 0;
var pwCombined = null;
var UCLettersRandomNbr = null;
var specialCharsNbr = null;
var numbersNbr = null;




// prompted for the length of the password between 8 and 128 characters
function askCount() {
  pwCombined = null;
  charCount = 0;
  var nbrChars = prompt("How many characters do you want to use for your password?  Pick a number between 8 and 128.");
  if (nbrChars != null) {
    if (nbrChars >= 8 & nbrChars <= 128){
      // console.log ("entered number is valid:", nbrChars);
      charCount = nbrChars;
      askCase();
    }
    else {
      // console.log ("entered number is NOT valid:", nbrChars);
      askCount();
    }
  }
  else {
    askCount();
  }
}
// promt for lower case yes or not
function askCase() {      
  charLC = prompt("Would you like to use lowercase characters? Enter 1 for Yes or 2 for No. Your password characters will be defaulted to UPPERCASE if 'no' is chosen.");
  // console.log ("CharLC value is ", charLC);
  if(charLC == 1){
    // console.log ("Lower case chosen.  Value is ", charLC);
    charLC = true;
    // console.log (charLC, " Should be true");
      charUC = prompt("Which you also like to use some uppercase characters? Enter 1 for Yes or 2 for No.");
      // console.log ("CharUC value is ", charUC);
      if(charUC == 1){
        // console.log ("Upper case is also chosen.  Value is ", charUC);
        charUC = true;
        // console.log ("CharUC:", charUC, " Should be true"); 
         askNumeric();
      }
      if (charUC == 2) {
        // console.log ("Upper case NOT chosen");
        charUC = false;
        // console.log (charUC, "Should be false");
        askNumeric();
    }
  }
  else if (charLC == 2) {
      // console.log ("Lower case NOT chosen");
      charLC = false;
      charUC = true
      // console.log ("CharLC: ", charLC, "Should be false");
      // console.log ("CharUC: ", charUC, " Should be true");
      askNumeric();
  }
  else {
    // console.log ("Lower/Upper case entered number is NOT valid:", charLC);
    askCase();
  }
}
// prompted for whether to include numerics or not
function askNumeric() {
  numericYorN = prompt("Would you like to use some numerics? Enter 1 for Yes or 2 for No.");
  if ( numericYorN != null) {
    if (numericYorN == 1){
      // console.log ("Numeric y or n entered number is valid:", numericYorN);
      numericYorN = true;
      // console.log (numericYorN);
      askSpChar();
    }
    else if (numericYorN == 2){
      // console.log ("Numeric y or n entered number is valid:", numericYorN);
      numericYorN = false;
      // console.log (numericYorN);
      askSpChar();
    } else {
      // console.log ("Numeric y or n entered number is NOT valid:", numericYorN);
      askNumeric();
    }
  }
  else {
    askNumeric();
  }
}
// prompted for whether to include special characters or not
function askSpChar() {
  // debugger;
  spCharYorN = prompt("Would you like to use some special characters? Enter 1 for Yes or 2 for No.");
  if ( spCharYorN != null) {
    if (spCharYorN == 1){
      // console.log ("Special character entered number is valid:", spCharYorN);
      spCharYorN = true;
      // console.log(spCharYorN, " Should go to generatePassword next.");
      generatePassword();
    }
    else if (spCharYorN == 2) {
      // console.log ("Special character entered number is valid:", spCharYorN);
      spCharYorN = false;
      // console.log(spCharYorN);
      generatePassword();
    } else {
      // console.log ("Special character entered number is NOT valid:", spCharYorN);
      askSpChar();
    }
  }
  else {
    askSpChar();
  }
}
function generatePassword () {
  // console.log ("value of i ", i);
  // console.log ("value of charCount ", charCount );
  for (let i = 0; i < charCount; i++) {
    // console.log ("Index of # of characters: ", i, " and number entered: ", charCount);
    genEachChar();
  }
  // console.log ("out of for loop")
  // console.log ("this is the password: " + pwCombined);
  // function stopWithError()  {
  // console.log ("At end");
  writePassword();
  // }
   // stopWithError();
}

function genEachChar() {
    // generate random number for type of character for this digit.  there are 4 possible choices: 1) lc, 2) UC, 3) numeric, 4) special character
  charType = Math.floor(Math.random() * 4) + 1;
  // console.log ("Value of character type: " + charType);
  // console.log ("case 1: " + charLC + " case 2: " + charUC + " case 3: " + numericYorN + " case 4: " + spCharYorN);
  switch (charType) {
    case 1:
      if (charLC) {
        // console.log ("will run lowecase code");
        lowerCaseCode();
      } else {
          // console.log ("will regenerate character type because type chosen was not requested by user.");
          genEachChar();
      }
      break;
    case 2:
      if (charUC) {
        // console.log ("will run UPPERCASE code");
        upperCaseCode();
      } else {
          // console.log ("will regenerate character type because type chosen was not requested by user.");
          genEachChar();
      }
        break;
    case 3:
      if (numericYorN) {
        // console.log ("will run numeric code");
        numericCode();
      } else {
          // console.log ("will regenerate character type because type chosen was not requested by user.");
          genEachChar();
      }
      break;
    case 4:
      if (spCharYorN) {
        // console.log ("will run special character code");
        specialCode();
      } else {
          // console.log ("will regenerate character type because type chosen was not requested by user.");
          genEachChar();
      }
      break;
    default:
      // console.log ("this is an error");
  }
}
//Use random number to select a character from the lower case array. 
function lowerCaseCode() {
  LCLettersRandomNbr = Math.floor((Math.random()*pwLCLetters.length)); // 0 to 25
  // console.log ("this is the value of the array spot that will be used: " + LCLettersRandomNbr);
  // console.log ("This is the letter chosen" + pwLCLetters[LCLettersRandomNbr])
  // console.log ("Value of pwCombined: " + pwCombined);
  
  if (!pwCombined) {
    pwCombined = pwLCLetters[LCLettersRandomNbr];
    // console.log ("First letter " + pwCombined);  
  } else {
      pwCombined = pwCombined + pwLCLetters[LCLettersRandomNbr];
      // console.log (pwCombined);
  }
}
//Use random number to select a character from the upper case array. 
function upperCaseCode() {
  UCLettersRandomNbr = Math.floor((Math.random()*pwUCLetters.length)); // 0 to 25
  // console.log ("this is the value of the array spot that will be used: " + UCLettersRandomNbr);
  // console.log ("This is the letter chosen" + pwUCLetters[UCLettersRandomNbr])
  // console.log ("Value of pwCombined: " + pwCombined);
  
  if (!pwCombined) {
    pwCombined = pwUCLetters[UCLettersRandomNbr];
    // console.log ("UC First letter " + pwCombined);  
  } else {
      pwCombined = pwCombined + pwUCLetters[UCLettersRandomNbr];
      // console.log (pwCombined);
  }
}

//Use random number to select a number from the numeric array. 
function numericCode() {
  numbersNbr = Math.floor((Math.random()*pwNumbers.length)); // 0 to 25
  // console.log ("this is the value of the array spot that will be used: " + numbersNbr);
  // console.log ("This is the letter chosen" + pwNumbers[numbersNbr])
  // console.log ("Value of pwCombined: " + pwCombined);
  
  if (!pwCombined) {
    pwCombined = pwNumbers[numbersNbr];
    // console.log ("Numberic First number " + pwCombined);  
  } else {
      pwCombined = pwCombined + pwNumbers[numbersNbr];
      // console.log (pwCombined);
  }
}
//Use random number to select a number from the numeric array. 
function specialCode() {
  specialCharsNbr = Math.floor((Math.random()*pwSpecialChars.length)); // 0 to 25
  // console.log ("this is the value of the array spot that will be used: " + specialCharsNbr);
  // console.log ("This is the letter chosen" + pwSpecialChars[specialCharsNbr])
  // console.log ("Value of pwCombined: " + pwCombined);
  
  if (!pwCombined) {
    pwCombined = pwSpecialChars[specialCharsNbr];
    // console.log ("First special character " + pwCombined);  
  } else {
      pwCombined = pwCombined + pwSpecialChars[specialCharsNbr];
      // console.log (pwCombined);
  }
}
// a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var password = pwCombined;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button to start dialouge and ultimately generate and display passowrd
// generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", askCount);