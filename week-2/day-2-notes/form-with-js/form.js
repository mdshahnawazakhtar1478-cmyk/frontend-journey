const form = document.querySelector("form");

form.addEventListener("submit", myFunction);

function myFunction(event){

    event.preventDefault();
    const fullName = document.querySelector(".fullName").value;
    const email = document.querySelector(".email").value;
    const phone = document.querySelector(".phone").value;
    const github = document.querySelector(".github").value;
    const message = document.querySelector(".message").value;
    
    console.log({fullName, email, phone, github, message});
}