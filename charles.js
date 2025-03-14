// Toggle Navigation for Mobile View
document.addEventListener("DOMContentLoaded", function () {
    const navButtons = document.querySelector(".navigation");
    const toggleBtn = document.createElement("div");
    toggleBtn.classList.add("menu-toggle");
    toggleBtn.innerHTML = "☰";
    document.body.appendChild(toggleBtn);

    toggleBtn.addEventListener("click", function () {
        navButtons.classList.toggle("active");
        toggleBtn.classList.toggle("open");
        toggleBtn.innerHTML = toggleBtn.classList.contains("open") ? "✖" : "☰";
    });

    // Close menu on click outside
    document.addEventListener("click", function (event) {
        if (!navButtons.contains(event.target) && !toggleBtn.contains(event.target)) {
            navButtons.classList.remove("active");
            toggleBtn.classList.remove("open");
            toggleBtn.innerHTML = "☰";
        }
    });
});

// Smooth Scrolling Effect
document.querySelectorAll(".nav-btn").forEach(button => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        const targetPage = this.getAttribute("href");

        setTimeout(() => {
            window.location.href = targetPage;
        }, 300); // Smooth transition delay
    });
});

// Contact Form Validation
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector('input[type="text"]').value.trim();
        const email = document.querySelector('input[type="email"]').value.trim();
        const message = document.querySelector("textarea").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields before submitting.");
        } else {
            alert("Message sent successfully!");
            form.reset();
        }
    });
}

