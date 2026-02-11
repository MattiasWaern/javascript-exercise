/*let name = prompt("SKRIV DITT NAMN")

console.log("Hej " +  name)



let number = prompt("Enter a number");

function checkOdd(number){
    return (number % 2 == 0)
}

checkOdd(number) ? console.log("Jämnt") : console.log("Udda")



let celsius = prompt("Skriv temperatur Celsius")

let fahrenheit = (celsius * 1.8) + 32;

console.log(fahrenheit);


const number1 = parseInt(prompt("Skriv första siffran"));
const number2 = parseInt(prompt("Skriv andra siffran"));

console.log(number1 + number2);


let guessCount = document.getElementById("guessCount");
guessCount.innerHTML = 1;

const number =  Math.floor(Math.random () * 10) +1;
console.log(number);

function checkWin(){

let guess = parseInt(prompt("Skriv en siffra 1-10"));

    if (guess == number) {
        console.log("Du gissade rätt")
    } else {
        console.log("Du gissade fel")
        guessCount.innerHTML = Number(guessCount.innerHTML) + 1;
        checkWin();
    }
}

checkWin();



const tal = parseInt(prompt("skirv ditt tal"));

for (i = 1; i <= 10; i++){
    console.log(`${tal} x ${i} = ${tal * i}`);
}
    

 
let answer = parseInt(prompt("Skriv ditt tal som du vill FizzBuzza :)"))

for(i = 1; i <= answer; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizzbuzz");
    } else if (i % 3 === 0){
        console.log("Fizz")
    } else if (i % 5 === 0){
        console.log("Buzz")
    } else {
        console.log(`${i}: FizzBuzz`);
    }
}



let talList = [5, 10, 15, 20, 25];
console.log(`En array med tal: ${talList}`)



function medelvärdet(){
    let summa = 0;

    for(i = 1; i < talList.length; i++){
        summa += talList[i]
    }
  let talListMedelvärdet = summa / talList.length;
  let talListSumma = summa + talList.length;

  console.log(`Medelvärdet: ${talListMedelvärdet}`);
  console.log(`Summan: ${talListSumma}`);
}

medelvärdet();



button = document.getElementById("clickCountKnapp");
const counter = document.getElementById("clickCountCounter");
let clickCount = 0;


button.addEventListener('click', () => {
    clickCount ++;
    counter.innerHTML = clickCount;
});


const greetings = document.getElementById("Greetings")
const themeButton = document.getElementById("toggleTheme");

function switchTheme(){
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);

    console.log(`Tema bytt till: ${newTheme}`);

    greetings.innerHTML = `Hej!! Min sida har temat: ${newTheme}`;
}

themeButton.addEventListener('click', switchTheme);



function validateForm() {
  let name = document.forms["myForm"]["fname"].value;
  let password = document.forms["myForm"]["password"].value;
  let email = document.forms["myForm"]["email"].value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  } else{
    alert("Thanks for submitting name")
  }

    if (password == "") {
    alert("Password must be filled out");
    return false;
  } else{
    alert("Thanks for submitting Password")
  }

    if (email == "" || !email.includes("@")) {
    alert("Email must be filled out / Valid email");
    return false;
  } else{
    alert("Thanks for submitting Email")
  }

  alert("Form submitted successfully")
  return true;
}
*/

const prevButton = document.getElementById("prevPhotoButton")
const nextButton = document.getElementById("nextPhotoButton")

function photoAlbum(){

    const photos = [
        "https://placehold.co/300x300",
        "https://placehold.co/300x300/0000FF/808080",
        "https://placehold.co/300x300/FF0000/FFFFFF",
        "https://placehold.co/300x300/FFFF00/000000",
        "https://placehold.co/300x300/00FF00/000000"
    ]

    let currentIndex = 0;

    function showPhoto(index){
        const photoElement = document.getElementById("photo");
        photoElement.src = photos[index];

        prevButton.disabled = index === 0;
        nextButton.disabled = index === photos.length -1;
    }

    showPhoto(currentIndex);

    prevButton.addEventListener('click', () => {
        console.log("Previous button clicked");
        if (currentIndex> 0){
            currentIndex--;
            showPhoto(currentIndex);
        }
    })

    nextButton.addEventListener('click', () => {
        console.log("Next button clicked");
        if (currentIndex < photos.length -1){
            currentIndex ++;
            showPhoto(currentIndex);
        }
    })
}

photoAlbum();