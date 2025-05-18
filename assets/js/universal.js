// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', function () {

    // Get references to modal, audio, and control buttons
    const modal = document.getElementById("music-modal");
    const audio = document.getElementById("audio");
    const btn = document.getElementById("music-btn");
    const enable = document.getElementById("enable-btn");
    const disable = document.getElementById("disable-btn");
    const span = document.getElementsByClassName("close")[0];
    const playlist = []; // Initialize an empty playlist array

    // Function to simulate a typewriter effect for text
    function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
            document.querySelector("h1").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback);
            }, 100); // Delay between each character
        } else if (typeof fnCallback === 'function') {
            setTimeout(fnCallback, 700); // Delay before calling the callback
        }
    }

    // Function to start a typewriter animation for an array of text
    function startTextAnimation(dataText) {
        function startAnimation(i) {
            if (typeof dataText[i] === 'undefined') {
                setTimeout(() => startAnimation(0), 10000); // Restart animation after a delay
            } else {
                typeWriter(dataText[i], 0, () => startAnimation(i + 1)); // Animate the current text
            }
        }
        startAnimation(0); // Start with the first text
    }

    // Fetch audio files from the server
    async function fetchAudioFiles() {
        try {
            const response = await fetch('/api/list-audio'); // API endpoint to fetch audio files
            const data = await response.json();
            return data.audioFiles; // Return the list of audio files
        } catch (error) {
            console.error('Error fetching audio files:', error); // Log errors
            return [];
        }
    }

    let currentIndex = 0; // Track the current song index

    // Function to load the next song in the playlist
    function nextSong() {
        currentIndex = (currentIndex + 1) % playlist.length; // Loop back to the start if at the end
        loadSong(currentIndex); // Load the next song
    }

    // Fetch and log audio files when the script runs
    fetchAudioFiles().then(audioFiles => {
        console.log('Audio files:', audioFiles);
    });

    // Music modal functionality
    if (modal && btn) {
        btn.onclick = function () {
            modal.classList.add("fadein"); // Add fade-in animation
            modal.style.display = "block"; // Show the modal
        };
    }

    if (span) {
        span.onclick = function () {
            modal.classList.remove("fadein");
            modal.classList.add("fadeout"); // Add fade-out animation
            setTimeout(() => {
                modal.style.display = "none"; // Hide the modal after animation
                modal.classList.remove("fadeout");
            }, 400); // Animation duration
        };
    }

    // Close the modal when clicking outside of it
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

    // Enable button functionality to play a random audio file
    if (enable) {
        enable.onclick = async function () {
            const audioFiles = await fetchAudioFiles(); // Fetch the list of audio files
            const randomSong = audioFiles[Math.floor(Math.random() * audioFiles.length)]; // Select a random song
            audio.src = `assets/audio/${randomSong}`; // Set the audio source

            if (randomSong) {
                audio.volume = 0; // Start with muted volume
                audio.play(); // Play the audio
                currentIndex = 0; // Reset the current index   
                audio.loop = false; // Disable looping
                audio.onended = nextSong; // Play the next song when the current one ends

                // Gradually increase the volume (fade-in effect)
                let fadeInInterval = setInterval(() => {
                    if (audio.volume < 1) {
                        audio.volume = Math.min(audio.volume + 0.1, 1);
                    } else {
                        clearInterval(fadeInInterval); // Stop the fade-in effect
                    }
                }, 200); // Interval duration
            } else {
                console.error("Failed to play audio: No valid audio file selected.");
            }
        };
    }

    // Disable button functionality to stop the audio
    if (disable) {
        disable.onclick = function () {
            // Gradually decrease the volume (fade-out effect)
            let fadeOutInterval = setInterval(() => {
                if (audio.volume > 0) {
                    audio.volume = Math.max(audio.volume - 0.1, 0);
                } else {
                    clearInterval(fadeOutInterval); // Stop the fade-out effect
                    audio.pause(); // Pause the audio
                }
            }, 200); // Interval duration
        };
    }

    // Form submission handler for lookup functionality
    document.getElementById('lookup-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        const name = document.getElementById('name').value; // Get the name input
        const email = document.getElementById('email').value; // Get the email input
        
        // Simulate lookup processing with a timed delay
        setTimeout(() => {
            document.getElementById('results').style.display = 'block'; // Show results section
            document.getElementById('result-message').innerText = `We discovered several public records and social signals linked to ${name} (${email}).`;
            
            // Simulated stats
            document.getElementById('social-media-count').innerText = Math.floor(Math.random()*10) + 1; // Random social media count
            document.getElementById('data-breach-count').innerText = Math.floor(Math.random()*5) + 1; // Random data breach count
            document.getElementById('public-records-count').innerText = Math.floor(Math.random()*15) + 1; // Random public records count
            
            document.getElementById('statistics').style.display = 'block'; // Show statistics section
        }, 1200); // Delay duration
    });

    // Page-specific typewriter logic
    const pageTypewriterData = document.body.getAttribute("data-typewriter");
    if (pageTypewriterData) {
        const dataText = JSON.parse(pageTypewriterData); // Parse typewriter data
        const meligy_chance = Math.floor(Math.random() * 101); // Random chance for "MELIGY" (Inside joke, ignore)
        const meligymessage = `MELIGY CHANCE IS ${meligy_chance}!`;
        console.log(meligymessage);
        const gonk_chance = Math.floor(Math.random() * 101); // Random chance for "GONK" (inside joke, ignore)
        const gonkmessage = `GONK CHANCE IS ${gonk_chance}!`;
        console.log(gonkmessage);

        // Add "MELIGY" to the typewriter data if the chance is 59
        if (meligy_chance == 59) {
          dataText.push("MELIGY");
          console.log("MELIGY WILL APPEAR!");
        } else {
          console.log("MELIGY WILL NOT APPEAR!");
        }

        // Add "GONK" to the typewriter data if the chance is 22
        if (gonk_chance == 22) {
          dataText.push("GONK");
          console.log("GONK WILL APPEAR!");
        } else {
          console.log("GONK WILL NOT APPEAR!");
        }

        startTextAnimation(dataText); // Start the typewriter animation
    }

});

