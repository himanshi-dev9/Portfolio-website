document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Grab the values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Simple validation
        if (!name || !email || !message) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        // Simulate form submission
        alert(`Thank you, ${name}! Your message has been sent successfully.`);

        // Clear the form
        form.reset();
    });
});
