const form = document.querySelector("form");

form.addEventListener("submit", myFunction);

function myFunction(event) {
    event.preventDefault();

    const username = document.querySelector("#name").value.trim();
    const password = document.querySelector("#email").value.trim();
    const number = document.querySelector("#phone").value.trim();
    const age = document.querySelector("#age").value.trim();

    console.log({ username, password, number, age })
}