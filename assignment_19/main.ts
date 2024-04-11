let guestlist: string[] = ["Rameez", "Shahjahan", "Arshad", "Shazaib"]

console.log("We regret to inform you that the new table wont be available. We only have limited seats available");


// adding new list of guest
guestlist.unshift("Masood", "Karar")
console.log(`New guests in list: ${guestlist}`);

// removing guest from list using splice function
while (guestlist.length > 2) {
    let removeGuest: string | undefined = guestlist.pop();
    if (removeGuest!== undefined) {
        console.log(`We apologise Mr.${removeGuest}, you are not invited to dinner`);
    }
}

// printing last 2 guests
guestlist.forEach(myguest => {
    console.log(`Dear ${myguest}, you are invited to dinner`);
});
