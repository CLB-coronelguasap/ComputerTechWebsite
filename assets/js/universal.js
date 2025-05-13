document.addEventListener('DOMContentLoaded', function () {
    // Shared typewriter functionality
    function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
            document.querySelector("h1").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback);
            }, 100);
        } else if (typeof fnCallback === 'function') {
            setTimeout(fnCallback, 700);
        }
    }

    function startTextAnimation(dataText) {
        function startAnimation(i) {
            if (typeof dataText[i] === 'undefined') {
                setTimeout(() => startAnimation(0), 10000);
            } else {
                typeWriter(dataText[i], 0, () => startAnimation(i + 1));
            }
        }
        startAnimation(0);
    }

    // Music modal functionality
    const modal = document.getElementById("music-modal");
    const audio = document.getElementById("audio");
    const btn = document.getElementById("music-btn");
    const enable = document.getElementById("enable-btn");
    const disable = document.getElementById("disable-btn");
    const span = document.getElementsByClassName("close")[0];

    const musicEnabled = localStorage.getItem("musicEnabled") === "true";

    if (musicEnabled) {
        audio.volume = 1; // Set volume to full
        audio.play(); // Play the audio
    }

    if (btn) {
        btn.onclick = function () {
            modal.classList.add("fadein");
            modal.style.display = "block";
        };
    }

    if (span) {
        span.onclick = function () {
            modal.classList.add("fadeout");
            setTimeout(() => {
                modal.style.display = "none";
                modal.classList.remove("fadeout");
            }, 400);
        };
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.classList.add("fadeout");
            setTimeout(() => {
                modal.style.display = "none";
                modal.classList.remove("fadeout");
            }, 400);
        }
    };

    if (enable) {
        enable.onclick = function () {
            audio.volume = 0;
            audio.play();
            localStorage.setItem("musicEnabled", "true"); // Save preference
            let fadeInInterval = setInterval(() => {
                if (audio.volume < 1) {
                    audio.volume = Math.min(audio.volume + 0.1, 1);
                } else {
                    clearInterval(fadeInInterval);
                }
            }, 200);
        };
    }

    if (disable) {
        disable.onclick = function () {
            localStorage.setItem("musicEnabled", "false"); // Save preference
            let fadeOutInterval = setInterval(() => {
                if (audio.volume > 0) {
                    audio.volume = Math.max(audio.volume - 0.1, 0);
                } else {
                    clearInterval(fadeOutInterval);
                    audio.pause();
                }
            }, 200);
        };
    }

    // Function to load pages dynamically
    function loadPage(page) {
        fetch(page)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Page not found: ${page}`);
                }
                return response.text();
            })
            .then(html => {
                // Extract the content inside the <div id="content"> of the fetched page
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = html;
                const newContent = tempDiv.querySelector('#content').innerHTML;

                // Replace the content of the current #content div
                document.getElementById('content').innerHTML = newContent;

                // Reinitialize the typewriter effect
                const typewriterData = document.body.getAttribute('data-typewriter');
                if (typewriterData) {
                    startTextAnimation(JSON.parse(typewriterData));
                }

                // Update the active menu item
                updateActiveMenu(page);
            })
            .catch(err => {
                console.error('Error loading page:', err);
                document.getElementById('content').innerHTML = '<p>Page not found.</p>';
            });
    }

    // Function to update the active menu item
    function updateActiveMenu(page) {
        const menuItems = document.querySelectorAll('.navbar a');
        menuItems.forEach(item => {
            if (item.getAttribute('data-page') === page) {
                item.classList.add('active'); // Add the active class
            } else {
                item.classList.remove('active'); // Remove the active class
            }
        });
    }

    // Add click event listeners to menu items
    const menuItems = document.querySelectorAll('.navbar a');
    menuItems.forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault(); // Prevent default link behavior
            const page = item.getAttribute('data-page');
            loadPage(page); // Load the selected page
        });
    });

    // Load the initial page (default to index.html)
    loadPage('index.html');
});