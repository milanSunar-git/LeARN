// This script runs when the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // Contact Form Validation (for contact.html)
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const subject = document.getElementById("subject").value;
            const message = document.getElementById("message").value;

            if (!name || !email || !subject || !message) {
                alert("Please fill all the fields.");
            } else {
                alert("Message sent successfully!");
                contactForm.reset();
            }
        });
    }

    // Simple course popup (for index.html or courses.html)

    window.showCourseDetails = function(title, description) {
        const modal = document.getElementById("course-modal");
        if (modal) {
            document.getElementById("modal-title").textContent = title;
            document.getElementById("modal-description").textContent = description;
            modal.style.display = "block";
        }
    };

    window.closeModal = function () {
        const modal = document.getElementById("course-modal");
        if (modal) {
            modal.style.display = "none";
        }
    };

    // Close modal if clicked outside content
    
    window.onclick = function (e) {
        const modal = document.getElementById("course-modal");
        if (e.target === modal) {
            modal.style.display = "none";
        }
    };
});