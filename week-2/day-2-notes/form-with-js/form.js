const form = document.querySelector("form");

form.addEventListener("submit",function (event){
    const fullName = document.querySelector("[name='fullName']").value.trim();
    const email = document.querySelector("[name='email']").value.trim();
    const phone = document.querySelector("[name='phone']").value.trim();
    const github = document.querySelector("[name='github']").value.trim();
    const message = document.querySelector("[name='message']").value.trim();

    if(
        fullName === "" ||
        email === "" ||
        phone === "" ||
        github === "" ||
        message === "" 
    ) {
        event.preventDefault();
        alert("Please fill in all this fields before submitting the form.");
    }
});