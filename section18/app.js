//Objects are colletions of properties
//  Properties are key-value pairs
//     Use custom keys to access data

const fitBitData = {
    totalSteps : 308727,
    totalMiles : 211.7,
    avgCalorieBurn : 5755,
    workoutsThisWeek : '5 of 7',
    avgGoodSleep : '2:13'
};

console.log(fitBitData.avgGoodSleep);

const person = {
    firstName: 'Mick',
    lastName: 'Jagger'
};

console.log(person);

const kitchenSink = {
    favNum: 9231902,
    isFunny: true,
    colors: ['red', 'orange']
}

console.log(person['lastName']);
console.log(person.firstName);

const years = {1999: 'Good', 2020: 'Bad'}
years['1990']



const midterms = {
    danielle: 96, thomas: 78,
}

midterms.thomas = 79;
midterms.thomas;

midterms;

midterms.thomas = 'C+';
midterms['danielle'] = 'A';

midterms.ezra = 'B+';
midterms['antonio'] = 'A-';

midterms


//Nesting arrays & objects

const comments = [
    {username: 'Tammy', text: 'lololol', votes: 9},
    {username: 'Michael', text: 'hehe', votes: 100},
]

comments[1].text;
