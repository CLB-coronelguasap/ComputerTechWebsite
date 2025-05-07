document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ 
        "PRIVACY", 
        "BREACH", 
        "EXPOSURE", 
        "SECURITY", 
        "CONSENT", 
        "METADATA", 
        "ENCRYPTION", 
        "SURVEILLANCE", 
        "ANONYMITY", 
        "TRACKING", 
        "COOKIES", 
        "PROFILING", 
        "SHARING", 
        "HACKING", 
        "AUTHENTICATION", 
        "TRANSPARENCY", 
        "DATA-MINING", 
        "CYBERCRIME", 
        "IDENTITY", 
        "ACCESSIBILITY" 
    ];
    
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

  // Enhanced lookup logic
  document.getElementById('lookup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    // Simulate lookup processing with a timed delay
    setTimeout(() => {
        document.getElementById('results').style.display = 'block';
        document.getElementById('result-message').innerText = `We discovered several public records and social signals linked to ${name} (${email}).`;
        
        // Simulated stats
        document.getElementById('social-media-count').innerText = Math.floor(Math.random()*10) + 1;
        document.getElementById('data-breach-count').innerText = Math.floor(Math.random()*5) + 1;
        document.getElementById('public-records-count').innerText = Math.floor(Math.random()*15) + 1;
        
        document.getElementById('statistics').style.display = 'block';
    }, 1200);
});