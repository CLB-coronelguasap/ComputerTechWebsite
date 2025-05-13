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
        btn.innerHTML = '<span class="material-symbols-outlined">music_note</span> Disable Music';
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

    // Page-specific typewriter logic
    const pageTypewriterData = document.body.getAttribute("data-typewriter");
    if (pageTypewriterData) {
        const dataText = JSON.parse(pageTypewriterData);
        startTextAnimation(dataText);
    }
});