function checkInput() {
    var userInput = document.getElementById("userInput").value;
    var gifContainer = document.getElementById("gifContainer");

    if (userInput.toLowerCase() === "rocky") {
        gifContainer.innerHTML = '<img src="Rocku.gif" alt="">';
    }
}