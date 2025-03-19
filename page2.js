const text = "On both occasions, for reasons unbeknownst to us, we were stranded in a remote town in Port Augusta. Getting out of there was tricky, but things were beyond our control.";
const typingSpeed = 30;
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typingText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed);
    }
}

window.onload = typeWriter;

document.getElementById("headline").addEventListener("click", function() {
    document.getElementById("headline").style.display = "none";
    const video = document.getElementById("video");
    video.style.display = "block";
    video.play();
});
