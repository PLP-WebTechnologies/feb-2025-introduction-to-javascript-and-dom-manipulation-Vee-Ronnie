
document.addEventListener("DOMContentLoaded", function () {
  
    const feedbackDiv = document.getElementById("feedback");
  
   
    const form = document.getElementById("registrationForm");
    form.addEventListener("submit", function (e) {
      e.preventDefault(); 
      feedbackDiv.textContent = "Thank you for your submission!";
      feedbackDiv.classList.remove("hidden");
    });
  
   
    const toggleButton = document.getElementById("toggleMessageButton");
    toggleButton.addEventListener("click", function () {
      feedbackDiv.classList.toggle("hidden");
  
      if (feedbackDiv.classList.contains("hidden")) {
        toggleButton.textContent = "Click to Toggle Message";
      } else {
        toggleButton.textContent = "Click to Hide Message";
      }
    });
  });
  