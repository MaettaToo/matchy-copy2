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
animals['noises'] = 



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
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



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



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