//AND(&&) BOTH MUST BE TRUE
const password = prompt("Enter your password");
if(password.length >=6 && password.indexOf(' ') === -1){
    console.log("VALID PASSWORD")
}else{
    console.log("INCORRECT PASSWORD FORMAT")
}

//OR(||) ONE MUST BE TRUE

const age = 90;
if(age >= 0 && age < 5 || age >= 65){
    console.log("Free")
}
else if(age >= 5 && age < 10){
    console.log('$10')
}
else if (age >= 10 && age < 65){
    console.log('$20')
}else{
    console.log('invalid age')
}

//NOT(!)
const firstName = prompt('Enter your first name');
if(!firstName){
    firstName = prompt('Please enter your first name')
}


//SWITCH statement
const day = 2;
switch (day{
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursdsay');
        break;
    case 5:
        console.log('Friday');
        break;
    default:
        console.log('I dont know that');
})