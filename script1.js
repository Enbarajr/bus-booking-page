document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const destination = document.getElementById('destination').value;

    const confirmationMessage = `
        Thank you, ${name}! Your booking to ${destination} on ${date} has been confirmed.
    `;
    
    document.getElementById('confirmationMessage').textContent = confirmationMessage;
    document.getElementById('confirmationMessage').classList.remove('hidden');
    
    // Clear the form fields
    document.getElementById('bookingForm').reset();
});
