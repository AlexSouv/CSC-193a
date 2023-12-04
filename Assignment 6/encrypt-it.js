/*
 * Starter file 
 */
(function() {
    "use strict";
    /**
     * The starting point in our program, setting up a listener
     * for the "load" event on the window, signalling the HTML DOM has been constructed
     * on the page. When this event occurs, the attached function (init) will be called.
     */
    function handleClick() {
      var inputText = document.getElementById("input-text").value;
      
      var shift = 3;

      var encryptedText = shiftCipher(inputText, shift);

      var outputParagraph = document.getElementById("result");
      outputParagraph.textContent = encryptedText;

      console.log("Button clicked!");
    }

    function shiftCipher(text, shift) {
      //Create variable to return, empty at start
      var result = "";

      for(var i = 0; i < text.length; i++) {
        var char = text.charAt(i);
        var lowerChar = char.toLowerCase();

        if(lowerChar >= 'a' && lowerChar <= 'z') {
          var charCode = lowerChar.charCodeAt(0);
          var shiftedCharCode = ((charCode - 97 - shift + 26) % 26) + 97;
          result += String.fromCharCode(shiftedCharCode);
        } else {
          result += char;
        }
      }
      return result;
    }

    window.addEventListener("load", init);
  
    function handleReset() {
      var inputText = document.getElementById("input-text");
      inputText.value = '';
    }

    /**
     * TODO: Write a function comment using JSDoc.
     */
    function init() {
      var encryptButton = document.getElementById("encrypt-it");
      encryptButton.addEventListener("click", handleClick);

      var resetButton = document.getElementById("reset");
      resetButton.addEventListener("click", handleReset);


      console.log("Window loaded!");
      // Note: In this function, we usually want to set up our event handlers
      // for UI elements on the page.
    }
  
    // Add any other functions in this area (you should not implement your
    // entire program in the init function, for similar reasons that
    // you shouldn't write an entire Java program in the main method).
  
  })();
  