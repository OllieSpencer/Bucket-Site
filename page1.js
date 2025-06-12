document.body.style.overflow = "hidden";

function changeTextColor(event, color) {
  event.target.style.color = color;
}

function showNewImage() {
  const foreground = document.querySelector(".foreground");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("new-image-container");
  imageContainer.style.opacity = "1";
  imageContainer.style.position = "relative";
  imageContainer.style.top = "-200px";

  const newImage = document.createElement("img");
  newImage.src =
    "https://cdn.glitch.global/46ef7de7-8069-4c1a-9681-2c2ef81f5cad/000056.JPG?v=1742110282804";
  newImage.alt = "A scenic view of nature";
  newImage.style.width = "100%";
  newImage.style.height = "100%";
  newImage.style.objectFit = "cover";

  imageContainer.appendChild(newImage);

  const typingText = document.createElement("div");
  typingText.classList.add("typing-text");

  imageContainer.appendChild(typingText);
  document
    .getElementById("headline")
    .insertAdjacentElement("afterend", imageContainer);

  setTimeout(() => {
    typeText(typingText);
  }, 500);
}

function typeText(element) {
  const text =
    "The ageing steel of a freight wagon makes for an unforgiving bed. The slightest imperfection on the tracks reverberates through the metal skeleton and into your ";

  const linkText = "own.";
  const linkUrl =
    "https://cdn.glitch.global/46ef7de7-8069-4c1a-9681-2c2ef81f5cad/IMG_2783.MOV?v=1745723027182";

  let currentText = "";
  let i = 0;
  const speed = 15;

  function typeLetter() {
    if (i < text.length) {
      currentText += text.charAt(i);
      element.textContent = currentText;
      i++;
      setTimeout(typeLetter, speed);
    } else {
      // Create the hyperlink and type it letter by letter
      const link = document.createElement("a");
      link.href = "#"; // Prevents navigation
      link.style.color = "red";
      link.style.textDecoration = "underline";
      link.style.cursor = "pointer";
      link.style.transition = "color 0.3s ease";

      // Hover effects
      link.addEventListener("mouseover", function () {
        link.style.color = "white";
      });
      link.addEventListener("mouseout", function () {
        link.style.color = "red";
      });

      link.addEventListener("click", (event) => {
        event.preventDefault(); // Stop default link behavior
        showVideo(element, linkUrl);
      });

      element.appendChild(link); // Append the empty link to the text element

      let j = 0;
      function typeLinkLetter() {
        if (j < linkText.length) {
          link.textContent += linkText.charAt(j);
          j++;
          setTimeout(typeLinkLetter, speed);
        }
      }

      typeLinkLetter(); // Start typing the link text
    }
  }

  typeLetter();
}

function showVideo(parentElement, videoUrl) {
  const existingVideo = document.querySelector(".video-container");
  if (existingVideo) {
    existingVideo.remove();
  }

  const videoContainer = document.createElement("div");
  videoContainer.classList.add("video-container");
  videoContainer.style.position = "fixed";
  videoContainer.style.top = "50%";
  videoContainer.style.left = "50%";
  videoContainer.style.transform = "translate(-50%, -50%)";
  videoContainer.style.zIndex = "1000";

  const video = document.createElement("video");
  video.src = videoUrl;
  video.controls = true;
  video.autoplay = true;
  video.style.display = "block";
  video.style.maxWidth = "90vw";
  video.style.maxHeight = "90vh";

  videoContainer.appendChild(video);
  document.body.appendChild(videoContainer);

  video.addEventListener("loadedmetadata", function () {
    const aspectRatio = video.videoWidth / video.videoHeight;
    let maxWidth = window.innerWidth * 0.8;
    let maxHeight = window.innerHeight * 0.8;

    if (maxWidth / maxHeight > aspectRatio) {
      video.style.height = `${maxHeight}px`;
      video.style.width = `${maxHeight * aspectRatio}px`;
    } else {
      video.style.width = `${maxWidth}px`;
      video.style.height = `${maxWidth / aspectRatio}px`;
    }
  });

  video.addEventListener("ended", function () {
    videoContainer.remove();
    showScrollDown();
  });
}

