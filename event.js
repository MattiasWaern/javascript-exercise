const knapp = document.getElementById("minKnapp");
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
