const form = document.querySelector("form");

form.addEventListener("submit", myFunction);

function myFunction(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const password = document.querySelector("#password").value;
    const remember = document.querySelector("#remember").checked;

    console.log({name, password, remember});
}