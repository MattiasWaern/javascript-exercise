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

*/

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
