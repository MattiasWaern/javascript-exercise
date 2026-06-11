console.log("Jag är 21 år gammal, heter Mattias och min favoriträtt är Annika");
console.log("Annika är också min framtida fru <3");


const annika = "min framtida fru";

function annikita(){
const annika = "min flickvän just nu";
}


console.log(annika);


let totalPrice = 0;
let price = 0;
const amount = 4;

function räknaUtTotalPris(){
    price = 100;
 /* amount = 2 */ // går inte för vi deklarerar variablen med const innan, kan icke ändra. 
    totalPrice = (price * amount);
    return totalPrice;
}


console.log(räknaUtTotalPris(totalPrice));