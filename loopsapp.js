//For loops
//  for( [initialExpression]; [condition]; [incrementExpression])
//      ex) for (let i = 1; i<=10; i++){console.log(i)}
//  

for( let i=1; i <= 10; i++){
    console.log(i);
}

for(let i=0; i<=20; i += 2){
    console.log(i)
}

for(let i=100; i>= 0; i -= 10){
    console.log(i);
}

//looping over arrays with for loops; start at index - and continue looping until last index (lenght -1)

const animals = ['lions', 'tigers', 'bears'];
for(let i=0; i<animals.length; i++){
    console.log(i, animals[i]);
}

for(let i = animals.length -1; i >= 0; i--)
{
    console.log(animals[i])
}