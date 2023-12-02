let num = 0;
const current = document.querySelector("#current");
const buttonsContainer = document.getElementById("buttons");

buttonsContainer.addEventListener("click", function (event) {
    const buttonClicked = event.target;

    if (buttonClicked.id === "decrease") {
        num--;
    } else if (buttonClicked.id === "reset") {
        num = 0;
    } else if (buttonClicked.id === "increase") {
        num++;
    }

    current.textContent = num;
});
