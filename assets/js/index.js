document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ "#!", "SHEBANG", "CYBERSECURITY"];
    const meligy_chance = Math.floor(Math.random() * 1001)
    const meligymessage = `MELIGY CHANCE IS ${meligy_chance}!`
    console.log(meligymessage)
    const gonk_chance = Math.floor(Math.random() * 1001)
    const gonkmessage = `GONK CHANCE IS ${gonk_chance}!`
    console.log(gonkmessage)
    if (meligy_chance == 509) {
      dataText.push("MELIGY")
      console.log("MELIGY WILL APPEAR!")
    } else {
      console.log("MELIGY WILL NOT APPEAR!")
    }
    if (gonk_chance == 202) {
      dataText.push("GONK")
      console.log("GONK WILL APPEAR!")
    } else {
      console.log("GONK WILL NOT APPEAR!")
    }

        // Get the modal
    var modal = document.getElementById("music-modal");

    var audio = document.getElementById("audio")
    // Get the button that opens the modal
    var btn = document.getElementById("music-btn");

    var enable = document.getElementById("enable-btn")

    var disable = document.getElementById("disable-btn")

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal.classList.add("fadein");
      modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.classList.add("fadeout");
      // Wait for the fadeout animation to finish before hiding the modal
      setTimeout(() => {
        modal.style.display = "none";
        modal.classList.remove("fadeout");
      }, 400);
    }



    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      modal.classList.add("fadeout");
      if (event.target == modal) {
        setTimeout(() => {
          modal.style.display = "none";
          modal.classList.remove("fadeout");
        }, 400);
      }
    }

    enable.onclick = function() {
      audio.volume = 0; // Start with volume at 0
      audio.play(); // Start playing the audio
    
      let fadeInInterval = setInterval(() => {
        if (audio.volume < 1) {
          audio.volume = Math.min(audio.volume + 0.1, 1); // Gradually increase volume
        } else {
          clearInterval(fadeInInterval); // Stop the interval when volume reaches 1
        }
      }, 200); // Adjust the interval time for smoother or faster fade-in
    }

    disable.onclick = function() {
      let fadeOutInterval = setInterval(() => {
        if (audio.volume > 0) {
          audio.volume = Math.max(audio.volume - 0.1, 0); // Gradually decrease volume
        } else {
          clearInterval(fadeOutInterval); // Stop the interval when volume reaches 0
          audio.pause(); // Pause the audio
        }
      }, 200); // Adjust the interval time for smoother or faster fade-out
    }

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function() {
                StartTextAnimation(0); // Restart from the beginning
            }, 10000);
        } else if (i < dataText.length) { // Correct condition
            typeWriter(dataText[i], 0, function() {
                // After callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }
    // start the text animation
    StartTextAnimation(0);
  });