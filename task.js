// 1. Declare a variable with the value of "I can walk in the park all day!". 
// Print the word "park" to the console.
const taskFirst = "I can walk in the park all day!";
console.log(taskFirst.slice(18,23));

// 2. Declare a variable with the value of "Hello World". 
// Covert the value to upper case and print the converted value to the console.
const taskTwo = "Hello World";
console.log(taskTwo.toUpperCase());

// 3. Declare another variable with the value of "Hello Earthling". 
// Convert the value to lower case and print the converted value to the console. 
const taskThree = "Hello Earthling";
console.log(taskThree.toLowerCase());
// 4. Declare a variable with the value "JavaScript". 
// Use string methods to print the the characters "aSc" from your declared variable.
const taskFour = "JavaScript";
console.log(taskFour.slice(3,6));

// 5. Check if the sentence "nice shoes" contains the letter l or n. 
console.log("nice shoes".includes("n"), "nice shoes".includes("l"));
// 6. Create a new string from a given string with the first character of the given string added 
// at the front and back, i.e., expected output: Bananas => BBananasB
const taskSix = "Lord";
console.log(taskSix[0]+taskSix+taskSix[0]);


// 7. Create a new string from a given string taking the last 3 characters
//  of the string and add them to both the front and back of the new string. 
//  The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch
const taskSeven = "Forestland"
console.log(taskSeven.slice(-3)+taskSeven+taskSeven.slice(-3));

// 8. Create a new string from a given string by changing the position of first and last characters. 
// The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB
console.log(taskSeven.slice(-1)+taskSeven.slice(1,9)+taskSeven[0]);
// 
// 9. Create 3 different variables about yourself, using strings as values, i.e, 
// let firstName = "Maria"; let city = "Berlin", etc. 
// Print a sentence to the console using the variables and string interpolation, 
// i.e., "My name is Maria. I live in Berlin and I am a teacher". 
const firstName = "Tom";
const city = "Fürstenwalde";
const job = "traveller";
console.log(`My name is ${firstName}. I live in ${city} and I am a ${job}.`);
// 
// 10. Declare a variable and assign the value "the quick brown fox" (all in lower case). 
// Capitalize the first letter of that string. Print the result to the console.
const taskTen = "the quick brown fox";
console.log(taskTen[0].toUpperCase()+ taskTen.slice(1));

