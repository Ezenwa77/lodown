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



/**
 * identity: Designed to take one argument/value and return the given 
 * argument/value unchanged. Could take any argument/value, say x, and returns same..
 * @param{argument/value}: Argument being identified by its value
 * @return{value}: The returned value has the same type and value as the 
 * argument.Value identified and returned by the identity function is unchanged.
 * 
 * Usage: 
 * 
 *    
 *     
 * 
 *
 */
    function identity(x){
       return x;
     }
     module.exports.identity = identity;


/**  typeOf: It is designed to find the data type of a value. 
 * Arguments: It could take strings, object(not array, not a null, not date), 
 * undefined, boolean, number, function as arguments like so: 'house', 
 * {name: 'John'}, undefined, true, 234, and function changeLetter(){}, and would 
 * return the value type in string form like so: 'string', 'object', 'undefined',
 * 'boolean', 'number', and 'function'.
 * @param{string, object, undefined, conditional statements, number, or function}: 
 * the input data to find there types.
 * @return{'string','object', 'undefined', 'boolean', 'number', or 'function'}: 
 * The type of data of the input data returned in quotes(as a string).
 * 
 * Usage:
 * typeof('school'); // --> 'string'
 * typeof({}); // --> 'object'
 * typeof(undefined); --> 'undefined'
 * typeof(true); --> 'boolean'
 * typeof(234); --> 'number'
 * typeof(function changeLetter(){}); // 'function'

*/
var values = "";
function typeOf(value){ 
  if(Array.isArray(value)){ 
        return 'array';
    }else if(value === null){  
        return 'null';

    }else {
        return typeof value;
    }       
}
module.exports.typeOf = typeOf;


/** first: This function/method is designed to return the first element of the 
 * selected elements. Could take arrays and elements/numbers. It returns the 
* first element/number in the selection from the array.
* @param{array}collection: The input array from which a selection of elements is 
* to be ma de, and the first element/number selected.
* @param{elements/numbers}: The elements or numbers selected in an array from 
* which the first element/number is to be returned.
* @return{element/number}: The element/number returned from selected 
* elements/numbers. It is the first element/number from the selection of 
* elements/numbers.
* 
* usage:
*/
function first(array, number){
    if(!Array.isArray(array) || number < 0){
        return []; 
    }else if(typeof number !=='number' || number === 'null'){  
        return array[0];
    }else if(array.length !== number){
        return array.slice(0, number); 
    }else{
        return array; 
    }
}
module.exports.first = first;

/** last: This function/method is designed to return the last element of the 
 * selected elements. Could take arrays and elements/numbers. It returns the 
* last element/number in the selection from array.
* @param{array}collection: The input array from which a selection is to be made, and the last element/number 
* selected.
* @param{elements/numbers}: The elements or numbers selected in an array from 
* which the last element/number is to be returned.
* @return{element/number}: The element/number returned from selected 
* elements/numbers. It is the last element/number from the selection of 
* elements/numbers.
* 
* usage:
*/
function last(array, number){
   if(!Array.isArray(array) || number < 0){ 
      return[]; 
    }else if(typeof number !== 'number' || number === null){
       return array[array.length-1];
    }else if(array.length < number){
        return array;
    }else if(array.length !== number){
        return array.splice(number - 1, array.length -1);
   }
    
}

   module.exports.last = last;
   

/** indexOf: This method searches string or array, and returns the 
 * position/index of the first occurrence of a specified element in a 
 * string/array. The method returns -1 if the value being serched never
 * occurs. This method is case sensitive - sees uppercase and lowercase of a 
 * letter of the alphabets as different.
 * @param{string or array}: The string or array in which to conduct the search 
 * for first occurrence of the element.
 * @param{search element}: The element whose position/index is to be returned.
 * @return{position/index}: The returned position/index of the first occurrence 
 * of an element.
 * 
 * Usage:
*/
  function indexOf(array, value){
    for(var i = 0; i < array.length; i++){
          if(array[i] === value){ 
       return i;   
       }
    }return -1;  
     
   }
 
module.exports.indexOf = indexOf;      
    

        
    


/** contains: This method searches an array of elements to check if it contains 
 * a specified element/value. It takes an array and a value as parameters, and 
 * returns a boolean based on if the value is found(the true) or not found
 * (false) of the search.
 * @param{array}collection: The collection in which to search for a specified 
 * element/value.
 * @param{value}: The value being searched in the given array.
 * @result{boolean}: The return value is a boolean, (true or false) based on if 
 * the value is found in the array or not.
 * 
 *Usage:
 */
