// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){

  // Prompts the user to write what they want the password to be 
  var inputUser = window.prompt("How long do you want your password to be ?" + '\n' +"chose a number 8-128")

  var passwordLength = parseInt(inputUser)

  if(isNaN(passwordLength)){
    window.alert("That is not a number")
    return
  }



  if(passwordLength<8||passwordLength>128){
    window.alert("That number is either too big or too small")
    return
  }
var numberUsers=window.confirm("Do you want numbers in your password?")
var symbolsUsers=window.confirm("Do you want special characters in your password?")
var upperUsers=window.confirm("Do you want Uppercase letters in your password?")
var lowerUsers=window.confirm("Do you want lowercase letters in your password?")


var uppercaseList=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var LowercaseList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var numbersList = ["0","1","2","3","4","5","6","7","8","9"]
var SymbolsList=["!","@","#","$","%","^","&","*","(",")"]
var userPassword=[]


if (upperUsers==true){
  userPassword=userPassword.concat(uppercaseList);
}
if (symbolsUsers==true){
  userPassword=userPassword.concat(SymbolsList);
}
if(numberUsers==true){
  userPassword=userPassword.concat(numbersList);
}
if (lowerUsers==true){
  userPassword=userPassword.concat(LowercaseList);
}
if(userPassword.length===0){
  userPassword.push(window.alert("NO OPTIONS WERE CHOSEN"))
}

var generatedPassword = [];

for(var i=0;i<inputUser;i++){
var random=userPassword[Math.floor(Math.random()*userPassword.length)]
generatedPassword+=random};

  return generatedPassword;

}

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

// getting random values function
