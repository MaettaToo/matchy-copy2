/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: function takes an array and strings as params, array of objects (animals) string is the name of an animal on which to perform a search.
//O: returns  the animal's Object if an animal with that name exists. returns `null` if no animal with that name exists
//C:none
//E: none
//Implement a function declaration called search
function search (array, string){
//init for loop to iterate over array 
    for(var i = 0; i < array.length; i++){
        // create condition to check if name is included 
        if(string === array[i]['name']){
            return array[i];//return object if true
        }
    } 
         return null;//return null if no name is found
     }





//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// I: function takes 3 parameters, an array of animals, a string representing  the name of an animal on which to perform a search, and an Object that represents the replacement animal.
//O:  replacement object if an animal with that name exists within the `animals` Array
//C: none
//E: none
//init function replace with params animals, name, replacement)
function replace(animals, name, replacement){
    //for loop to iterate over animals array
    for(var i = 0; i < animals.length; i++){
        //create conditional stmt to determine if name is in the array
        if( name === animals[i]['name']){
            //use splice to remove object and add replacement object
            animals.splice(animals[i], 1, replacement);
        }
    }

}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I:function takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search
//O: animals array with animal name removed if that name exists within the
//C:none
//E: none
// Init function with (animals, name)
function remove (animals, name){
    //for loop to iterate over animals array
    for(var i = 0; i < animals.length; i++){
        //create conditional stmt to determine if name is in the array
        if( name === animals[i]['name']){
            //use splice to remove object and add replacement object
            animals.splice(animals[i], 1,);
        }
}
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

   //I: function takes an array of animals, and an object representing a new animal to be added as params
  //O: add new Object to the `animals` Array
  //C: must pass all conditions 
  //E: what if there is no name property or species property

//init function called add with params (animals, animal)
function add(animals, animal) {
// init for loop to iterate over animals array
if(animal['name'].length > 0 && animal['species'].length > 0 ){
    for( var i = 0; i < animals.length; i++){
        if(animal['name'] !== animals['name'] ){
    // create conditional stmt that checks that the animal Object has a `name` property with a length > 0.
    // create conditional stmt that checks that the animal Object has a `species` property with a length > 0.
    //create a conditional stmt that checks that  no other animals have that name.
        // animals.push(animal);
        // push new object if conditions are met 
       
    }
    }

}
}
/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}