"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
console.log("________________________________________________________________");
console.log("Test 1");
console.log("Is Apple and Orange same?");
let isApple = "apple";
let isOranges = "oranges";
console.log("isApple === isOranges ", isApple === isOranges); // False
console.log("________________________________________________________________");
console.log("Test 2");
console.log("Is apple and APPLE same?");
let islowerText = "apple";
let isCapitalText = islowerText.toUpperCase();
console.log("isLowerText == isUpperText ", islowerText == isCapitalText); // False
console.log("________________________________________________________________");
console.log("Test 3");
console.log("Is ABCDEF and abcdef of same type");
console.log("isTypesmaller === isTypeUpper ", typeof ("abcdef") === typeof ("ABCDEF")); // True
console.log("________________________________________________________________");
console.log("Test 4");
console.log("123456 and abcdef are not same type");
console.log("isTypesmaller !== isTypeNumber ", typeof ("abcdef") !== typeof (123456)); // True
console.log("________________________________________________________________");
console.log("Test 5");
console.log("is 0 is less than -10000");
console.log("is 0 < -1000 ", 0 < -1000); // False
console.log("________________________________________________________________");
console.log("Test 6");
console.log("is 1 is greater than 99999 x 0");
console.log("is 1 > 99999 x 0 ", 1 > 99999 * 0); // True
console.log("________________________________________________________________");
console.log("Test 7");
let isBoolDay1 = "Saturday";
let isBoolDay2 = "Sunday";
let isBoolDay3 = "Monday";
console.log(`(${isBoolDay1} == ${isBoolDay2}) OR (${isBoolDay1} == ${isBoolDay3})`);
console.log((isBoolDay1 == isBoolDay2) || (isBoolDay1 == isBoolDay3));
console.log("________________________________________________________________");
console.log("Test 8");
console.log(`(${isBoolDay1} == ${isBoolDay1}) AND (${isBoolDay3} == ${isBoolDay3})`);
console.log((isBoolDay1 == isBoolDay1) && (isBoolDay3 == isBoolDay3));
console.log("________________________________________________________________");
console.log("Test 9");
console.log(`NOT(${isBoolDay1} == ${isBoolDay2}) AND NOT(${isBoolDay1} == ${isBoolDay3})`);
console.log(!(isBoolDay1 == isBoolDay2) && !(isBoolDay1 == isBoolDay3));
console.log("________________________________________________________________");
console.log("Test 10");
console.log(`NOT((${isBoolDay1} == ${isBoolDay2}) AND (${isBoolDay3} == ${isBoolDay3}))`);
console.log(!((isBoolDay1 == isBoolDay2) || (isBoolDay3 == isBoolDay3)));
console.log("________________________________________________________________");
console.log("Test 11");
const inItems = [1, 2, 3, "Apple", "Banana", "First", 70, 80, 90, "Century",];
console.log(`Is "Apple" in the array? ${inItems.includes("Century")}`);
const inNumberItems = [1, 2, 3, 40, 50, 77, 85, 101, 999];
const isIncludes = inNumberItems.map(items => items * 3);
console.log(`Is 100 number in the array? ${isIncludes}`);
