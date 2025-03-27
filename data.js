/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */
//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Create a variable named `animal` and assign it to an empty object.
var animal = {};
//] Use dot notation to add property named species with a value of any animal species.
animal.species = 'dog';
//Use bracket notation to add property name with a value of the animal`s name.
animal['name'] = 'Bambi';
//Use dot notation to add property called `noises` with a value of empty array.
animal.noises = [];
//Print your `animal` Object to the console by adding, `console.log(animal);`,
console.log(animal);




//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//init  a variable named `noises` as an empty array.
var noises = [];
//Use bracket notation to add string element to noises array represented as a sound the animal might make.
noises[0] = 'bark';
// Use push method to add woof  to the end of noises array
noises.push('woof');

//use unshift method to add growl to beginning of array
noises.unshift('growl');
// use bracket notation to add element to end of array
noises.splice(noises[noises.length - 1], 0,'howl');
// console log the length of the array
console.log(noises.length);
//console.log the last element in noises
console.log(noises[noises.length - 1]);
//console.log the whole array.
console.log(noises);




//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: object with key noises assign to empty array, array named noises independent of the object 
//O: object with the items  of the noises array assigned to noises property of animal
//C:none
//E: none
//Use bracket syntax to assign the noises property on animal object to our new noises array
animal['noises'] = noises;
// Use any syntax to add another noise to the `noises` property on `animal`.
animal.noises.push('whine');
//`console.log` `animal`.
console.log(animal);




/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * //there are two ways to access objects bracket notation and dot notation. 
 * You should use dot notation when you know the key name. It is a very specific 
 * way of accessing. Use bracket notation if you don't have a specific name. Also if you use bracket notation with a specific 
 * name use the quotation marks around the name. 
 *
 * 2. What are the different ways of accessing elements on arrays?
 * You can only access using bracket notation.
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a variable named `animals` and assign it to an empty array.
var animals = [];
//push animal object to the animals array 
animals.push(animal);

//console.log` `animals`.
console.log(animals);
 //Create a variable called `duck` and assign it to the data:{ species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }`
 var duck = {species :'duck',
             name: 'Jerome',
             noises: ['quack', 'honk', 'sneeze', 'woosh']
   }
 //push` `duck` to `animals`
 animals.push(duck);
 //`console.log` `animals`
 console.log(animals);
 //Create two more animal objects each with a species, a name, and at least two sounds sounds and add each one of them to `animals.
 var cat = {species :'cat',
            name: 'Olivia',
           noises: ['purr', 'meow', 'chirp', 'growl']
 }
 var bird = {species :'bird',
             name: 'Charlotte',
             noises: ['chirp', 'trill', 'hoot', 'cluck']
}
animals.push(cat);
animals.push(bird);
 //console.log` `animals`t
console.log(animals);
//console.log` the length of `animals`
console.log(animals.length);



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//init var as array to contain list of friends. Chose array because it is the best choice to store information when creating lists
var friends = [];
var index;
//init a function called `getRandom` that takes our `animals` array and returns  a random `index` of the input array, using `Math.random`
function getRandom(array){
 index  = Math.random(array);
  return index;
}
//Using a random index from this function that you just created, get a random animal and add its `name` to `friends`.

//7. [ ] `console.log` `friends`.
//8. [ ] Using **bracket notation**, add the `friends` list as a **property** also named `friends` on one of the animals in the `animals` array
//9. [ ] `console.log` your work.


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}