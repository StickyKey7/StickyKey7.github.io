function moveContent() {
    const myElement = document.querySelector("#move");
    const button = document.getElementById("works-button");

    if (myElement.style.transform === "translateX(-100%)") {
        myElement.style.transform = "translateX(0%)";
        button.innerText = "Go to works";
    }   else{
        myElement.style.transform = "translateX(-100%)";
        button.innerText = "Back"
    }


}