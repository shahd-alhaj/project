const button = document.getElementById("button");
const click = document.getElementById("click");

button.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    click.textContent = randomNumber;
});
