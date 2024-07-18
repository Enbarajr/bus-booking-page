document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulating form submission
    setTimeout(() => {
        document.getElementById('response-message').innerText = 'Thank you, ' + name + '! Your message has been sent.';
        document.getElementById('contact-form').reset();
    }, 1000);
});
