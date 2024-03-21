"use strict";
let person_name = "Karar ali malik";
console.log(`This is the Lowercase:\t${person_name.toLowerCase()}`);
console.log(`This is the Uppercase:\t${person_name.toUpperCase()}`);
let splitedName = person_name.split(" ");
let titleName = "";
for (let i = 0; i < splitedName.length; i++) {
    titleName += splitedName[i].charAt(0).toUpperCase() + splitedName[i].slice(1).toLowerCase() + " ";
}
console.log(`This is the Titlecase:\t${titleName}`);
