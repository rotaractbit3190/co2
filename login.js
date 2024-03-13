document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Check if username and password are valid (e.g., by sending a request to a server)
    // For demonstration purposes, assume the login is successful
    var isAuthenticated = true;
    
    if (isAuthenticated) {
        // Store authentication status in session storage
        sessionStorage.setItem('authenticated', 'true');
        // Redirect to index.html
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
