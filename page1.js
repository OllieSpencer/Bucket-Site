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
    "A few weeks ago, we hopped freights from Melbourne to Sydney, the long way, through South Oz. In January last year, we unwillingly hopped to Perth, across the ";

  const linkText = "Nullarbor.";
  const linkUrl =
    "https://cdn.glitch.me/46ef7de7-8069-4c1a-9681-2c2ef81f5cad/boomba.MOV?v=1742359731215";

  let currentText = "";
  let i = 0;
  const speed = 45;

  function typeLetter() {
    if (i < text.length) {
      currentText += text.charAt(i);
      element.textContent = currentText;
      i++;
      setTimeout(typeLetter, speed);
    } else {
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = "#"; // Prevents navigation
        link.textContent = linkText;
        link.style.color = "red";
        link.style.textDecoration = "underline";
        link.style.cursor = "pointer";
        link.style.transition = "color 0.3s ease"; // Smooth transition

        // Hover effect: change color to white
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

        element.appendChild(link);
      }, speed);
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
  scrollDownText.textContent = "scroll down";

  const foreground = document.querySelector(".foreground");
  foreground.appendChild(scrollDownText);

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
    "https://cdn.glitch.global/46ef7de7-8069-4c1a-9681-2c2ef81f5cad/000055.JPG?v=1742253748725";
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
  const textBefore =
    "Both trips involved being stuck in the middle of nowhere for days. It was pretty ";
  const clickableWord = "grim.";

  let currentText = "";
  let i = 0;
  const speed = 45;

  function typeLetter() {
    if (i < textBefore.length) {
      currentText += textBefore.charAt(i);
      element.textContent = currentText;
      i++;
      setTimeout(typeLetter, speed);
    } else {
      // Create the clickable "grim" link
      const grimLink = document.createElement("a");
      grimLink.textContent = clickableWord;
      grimLink.href = "page2.html"; // Directly links to page2
      grimLink.style.color = "red";
      grimLink.style.cursor = "pointer";
      grimLink.style.textDecoration = "underline";
      grimLink.style.transition = "color 0.3s ease";

      // Hover effect
      grimLink.addEventListener("mouseover", function () {
        grimLink.style.color = "white";
      });

      grimLink.addEventListener("mouseout", function () {
        grimLink.style.color = "red";
      });

      element.appendChild(grimLink);
      element.style.opacity = 1;
    }
  }

  element.style.opacity = 1;
  typeLetter();
}

document.getElementById("headline").addEventListener("click", showNewImage);
