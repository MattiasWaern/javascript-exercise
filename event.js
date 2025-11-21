const knapp = document.getElementById("minKnapp");
const counter = document.getElementById("counter");
const countDown = document.getElementById("countDown")
let clickCount = 0;

counter.textContent = (clickCount);

knapp.addEventListener("click", () => {
    knapp.textContent = "Du rörde mig!";
        clickCount ++;
    counter.textContent = (clickCount);
});


