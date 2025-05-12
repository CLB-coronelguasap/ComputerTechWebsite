document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ "CRYPTOMINERS", "PHISHING", "RANSOMWARE", "TROJANS", "SPYWARE", "WORM", "ADWARE", "ROOTKIT", "KEYLOGGER", "EXPLOIT", "VIRUS", "MALWARE", "BOTNET", "DDoS", "SQL INJECTION", "XSS", "RAT" ];
    const meligy_chance = Math.floor(Math.random() * 101)
    console.log("MELIGY CHANCE IS ${meligy_chance}!")
    const gonk_chance = Math.floor(Math.random() * 101)
    console.log("GONK CHANCE IS ${gonk_chance}!")
    if (meligy_chance == 59) {
      dataText.push("MELIGY")
      console.log("MELIGY WILL APPEAR!")
    }
    if (gonk_chance == 22) {
      dataText.push("GONK")
      console.log("GONK WILL APPEAR!")
    }
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // check if text isn't finished yet
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