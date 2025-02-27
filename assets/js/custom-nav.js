document.addEventListener('DOMContentLoaded', function() {
    // --- Dropdown Menu Handling ---

    // Function to close all dropdowns
    function closeAllDropdowns() {
        document.querySelectorAll('.masthead__menu-item.has-dropdown.active, .dropdown-toggle.active').forEach(el => {
            el.classList.remove('active');
        });
    }

    // Handle click events on dropdown toggles
    document.addEventListener('click', function(e) {
        const toggle = e.target.closest('.dropdown-toggle');
        if (toggle) {
            e.preventDefault();
            e.stopPropagation();

            const parentLi = toggle.closest('li');
            const parentUl = parentLi.closest('ul');

            // If clicking on a different dropdown at the same level, close others
            if (!parentLi.classList.contains('active')) {
                parentUl.querySelectorAll('li.active').forEach(li => {
                    if (li !== parentLi) {
                        li.classList.remove('active');
                        li.querySelectorAll('.active').forEach(active => {
                            active.classList.remove('active');
                        });
                    }
                });
            }

            // Toggle current dropdown
            parentLi.classList.toggle('active');
            toggle.classList.toggle('active');
        } else if (!e.target.closest('.masthead__menu-item')) {
            // Close all dropdowns when clicking outside
            closeAllDropdowns();
        }
    });

    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        const toggle = document.activeElement.closest('.dropdown-toggle');
        if (toggle) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggle.click();
            } else if (e.key === 'Escape') {
                e.preventDefault();
                closeAllDropdowns();
            }
        }
    });

    // --- Back-to-Top Button Handling ---

    const backToTopButton = document.getElementById('pst-back-to-top');

    if (backToTopButton) {
        // Function to show/hide the button based on scroll position
        function toggleBackToTopButton() {
            if (window.scrollY > 300) { // Show button after scrolling 300px (adjust as needed)
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        }

        // Function to scroll to the top smoothly
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Event listener for scroll events
        window.addEventListener('scroll', toggleBackToTopButton);

        // Event listener for button click
        backToTopButton.addEventListener('click', scrollToTop);
    }
});
