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

    async function fetchAudioFiles() {
        try {
            const response = await fetch('/api/list-audio');
            const data = await response.json();
            return data.audioFiles;
        } catch (error) {
            console.error('Error fetching audio files:', error);
            return [];
        }
    }

    fetchAudioFiles().then(audioFiles => {
        console.log('Audio files:', audioFiles);
    });

    // Music modal functionality
    const modal = document.getElementById("music-modal");
    const audio = document.getElementById("audio");
    const btn = document.getElementById("music-btn");
    const enable = document.getElementById("enable-btn");
    const disable = document.getElementById("disable-btn");
    const span = document.getElementsByClassName("close")[0];

    if (btn) {
        btn.onclick = function () {
            modal.classList.add("fadein");
            modal.style.display = "block";
        };
    }

    if (span) {
        span.onclick = function () {
            modal.classList.remove("fadein");
            modal.classList.add("fadeout");
            setTimeout(() => {
                modal.style.display = "none";
                modal.classList.remove("fadeout");
            }, 400);
        };
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.classList.remove("fadein");
            modal.classList.add("fadeout");
            setTimeout(() => {
                modal.style.display = "none";
                modal.classList.remove("fadeout");
            }, 400);
        }
    };

    // Improved function to get a random audio file
    let lastPlayedIndex = null; // Keep track of the last played index

    function getRandomAudioFile(audioFiles) {
        if (!audioFiles || audioFiles.length === 0) {
            console.error("No audio files available.");
            return null;
        }

        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * audioFiles.length);
        } while (randomIndex === lastPlayedIndex && audioFiles.length > 1);

        lastPlayedIndex = randomIndex; // Update the last played index
        return audioFiles[randomIndex];
    }

    if (enable) {
        enable.onclick = async function () {
            const audioFiles = await fetchAudioFiles(); // Fetch the list of audio files
            const randomSong = getRandomAudioFile(audioFiles); // Get a random song

            if (randomSong) {
                audio.src = randomSong; // Set the audio source
                audio.volume = 0;
                audio.play();

                // Fade in the audio
                let fadeInInterval = setInterval(() => {
                    if (audio.volume < 1) {
                        audio.volume = Math.min(audio.volume + 0.1, 1);
                    } else {
                        clearInterval(fadeInInterval);
                    }
                }, 200);
            } else {
                console.error("Failed to play audio: No valid audio file selected.");
            }
        };
    }

    if (disable) {
        disable.onclick = function () {
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
        const meligy_chance = Math.floor(Math.random() * 101)
        const meligymessage = `MELIGY CHANCE IS ${meligy_chance}!`
        console.log(meligymessage)
        const gonk_chance = Math.floor(Math.random() * 101)
        const gonkmessage = `GONK CHANCE IS ${gonk_chance}!`
        console.log(gonkmessage)
        if (meligy_chance == 59) {
          dataText.push("MELIGY")
          console.log("MELIGY WILL APPEAR!")
        } else {
          console.log("MELIGY WILL NOT APPEAR!")
        }
        if (gonk_chance == 22) {
          dataText.push("GONK")
          console.log("GONK WILL APPEAR!")
        } else {
          console.log("GONK WILL NOT APPEAR!")
        }
        startTextAnimation(dataText);
    }
});