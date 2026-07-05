const form = document.querySelector("form");

form.addEventListener("submit", myFunction);

function myFunction(event) {
    event.preventDefault();

    const name = document.querySelector("#fullName").value.trim();
    const password = document.querySelector("#password").value;
    const email = document.querySelector("#email").value.trim();
    const phone = document.querySelector("#phone").value;
    const website = document.querySelector("#website").value.trim();
    const age = document.querySelector("#age").value;
    const skills = document.querySelector('input[name="skills"]:checked');
    const experience = document.querySelector('select[name="exprience"]').value;
    const uploadResume = document.querySelector("#uploadResume").files[0];
    const message = document.querySelector("#message").value.trim();

    console.log({ name, password, email, phone, website, age, skills, experience, uploadResume, message })
}