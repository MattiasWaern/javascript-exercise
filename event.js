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