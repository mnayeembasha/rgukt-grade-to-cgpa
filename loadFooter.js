   // loadHeader.js
   document.addEventListener('DOMContentLoaded', function() {
    const footerContainer = document.querySelector('footer');

    // Fetch footer.html content
    fetch('http://localhost:8080/footer.html')
        .then(response => response.text())
        .then(html => {
            // Append the header content to the container
            footerContainer.innerHTML = html;
        })
        .catch(error => console.error('Error loading header:', error));
});