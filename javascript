// Placeholder for future search functionality
document.querySelector('.search-bar button').addEventListener('click', function() {
    const searchInput = document.querySelector('.search-bar input').value;
    alert(`Searching for drug: ${searchInput}`);
});

// Placeholder for newsletter subscription
document.querySelector('.newsletter button').addEventListener('click', function(event) {
    event.preventDefault();
    const emailInput = document.querySelector('.newsletter input[type="email"]').value;
    alert(`Subscribed with email: ${emailInput}`);
});
