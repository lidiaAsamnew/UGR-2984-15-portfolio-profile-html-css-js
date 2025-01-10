document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  
  // Create a feedback message element
  const feedbackMessage = document.createElement("div");
  feedbackMessage.id = "feedbackMessage";
  feedbackMessage.style.marginTop = "10px";
  feedbackMessage.style.display = "none"; // Initially hidden
  form.appendChild(feedbackMessage);

  // Add event listener to the form
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check if all fields are filled
    if (name === "" || email === "" || message === "") {
      feedbackMessage.textContent = "Please fill out all the fields.";
      feedbackMessage.style.color = "red";
      feedbackMessage.style.display = "block";
      return;
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      feedbackMessage.textContent = "Please enter a valid email address.";
      feedbackMessage.style.color = "red";
      feedbackMessage.style.display = "block";
      return;
    }

    // Show "sending" message
    feedbackMessage.textContent = "Sending your message...";
    feedbackMessage.style.color = "blue";
    feedbackMessage.style.display = "block";

    // Simulate form submission with a delay
    setTimeout(() => {
      feedbackMessage.textContent = "Your message has been sent successfully!";
      feedbackMessage.style.color = "green";
      feedbackMessage.style.display = "block";
      form.reset(); // Reset the form fields
    }, 2000);
  });
});

// Function to toggle the menu
function toggleMenu() {
  const nav = document.querySelector(".top-nav"); // Select the navigation element
  nav.classList.toggle("active"); // Toggle the "active" class
}

