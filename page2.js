const text = "On both occasions, for reasons unbeknownst to us, we were stranded in the desert. Getting out of there was tricky, but things were beyond our control.";
const typingSpeed = 30;
let index = 0;

function typeWriter() {
    const typingElement = document.getElementById("typingText");
    if (typingElement && index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed);
    }
}

window.onload = function () {
    const headline = document.getElementById("headline");
    const video = document.getElementById("video");
    const typingText = document.getElementById("typingText");

    if (headline && video && typingText) {
        headline.addEventListener("click", function () {
            headline.style.display = "none"; // Hide the headline
            video.style.display = "block"; // Show the video
            typingText.style.display = "block"; // Show the text container

            video.play(); // Start video
            typeWriter(); // Start the typewriter effect
        });

        // Ensure the text is hidden until the headline is clicked
        typingText.style.display = "none";
        video.style.display = "none";
    }
};