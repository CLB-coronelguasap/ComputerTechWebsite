document.addEventListener('DOMContentLoaded', function() {
    // Initialize Material Web components
    const elems = document.querySelectorAll('.material-web');
    M.MaterialWeb.init(elems);

    // Functionality for Lookup page
    const lookupForm = document.getElementById('lookup-form');
    if (lookupForm) {
        lookupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const userInfo = document.getElementById('user-info').value;
            // Simulate lookup functionality
            alert(`Looking up information for: ${userInfo}`);
            // Here you would typically call an API to fetch user data
        });
    }

    // Add any additional scripts or functionality as needed
});