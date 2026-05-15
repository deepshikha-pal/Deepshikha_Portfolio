const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

  e.preventDefault();

  alert("Message Sent Successfully!");

  form.reset();

});