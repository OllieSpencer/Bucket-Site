window.onload = function () {
  const headline = document.getElementById("headline");
  const video = document.getElementById("video");
  const image = document.getElementById("myImage");

  const blackBox = document.createElement("div");
  const textElement = document.createElement("p"); // Typing text
  const homeLink = document.createElement("a"); // "Home" hyperlink

  document.body.appendChild(blackBox);
  blackBox.appendChild(textElement);
  document.body.appendChild(homeLink); // Add home link to body

  if (headline && video && image) {
    headline.addEventListener("click", function () {
      headline.style.display = "none";
      video.style.display = "block";
      video.play();
    });

    video.style.display = "none";

    // Style the black box
    blackBox.style.position = "absolute";
    blackBox.style.backgroundColor = "black";
    blackBox.style.display = "none";

    // Style the text element (start from top-left of black box)
    textElement.style.color = "#99ccff";
    textElement.style.fontSize = "20px";
    textElement.style.fontFamily = "monospace";
    textElement.style.position = "absolute";
    textElement.style.top = "-10px"; // Move text up slightly
    textElement.style.left = "10px";
    textElement.style.whiteSpace = "pre-wrap";

    // Style the "Home" hyperlink
    homeLink.textContent = "pretty";
    homeLink.href = "index.html"; // Change this to your actual home page
    homeLink.style.position = "absolute"; // Use absolute positioning to move freely
    homeLink.style.top = "55px"; // Adjust this to position the link near the top
    homeLink.style.left = "50%"; // Center it horizontally
    homeLink.style.transform = "translateX(-50%)";
    homeLink.style.color = "black";
    homeLink.style.fontSize = "18px";
    homeLink.style.textDecoration = "underline";
    homeLink.style.display = "none"; // Hidden initially

    // Add the hover effect using a simple JS style change
    homeLink.addEventListener("mouseover", function () {
      homeLink.style.color = "#99ccff"; // Change color on hover
    });

    homeLink.addEventListener("mouseout", function () {
      homeLink.style.color = "black"; // Revert color when hover ends
    });

    video.onended = function () {
      const rect = video.getBoundingClientRect();
      blackBox.style.width = `${rect.width}px`;
      blackBox.style.height = `${rect.height}px`;
      blackBox.style.left = `${rect.left}px`;
      blackBox.style.top = `${rect.top}px`;

      video.style.display = "none";
      blackBox.style.display = "block";

      image.style.display = "block"; // Show image after video

      // Start the typing effect
      typeText("Welcome to Port Augusta...", textElement, function () {
        homeLink.style.display = "block"; // Show the link after typing finishes
      });
    };
  }
};

// Typing effect function
function typeText(text, element, callback) {
  let i = 0;
  element.textContent = "";
  function type() {
    if (i < text.length) {
      element.textContent += text[i];
      i++;
      setTimeout(type, 25); // Adjust speed of typing here
    } else if (callback) {
      callback(); // Call the function after typing is complete
    }
  }
  type();
}