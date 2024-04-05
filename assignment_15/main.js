"use strict";
let guestlist = ["Rameez", "Shahjahan", "Aslam", "Shazaib"];
// remove Aslam and add Masood using splice 
let remPerson = guestlist.splice(2, 1, "Masood");
console.log(`${remPerson} cannot come because of his prior commitments.`);
for (let i = 0; i < guestlist.length; i++) {
    console.log(`Dear ${guestlist[i]}, you are cordially invited to dinner.`);
}
