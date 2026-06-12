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
 /* amount = 2 */ // går inte för vi deklarerar variablen med const innan, kan icke ändra. 
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

    console.log(money == price);
    console.log(money !== price);
    console.log(money >= price);

}

booleans();