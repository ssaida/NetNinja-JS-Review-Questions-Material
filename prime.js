const num = 7;

let isPrime = true;

for(let i=2;i<num && isPrime;i++){
  if(num%i == 0)
    isPrime = false;
}

if(isPrime)
  console.log('Prime')
else
  console.log('Not Prime');