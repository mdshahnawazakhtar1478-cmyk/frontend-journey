const form = document.querySelector("form");

form.addEventListener("submit", myFunction);

function myFunction(event) {
    event.preventDefault();

    const fullName = document.querySelector(".fullName").value.trim();
    const password = document.querySelector(".password").value.trim();
    const email = document.querySelector(".email").value.trim();
    const phone = document.querySelector(".phone").value;
    const website = document.querySelector(".website").value.trim();
    const age = document.querySelector(".age").value;
    const search = document.querySelector(".search").value.trim();
    const date = document.querySelector(".date").value;
    const time = document.querySelector(".time").value;
    const dateTimeLocal = document.querySelector(".dateTimeLocal").value;
    const month = document.querySelector(".month").value;
    const week = document.querySelector(".week").value;
    const color = document.querySelector(".color").value;
    const experience = document.querySelector(".experience").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const skills = document.querySelector('input[name="skills"]:checked');
    const files = document.querySelector(".uploadResume").files;
    const resumeFile = files[0];
    const city = document.querySelector("#city").value;
    const message = document.querySelector(".message").value.trim();

    console.log({ fullName, password, email, phone, website, age, search, date, time, dateTimeLocal, month, week, color, experience, gender, skills, files, resumeFile, city, message })
}