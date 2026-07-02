// Get the form element using querySelector inbuilt function and store it in a variable called "form"
const form = document.querySelector("form");

// Add an event listener for the form submission (to get the values of the form fields)
form.addEventListener("submit", myFunction); // (type: "submit", callback function: myFunction)

// Callback function to handle the form data when the form is submitted
function myFunction(event){ // (event parameter: it is passed to the callback function from addEventListener function)
    // Prevent the default form submission behavior in browser (which would reload the page)
    event.preventDefault();

    // Get the values of the form fields using their class names
    const fullName = document.querySelector(".fullName").value;
    const email = document.querySelector(".email").value;
    const phone = document.querySelector(".phone").value;
    const github = document.querySelector(".github").value;
    const message = document.querySelector(".message").value;
    
    // Log the form data to the console as an object
    console.log({fullName, email, phone, github, message});
}