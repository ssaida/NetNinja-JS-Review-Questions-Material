const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ages = [20, 10, 25, 35];

console.log('Numbers:');
for(let i=0;i<numbers.length;i++){
  console.log(numbers[i]);
}

console.log('Ninjas:');
let ninjas = ['Samer Saida','Omar Assi','Fares Halahlih'];
ninjas.forEach(ninja => {
  console.log(ninja);
});

console.log('Ages:');
let result = ages.join(' - ');
result = ages.indexOf(10);
console.log(result);
result = ages.concat(ninjas);
console.log(result);
result = ages.push(100);
console.log(ages); 
result = ages.pop()
console.log(ages); 
result = ages.pop()
console.log(ages); 
result = ages.pop()
console.log(ages); 
result = ages.pop()
console.log(ages); 