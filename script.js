// Simple form validation script
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name && email && message) {
      alert("Your message has been sent!");
    } else {
      alert("Please fill in all fields.");
    }
  });

/////////////////////////////////

const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", DisplayContent);
DisplayContent();

function DisplayContent() {
  const TriggerBottom = (window.innerHeight/5)*4;

  boxes.forEach((box) => {
    const topBox = box.getBoundingClientRect().top;

    if (topBox < TriggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
////////////////////////////////