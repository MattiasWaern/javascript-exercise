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
*/

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


