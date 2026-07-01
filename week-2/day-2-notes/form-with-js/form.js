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
        return;
    }
        alert("Form submitted successfully!");

    
});

/* Validate Full Name */

if (fullName.length < 3) {
    alert("Full Name must be atleast 3 characters long.");
    return;
}

/* Validate Email */

if (!email.includes("@")) {
    alert("Please enter a valid email address.");
    return;
}

/* Validate Phone Number */

if (phone.length < 10) {
    alert("Phone number must be atleast 10 digits long.");
    return;
}

/* Validate GitHub URL */

if (!github.startsWith("https://github.com/")){
    alert("Please enter a valid GitHub URL.");
    return;
}

/* Validate Message */

if (message.length < 30) {
    alert("Message must be at least 30 characters long.");
    return;
}
