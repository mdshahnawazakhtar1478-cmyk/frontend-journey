const form = document.querySelector("form");

form.addEventListener("submit", myFunction);

function myFunction(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;
    const terms = document.querySelector("#terms").checked;

    console.log({name, email, phone, password, confirmPassword, terms});
}