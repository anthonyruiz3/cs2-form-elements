console.log("Script started");

function processForm(event) {
    console.log("click");
    event.preventDefault();

    // Get name input element
    let fNameInput = document.getElementById("firstname");
    let firstName = fNameInput.value;
    console.log(firstName); 
}