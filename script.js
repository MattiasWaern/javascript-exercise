/* const btn = document.querySelector('button');
 btn.onclick = () => {
 alert('du tog på mig');
 }
 ()
*/


//VARIABLER
let namn = "Mattias";
namn = "Roberto";

const användarNamn = "Waern";


//DATATYPER

/*
1. String
2. Number
3. Boolean

*/

let frukt = "mango";
let ålder = "20";
let ärStudent = true;

/*
Null: reperesenterar ett tomt värde.
Undefined: variablen är deklarerad, har inte fått ett värde deklarerat.
NaN: inte ett giltigt tal.

*/

//--------------------- SPLIT THE NOTA - PSEUDOKOD ----------------------------------

/*
START
PRINT "Ange totalsumma: "
SAVE i variabel summa

PRINT "ange antal vänner: "
SAVE i variabel antalVänner

PRINT "ange dricks (i decimalform, t.ex 0.1 för 10%)"
SAVE i variabel dricks

CALCULATE{
deklarera variabel totalMedDricks
summa * (1 + dricks) 
RETURN totalMedDricks
}

CALCULATE{
totalMedDricks / antalVänner = perPerson
}

PRINT "Varje vän ska betala: " + perPerson
END

*/

//---------------------- SPLIT THE NOTA - APP ----------------------------------

/*
let summa;
summa = prompt("Vad är totalsumman på notan?");
console.log(summa);

let antalVänner;
antalVänner = prompt("Antal vänner?")
console.log(antalVänner);

let dricks = Number(
    prompt("Hur mycket dricks vill ni ge? (ange svaret i decimal)")
);
console.log(dricks);

let totalMedDricks;
totalMedDricks = summa * (1 + dricks);

let perPerson = totalMedDricks / antalVänner;

alert("Varje person ska betala: " + perPerson + "kr");
*/

//FIKA BESTÄLLNING - APP

/*let tillTugg = prompt("Vad vill du äta?");
console.log(tillTugg);

let dryck = prompt("Vad vill du dricka?");
console.log(dryck);

const beställning = [
    tillTugg,
    dryck
]
console.log(beställning);

let tillTuggPris = Number(
prompt("Hur mycket kostar tilltugget?")
);
console.log(tillTuggPris);

let dryckPris = Number(
prompt("Hur mycket kostar drickan?")
);
console.log(dryckPris);


let totalPris;
totalPris = (tillTuggPris + dryckPris);


alert("Du beställde: " + tillTugg + " och " + dryck + "\nTotal pris: " + totalPris + " kr ");
*/

//---------------------------------- MINIPROGRAM APP ----------------------------------

/*
let lista = prompt("Vad vill du komma ihåg?");
console.log(lista);

const arrayLista = lista.split(" ");
console.log(arrayLista);

alert("Du ska komma ihåg:\n " +  arrayLista.join("\n"));
*/


//---------------------------------- MINIPROGRAM APP ----------------------------------

/*
let förstaTal = Number ( 
    prompt("Vad är ditt första tal?")
);
console.log(förstaTal);

let andraTal = Number (
prompt("Vad är ditt andra tal?")
);
console.log(andraTal);

console.log(" Summa ", förstaTal + andraTal);
console.log(" Differens ", förstaTal - andraTal);
console.log(" Produkt ", förstaTal * andraTal);
*/

// --------------------------------------- ARRAYS -----------------------------------------

let a = [1,2,3,7,8,9]; 
let b = [4,5,6]; 
 
a.splice(3, 0, ...b);

console.log(a);

const fruits = ["Banana", "Apelsin", "Vattenmelon", "Citrus", "Druvor", "Honungsmelon"]
fruits.reverse();
console.log(fruits)

// --------------------------------------- LOOPAR -----------------------------------------

/*
for (let i=10; i >= 0; i--){
    console.log(i);
}
*/

let fruitz = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];

for(let i = 0; i < fruitz.length; i ++){
    console.log(i + ': ' + fruitz[i]);
}

let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];


    





// --------------------------------------- IF ELSE & LOGICAL OPERATORS-----------------------------------------
/*

let hour = 17;

if (hour >= 6 && hour <= 12) 
    console.log('Godmorgon');

else if(hour >=13 && hour <16)
        console.log('Goddag');

else (console.log('Godkväll'));
        

const sunny = false;
  
    if(!sunny){
        console.log('it is cloudy')
    }

    else (console.log('it is sunny'));

    */