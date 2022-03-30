'use strict';
console.log('app is connected');


//global variable;
let userPoints = 0;
console.log(userPoints);
alert('Hello, and welcome to the guessing game!');
let userName = prompt('What is your name?');
console.log('user is :', userName);



//THE USER VARIABLE
// - string
// - null
// - " " empty
// If the user is empty string or null, keep asking them for their name.

// while(userName === ' ' || userName === null){
//   //do something.
// }
//short way to do this
// while(!userName){
//   userName = prompt('What is your name, second time we are asking. ? ');
// }


//Control Flow IF else statements.

// if(condition){......}
// if(condition){....} else {.......}
// if(condition){.....} else if(second condition) {....} else {.....}
// if(condition){.....} else if(second condition) {....} else if (thirdCondition) {.....} else {.......}



// Comparison Operators
/**
 < - less than
 > - greater than
 <= less than or equal to
 >= greater than or equal to
 == kinda equals
 != not equals too
 ---- stict usage
 === - strictly equals
 !== - not strictly equals

  */


//1.
// This is the not equals.

if(userName !== 'bob'){
  console.log('craig is not bob', userName);
  alert('Your not the bob we are looking for. ');
}
alert('hello, ' + userName + ' are you ready to play the game?');



//2.

//User Points
let answer = prompt('Is my favorite food popcorn? Please type yes or no.');
console.log(answer);

if(answer === 'no' || answer === 'n'){
  alert('you are correct');
  userPoints += 1;
} else {
  alert('No you are wrong, I dont like popcorn.');
}


// 3. LOOPING

console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);

console.log('while loops require a starting variable.');

let count = 0;

console.log('This code will run the loop as long as the variable above is less than or equal to 50');
while(count <= 50 ){
  console.log('this is the count: ', count);
  count = count + 5;
}



// console.log('While loops need an expression to change the starting variable, in this case we are increasing the value by 5 each time the loop runs');
// // This loop counts down from 50 to 0, decreasing by -2 each time
count = 50;
while(count >= 40) {
  console.log('while loop count starts 50: ',count);
  count = count - 2;
}

/**  multi line comment.
          WHILE LOOPS  will run until a condition is true or truthy, or not true!!

          while(condition){

              something has to change
          }

          let i = 0;
          while(i < value){
            count our iterations or times through the loop
            i += 1;
            i++;
            i = i + 1
          }

          DO WHILE
          do {
            here code runs first and always then the condition is checked.
            }
             while(condition)
*/

// let newUser;
// do {
//   newUser = prompt('A New User Name?');
//   console.log('New User Name', newUser);
// } while (!newUser);

// console.log('we now have a user',newUser);









let zenTime;
do {
  zenTime = prompt('Is today good?');
  zenTime = zenTime && zenTime.toUpperCase();
  console.log(' after uppercase', zenTime);
  if (zenTime) { // or zenTime == null or zenTime === null
    zenTime = zenTime.toUpperCase();
  }
  console.log('Good?', zenTime);
} while (zenTime !== 'N' && zenTime !== 'Y');

console.log('zenTime', zenTime);


/*

      Evaluating Comparisons
      Type coercion, weak typing, truthy/falsy
      falsy values are :
      - 0
      - null
      - NaN
      - ''
      - undefined
      - false


      truthy values. ==== everything else.

      Logical Operators
      - (craig == 'instructor' || 'teacher')    => will not Work


      Combining conditions:
      - Not: !
      - And: &&
      - Or:  ||

      // - (craig === 'instructor' && craig === 'teacher')

      Short-circuiting:
      - If we know the answer from the first expression, don't evaluate the second expression
        Logical operators work from left -> right, and stop as soon as they get a result. When they stop, they return whatever value stopped them, so we can write logical expressions that return a value other than true or false. This can be used to set default values.


        let name1 = 'Dan';
        let name2 = '';
        let userName1 = (name1 || 'unknown'); -> userName = 'Dan'
        let userName2 = (false || 'ted'); -> userName2 = 'unknown'


      Any existing value is considered truthy, so we can use a conditional to check whether something exists:
*/
let a = 10;
let emptyObject = '';

if (a) {
  console.log('a exists');
}

if (a && emptyObject) {
  console.log('they both exist');
}



//Arrays
//                   0
let foodsILike = ['tatertots', 'chips', 'popcorn', 'kale'];
console.log(foodsILike);


//loop over to traverse through an array

for(let i = 0; i < foodsILike.length; i++){

  console.log('for loop doing work', foodsILike[i]);
}


foodsILike.push('swiss chard');
console.log(foodsILike);



//pop  removes elements
let popArrayElement = foodsILike.pop();
console.log('array after the pop():', foodsILike);
console.log('this shows the popped item from the array. ', popArrayElement);
console.log('before the shift',foodsILike);


//shift array to remove from the front.
let shiftArray = foodsILike.shift();
console.log('shift of array first element', shiftArray);
console.log('shiftArray ', foodsILike);


// yes, js lets you do this (having an array of different data types). don't do it.
let mixedUpArray = ['yeehaw', 42, true, ['yo'], {}];
console.log('mixedUpArray ', mixedUpArray);


console.log('before unshift ',foodsILike);

// unshift adds elements to the front of the array
foodsILike.unshift('spinach');
console.log('unshift', foodsILike);



// indexOf tells you the index of an element in the array; returns -1 if not found
let index = foodsILike.indexOf('popcorn');
console.log('this is the index of popcorn ', index);
// on your own: check out splice



