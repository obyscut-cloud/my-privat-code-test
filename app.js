const cities = ["London", "Paris", "Berlin", "Tokyo"];
const cityCount=cities.length;
const lastCity=cities[cities.length -1];
console.log(lastCity);

//using slice method.This method only copy`the exact info it needs from the array without distructing the array. adds the stat and delets the last number;
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const newDays= days.slice(1, 4);
console.log(newDays);

//SPLICE:This method changees,removes and return a new aray.
//this example shoes that splice removes the numbers and return the remain colors left on  the arrray as array new array.
const colors = ["Red", "Green", "Blue", "Yellow"];
const removedColors=colors.splice(0, 2);
console.log(removedColors);

//Training with Object med dot.notation
const user={ name: "Sara", age: 24}
const userName=user.age;
console.log(userName);

// for loop genom array med index
const numberList = [2, 5, 10];
const doubledNumbers = [];
for (let i = 0; i < numberList.length; i++) {
    doubledNumbers.push(numberList[i] * 2);
}
console.log(doubledNumbers)

//for of loop:Summera priser i en array
const prices = [100, 250, 50];
let total = 0;
for (const price of prices){
    total += price;
}
console.log(total)

//for of loop med objekt och dot-notation.
const products = [
  { name: "Mouse", price: 299 },
  { name: "Monitor", price: 1999 }
];
const nameList = [];
for (const price of prices){
    nameList.push(products.name)
};
//Skapa en arrow-funktion createGreeting (const createGreeting = (person) =>
//  ...) som tar emot ett objekt som parameter.
const createGreeting=(person)=>{
    return "Hello" + person.name;
};
const result= "hello " + (" cynthia");
console.log(result);

// En array med 2 produkt-objekt

const produkter = [
      { id: 101, titel: "Laptop", pris: 12000 },
        { id: 102, titel: "Mus", pris: 450 },
];
// Hämta första produktens titel
console.log(produkter[0].titel);

//Method 1. Objekt med Arrayer som Egenskaper

const bibliotek = {
  namn: "Stadsbiblioteket",
  avdelningar: ["Barn", "Fakta"],
  ansvariga: [
    { namn: "David", tfn: "070-123456" }
  ]
};

console.log(bibliotek.ansvariga[0].namn); 
//ASSIGNMENT:
const kund = {
  namn: "Erik",
  bestallningar: [
    {
      artiklar: [
        {titel: "Skärm", pris: 3000 },
       { titel: "Mus", pris: 500 },
     ]
    }
  ]
};
    const svaret = kund.bestallningar[0].artiklar[1].pris;
    console.log(svaret)
  
//Steg-för-Steg genom koden 👣
//Här vill vi hämta gatuadressen "Storgatan 5"
const skola = {
  namn: "Teknikhögskolan",
  campus: [
    {
      stad: "Stockholm",
      adress: { gata: "Storgatan 5", nr: 12 }
    }
  ]
};
const answer=skola.campus[0].adress.gata;
console.log(answer);

//Assignment 1 anyher method
const kun = {
  namn: "Erik",
  bestallningar: [
    {
      artiklar: [
        { titel: "Skärm", pris: 3000 },
        { titel: "Mus", pris: 500 }
      ]
    }
  ]
};
let totalt=0
for(const a of kun.bestallningar[0].artiklar){
    totalt += a.pris;
}
console.log(totalt);


//Asignment 2
const foretag = [
  {
    avdelningar: [
      {
        anstallda: [
          { namn: "Anna", roll: "Utvecklare" }
        ]
      }
    ]
  }
];
const roll=foretag[0].avdelningar[0].anstallda[0] .roll;
console.log(roll)
console.log(foretag[0].avdelningar[0].anstallda[0].namn)

//-----WORKSHOP: "Soundify Musik-App"
const soundifyApp = {
  artister: [
    {
      namn: "Luna",
      album: [
        {
          titel: "Midnight Sessions",
          latar: [
            { nr: 1, titel: "Night Walk", sekunder: 210 },
            { nr: 2, titel: "Starlight", sekunder: 195 }
          ]
        }
      ]
    }
  ]
};
console.log(soundifyApp.artister[0].album[0].latar[1].sekunder);

//Uppgift 1: Snabb-navigering
//Hämta sekunder för "Starlight"later

const soundifyAp = {
  artister: [
    {
      namn: "Luna",
      album: [
        {
          titel: "Midnight Sessions",
          latar: [
            { nr: 1, titel: "Night Walk", sekunder: 210 },
            { nr: 2, titel: "Starlight", sekunder: 195 }
          ]
        }
      ]
    }
  ]
};
let rakn=0;
for(const sek of soundifyAp.artister[0].album[0].latar){
    rakn += sek.sekunder;
};
console.log(rakn);

//Uppgift 3: Lägg till ny låt
//Lägg till en ny låt i albumet.
const nylat={nr:3,titel:"Dreams", sekunder:220  
};
const latar= soundifyAp.artister[0].album[0].latar;
const removed =latar.pop();
latar.push(nylat);

console.log(removed);
console.log(latar)
          





 
 

