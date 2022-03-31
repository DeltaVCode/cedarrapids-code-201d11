'use strict';
console.log('app is connected');


function functionName(){
  //is where our code goes.
  console.log('this is from the function');
}

functionName();



// parameter are  let variables = allow us to give things in our code human readable values that we can use throughout the code.

function multiply(num1, num2){
  console.log('num1 value', num1, num2);
  let answer = num1 * num2;
  console.log('answer', answer);
  return answer;
}

let result1 = multiply(2, 3);
console.log(result1);
let result2 = multiply(45, 70);
console.log(result2);
///////////////////


let globalVariable = 'universal';


function scoper(parameter){
  let localVar = 'I like my privacy!';

  console.log('inside the function we can see parameter:', parameter);
  console.log('we can see local variale: ', localVar);
  console.log('we can see the global variable:  ' + globalVariable);

  for(let i = 0; i < 3; i++){
    console.log('the value of i ' + i);
  }

}

scoper('argument');

// console.log('inside the function we can see parameter:', parameter);
// console.log('we can see local variale: ', localVar);
console.log('we can see the global variable:  ' + globalVariable);



//////////////
function circlePropsOne(radius){
  let area = Math.PI * radius * radius;
  let circumference = 2 * Math.PI * radius;
  //type of object
  let props = [area, circumference];
  console.log('did this work',typeof props);
  return props;
}

let circle1 = circlePropsOne(3);
console.log('this is our circle 1: ',circle1);



///////// function Declaration
function yesOrNOPrompt(promptInfo){
  let userInput = prompt(promptInfo);

  if(userInput === 'yes'){
    console.log('hurray!!!!');
  } else if(userInput === 'no'){
    console.log('nope!');
  }else if(userInput === 'maybe'){
    console.log('make up your mind');
  } else {
    console.log('errorrrrrrr!');
  }
}
yesOrNOPrompt('Answer with yes no or maybe');

// Function Expression
let checkLogin = function(){
  let userID = 1234;
  if(userID){
    console.log('user with id ' + userID + ' is logged in');
  } else {
    console.log('user is not logged in.');
  }
};


checkLogin();

//IIFE
(function userLogin(){
  let userID = 1234;
  if(userID){
    console.log('user with id ' + userID + ' is logged in');
  } else {
    console.log('user is not logged in.');
  }
})();




alert('Welcome to 4-Part Spaceship repair!');

let spaceHandle = prompt('What\'s your space name?');
let spaceShipPart = prompt('What spaceship part do you need? Select a number between 1 and 4');

switch (spaceShipPart){

case '1':
  confirm(spaceHandle + ' You need part one.');
  console.log(spaceHandle + 'needs part one!');
  break;
case '2':
  confirm(spaceHandle + ' You need part two.');
  console.log(spaceHandle + 'needs part two!');
  break;
case '3':
  confirm(spaceHandle + ' You need part three.');
  console.log(spaceHandle + 'needs part two!');
  break;
case '4':
  confirm(spaceHandle + ' You need part four.');
  console.log(spaceHandle + 'needs part four!');
  break;
default:
  alert('I dont know what you need. ');

}
alert('Bye for now ' + spaceHandle);
