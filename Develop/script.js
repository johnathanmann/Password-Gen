// Declaring adjustable variables
var generateBtn = document.querySelector("#generate");
// User selections
var length;
var lowerCase;
var upperCase;
var numeric;
var specialCharacters;
// Variable that will house the selections
var selections;
// Variable of generated password
var passwordText;

// Character list for password generation
// Alpha standing for alphabet
let lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let characters= ["!", "#", "$", "%", "&", "*", "^", "@"];
// Declaring variable that will adjust password with the selections made  
var selection;

function writePassword() {

  function generatePassword() {

// This prompts the user to input their password length. If its to short or to long the user will be alerted to the error and prompted to input again.
  length= parseInt(prompt("Choose a password length between 8 and 128 characters:"));
  if (length > 128){
    alert("Password must be between 8 and 128 characters.");
    length= prompt("Choose a password length between 8 and 128 characters:");
  } else if (length < 8){
    alert("Password must be between 8 and 128 characters.");
    length= prompt("Choose a password length between 8 and 128 characters:");
   } 

  // These confirms will log what preferences the user has for their password
  var lowerCase= confirm("Would you like to include lower case characters?");
  var upperCase= confirm("Would you like to include upper case characters?");
  var numeric= confirm("Would you like to include numbers?");
  var specialCharacters= confirm("Would you like to include special characters?");

  // Forces user to make at least one selection
  if(!lowerCase && !upperCase && !numeric && !specialCharacters == true){
    alert("You must make at least one selection.")
    passwordText = "";
  }

  // The math equation seen in the following if statements helps the array to be the users desired length by subtracting their length from the array length. The new length will be sliced from the shuffled array later to make the password the desired length.

  // If all 4 selections are true

  else if (lowerCase && upperCase && numeric && specialCharacters){
    selections = characters.concat(lowerAlpha, upperAlpha, numbers);
    selections = selections.concat(selections);
    length = 140 - length;
  }

  // If three selections are true

  else if (lowerCase && upperCase && numeric){
    selections = lowerAlpha.concat(upperAlpha, numbers);
    selections = selections.concat(selections, selections);
    length = 186 - length;
    console.log();
  }
  else if (lowerCase && upperCase && specialCharacters){
    selections = lowerAlpha.concat(upperAlpha, characters);
    selections = selections.concat(selections, selections);
    length = 180 - length;
  }
  else if (upperCase && specialCharacters && numeric){
    selections = upperAlpha.concat(numbers, characters);
    selections = selections.concat(selections, selections);
    length = 132 - length;
  }
  else if (lowerCase && specialCharacters && numeric){
    selections = lowerAlpha.concat(numbers, characters);
    selections = selections.concat(selections, selections);
    length = 132 - length;
  }

  // // If two selections are true

  else if (upperCase && lowerCase){
    selections = upperAlpha.concat(lowerAlpha);
    selections = selections.concat(selections, selections);
    length = 156 - length;
  }
  else if (upperCase && numeric){
    selections = upperAlpha.concat(numbers);
    selections = selections.concat(selections, selections, selections);
    length = 144 - length;
  }
  else if (upperCase && specialCharacters){
    selections = upperAlpha.concat(characters);
    selections = selections.concat(selections, selections, selections);
    length = 136 - length;
  }
  else if (lowerCase && numeric){
    selections = lowerAlpha.concat(numbers);
    selections = selections.concat(selections, selections, selections);
    length = 144 - length;
  }
  else if (lowerCase && specialCharacters){
    selections = lowerAlpha.concat(characters);
    selections = selections.concat(selections, selections, selections);
    length = 136 - length;
  }
  else if (numbers && specialCharacters){
    selections = numbers.concat(characters);
    selections = selections.concat(selections, selections, selections, selections, selections, selections, selections);
    length = 128 - length;
  }

  // If one selection is true

  else if (lowerCase){
    selections = lowerAlpha;
    selections = selections.concat(selections, selections, selections, selections);
    length = 130 - length;
  }
  else if (upperCase){
    selections = upperAlpha;
    selections = selections.concat(selections, selections, selections, selections);
    length = 130 - length;
  }
  else if (numeric){
    selections = numbers;
    selections = selections.concat(selections, selections, selections, selections, selections, selections, selections, selections,selections, selections, selections, selections);
    length = 130 - length;
  }
  else if (specialCharacters){
    selections = characters;
    selections = selections.concat(selections, selections, selections, selections, selections, selections, selections, selections, selections, selections, selections, selections, selections, selections, selections);
    length = 128 - length;
  }

  // This will the shuffle the arrays created by each selection type
  // source: https://www.youtube.com/watch?v=myL4xmtAVtw&ab_channel=AllThingsJavaScript%2CLLC
  let shuffle = function(arr){
    let newPos,
      temp;

    for (let i = arr.length - 1; i > 0; i--){
      newPos = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[newPos];
      arr[newPos] = temp;
    }
    return arr;
  }

  // The following lines shuffle the array made by the selections made and then shorten it down to the users desired length
  let shuffleArray = shuffle(selections);
  console.log(shuffleArray);
  shuffleArray = shuffleArray.slice(length);
  console.log(shuffleArray);
  passwordText = shuffleArray.join('');
  console.log(passwordText);
  document.getElementById("password").value = passwordText;

}

  // Print password!
  var password = generatePassword();
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

