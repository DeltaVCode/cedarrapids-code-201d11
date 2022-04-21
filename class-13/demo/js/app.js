'use strict';
console.log('app js connected.');
// TODO hey, what about an array of tree objects! that would have file path for picture, and the tree info
// TODO don't repeat the correct picture
// TODO randomize tree image placement

// TODO a way to track a score - score should increment by 1 when they get something right
// TODO a way to track how many attempts they've used - increment attempt in the event handler when any image is clicked
// TODO some way to play again without having to refresh
// TODO a way to stop the event listener from doing its thing when the num of attempts reaches a maximum number
// TODO when they reach the max, show a chart with the score and numAttempts

// Persistence of data
// When we persist data, we need to be able to do four things with it:
// create the data - setItem in localStorage
// retrieve it
// update it - setItem in localStorage
// delete it

//set up  app variables
const pizzaNames = ['Brick-Oven-Pizza', 'Calzone-Pizza', 'Chicago-Pizza', 'Oven-Ginder-Pizza', 'Detroit-Pizza', 'Deluxe-Pizza-Thin-Crust', 'New-York-Pizza', 'Shotgun-Dans-MeatLover'];
let correctPizza = '';
let wrongPizza = '';
let attempts = 0;
const maxAttempts = 10;

//get Dom elements from html
const pizzaNameElement = document.getElementById('pizzaName');
const pizzaImagesParent = document.getElementById('pizzaImages');
const responseElement = document.getElementById('response');
const scoreElement = document.getElementById('score');
const attemptsElement = document.getElementById('attempts');
console.log({pizzaNameElement,pizzaImagesParent,responseElement,scoreElement,attemptsElement});





function setup () {
  // call this with a random name
  // 1.
  correctPizza = generateRandomPizza();
  // 2.
  wrongPizza = generateRandomPizza();
  // 3.
  updatePizzaName(correctPizza);

  if (attempts) {
    pizzaImagesParent.removeChild(pizzaImagesParent.lastChild);
    pizzaImagesParent.removeChild(pizzaImagesParent.lastChild);
  }


  // 4.
  renderPizzaImage(correctPizza);
  // 5.
  renderPizzaImage(wrongPizza);
  // 6.
  updateScoreElement();
  // 7.
  updateAttempts();
}

setup();



// One Done. Two Done.
function generateRandomPizza () {
  const index = Math.floor(Math.random() * pizzaNames.length);
  return pizzaNames[index];
}
//Three Done
function updatePizzaName(pizzaName) {
  pizzaNameElement.textContent = pizzaName;
}
//Four Done. Five Done.
function renderPizzaImage(pizzaName) {
  const img = document.createElement('img');
  img.setAttribute('src', 'images/' + pizzaName + '.jpg');
  img.setAttribute('id', pizzaName);
  pizzaImagesParent.append(img);
}
//from the event listener render out response
function renderResponse(response) {
  responseElement.textContent = response;
}



//--------------------------------------------------------------------------------------------------------------------------------------

pizzaImagesParent.addEventListener('click', function (event) {
  if (attempts === maxAttempts) {
    return;
  }

  const answer = event.target.getAttribute('id');
  console.log('answer', answer);

  if (answer === correctPizza) {
    incrementScore();
    renderResponse('woohoo! ZA,ZA,ZA,ZA,ZA!');
  } else {
    renderResponse('wrong! Za Alert.');
  }
  attempts++;
  setup();
  
  if (attempts === maxAttempts) {
    // do things
    // draw();
    // chart();
  }
});


function incrementScore () {
  //get score from local storage.
  //A.
  let score = getScore();
  //update score
  score++;
  //Here we need to set up local storage. 
  //B.
  createOrUpdateScore(score);
  //C.
  updateScoreElement();
}
//A. Done
function getScore () {
  let score = localStorage.getItem('score');
  console.log('score from LOCSTOR', score);
  if (score !== null) {
    score = parseInt(score);
  }
  return score;
}

//B Done.
function createOrUpdateScore (value) {
  console.log(typeof value);
  // console.log(JSON.stringify(value));
   value = value.toString();
  // console.log(typeof value1);
  // value = JSON.stringify(value);

  console.log(typeof(value));

  localStorage.setItem('score', value);

  const score = localStorage.getItem('score');
  console.log('score from local storage after being set: ', score);

  return score;
}

//C Done.
function updateScoreElement(){
  scoreElement.textContent = getScore() || 0;
}

function updateAttempts(){
  attemptsElement.textContent = maxAttempts - attempts;
}






// function deleteScore () {
//   localStorage.removeItem('score');
//   return null;
// }

// function clearAllData () {
//   localStorage.clear();
//   return null;
// }















