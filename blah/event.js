/*const knapp = document.getElementById("minKnapp");
const counter = document.getElementById("counter");
const countDown = document.getElementById("countDown")


const input = document.getElementById("input");
const result = document.getElementById("result");

let clickCount = 0;

counter.textContent = (clickCount);

knapp.addEventListener("click", () => {
    knapp.textContent = "Du rörde mig!";
        clickCount ++;
    counter.textContent = (clickCount);
});


input.addEventListener("input", () => {
    result.textContent = input.value;
});
*/


//asynchronous function
/*
function func1(callback){
    setTimeout(() => {console.log("Task 1")
                    callback() }, 3000 )
}

function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);



console.log("1");
setTimeout(() => {
    console.log("2")
}, 0);
console.log("3");


// CALLBACKS

const names = ['mattias', 'annika', 'milo', 'tjockis', 'smalis']

const myForEach = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        cb(element)
    }
}

myForEach(names, (name) =>{
    console.log(name);
})

*/
// Pokemon api 

const loadPokemon = (id, callback) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {
        callback(data)
    })
    .catch(error => console.error(error));
}

loadPokemon(959, (pokemon) => {
console.log(`
    Namn: ${pokemon.name}
    ID: ${pokemon.id}
    Abilities: ${pokemon.abilities.map(a => a.ability.name).join(', ')}
    `);
});

// Promises

/*

function walkDog(){

    return new Promise((resolve, reject) => {
    setTimeout(() => {

        const dogWalked = true;

        if(dogWalked){
            resolve("You walk the dog");
        }
        else{
            reject("you DIDIN'T WALK THE DOG");
        }
      
    },1500);
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
    setTimeout(() => {

        const kitchenCleaned = true;

        if(kitchenCleaned){
             resolve("You cleaned the kitchen");
        }
        else{
            reject("you DIDIN'T CLEAN THE KITCHEN")
        }
    },2500);
    });
}

function takeOutTrash(){

    return new Promise((resolve, reject) => {
    setTimeout(() => {
       
        const trashTakenOut = false;

            if (trashTakenOut){
                resolve("You took out the trash")
            }
            else{
                reject("you DID NOT TAKE OUT THE TRASH!")
            }

    },500);
    }); 
} 

walkDog().then(value => {console.log(value); return cleanKitchen()})
            .then(value => {console.log(value); return takeOutTrash()})
            .then(value => {console.log(value); console.log("you finished all the chores")})
            .catch(error => console.error(error));
*/

/*
const button = document.getElementById("button");
console.log(button);
button.addEventListener("click", () => {
    fetchItems();
})

async function fetchItems(){
    const response = await fetch("https://world.openfoodfacts.org/api/v2/search?fields=code,product_name,brands&page_size=20", {
        method: "GET"
    });

    const data = await response.json();
    const list = document.querySelector(".list");
    list.innerHTML = "";

data.products.forEach(product => {
    const li = document.createElement("li");
    li.textContent = `Brand: ${product.brands} - Product name: ${product.product_name} - Code: ${product.code}`
      
        list.appendChild(li);
    });
}

// --------------------------------------- CLASS -----------------------------------------

class Person {
    constructor(name, age, job, cute){
        this.name = name;
        this.age = age;
        this.job = job;
        this.cute = cute;
    }
    introduce(){
        console.log(`Hi, my name is ${this.name}, I am ${this.age} years old and I works as a ${this.job}. And she is ${this.cute}`)
    }
}
const person1 = new Person("Annika", 21, "Student", "cute")
person1.introduce();


*/