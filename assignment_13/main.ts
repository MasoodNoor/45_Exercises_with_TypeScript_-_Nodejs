let myTransportations: string[] = ["car","motorcycle","train"];
let myStatements: string[] = ["Rolls-Royce", "Bugatti", "Japanese"];


for (let i = 0; i < myTransportations.length && myStatements.length; i++) {
    console.log(`I would love to own the ${myStatements[i]}'s ${myTransportations[i]}`);   
}