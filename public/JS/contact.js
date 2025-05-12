document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        fetch('/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                alert("Email sent successfully!");
                form.reset();
            } else {
                alert("There was a problem sending your message. Please try again later..");

            }

        })
        .catch(error => {
            console.error('Error:', error);
            alert("Something went wrong. Please try again later.");
        });
        
    });
});