document.addEventListener('DOMContentLoaded', () => {
    // Select the mobile menu icon and the navigation links
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const mobileNavOverlay = document.createElement('div'); // Create overlay dynamically
    mobileNavOverlay.classList.add('mobile-nav-overlay');
    mobileNavOverlay.innerHTML = `
        <div class="close-icon"><i class="fas fa-times"></i></div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Support</a></li>
            <li><button class="developer-btn mobile-dev-btn">Developer</button></li>
        </ul>
    `;
    document.body.appendChild(mobileNavOverlay);

    const closeIcon = mobileNavOverlay.querySelector('.close-icon');
    const mobileNavLinks = mobileNavOverlay.querySelectorAll('a, .mobile-dev-btn'); // Include developer button

    // Function to open the mobile menu
    const openMobileMenu = () => {
        mobileNavOverlay.classList.add('open');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    };

    // Function to close the mobile menu
    const closeMobileMenu = () => {
        mobileNavOverlay.classList.remove('open');
        document.body.style.overflow = ''; // Restore scrolling
    };

    // Event listener for opening the mobile menu
    if (mobileMenuIcon) {
        mobileMenuIcon.addEventListener('click', openMobileMenu);
    }

    // Event listener for closing the mobile menu
    if (closeIcon) {
        closeIcon.addEventListener('click', closeMobileMenu);
    }

    // Close menu when a link is clicked inside the mobile menu
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Prevent default for anchor links that don't go anywhere yet
            if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
                e.preventDefault();
            }
            closeMobileMenu();
        });
    });

    // Add a simple interaction for the "Developer" button
    const developerButton = document.querySelector('.developer-btn');
    if (developerButton) {
        developerButton.addEventListener('click', () => {
            // In a real application, this would navigate to a developer portal page
            console.log('Developer button clicked! Redirecting to developer portal...');
            // Example: window.location.href = '/developer-portal.html';
            alert('Welcome, Developer! (This is a placeholder for a future page.)');
        });
    }

    // Also handle the mobile developer button if it exists
    const mobileDeveloperButton = mobileNavOverlay.querySelector('.mobile-dev-btn');
    if (mobileDeveloperButton) {
        mobileDeveloperButton.addEventListener('click', () => {
             console.log('Mobile Developer button clicked! Redirecting to developer portal...');
             alert('Welcome, Developer! (This is a placeholder for a future page.)');
        });
    }

    // --- Secret URL functionality for /console.html ---
    // Check if the current URL path ends with '/console.html'
    // Using endsWith to handle cases where there might be a base path before /console.html
    if (window.location.pathname.endsWith('/console.html')) {
        // Prevent the main page from loading if we're meant to be in the console context
        document.body.style.display = 'none'; // Hide the main content

        // Open a new popup window for the console
        // 'console.html' is the page that will load in the new window
        // The parameters control the size and features of the popup window
        window.open('console.html', 'LoomStoreDeveloperConsole', 'width=800,height=600,resizable=yes,scrollbars=yes,status=no,toolbar=no,menubar=no,location=no');

        // After opening the popup, optionally redirect the main window back to the homepage
        // This ensures the main tab doesn't just sit on a blank /console.html page
        // You might want to remove this line if you want the console.html tab to remain open as is.
        window.location.href = '/';
    }
});