function contains(array, value){
    
    for(var i = 0; i < array.length; i++){
      if(array[i] === value){
          
          return true; 

}
          
      }return false;
    }
module.exports.contains = contains;



/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * 
 * Usage:
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            const element = collection[key];
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;









/** unique: The unique method is ste up to check if a value first occurs in the
 * original array, then filters the original array so that only first-occurred 
 * elements would be kept. It takes an array and a call-back function, and 
 * returns an array without duplicates or array of unique elements.
 * @param{array}collection: The array to be flitered to take off only 
 * first-occurred elements.
 * @param{function}test: The function to be applied on each element of the array/
 * collection. The test function returns a boolean based on logic that tests if 
 * the elements passed to it first occurred. 
 * @return{array}: A new array of unique elements is returned(elements with no 
 * duplicates) is returned.
 *  
 * Usage:
*/
function unique(array){
    var results = []; 
    for( var i = 0; i < array.length; i++){
    if(indexOf(results, array[i]) === -1){
        results.push(array[i]); 
    }
}return results;
}
module.exports.unique = unique;



/** filter: This is set up to filter values/elements in a collection based on a 
 * test. It take an array or object, and passes each element/value through a 
 * test function. The test function would resolve to true if the element passes 
 * the test, but false if not. The elements that pass the test are collected and 
 * returned in a new array(output array).
 * @param{Array}collection: The collection to be filtered
 * @param{Function}test: The function to be applied to value in the collection. 
 * This resolves to a boolean based on the logic that tests the values given to 
 * it.
 * @return{Array}: An array of filtered elements of collection. This array will 
 * contain only the elements that passed the test.
 * 
 * Usage:
 * 
 */
function filter(array, func){
    var filterArray = [];
    each(array, function(elements, index, array){
        if(func(elements, index, array) === true){
            filterArray.push(elements);
            
        }
    });
    return filterArray;
    
}
module.exports.filter = filter;



/** reject; The reject function is employed to bring out the elements that do 
 * not match with the given condition. It is employed to find out the elments 
 * from the array/list that do no satisfy the given condition and then make 
 * changes to them only. The reject loop ends when all the elements of the 
 * arry/list have been passed to the function. This function returns an array of
 * elements that do not pass the test.
 * @param{array}collection: This parameter contains the elements to be tested
 * @param{function}test: The function to be applied to the elements of the 
 * collection. It contains some condition/logic which is used to reject elements 
 * of the collection.
 * @return{Array}: This is a returned array of elements which do not fulfill the
 * test condition.
 * 
 * Usage:
 * 
*/
function reject(array, test){
    var results = []; 
    filter(array, function(element, index, array){
       if(test(element, index, array) === false){ 
           results.push(element);
       }
})
return results;
};
module.exports.reject = reject;


/** partition: This method takes an array and an anonymous(callback) function, 
 * and returns two new arrays. The first of the new arrays contains the elements
 * that satisfy the callback condion, and the second contains the elements that 
 * do not satisfy the condition of the callback function. The anonymous function
 * takes element, index and array/collection as parameters, and returns a 
 * boolean based on if an element passed or failed the test. So, this method 
 * practically does filter and reject in one piece.
 * @param{Array}collection: The array to be partitioned
 * @param{function}test: This is the callback function which applies some logic, 
 * and returns a boolean based on if the condition of the logic is met by an 
 * element.
 * @return{Arrays}: This method returns two arrays - One is an array of elements
 * that filtered through or passed the test, and the other is an array of 
 * elements that are rejected or did not pass the test. 
 * 
 * 
 * Usage:
 * 
*/
function partition(array, test){
    var result1 = [[], []];
    filter(array, function(element,index,array){
        index = index++;
        if(test(element, index, array)){
            result1[0].push(element);
        }else{
            result1[1].push(element);
        }
    })
    return result1;
};
module.exports.partition = partition;




/** map: This method creates a new array by calling a transformation function on
 * each of the collection elements. This is a non-mutating method. It is used, 
 * generally, to iterate over an array and applying a callback function on 
 * every array element. It takes a collection and a callback function as 
 * parameters. It returns a new array.
 * @param{collection}: The collection to iterate over and map.
 * @param{function}: The callback function that runs on every element of the 
 * given collection. It takes three parameters - value, index, and array.
 * @return{Array}: This is a new array of elements that are the results of the 
 * callback function.
 * 
 * Usage:
 * 
*/
function map(collection, test){
    let result1 = [];
    filter(collection, function(element, index, array){
        result1.push(test(element, index, array));
    });
    return result1; 
}
module.exports.map = map;


