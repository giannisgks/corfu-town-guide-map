document.addEventListener('DOMContentLoaded', function () {
    const transitionLayer = document.querySelector('.transition-layer');
    const aboutButton = document.querySelector('.about-button');

    setTimeout(function () {
        transitionLayer.classList.add('loaded');
    }, 100);

    if (aboutButton) {
        aboutButton.addEventListener('click', function (event) {
            event.preventDefault();

            transitionLayer.classList.remove('loaded');
            transitionLayer.classList.add('active');

            setTimeout(function () {
                window.location.href = aboutButton.href;
            }, 500);
        });
    }
});
