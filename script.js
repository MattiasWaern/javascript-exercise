/*
console.log("Jag är 21 år gammal, heter Mattias och min favoriträtt är Annika");
console.log("Annika är också min framtida fru <3");


const annika = "min framtida fru";

function annikita(){
const annika = "min flickvän just nu";
}


let totalPrice = 0;
let price = 0;
const amount = 4;

function räknaUtTotalPris(){
    price = 100;
  amount = 2  // går inte för vi deklarerar variablen med const innan, kan icke ändra. 
    totalPrice = (price * amount);
    return totalPrice;
}


let firstName = "Mattias";
let lastName = "Garcia";
let text = `Hej mitt namn är ${firstName} ${lastName}`.toUpperCase();

let pris = 100;
let vat = 0.25;

let total = `Total: ${(pris * (1 + vat)).toFixed(2)}`;


let html = `<h2>${total}</h2>`

function kalkylator(){
    const price = 100;

    const calculatedPrice = (price * 1.25);
    return calculatedPrice;
}

function booleans(){
    const money = 600;
    const price = 500;

    if(money == price || price <= money){
        console.log("Du har råd");
    } 

    else if (price => money || price !== money){
        console.log("Du har inte råd")
    } 

    /*
    console.log(money == price);
    console.log(money !== price);
    console.log(money >= price);

}

booleans();


function convert(){
    const convertToNumber = '10';
    Number(convertToNumber);
    
    console.log(typeof Number(convertToNumber));
}

convert();


const a = "5";
const b = Number(a);
const c = String(b);

console.log(typeof c)



function Annika(){
    const price = 100;
    const vat = 0.25;

    const priceVat = (price * (1 + vat));
    console.log(`Normal price ${price}, Vat: ${vat}% Price with vat ${priceVat}`);
}

Annika();

*/

/*
function checkAge(){
    const age = 17;

    if (age >= 18){
        console.log("Du är tillräckligt gammal");
    } else {
        console.log("Du är inte tillräckligt gammal");
    }
}

checkAge();

function schoolGrade(){
 const points = 45;

    if (points >= 90 ){
        console.log("Du fick betyg A")
    } else if (points >= 80) {
        console.log("Du fick betyg B")
    } else if (points >= 65){
        console.log("Du fick betyg C")
    } else if (points >= 55){
        console.log("Du fick betyg D")
    } else if (points >= 50){
        console.log("Du fick betyg E")
    } 
    else (console.log("Du fick betyg F"))

}



const username = (
    prompt("Skriv ditt användarnamn")
)

const password = (
    prompt("Skriv ditt lösenord")
)


function checkUsername(){

    if(username === 'mattias' && password === 'annika'){
        console.log("Du är inloggad")
    } else {
        console.log("felaktigt anvädernamn eller lösenord")
    }

}



const money = 10;
const payment = 10;

if (money === 10 || payment === 10){
    alert("Payment verified")
}

function date(){
    switch (new Date().getDay()) {

    case 0:
        day = "Sunday";
        text = "Today is ";
        break;
    case 1:
        day = "Monday";
        text = "Today is ";
        break;
    case 2:
        day = "Tuesday";
        text = "Today is ";
        break;
    case 3:
        day = "Wednesday";
        text = "Today is ";
        break;
    case 4:
        day = "Thursday";
        text = "Today is ";
        break;
    case 5:
        day = "Friday";
        text = "Today is ";
        break;
    case 6:
        day = "Saturday";
        text = "Today is ";
        break;
    }

    console.log(text + "" + day);
}

date();



function changeTheme(){
    console.log("knapp klickad")
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
}


function shippingCost(){


    function costs(){
        const price = Number(prompt("Skriv hur mycket pengar det kostar"))
        return price;
    }

    function whichCountry(){

       const country = prompt(
            "Vilket land skickar du till?"
        ) 

        if (country === 'sweden'){
            return 0.25;
        } 
        else if (country === 'norway'){
            return 0.15;
        } else {
            return 0.5;
        }
        console.log(vat)
    }

    function calculateShippingPrice(price, vat){
        const finalPrice = (price * (vat + 1));

        console.log(`Du ska betala: ${finalPrice.toFixed(2)}kr för frakten`)
    }

    const price = costs();

    const vat = whichCountry();

    calculateShippingPrice(price, vat );

}


shippingCost();
*/

function counter(){
    for (let i = 0; i< 21; i++ ){
        console.log(i);
    }
}

function countDown(){
    let i = 11;
    while( i > 1){
        i --;
        console.log("The number is " + i)
    }
}


function uddaTal(){
    for (let i = 0; i < 31; i++){
        if (i % 2 === 0) { continue; }
        console.log(i);
    }
}


function array(){
    const nyObjekt = prompt("Skriv vad du gillar")
    const spel = (["spel", "böcker", "mamma" ])
    spel.push(nyObjekt);

    console.log(spel)
    console.log(spel[3]);
}
