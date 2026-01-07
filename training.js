//Dag 1

const button = document.getElementById('button');
const btn = document.getElementById('btn');
const filterButton = document.getElementById('filterButton');
const result = document.getElementById('result')
let clickCount = 0;

// Nivå 1

btn.addEventListener('click', () => {
    clickCount++;

    result.innerHTML = (clickCount);
})

// Nivå 2

const names = [
    'Mattias', 
    'Annika', 
    'Milo', 
    'Frida', 
    'Leo'
]

button.addEventListener('click', () => {
result.innerHTML = '';

   names.forEach((name, index ) => {
    result.innerHTML += `${name} är index ${index} <br>`
   })

});


// Nivå 3

const personer = [
    {name: "Mattias", age: 18},
    {name: "Thomas", age: 23},
    {name: "Joakim", age: 19},
    {name: "Joakim", age: 29},
    {name: "Joakim", age: 132},
    {name: "Joakim", age: 26}
];

filterButton.addEventListener('click', () => {
    filterPersoner();
})

function filterPersoner(){
    const ageValue = Number(document.getElementById('ageToCheck').value);

    const filtered = personer.filter(person => person.age > ageValue);

    const result = document.getElementById('result');
    result.innerHTML = '';

    filtered.forEach(person => {
        result.innerHTML += `${person.name} (${person.age}) <br>`;
    })
}
   
// Dag 2


// Nivå 1

