const body = document.querySelector("body");

body.addEventListener("submit", myFunction);

function myFunction(event) {
    event.preventDefault();

    const gender = document.querySelectorAll("#gender")[0].value.trim();

    console.log(gender);

}