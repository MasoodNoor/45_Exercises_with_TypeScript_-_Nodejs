"use strict";
let guestlist = ["Rameez", "Shahjahan", "Arshad", "Shazaib"];
// console.log(guestlist);
console.log("Great News! we have now more space available, we have a bigger table. ");
// adding new guest in list at beginning using unshift function
guestlist.unshift("Muhannad");
// console.log(guestlist);
// adding new guest in list at middle using splice function
guestlist.splice(Math.floor(guestlist.length / 2), 0, "Karar");
//  console.log(guestlist);
// adding new guest in list at end using push function
guestlist.push("Saad");
guestlist.forEach(myGuestList => {
    console.log(`Dear ${myGuestList}, You all are cordially invited to dinner.`);
});