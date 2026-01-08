//Dag 1

const button = document.getElementById('button');
const btn = document.getElementById('btn');
const filterButton = document.getElementById('filterButton');
const result = document.getElementById('result')
const greetingButton = document.getElementById('greeting') // .addEventListener('click', greeting);
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
   
//  ----------------------------------- Dag 2 -------------------------------------------


// Nivå 1

greetingButton.addEventListener('click', greeting);

function greeting (){
    result.innerHTML = '';
    let human = {name: "Mattias", age: 20}


    result.innerHTML = ` Mitt namn är ${human.name} och jag är ${human.age} år `
}


// Nivå 2

async function fetchApi(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    if(!response.ok){
        throw new Error('Något gick fel');
    }

    console.log(data);
    return data;

}

async function showUsers(){

    try{
    const users = await fetchApi();
    const usersDiv = document.getElementById('users');
    usersDiv.innerHTML = '';

    users.forEach(user => {
        usersDiv.innerHTML += `Name: ${user.name} - Email: ${user.email} <br>`;
    })

    if(!users.length){
        users.innerHTML = 'Inga användare hittades';
    }
    } catch (error){
        console.log('Error:', error);
    }

}

showUsers();

// Nivå 3