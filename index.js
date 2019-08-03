'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;



/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* @param{value}: Value being identified by its value
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
function identity(x){
    return x;
}
module.exports.identity = identity;


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* @param{array, object, string, number, boolean, function, null or undfined} values: 
* The values whose types are sought
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"

*/
var values = "";// declaring variable
function typeOf(value){ //defining the function
  if(Array.isArray(value)){ //testing if the value is array
        return 'array';
    }else if(value === null){ // checking if value is null 
        return 'null';

    }else {
        return typeof value;
    }       
}
module.exports.typeOf = typeOf;
/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* @param{array}collection: The collection to check its typeof
* @param{number}inputs: The input values to check its typeof
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

function first(array, number){
    if(!Array.isArray(array) || number < 0){
        return [];// returning a literal array if it's not array, or number 
        //not in array
    }else if(typeof number !=='number' || number === 'null'){ // checks if number 
    //is not a number or null, returns first element in array
        return array[0];// returns the first element number is not a number/not given
    }else if(array.length !== number){// checks if length of array does not equal number
        return array.slice(0, number);// selects part of the array from index zero 
        //to number if array length does not equal number
    }else{
        return array; //returns array if otherwise
    }
}
module.exports.first = first;

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* @param{array}collection: The collection to check its type - typeof
* @param{number}value:  The input value to chck its typeof
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
function last(array, number){
    if(!Array.isArray(array) || number < 0){ //checks if it's not an array
        return[]; // returns empty array literal if the given collection is not an array
    }else if(typeof number !== 'number' || number === null){//checks if number is a 'number' or not given
        return array[array.length-1];//returns the last element of the array if number is not a 'number' or not given
    }else if(array.length < number){
        return array;//returns the given array if the length of the array is less than the number given
    }else if(array.length !== number){
        return array.splice(number - 1, array.length -1);//removing elements from the array and returning them in a new array 
    }
}
module.exports.last = last;


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* @param{array}collection: The collection over which to loop
* @param{value}: The value whose first index of occurence in the array is to be 
* checked
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
function indexOf(array, value){
    // looping over the given array
    for(var i = 0; i < array.length; i++){
    //checks for the first array element matching the value 
        if(array[i] === value){ 
        //returns the index of first match of value
         return i;   
        }
        //returning -1 if value is not in array
    }return -1;  
    
}
module.exports.indexOf = indexOf;      
    

        
    


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* @param{array}collection: The collection(array)to loop over
* @param{value}: The value whose presence is to be checked in the array
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
function contains(array, value){
    //looping over the given array
    for(var i = 0; i < array.length; i++){
      if(array[i] === value){
          // returns true if the given array contains the given value
          return true; 

}
          
      }return false;//returns false otherwise
    }
