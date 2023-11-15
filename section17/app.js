//Arrays are lists

//Makes an empty array
let students = [];

//Array of strings
let colors=['purple', 'pink', 'blue', 'green']

//Array of numbers
let lottoNums = [19, 22, 56, 12, 51]

//Mixed array
let stuff = [true, 68, 'cat', null, undefined]

let days = ['Monday', 'Tuesdsay', 'Wednesday']
console.log(days.length)  //3

console.log(days[0]) //Monday

 //Push - add to end
let movieLine = ['tom', 'jerry', 'mouse'];
console.log(movieLine);
movieLine.push('cat');
console.log(movieLine);


 //Pop - remove from end
let person = movieLine.pop();
console.log(person);
console.log(movieLine);

//Shift - remove from start
movieLine.push('dog', 'roof')
console.log(movieLine);
let nextPatron = movieLine.shift();
console.log(nextPatron)
console.log(movieLine)


//Unshift - add to start
movieLine.unshift('VIP');
console.log(movieLine)

//Concat  -  merge two or more arrays
let cats = ['blue', 'kitty'];
let dogs = ['rusty', 'wyatt'];
let pets = cats.concat(dogs);
console.log(pets)

//Includes  -  return true or false if particular value included
cats.includes('blue') //true

//indexOf()  -  index at which an element can be found (first time it occurs)
pets.indexOf('rusty') //2

//reverse - reverse an array (changes the original)
pets.reverse();


//Slice (start, end) doesnt include the stop  -- get copy of a portion of an array
let rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let coolColors = rainbow.slice(3)  //green, blue, indigo, violet
console.log(coolColors)
let warmColors = rainbow.slice(0, 4);


//Splice (start, # to delete, what to insert) -- changes content by removing or replacinig existing elements
const months = ['Jan']
console.log(rainbow)
colors.splice(5, 1) //deletes indigo
colors.splice(1,0,'red-orange'); //adds red-orange after red


//Sort -- converts to string then compares UTF-16 values
let score = [1, 70, 100, 2500, 9, -12, 0, 32]
score.sort(); //-12, 0, 1, 100, 2500, 34, 70, 9


//nested arrays
const gameBoard = [
    ['X', 'O', 'X'],
    ['O', null, 'X'],
    ['O', 'O', 'X']
]

console.log(gameBoard[1][1])

