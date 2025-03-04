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

        // Event listener for button touchstart
        backToTopButton.addEventListener('touchstart', function(e) {
            e.preventDefault(); // Prevent default action
            scrollToTop();
        }, { passive: true });
    }


    /* side menu social button */
    const toggleBtn = document.querySelector('.toggle-btn');
    const socialIcons = document.querySelector('.social-icons');
    if (socialIcons) {
        socialIcons.classList.toggle('visible');
    }

    if (!toggleBtn) {
        console.error('Toggle button not found');
        return;
    }
    if (!socialIcons) {
        console.error('Social icons not found');
        return;
    }

    function toggleDropdown(e) {
        console.log('Button clicked');

        const socialIcons = document.getElementById('social-icons');
        if (socialIcons) {
          socialIcons.classList.toggle('visible');
        }
      
        const socialIconsContainer = document.querySelector('.social-icons-container');
        if (socialIconsContainer) {
          socialIconsContainer.classList.toggle('visible');
        }



    }

    // Clear existing listeners
    toggleBtn.removeEventListener('click', toggleDropdown);
    toggleBtn.removeEventListener('touchstart', toggleDropdown);


    // Add listeners
    toggleBtn.addEventListener('click', toggleDropdown);
    toggleBtn.addEventListener('touchstart', function(e) {
    e.preventDefault();
    toggleDropdown(e);
    }, { passive: false });


    // Close on outside click
    document.addEventListener('click', function(event) {
        if (!toggleBtn.contains(event.target) && !socialIcons.contains(event.target)) {
            console.log('Clicked outside, hiding menu');
            socialIcons.classList.remove('visible');
        }
    });

    // Debug link clicks
    const links = socialIcons.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Link clicked:', this.href);
            // Ensure navigation happens
        });
    });

    console.log('Script initialized successfully');

});

