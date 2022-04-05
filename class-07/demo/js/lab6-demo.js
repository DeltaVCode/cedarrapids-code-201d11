'use strict';
console.log('app js is connected');

// Problem Domain: the Cedar Rapids Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

//Each Kitten's profile should have:
// Name
// Breed
// - gender   -- isFixed.
// - random age assigned
// a list of what they like to play with.
// an image
// is good with kids
// is good with dogs
// is good with other animals


let petOne = {
  petName: 'Tiger',
  breed: 'Tiger',
  imageName: 'diabloBlanco',
  interests: ['Sun Light','Mouse Toys','Red Dots'],
  isGoodWithKids: true,
  isGoodWithDogs: false,
  isGoodWithCats: true,
  setAge: function() {
    this.age = randomAge(3,12) + ' Months old.';
  }
};

petOne.setAge();

console.log(petOne);

let petTwo = {
  petName: 'Fluffy',
  breed: 'Tabby',
  imageName: 'tommyBob',
  interests: ['Rainy Days','Running','Yarn'],
  isGoodWithKids: false,
  isGoodWithDogs: false,
  isGoodWithCats: false,
  setAge: function() {
    this.age = randomAge(3,12) + ' Months old.';
  }
};

petTwo.setAge();
console.log(petTwo);

function randomAge(minMonth, maxMonth){
  return Math.floor(Math.random() * (maxMonth - minMonth) + minMonth);
}



//add to our objects
petOne.isFixed = true;
petTwo.isFixed = false;


//Create DOM elements and render then in the html
//create a new element the parent element
//create the child elements to render a specific pet to the document.

let parentElement = document.getElementById('kittenProfiles');
console.log(parentElement);

//create article tag
let article = document.createElement('article');
// let article = document.createElement('articleXML');

parentElement.appendChild(article);


let h3 = document.createElement('h3');
h3.textContent = petOne.petName;
article.appendChild(h3);

//create ul
let petUl = document.createElement('ul');
article.appendChild(petUl);

for(let i = 0; i < petOne.interests.length; i++){
  let petLi = document.createElement('li');
  console.log(petLi);
  petLi.textContent = petOne.interests[i];
  petUl.appendChild(petLi);
}

//create image
let petOneImage = document.createElement('img');
petOneImage.setAttribute('src', 'images/' + petOne.imageName + '.jpeg');
petOneImage.setAttribute('alt', 'Adopt our pet kittens image of kitten');
article.appendChild(petOneImage);































// let person = {
//   name:'Craig Smith',
//   age: 49,
//   computerInclined: true,
//   education: ['SIU','JJC', 'KCC', 'UofI', 'SWIC', 'CofAF'],
//   code: function(){
//     console.log('I am coding now....');
//   }
// };
// console.log(person);
// console.log(person.age);
// console.log(person.education[0]);
// console.log(person.code());
