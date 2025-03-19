const text = "On both occasions, we were stranded in a remote town in South Australia called Port Augusta, for reasons unbeknownst to us and beyond our control. Trying times indeed.";
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