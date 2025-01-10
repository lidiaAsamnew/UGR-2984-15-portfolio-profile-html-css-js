document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  

  const feedbackMessage = document.createElement("div");
  feedbackMessage.id = "feedbackMessage";
  feedbackMessage.style.marginTop = "10px";
  feedbackMessage.style.display = "none"; 
  form.appendChild(feedbackMessage);


  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();


    if (name === "" || email === "" || message === "") {
      feedbackMessage.textContent = "Please fill out all the fields.";
      feedbackMessage.style.color = "red";
      feedbackMessage.style.display = "block";
      return;
    }

  
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      feedbackMessage.textContent = "Please enter a valid email address.";
      feedbackMessage.style.color = "red";
      feedbackMessage.style.display = "block";
      return;
    }

    
    feedbackMessage.textContent = "Sending your message...";
    feedbackMessage.style.color = "blue";
    feedbackMessage.style.display = "block";

    
    setTimeout(() => {
      feedbackMessage.textContent = "Your message has been sent successfully!";
      feedbackMessage.style.color = "green";
      feedbackMessage.style.display = "block";
      form.reset(); 
    }, 2000);
  });
});

// Function to toggle the menu
function toggleMenu() {
  const nav = document.querySelector(".top-nav"); 
  nav.classList.toggle("active"); 
}

