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




//Create a constructor function to build objects.
function Pet(petName, breed,imageName, interest, isGoodWithKids, isGoodWithDogs, isGoodWithCats){
  //our this's
  this.petName = petName;
  this.breed = breed;
  this.imageName = imageName;
  this.interests = interest;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithCats = isGoodWithCats;
}

//was in object literal
// setAge: function() {
//   this.age = randomAge(3,12) + ' Months old.';
// }


Pet.prototype.setAge = function(){
  this.age = this.age = randomAge(3,12) + ' Months old.';
};

function randomAge(minMonth, maxMonth){
  return Math.floor(Math.random() * (maxMonth - minMonth) + minMonth);
}


Pet.prototype.getInterests = function (){
  let randomArrayIndex = Math.floor(Math.random() * this.interests.length);
  console.log('rando index number?', this.interests[randomArrayIndex]);
  return this.interests[randomArrayIndex];
};



Pet.prototype.render = function(){
  //Grab the parent element
  let parentElement = document.getElementById('kittenProfiles');
  console.log(parentElement);

  //create article
  let article = document.createElement('article');
  parentElement.appendChild(article);

  //create an h2 for pet name
  let h3 = document.createElement('h3');
  h3.textContent = this.petName;
  article.appendChild(h3);
  //create p description
  let petPara = document.createElement('p');
  petPara.textContent = `Cats are cool, my age is ${this.age}`;
  article.appendChild(petPara);
  // create ul of interests
  let petUl = document.createElement('ul');
  article.appendChild(petUl);
  for(let i = 0; i < this.interests.length; i++){
    let petLi = document.createElement('li');
    petLi.textContent = this.interests[i];
    petUl.appendChild(petLi);
  }
  //add images
  let petOneImage = document.createElement('img');
  petOneImage.setAttribute('src', 'images/' + this.imageName + '.jpeg');
  petOneImage.setAttribute('alt', 'Adopt a pet today!');
  article.appendChild(petOneImage);




  //create a table for our pets.
  let petTable = document.getElementById('adopt-pet-table');
  console.log(petTable);
  let tBody = document.createElement('tbody');
  petTable.appendChild(tBody);
  let petRow = document.createElement('tr');
  let nameCell = document.createElement('td');
  nameCell.textContent = this.petName;
  petRow.appendChild(nameCell);

  let breedCell = document.createElement('td');
  breedCell.textContent = this.breed;
  petRow.appendChild(breedCell);


  let ageCell = document.createElement('td');
  ageCell.textContent = this.age;
  petRow.appendChild(ageCell);


  let interestsCell = document.createElement('td');
  interestsCell.textContent = this.interests;
  petRow.appendChild(interestsCell);


  petTable.appendChild(petRow);


};













let petOne = new Pet('Tiger','Tiger','diabloBlanco',['Sun Light','Mouse Toys','Red Dots'],true,false,true);
petOne.setAge();
petOne.getInterests();
petOne.render();
let petTwo = new Pet('Fluffy','Tabby','tommyBob',['Rainy Days','Running','Yarn'],false,false,false);
petTwo.setAge();
petTwo.getInterests();
petTwo.render();
let petThree = new Pet('Buddy','calico','jumper',['Rainy Days','push things off of counters','Yarn'],true,true,true);
petThree.setAge();
petThree.getInterests();
petThree.render();
console.log('object is pet: ',petOne);
console.log('object is pet: ',petTwo);
console.log('object is pet: ',petThree);


let allPets = [petOne, petTwo, petThree];

console.log(allPets);

(
  function render(){
    //loop over array and call our setAge and getInsterests, and render(). 
  }
)();































