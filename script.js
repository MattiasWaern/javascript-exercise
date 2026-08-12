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
    const nyObjekt = prompt("Skriv vad du gillar").split(' ')
    const spel = (["spel", "böcker", "mamma" ])
    spel.push(nyObjekt);

    console.log(spel)
    console.log(spel[3]);
}



function lista(){
    const inKöpsLista = prompt("Skriv vad du vill köpa").split(" ")
    const array = [];

    inKöpsLista.forEach((item) => {
        array.push(item);
    });

    array.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`)
    })

    console.log(array);
}

lista();


function arrayLoop(){
    const array = ["annika", "milo", "mattias"]

    array.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`)
    })
}

arrayLoop();


function add(a, b){
    return a + b;
}

function multiply(a, b){
    return a * b;
}

console.log(add(5, 5))
console.log(multiply(5, 5))


const square = function (a){
    return a * a;
};


function squar (a){
    return a * a;
}


const plus = (a) => a * a;




//gissa talet
alert("Gissa rätt siffra, mellan 1 - 6");
function guessNumber(){
    const Numbers = [1,2,3,4,5,6];
    const randomIndex = Math.floor(Math.random () * Numbers.length)
    const correctNumber = Numbers[randomIndex];

    function guess(){
        const guessNumber = Number(prompt("Skriv in ditt svar"));
        if (guessNumber === correctNumber){
            alert("Grattis du gissade rätt")
        } else {
            alert("Du gissade fel..")
            guess();
        }

        }
        guess();



    console.log(correctNumber);
}




// const age = Number(prompt("Skriv in din ålder"));


function isAdult(age){

    if (age >= 18){
        alert("Du är vuxen")
    } else {
        alert("Du är inte vuxen")
    } 
}

isAdult(16);
isAdult(18);


// quiz spel




const book = {
    title: "Fourth Wing",
    author: "Rebecca Yarros",
    pages: 400,
    price: 200
}


const updatedBook = {
    ...book,
    price: 500
}


console.log(book)
console.log(updatedBook)

const person = {
    name: "Mattias",
    lastName: "Waern",
    age: 22,
    addres:{name: "Norrtälje"},
    Introduce: function(){
        return "Hello my name is " + person.name + " " +  person.lastName;
    }

}

const books = [
    {
        Title: "Test1",
        Author: "Testing1",
        Pages: 400,
        Release:{Date: "2020-05-05"}
    },
    {
        Title: "Test2",
        Author: "Testing2",
        Pages: 500,
        Release:{Date: "2020-05-05"}
    },
    {
        Title: "Test3",
        Author: "Testing3",
        Pages: 600,
        Release:{Date: "2020-05-05"}
    },
]

const keys = Object.keys(books);
const values = Object.values(books);

console.log(person.addres.name);
console.log(person.Introduce());
console.log(keys);
console.log(values);



const lista = [1,2,3,4,5]


lista.forEach((item) => {
    // console.log(item);
});


const numbers = [2,2,2,2,2]
const newNumbers = numbers.map(Double)


function Double(numbers){
    return numbers * 2;
}

// console.log(numbers);
// console.log(newNumbers);


const ages = [11, 22, 13, 15, 18, 19, 20, 15, 14, 19]

const filtered = ages.filter(checkAdult);


function checkAdult(ages){
    return ages >= 18;
}

// console.log(filtered);


const nummer = [15.5, 2.3, 1.1, 4.7];

const summa = nummer.reduce((total, tal) => {
    return total + tal;
});

const minusSumma = nummer.reduce((total, tal) => {
    return total - tal;
});



// console.log("Summan är: " + summa);
// console.log("Summan är: " + minusSumma);

const users = ['mattias', 'annika', 'milo', 'leon', 'tjockis', 'frida'];

const findIndex = users.findIndex(user => user === "milo");
const index = users.find(user => user === "milo");

// console.log(findIndex + ' ' + index);

const product = 
[
    {
        ProductName: "Test1",
        Price: 400,
    },
        {
        ProductName: "Test2",
        Price: 500,
    },
        {
        ProductName: "Test3",
        Price: 300,
    },
        {
        ProductName: "Test3",
        Price: 100,
    },
        {
        ProductName: "Test3",
        Price: 200,
    },
];

// console.log(product);