/** pluck: This method is used when we need to extract a list of a given 
 * property. It takes an array and a property as parameters, takes the property 
 * from the array/list one by one  and starts extracting the given property's 
 * details starting from the first element. It returns an array of the details 
 * of the property on which qe needed to aggregate contents. 
 * @param{array}list: The list/array on which to apply the pluck function.
 * @param{property}: This is the property on which we need to aggregate the 
 * content.
 * @return{array}: The returned value is an array of the details we need to 
 * extract about the property. 
 * 
 * Usage: 
*/
function pluck(array, value){
    var list = [];
    each(array, function(element, index, array){
       list.push(element[value]);
    }); return list;
}
module.exports.pluck = pluck;


/** every: This method checks whether all the elements of the array satisfy a 
 * given condition provided by a callback function passed to it as argument. It 
 * takes an array and a callback function as parameters. The callback function 
 * takes three parameters: array, index, and element.
 * @param{collection}: This is the array on which the function every() was 
 * called.
 * @param{function}: A function that defines the condition to be checked for 
 * each element of the array. This callback function takes three arguments - 
 * array(optional): still the original array on which the function every()
 * was called, index(optional): the index of the element being processed by the 
 * function, element(compulsory): The current element being processed by the 
 * function.
 * @return{Boolean}: This function returns a boolean based on if all the 
 * elements of the array follow the condition implemented by the callback 
 * function. Return true if all the elements follow the condition, and false 
 * otherwise.
 * 
 * Usage:
*/

function every(collection, test){
    var y = true;
    if(test){
        each(collection, function(element, index, array){
          if(test(element, index, array) === false){
              y = false;
          }  
        });
    }else{
        each(collection, function(element, index, array){
            if(!element){
                y = false;
            }
        });
    }
    return y
}
module.exports.every = every;
    


/** some: This function takes a callback function and a collection(array) as 
 * parameters. It checks whether at least one of the array elements satisfies 
 * the condition checked by the callback function. 
 * @param{function}callback: This is a function that defines the condition to be
 * checked for each element of the array. It takes an array (the array on which 
 * the some() function is to be applied), index(the index of the current 
 * element) and element( the current element being processed by the function.
 * @param{array}: The array on which the some() function was called.
 * @return{Boolean}: This function returns true even if one of the elements of 
 * the array satisfies the condition (but will not check the remaining elements)
 * implemented by the callback function. It returns false if no element of the 
 * array satisfies the condition of the callback function.
 * 
 * Usage:
 * 
e
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

function some(collection, test){
    var y = false;
    if(test){
        each(collection, function(element, index, array){
            if(test(element, index, array)){
                y = true;
            }
        });
    }else{
        each(collection,function(element, index, array){
            if(Boolean(element)){
                y = true;
            }
        })
    }
    return y;
}
module.exports.some = some;

/** reduce: This is used to reduce or fold the collection to a single value, and
 * implements a provided callback function on each of the array elements (from 
 * left to right) and stores the return value in an accumulator. It takes a 
 * function and a startValue as parameters.
 * @param{function}: This is a function that is used to run for each array 
 * element. It contains the accumulator, currentValue, current index, and an 
 * array. 
 * @param{startValue}:It is often used to specify the start value to be passed 
 * to the function.
 * @return{Accumulator}: This is the returne value of the accumulated from the 
 * last call of the callback function. 
 * 
 * Usage:
 * 

*/


function reduce(collection, test, seed){
   var previousResult = seed;
   each(collection, function(element, index, array){

         if (seed === undefined && index === 0){
             previousResult = element;
             return;
         }
       previousResult = test(previousResult, element, index)
   });
   return previousResult;
}
module.exports.reduce = reduce;

/** extend: This method is used to copy all properties from a source object to a 
 * destination object. It takes objects parameters, and returns an object to 
 * which all the properties of the subsequent objects(source objects) have been 
 * copied. This method has the following syntax: Object.extend(destinationObject,
 * sourceObjects)
 * @param{Object1}destinationObject: The object to receive the new properties.
 * @param{Object2}sourceObject: The object we want to copy/duplicate its 
 * properies.
 * @return{Object}: The returned object to which the properties of other 
 * object(s) have been copied.
 * 
 * Usage:
 * 
*/

function extend(Object1,...Object2){
       Object.assign(Object1,...Object2);
    return Object1;
}
module.exports.extend = extend;