function showScrollDown() {
  const scrollDownText = document.createElement("div");
  scrollDownText.classList.add("scroll-down");

  // Create the text before "here"
scrollDownText.textContent = "scroll down";

  // Add it to the foreground
  document.querySelector(".foreground").appendChild(scrollDownText);

  setTimeout(() => {
    scrollDownText.style.opacity = 1;
    scrollDownText.style.position = "relative";
    scrollDownText.style.top = "-180px";

    // Re-enable scrolling once text appears
    document.body.style.overflow = "auto";
  }, 100);

  showSecondImage();
}

function showSecondImage() {
  const foreground = document.querySelector(".foreground");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("new-image-container");
  imageContainer.style.position = "relative";

  const newImage = document.createElement("img");
  newImage.src =
    "https://cdn.glitch.global/46ef7de7-8069-4c1a-9681-2c2ef81f5cad/000008.JPG?v=1745747639027";
  newImage.alt = "A meaningful description";
  newImage.style.width = "100%";
  newImage.style.borderRadius = "0"; // Change this line to remove rounded corners

  const textOverlay = document.createElement("div");
  textOverlay.classList.add("scroll-triggered-text");

  imageContainer.appendChild(newImage);
  imageContainer.appendChild(textOverlay);
  foreground.appendChild(imageContainer);

  setTimeout(() => {
    imageContainer.style.opacity = 1;
  }, 1500);

  window.addEventListener("scroll", function showTextOnScroll() {
    typeTextOnScroll(textOverlay);
    window.removeEventListener("scroll", showTextOnScroll);
  });
}

function typeTextOnScroll(element) {
  console.log("Scroll detected, typing should begin."); // Debugging log

  const textBefore = "There's one rideable train out of Melbourne, it heads east to Adelaide, then on to ";
  const clickableWord = "Port Augusta.";

  let i = 0;
  const speed = 15;

  // Ensure element is visible before typing starts
  element.style.opacity = "1";

  function typeLetter() {
    if (i < textBefore.length) {
      element.appendChild(document.createTextNode(textBefore.charAt(i))); // Append instead of replace
      i++;
      setTimeout(typeLetter, speed);
    } else {
      console.log("Finished typing textBefore, starting 'nowhere' link."); // Debugging log

      // Create "nowhere" hyperlink
      const nowhereLink = document.createElement("a");
      nowhereLink.href = "portaugusta.html";
      nowhereLink.style.color = "red";
      nowhereLink.style.cursor = "pointer";
      nowhereLink.style.textDecoration = "underline";
      nowhereLink.style.transition = "color 0.3s ease";

      // Hover effects
      nowhereLink.addEventListener("mouseover", function () {
        nowhereLink.style.color = "white";
      });
      nowhereLink.addEventListener("mouseout", function () {
        nowhereLink.style.color = "red";
      });

      element.appendChild(nowhereLink); // Add empty link first

      let j = 0;
      function typeLinkLetter() {
        if (j < clickableWord.length) {
          nowhereLink.appendChild(
            document.createTextNode(clickableWord.charAt(j))
          ); // Append instead of replace
          j++;
          setTimeout(typeLinkLetter, speed);
        } else {
          console.log("Finished typing 'nowhere', starting textAfter."); // Debugging log

          // After typing "nowhere", type remaining text
          let k = 0;
          function typeRemainingText() {
            if (k < textAfter.length) {
              element.appendChild(document.createTextNode(textAfter.charAt(k))); // Append text
              k++;
              setTimeout(typeRemainingText, speed);
            }
          }
          typeRemainingText();
        }
      }

      typeLinkLetter(); // Start typing "nowhere"
    }
  }

  typeLetter();
}

document.getElementById("headline").addEventListener("click", showNewImage);
