//Dag 1

const button = document.getElementById("button");
const btn = document.getElementById("btn");
const filterButton = document.getElementById("filterButton");
const result = document.getElementById("result");
const greetingButton = document.getElementById("greeting"); // .addEventListener('click', greeting);
let clickCount = 0;

// Nivå 1

btn.addEventListener("click", () => {
  clickCount++;

  result.innerHTML = clickCount;
});

// Nivå 2

const names = ["Mattias", "Annika", "Milo", "Frida", "Leo"];

button.addEventListener("click", () => {
  result.innerHTML = "";

  names.forEach((name, index) => {
    result.innerHTML += `${name} är index ${index} <br>`;
  });
});

// Nivå 3

const personer = [
  { name: "Mattias", age: 18 },
  { name: "Thomas", age: 23 },
  { name: "Joakim", age: 19 },
  { name: "Joakim", age: 29 },
  { name: "Joakim", age: 132 },
  { name: "Joakim", age: 26 },
];

filterButton.addEventListener("click", () => {
  filterPersoner();
});

function filterPersoner() {
  const ageValue = Number(document.getElementById("ageToCheck").value);

  const filtered = personer.filter((person) => person.age > ageValue);

  const result = document.getElementById("result");
  result.innerHTML = "";

  filtered.forEach((person) => {
    result.innerHTML += `${person.name} (${person.age}) <br>`;
  });
}

//  ----------------------------------- Dag 2 -------------------------------------------

// Nivå 1

greetingButton.addEventListener("click", greeting);

function greeting() {
  result.innerHTML = "";
  let human = { name: "Mattias", age: 20 };

  result.innerHTML = ` Mitt namn är <strong>${human.name}</strong> och jag är <strong>${human.age}</strong> år gammal `;
}

// Nivå 2 o Nivå 3

async function fetchApi() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Något gick fel");
  }

  console.log(data);
  return data;
}

async function showUsers() {
  const usersDiv = document.getElementById("users");

  try {
    const users = await fetchApi();
    usersDiv.innerHTML = "";

    users.forEach(user => {
      const userDiv = document.createElement("div");
        userDiv.textContent = `${user.name}`;
        usersDiv.appendChild(userDiv);
        userDiv.style.cursor = "pointer";
        userDiv.style.marginBottom = "10px";

        userDiv.addEventListener('click', () => {
            userDiv.innerHTML = `
            Namn: ${user.name} <br>
            Email: ${user.email} <br>
            Adress: ${user.address.street}, (${user.address.city})<br>
            Telefon: ${user.phone} <br>
            Företag: ${user.company.name}

            <br>
            `;
        });

        usersDiv.appendChild(userDiv);
    });

    if(users.length === 0 ){
        usersDiv.innerHTML = "Inga anändare hittades";
    }

} catch (error) {
    usersDiv.innerHTML = "Kunde inte hämta användare"
}

}

showUsers();

