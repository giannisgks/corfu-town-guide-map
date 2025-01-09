document.addEventListener('DOMContentLoaded', function () { <!-- The function runs after the whole HTML document is loaded-->
    const transitionLayer = document.querySelector('.transition-layer'); <!-- The variable is used for visual effects-->
    const aboutButton = document.querySelector('.about-button'); <!-- The button that runs the transition-->

    setTimeout(function () {
        transitionLayer.classList.add('loaded');
    }, 100); <!-- Adds delay to the function which runs after 100 ms-->

    if (aboutButton) {
        aboutButton.addEventListener('click', function (event) { <!-- An event listener is inserted into about button-->
            event.preventDefault(); <!-- Custom behavior and not the default one-->

            transitionLayer.classList.remove('loaded'); <!-- Removes the 'loaded' class to reset the transition state -->
            transitionLayer.classList.add('active');  <!-- Adds the 'active' class to trigger the transition effect -->

            setTimeout(function () { <!-- The function runs after 500 ms-->
                window.location.href = aboutButton.href; <!-- Changes the browser current URL to the href value of the aboutButton element-->
            }, 500);
        });
    }
});
