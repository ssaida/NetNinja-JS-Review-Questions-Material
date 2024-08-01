const speak = function(person, time='Morning'){
  return `Good ${time} ${person}`;
};
const calcArea = function(radius){
  return Math.PI * Math.pow(radius, 2);
  
};
console.log('Arrow functions:'); 
const calcAreaArrow = radius => Math.PI * Math.pow(radius, 2);
console.log(calcAreaArrow(5).toFixed(3));
function sum(a, b){
  return a + b;
}
console.log(sum(3, 4));
console.log(speak('Samer Saida'));
console.log(calcArea(5));


const area = (radius, pi) => pi * Math.pow(radius, 2);
console.log(area(5, Math.PI));

const bill = function(products, tax){
  let total = 0;
  for(let i=0;i<products.length;i++){
    total += products[i] + products[i] * tax;
  }
  return total;
}

const billArrow = (products, tax) => {
  let total = 0;
  products.forEach(product => {
    total += product + product * tax;
  });
  return total;
};
const lineOfProducts = [10, 20, 30];
let taxes = 0.2;
console.log(bill(lineOfProducts, taxes));
console.log(billArrow(lineOfProducts, taxes));