document.addEventListener('DOMContentLoaded', function() {
    const footerPath = '../../components/footer.html'; 
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (footerPlaceholder) {
        console.log("DEBUG: Footer placeholder found. Attempting to load footer from:", footerPath);
        fetch(footerPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status} for ${footerPath}`);
                }
                return response.text();
            })
            .then(html => {
                footerPlaceholder.innerHTML = html;
                console.log("DEBUG: Footer loaded successfully!");

                // *** Collapsible Footer Logic - MOVED HERE ***
                // This code now runs ONLY after the footer HTML is in the DOM
                const collapsibleSections = document.querySelectorAll('.footer-section.collapsible');

                collapsibleSections.forEach(section => {
                    const header = section.querySelector('h3');
                    const toggleIcon = section.querySelector('.toggle-icon'); // Get the icon

                    // Initial state for about-us (always open on mobile)
                    if (section.classList.contains('about-us')) {
                        section.classList.add('active'); // Keep about-us open by default
                        if (toggleIcon) toggleIcon.style.transform = 'rotate(45deg)'; // Rotate its icon if it has one (though about-us usually doesn't have a toggle icon)
                    }

                    header.addEventListener('click', () => {
                        // Only make sections collapsible on mobile views
                        if (window.innerWidth <= 768) {
                            // Prevent 'About Us' from collapsing
                            if (!section.classList.contains('about-us')) {
                                section.classList.toggle('active');
                                // Toggle the icon rotation
                                if (toggleIcon) {
                                    if (section.classList.contains('active')) {
                                        toggleIcon.style.transform = 'rotate(45deg)';
                                    } else {
                                        toggleIcon.style.transform = 'rotate(0deg)';
                                    }
                                }
                            }
                        }
                    });

                    // Handle window resize to adjust collapsible state if needed
                    window.addEventListener('resize', () => {
                        if (window.innerWidth > 768) {
                            // On desktop, ensure content is always visible and 'active' class is removed
                            section.classList.remove('active');
                            // Reset toggle icon rotation on desktop
                            if (toggleIcon) toggleIcon.style.transform = 'rotate(0deg)';
                        } else {
                            // On mobile, re-apply initial active state for about-us
                            if (section.classList.contains('about-us')) {
                                section.classList.add('active');
                                if (toggleIcon) toggleIcon.style.transform = 'rotate(45deg)';
                            }
                        }
                    });
                });
                // *** END Collapsible Footer Logic ***

            })
            .catch(error => {
                console.error("ERROR: Error loading footer:", error);
            });
    } else {
        console.error("ERROR: Footer placeholder element with ID 'footer-placeholder' not found in index.html.");
    }
});
