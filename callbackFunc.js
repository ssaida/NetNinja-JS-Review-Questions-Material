// Call back Functions:
let ul = document.querySelector('.people');
let people = ['Samer Saida','Elay Guez','Yaakov Demensky'];
let html = ``;
people.forEach(person => {
  html = `<li>${person}</li>`;
  console.log(html);
});

// people.forEach(logPerson);
// const logPerson = (person, index) => {
//   console.log(`${index} - ${person}`);
//   let li = `<li>${index} - ${person}</li>`;
//   ul.append(li);
// }


const myFunc = callBackFunc => {
  let value = 50;
  callBackFunc(value);
};

myFunc(function(value){
  console.log(value);
});