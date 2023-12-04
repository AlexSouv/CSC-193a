function showAlert() {
    alert("Hello, world!");
}

function changeFontSize() {
    var textInput = document.getElementById("textInput");
    textInput.style.fontSize = "24pt";
}

function uppercaseText() {
    var textInput = document.getElementById("textInput");
    var text = textInput.value;
    var sentences = text.split(". ");

    for(var i = 0; i < sentences.length; i++) {
        var words = sentences[i].split(" ");
        if(words.length > 0) {
            words[words.length - 1] += "-Moo";
            sentences[i] = words.join(" ");
        }
    }
    textInput.value = sentences.join(". ");
    textInput.value = textInput.value.toUpperCase();
}

function applyRadioStyles() {
    var textInput = document.getElementById("textInput");
    var fancyRadio = document.getElementById("fancy");
    var boringRadio = document.getElementById("boring");

    if(fancyRadio.checked) {
        textInput.style.fontWeight = "bold";
        textInput.style.color = "blue";
        textInput.style.textDecoration = "underline";
    } else if (boringRadio.checked) {
        textInput.style.fontWeight = "normal";
        textInput.style.color = "";
        textInput.style.textDecoration = "";
    }
}