document.addEventListener("DOMContentLoaded", () => {
  const text = "New to the ";
  const clickableText = "Yabba?";
  const container = document.getElementById("typewriter");
  const video = document.getElementById("myVideo"); // First video
  const secondVideo = document.getElementById("secondVideo"); // Second video
  const textDiv = document.getElementById("text"); // The #text div
  const fullText = "This is a test."; // Full text for #text div

  if (!container) {
    console.error("Error: #typewriter element not found in HTML.");
    return;
  }

  let i = 0, j = 0;

  // Initially hide the #text div
  textDiv.style.display = "none";

  // Create a button instead of a link
  const button = document.createElement("button");
  button.style.textDecoration = "underline";
  button.style.color = "inherit"; // Keeps original color
  button.style.backgroundColor = "transparent"; // Makes the background transparent
  button.style.border = "none"; // Removes border
  button.style.cursor = "pointer"; // Changes cursor to pointer
  button.onmouseover = () => (button.style.color = "red");
  button.onmouseout = () => (button.style.color = "inherit");

  // When button is clicked, hide the typewriter and play the first video
  button.addEventListener("click", () => {
    container.style.display = "none"; // Hide the #typewriter container
    video.style.display = "block"; // Show the first video
    video.play(); // Play the first video

    // Delay the start of the second video by 5 seconds
    setTimeout(() => {
      secondVideo.style.display = "block"; // Show the second video after delay
      secondVideo.play(); // Play the second video after delay
    }, 5000); // 5000ms (5 seconds) delay before the second video starts
  });

  // Function to type the initial text (for typewriter effect)
  function typeEffect() {
    if (i < text.length) {
      container.textContent += text.charAt(i);
      i++;
      setTimeout(typeEffect, 45); // Adjust typing speed here
    } else if (i === text.length) {
      container.appendChild(button); // Append the button after typing the text
      typeClickableText();
    }
  }

  // Function to type the clickable text ("Yabba?")
  function typeClickableText() {
    if (j < clickableText.length) {
      button.textContent += clickableText.charAt(j);
      j++;
      setTimeout(typeClickableText, 45); // Adjust typing speed here
    }
  }

  // Function to type the content of the #text div
  function typeTextEffect() {
    let k = 0;
    textDiv.textContent = ""; // Clear existing content
    function typeFullText() {
      if (k < fullText.length) {
        textDiv.textContent += fullText.charAt(k);
        k++;
        setTimeout(typeFullText, 25); // Adjust typing speed here
      }
    }
    typeFullText(); // Start typing the full text
  }
  
  const image = document.querySelector("img");
  
  // Event listener for when the second video ends
  secondVideo.addEventListener("ended", () => {
    secondVideo.style.display = "none"; // Hide the second video after it ends
    image.style.opacity = "1";
  });

  // Event listener for when the first video ends
  video.addEventListener("ended", () => {
    video.style.display = "none"; // Hide the first video after it ends
    textDiv.style.display = "block"; // Show the #text div after the first video ends
    typeTextEffect(); // Start the typing effect on the text div after video ends
  });

  // Initial typing effect start
  setTimeout(typeEffect, 1000); // Delay before typing starts
});
