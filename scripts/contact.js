// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

let submitButton = document.getElementById("submit-button");
let contactPage = document.getElementById("contact-page");


function changeStyle(){
    // Message to be displayed
    let message = "Thank you for your message";

     // Create a new span element
    let messageElement = document.createElement("span");
    
     // Set the content of the created span element with the message
    messageElement.textContent = message;

    
     // Set the font size for the created span element
    messageElement.style.fontSize = "24px";
    
     // Clear the inner HTML of the contactPage element
    contactPage.innerHTML = ""; 

     // Append the message element to the contactPage element
    contactPage.appendChild(messageElement); 

     //Alternative way that not to clear the inner HTML & not use.appendChild
     //contactPage.innerHTML = messageElement.outerHTML;
}

// Add an event listener to the submit-button to trigger the changeStyle function
submitButton.addEventListener("click",changeStyle);