// produktlista app med filtrering och totalsumma.

    const products = 
    [
    {
        ProductName: "Kaffe",
        Price: 50,
    },
        {
        ProductName: "Mjölk",
        Price: 20,
    },
        {
        ProductName: "Kött",
        Price: 200,
    },
        {
        ProductName: "Ost",
        Price: 30,
    },
        {
        ProductName: "Glass",
        Price: 80,
    },
    ];

products.sort((a, b) => a.Price - b.Price);
console.log(products);

const prices = products.map(product => product.Price);
console.log(prices);

const totalPrice = prices.reduce(getTotal)

function getTotal(total, prices){
    return total + prices;
}
console.log("Totala Priset är" + " " + totalPrice + "kr");



const filteredProducts = products.filter(product => product.Price >= 100)


console.log(filteredProducts);





const leaderboard = [
    "Mattias",
    "Annika",
    "Slowpoke",
    "Tinkaton",
    "Gyros"
];

const [first, second, third] = leaderboard;

console.log("1:a plats:", first);
console.log("2:a plats:", second);
console.log("3:a plats:", third);


const person = {
    name: "Mattias",
    age: 22,
};


const { name, age } = person;

console.log(name);
console.log(age);


console.log(person.name + person.age)


const kundvagn1 = ["potatis", "kött", "mjölk"];
const kundvagn2 = ["olja", "salt", "vinäger"];
const kundvagn3 = [...kundvagn1,  ...kundvagn2];


console.log(kundvagn1)
console.log(kundvagn2)
console.log(kundvagn3)


const number1 = 190;
const number2 = 200;


function addNumbers(number1, number2){
    return number1 + number2;
}

const total = addNumbers(number1, number2);

console.log(total);

function sum(...tal){
    return tal.reduce((total, nummer) => total + nummer, 0);
}

console.log(sum(10, 20, 30, 50));




const car = {type:"Fiat", model:"500", color:"white"};


console.log(car?.name + car?.type);



function greet(name){
    if (name === undefined){
        name = "gäst"
    }

    return console.log(`Hejsan ${name}`)
}

greet();



class Person{
    constructor (name, age)
    {
        this.name = name;
        this.age = age;

    }
    present(){
        return `Jag heter ${this.name} och är ${this.age} år`
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    show() {
        return this.present() + ", jag går i årskurs " + this.grade;
    }
}

const student = new Student("Mattias", 21, 3);

console.log(student.show());


function checkAge(age){

    try{
        if(typeof age !== "number"){
            throw new Error("Åldern måste vara en siffra");
        }
        

        if(age < 0){
            throw new Error("Åldern kan inte vara negativ xd")
        }

        console.log("Godkänd ålder:", age);
    } 
    catch(error){
        console.log("Fel", error.message)
    } finally{

    }
}

checkAge(20);
checkAge(-20);
checkAge("20");


const fruits = new Map();

fruits.set("apples", 500);
fruits.set("bananas", 200);
fruits.set("apelsin",100);

fruits.get("bananas");

console.log(fruits);


const text = "hund katt hund fågel katt hund";

const words = text.split(" ");
const uniqueWords = new Set (words);

console.log(words);

for (const word of uniqueWords){
    let count = 0 

    for (const w of words){
        if (w === word){
            count ++;
        }
    }

    console.log(`${word}, ${count}`);
}


const Mattias = 
{
    name: "Mattias",
    age: 20,
    occupation: "Student",
    Girlfriend: "Annika",
    RelationshipLength: 1,

}

const texts = JSON.stringify(Mattias);

console.log(texts);


const textss = '{"name":"MMattias","age":22,"city":"Norrtälje"}';

const persons = JSON.parse(textss);


let name = persons.name;


console.log(name);



class Book{
    constructor(title, author, year){
        this.title = title,
        this.year = year,
        this.author = author
    }

}

class Library{
    constructor(){
        this.books = []
    }



    addBook(book){
        if(!(book instanceof Book)){
            throw new Error("Du måste skicka in ett Bok-objekt");
        }

        this.books.push(book);
        console.log(`"${book.title}" lades till.`);
    }


    showBooks(){
        if (this.books.length === 0 ){
            console.log("Bibliotel är tomt");
            return;
        }

        console.log("Böcker i bibliotek");

        this.books.forEach((book, index) => {
            console.log(
                `${index + 1}. ${book.title} - ${book.author} ${book.year}`
            );
        });
    }

