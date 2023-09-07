// forEach: 

// Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

function doubleValues(array) {
    var newArray = [];
    array.forEach(function () { newArray.push(val * 2); 
    });
    return newArray;
}

console.log(doubleValues([1,2,3,4,5,6,7,8,9,10]
    ));


// Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

function onlyEvenValues(arr){
    var newArray = [];
    array.forEach(function () { newArray.push(el, es); 
    });
    return evenNumbersFromArray;
}

console.log(onlyEvenValues([2,4,6,8,10,12,14,16,18,20]
    ));


// Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

function showFirstAndLast(arr){
    var newArray = [];
    array.forEach(function () { newArray.push(el, es); 
    });
    return newArray;
}


// Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

    function addKeyAndValue(arr, key, value) {
        for (i = 0; i < arr.length; i++) {
          obj = arr[i];
          obj[key] = value;
        }
        return arr;
        };

    console.log(addKeyAndValue([{name: 'colt'},{name:'matt'},{name:'tim'},{name:'elie'}]));
    

// Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

function vowelCount(str){
    var splitArr = str.toLowerCase().split("");
    var obj = {};
    var vowels = "aeiou";

    splitArr.forEach(function(letter){
        if(vowels.indexOf(letter) !== -1){
            if(obj[letter]){
                obj[letter]++;
            } else{
                obj[letter] = 1;
            }
        }
    });
    return obj;
}


// Map: 

// Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

function doubleValuesWithMap(array) {
    var newArray = [];
  array.forEach(function (el) { newArray.push(el, el); });    
  return newArray;
}

console.log(doubleValuesWithMap([1,2,3,4,5,6]));



// Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

function valTimesIndex(array){
    return arr.map(function(value, index, array) {
        return value * index;
    });
}


// Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

function extractKey(arr, key){
    return arr.map(function(value, index, array) {
        return value[key];
    });
}


// Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

function extractFullName(array, key){
    return arr.map(function(value,index,array){
		return value.first+" " + value.last;
	});   
}


// Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

function filterByValue(arr, key) {
    return arr.filter(function(value){
		return key in value;	
	});
}


// Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

function find(arr, searchValue) {var fArr = arr.filter(function(value){
    return value === searchValue;	
});    
if (fArr.length>0) return fArr[0];}


// Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

// Examples:
   // findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}

function findInObj(arr, key, searchValue) { var newArr = arr.filter(function(value){
    return key in value && value[key] === searchValue;	
});

if (newArr.length > 0) return newArr[0];

}



// Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

function removeVowels(str) {
    var arr = str.split('');
	var vowels = ['a','e','i','u'];
	return arr.filter(function(value){
		return vowels.indexOf(value.toLowerCase()) === -1;	
	}).join('').toLowerCase();
}


// Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

function doubleOddNumbers(arr) {
    return arr.filter(function(value) {
        return val % 2, !== 0;
    })
    .map(function(val) {
        return val * 2;
    });
}
