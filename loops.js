const availableChars = 'abcdefghijklmnopqrstuvwxyz1234567890-=+_';

function generateRandomPassword(passwordLength){
  let randomStr = '';
  for(let i=0;i<passwordLength;i++){
    let randomIndex = getRandomNumber(1, availableChars.length - 1);
    randomStr += availableChars[randomIndex];
  }
  return randomStr;
}

function getRandomNumber(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let password = generateRandomPassword(10);
console.log(`Random Password ${password}`);