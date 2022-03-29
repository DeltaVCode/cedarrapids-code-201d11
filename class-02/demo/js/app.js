'use strict';
console.log('app js is connected.');


//prompt our users for input.

let userName;
console.log('user name', userName);


// while(!userName){
//   userName = prompt('Enter your name!');
// }

// alert('Hello ' + userName);


// let lowerCaseName = userName.toLowerCase();


//Validate the input using conditional logic using strict equals

// if(lowerCaseName === 'craig' || lowerCaseName === 'bob'){
//   alert('Welcome back ' + userName);
// } else {
//   alert('Welcome new user to our site.');
// }



// logical operator example
// let myBooleanValueTrue = true;
// let anotherBooleanValueFalse = false;
// let thirdBooleanValueTrue = true;
// let myBooleanValueTrue = true;
// let anotherBooleanValueFalse = false;
// let thirdBooleanValueTrue = false;
// let myBooleanValueTrue = false;
// let anotherBooleanValueFalse = false;
// let thirdBooleanValueTrue = true;
let myBooleanValueTrue = false;
let anotherBooleanValueFalse = false;
let thirdBooleanValueTrue = false;
//        true        and        true
if(myBooleanValueTrue && thirdBooleanValueTrue){

  alert('The && will run if both are true');
  console.log('both were true');
//                    true  or    true
} else if(myBooleanValueTrue || anotherBooleanValueFalse){
  alert('The || will run if one of the values is true.');
  console.log('at least one value was true');

} else if (thirdBooleanValueTrue){
  alert('the 3rd value was true so this last else if has fired.');
} else {
  console.log('There was no true values');
}


// creat an empty array

let emptyArray = [];
console.log('this is empty',emptyArray);

let quizAnswers = ['b','c','d','e','c','c','c'];
console.log(quizAnswers);


//nested Array
let nestArray = [['yes', 'y'],['no', 'n'],['maybe', 'maybe not']];
console.table(nestArray);


let nestArrayMultipleLine = [
  ['yes', 'y'],
  ['no', 'n'],
  ['maybe', 'maybe not']
];
console.log(nestArrayMultipleLine);


//we dont always have to commit to a specific data type.
let mixedDataTypes = ['Harry', 'Potter', 10, true, 'magic'];
console.log(mixedDataTypes);

let myArray = ['a', 'b', 'c'];

myArray[0] = 'z';

console.log(myArray);


//0, 1, 2
let myArrayOne = ['a','b','c'];

if(myArrayOne[1] === 'b'){
//do something
  console.log('this is the letter b: ', myArrayOne[1]);
}
//lets add to our Array.
let myArrayTwo = ['a','b','c', 7, 5];

myArrayTwo.push(6);
console.log('with the 6 added. ',myArrayTwo);

myArrayTwo.pop();
console.log('after the pop(). ',myArrayTwo);




//1
// Include on your HTML page:
// a short biography,
// your education history,
// an overview of your job experience,
// and any goals that you may have.
//6
// Ask the user their name through a prompt();
//2
// Prompt the user a total of exactly five yes or no questions.
// must accept either y/n or yes/no responses
//3
// normalizing the user input (hint: look into the .toUpperCase() or .toLowerCase() functions)
//4
// Add console.log() messages within your app to notify the user if they are correct.
//(don’t delete) your console.log() messages
// replace them with the alerts() to complete the project
//5
// As a user, I would like a personalized welcome message so that I feel like I am interacting with the site owner.
//7
// Display that name back to the user through a custom greeting welcoming them to your site.
//8
// Display the user’s name back to them in your final message to the user.

//9.
// 'use strict' declaration at the top, and your javascript file must be linked in your html file as an external script file.


