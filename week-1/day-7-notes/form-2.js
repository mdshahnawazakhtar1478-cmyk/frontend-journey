const form = document.querySelector("form");

form.addEventListener("submit", myFunction);

function myFunction(event) {
    event.preventDefault();

    const firstName = document.querySelector(".firstName").value.trim();
    const lastName = document.querySelector(".lastName").value.trim();
    const email = document.querySelector(".email").value.trim();
    const phone = document.querySelector(".phone").value;
    const age = document.querySelector(".age").value;
    const registrationNumber = document.querySelector(".registrationNumber").value;
    const zipCode = document.querySelector(".zipCode").value;

    console.log({ firstName, lastName, email, phone, age, registrationNumber, zipCode })

}