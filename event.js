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


const loadPokemon = (id, callback) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {
        callback(data)
    })
    .catch(error => console.error(error));
}

loadPokemon(79, (pokemon) => {
console.log(`
    Namn: ${pokemon.name}
    ID: ${pokemon.id}
    Abilities: ${pokemon.abilities.map(a => a.ability.name).join(', ')}
    `);
});