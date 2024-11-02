document.addEventListener('DOMContentLoaded', function () {
    const transitionLayer = document.querySelector('.transition-layer');
    const aboutButton = document.querySelector('.about-button');

    // Handle page load transition
    setTimeout(function () {
        transitionLayer.classList.add('loaded'); // Fade out on page load
    }, 100); // Slight delay before starting the effect

    // Handle link click transition
    if (aboutButton) {
        aboutButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent immediate navigation

            // Add 'active' class to the transition layer for leaving transition
            transitionLayer.classList.remove('loaded');
            transitionLayer.classList.add('active');

            // Wait for the transition to complete before navigating
            setTimeout(function () {
                window.location.href = aboutButton.href; // Navigate to about.html
            }, 500); // Duration matches the CSS transition time
        });
    }
});