    removeBook(title){
        const index = this.books.findIndex(book => book.title === title);

        if(index === -1){
            throw new Error("Boken fiins inte");
        }

        this.books.splice(index, 1)
        console.log(`"${title}" togs bort`);
    }

    saveToJSON(){
        return JSON.stringify(this.books, null, 2);
    }

    loadFromJSON(json){
        const parsedBooks = JSON.parse(json);

        this.books = parsedBooks.map(book => 
            new Book(book.title, book.author, book.year)
        );
    }
}


const library = new Library();

try {
    const book1 = new Book(
        "Harry Potter",
        "J.K. Rowling",
        1997
    );

    const book2 = new Book(
        "Bilar",
        "Mattias",
        2004
    );

    const book3 = new Book(
        "Sagan om Ringen",
        "aNNIKA",
        1997
    );

    library.addBook(book1)
        library.addBook(book2)
            library.addBook(book3)

}

catch(error){
        console.log("Fel:", error.message);
}

console.log("");

library.showBooks();

console.log("");


const json = library.saveToJSON();

console.log("JSON:");
console.log(json);

console.log("");


const newLibrary = new Library();

newLibrary.loadFromJSON(json);

console.log("Böcker efter JSON.parse():");
newLibrary.showBooks();

console.log("");






function doWork(callback){

    console.log("Jobbar...")

    setTimeout(() => {
        callback();
    }, 2000);

}

doWork(() => {
    console.log("Jobbat klart..")
})

function checkNumber(){

    return new Promise((resolve, reject) => {

            setTimeout(() => {
                const number = Math.floor(Math.random() * 10);

            if(number > 5){
                resolve("Numret är större än 5");
            } else {
                reject("Numret är för litet");
            }
        }, 2000);
    });
}
checkNumber()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error)
    })

 
async function catFacts() {

    try {
        const response = await fetch("https://catfact.ninja/fact");
        if(!response.ok){
            throw new Error("Kunde inte hämta data")
        }
        const data = await response.json();
        console.log(data.fact);
        document.getElementById("catFacts").innerHTML = data.fact;

    } catch(error){ 
        console.error(error)
    }

}


async function quizGame() {
    try {
        let currentQuestion = 0;

        const response = await fetch(
            'https://opentdb.com/api.php?amount=10&category=23&difficulty=easy'
        );

        if (!response.ok) {
            throw new Error("Kunde inte hämta data");
        }

        const data = await response.json();
        console.log(data);

        function showQuestion() {
           const current = data.results[currentQuestion];

           document.getElementById("question").textContent = data.results[currentQuestion].question;
           const answersContainer = document.getElementById("answers");
            answersContainer.innerHTML = "";
           const answers = [
            current.correct_answer,
            ...current.incorrect_answers
           ];

           
           answers.forEach(answer => {
            const button = document.createElement("button");
                button.textContent = answer

                button.addEventListener("click", () => {
                    if (answer === current.correct_answer) {
                        alert("Rätt!");
                        currentQuestion ++;
                        showQuestion();
                    } else {
                        alert("Fel!");
                    }
                });

                answersContainer.appendChild(button)
                console.log(answer);
           });
        }

       

        showQuestion();

        const button = document.getElementById("nextQuestion")
        button.addEventListener('click', () => {
            currentQuestion++;
            showQuestion();
            console.log("click")
        });

    } catch (error) {
        console.error(error);
    }
}

quizGame();


async function getUsers(){
    const response = await fetch('URL HÄR')

    if(!response.ok){
        throw new Error("Kunde inte hämta användare")
    }

    const data = await response.json();
}

*/


const test = document.querySelector("p");
const test2 = document.querySelectorAll("h1")
const body = document.querySelector("body")

console.log(test, test2);


const button = document.getElementById("color")
const count = document.getElementById("count");

let number = 0;



const colors = ["red", "green", "black", "white"]
const randomColor = colors[Math.floor(Math.random() * colors.length)];


button.addEventListener('click', () => {
    console.log("click")
    button.style.backgroundColor = "red";
    button.style.fontSize = "100px";
    body.style.backgroundColor = randomColor;
    number++;


    count.innerText = number;
});

