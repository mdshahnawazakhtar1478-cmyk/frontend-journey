const form = document.querySelector("form");

form.addEventListener("submit", myFunction);

function myFunction(event) {
    event.preventDefault();

    const gender = document.querySelector('input[name="gender"]:checked');

    console.log(gender.id);

}