module.exports.contains = contains;


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* @param{collection}: The collection to be checked if it's an array, and then 
* looped over if an array
* @param{function}: The test function to test the elements in the given 
* collection(array)
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
function each(collection, action){
    // checks if collection is an array
    if(Array.isArray(collection.length)){
    //loops over the given collection like an array
        for(var i = 0; i < collection.length; i++){
        //declares a variable element
            var element = collection[i]; 
            // check if the elements in the collection passes the test action
            action(element, i, collection);
        }
    }else{
        // otherwise, looping over the given collection like an object
        for(var key in collection){
        //declare a constant variable element
            const element = collection[key]; 
            //check if the elements in the collection object pass the test
            action(element, key, collection);
        }
    }
}
module.exports.each = each;

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* @param{array}collection: The array to be looped over
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
function unique(array){
    // declares a new array
    var results = []; 
     //loops over the input array
    for( var i = 0; i < array.length; i++){
    if(indexOf(results, array[i]) === -1){
        //returns the entire new results array
        results.push(array[i]); 
    }
}return results;
}
module.exports.unique = unique;
/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* @param{array}collection: The array to be looped over
* @param{function}: The test function to check if the elements in the array pass
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x % 2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
function filter(array, func){
    var filterArray = [];
    //use each to access every element, index, and the entire array
    each(array, function(elements, index, array){
    // if you pass elements inside the function and returns true 
        if(func(elements, index, array) === true){
    // push into the filterArray
            filterArray.push(elements);
            
        }
    });
    return filterArray;
    
}
module.exports.filter = filter;

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in 
* your implementation
* @param{array}collection: The array to be filtered
* @param{function}: The function to test if the elements in
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
function reject(array, test){
    //declares a resulting array
    var results = []; 
    filter(array, function(element, index, array){
        // test function to see elements that failed test
       if(test(element, index, array) === false){ 
       // pushing elements that failed into the new array
           results.push(element);
       }
})
return results;
};
module.exports.reject = reject;


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* @param{array}Collection: The array to filter/loop over
* @param{function}: The test function to check the array elements to see if they pass
* a test
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
function partition(array, test){
    //declares  new array containing arrays as elements to collect all elements that passed/failed the test 
    var result1 = [[], []];
    //using _.filter to loop over the given array to create a new array of elements that pass the test
    filter(array, function(element,index,array){
        index = index++;
        //checking elements in the array that pass the test
        if(test(element, index, array)){
            //pushing elements for which the test resulted true to first array in result1 
            result1[0].push(element);
        }else{
            //pushhing elements for which the test resulted false to the secon array in result1
            result1[1].push(element);
        }
    })
    //returning result1
    return result1;
};
module.exports.partition = partition;

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* @param{collection}array: The array to loop/filter
* @param{function}: The test function to check the elements that pass a test
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
function map(collection, test){
    //declaring a vaiable result1 
    let result1 = [];
    //using _.filter to loop over the given collection  
    filter(collection, function(element, index, array){
        //pushing the elements for which the test resulted true to the array result1
        result1.push(test(element, index, array));
    })
    // return result1
    return result1; 
};
module.exports.map = map;


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* @param{array}collection: The array to loop over
* @param{object} collection: The object elements to be tested
* @param{key}: The object input keys to access the object values
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
function pluck(array, value){
    //declare a variable list
    var list = [];
    //using _.each to loop over the given array
    each(array, function(element, index, array){
        //accessing the value of each object element, and pushing each to the list array declared 
       list.push(element[value]);
       //returning list
    }); return list;
}
module.exports.pluck = pluck;


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* @param{collection}array: The array to loop over 
* @param{function}: The test function to check the array elements that pass a test
* 
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

//defining an arrow function
function every(collection, test){
    //declaring a variable
    var y = true;
    if(test){
        //using _.each to loop over the given collection 
        each(collection, function(element, index, array){
            //testing elements in the array that don't pass test
          if(test(element, index, array) === false){
              y = false;
          }  
        });
    }else{
        //using _.each to loop over the collection
        each(collection, function(element, index, array){
            //checking if no element pass the test
            if(!element){
                y = false;
            }
        });
    }
    return y
}
module.exports.every = every;
    


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* @param{collection}array: The array to loop over
* @param{function]: The test function to check the array elements that pass a test
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
// defining an arrow function
function some(collection, test){
    //declaring a variable y 
    var y = false;
    if(test){
        //using _.each to loop over the given collection
        each(collection, function(element, index, array){
            //checking if elements pass test
            if(test(element, index, array)){
                y = true;
            }
        });
    }else{
        //using_.each to loop over the collection
        each(collection,function(element, index, array){
            if(Boolean(element)){
                y = true;
            }
        })
    }
    return y;
}
module.exports.some = some;

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* @param{array}collection: The array to loop over
* @param{function}: The test function to check the elements of the array that pass a test 
* @param{seed}: The start value for the iterations over the array elements 
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

//defining an arrow function
function reduce(collection, test, seed){
   var previousResult = seed;
   debugger;
   each(collection, function(element, index, array){

         if (seed === undefined && index === 0){
             previousResult = element;
             return ;
         }
       previousResult = test(previousResult, element, index)
   });
   return previousResult;
}
module.exports.reduce = reduce;

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* @param{object1}collection: The object to which another object, object2, is to be assigned
* @param{object2}collection: The object to be assigned to anther object, object1
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//defining an arrow function
function extend(Object1,...Object2){

//using Object.assign() to copy properties from object2 to object1
       Object.assign(Object1,...Object2);
//returning object1
    return Object1;
}
module.exports.extend = extend;