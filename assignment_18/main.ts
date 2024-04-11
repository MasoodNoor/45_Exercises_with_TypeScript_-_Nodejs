let myPlacesToVisit: string[] = [
  "Japan",
  "London",
  "Paris",
  "New York",
  "Rome",
  "Palestine",
  "Sydney",
  "Turkey",
];

// printing in original order
console.log("Original order:", myPlacesToVisit);

// printing in alphabetical order
console.log("Alphabetical order:", myPlacesToVisit.slice().sort());

// printing in original order again
console.log("Original order:", myPlacesToVisit);

// printing in reverse order
console.log("Reverse order:", myPlacesToVisit.slice().sort().reverse());

// printing in original order again
console.log("Original order:", myPlacesToVisit);

// printing in reverse order change
myPlacesToVisit.reverse();
console.log("Reverse order:", myPlacesToVisit);

// reverse order again and printing its original order
console.log("Reverser order again:", myPlacesToVisit.reverse());
console.log("Original order:", myPlacesToVisit);
console.log("Alphabetical order:", myPlacesToVisit.sort());


