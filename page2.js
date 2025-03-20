window.onload = function () {
    const headline = document.getElementById("headline");
    const video = document.getElementById("video");
    const image = document.getElementById("myImage");

    const blackBox = document.createElement("div");

    document.body.appendChild(blackBox);

    if (headline && video) {
        headline.addEventListener("click", function () {
            headline.style.display = "none"; 
            video.style.display = "block"; 
            video.play();
        });

        video.style.display = "none";

        blackBox.style.position = "absolute";
        blackBox.style.backgroundColor = "black";
        blackBox.style.display = "none";

        video.onended = function () {
            const rect = video.getBoundingClientRect();
            blackBox.style.width = `${rect.width}px`;
            blackBox.style.height = `${rect.height}px`;
            blackBox.style.left = `${rect.left}px`;
            blackBox.style.top = `${rect.top}px`;

            video.style.display = "none";
            blackBox.style.display = "block";

            image.style.display = "block"; // Show the image after the video ends
        };
    }
};