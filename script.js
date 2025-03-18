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
    "A few weeks ago, Tig and I hopped freights from Melbourne to Sydney, the long way, through South Oz. In January last year, we unwillingly hopped to Perth, across the ";

  const linkText = "desert.";
  const linkUrl =
    "https://www.dropbox.com/scl/fi/gwh70zf7z768sc318ve6u/MELBS2PERTH.mp4?rlkey=3bxoapd2950q2j6erz68kmtfy&st=0ji05gu3&dl=0";

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
        link.href = linkUrl;
        link.textContent = linkText;
        link.target = "_blank";
        element.appendChild(link);
        showScrollDown();
      }, speed);
    }
  }

  typeLetter();
}

function showScrollDown() {
  const scrollDownText = document.createElement("div");
  scrollDownText.classList.add("scroll-down");
  scrollDownText.textContent = "Hit link, then come back and scroll down.";

  const foreground = document.querySelector(".foreground");
  foreground.appendChild(scrollDownText);

  setTimeout(() => {
    scrollDownText.style.opacity = 1;
    scrollDownText.style.position = "relative";
    scrollDownText.style.top = "-100px";
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
  newImage.style.borderRadius = "10px";

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
    "Both trips involved being stuck in the middle of nowhere for days. Things got pretty ";
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
      // Create the clickable "grim" word
      const grimSpan = document.createElement("span");
      grimSpan.textContent = clickableWord;
      grimSpan.style.color = "red";
      grimSpan.style.cursor = "pointer";
      grimSpan.style.textDecoration = "underline";
      grimSpan.style.transition = "color 0.3s ease";

      // Hover effect
      grimSpan.addEventListener("mouseover", function () {
        grimSpan.style.color = "white";
      });

      grimSpan.addEventListener("mouseout", function () {
        grimSpan.style.color = "red";
      });

      // Add click event to "grim"
      grimSpan.addEventListener("click", showGrimContainer);

      element.appendChild(grimSpan);
      element.style.opacity = 1;
    }
  }

  element.style.opacity = 1;
  typeLetter();
}

function showGrimContainer() {
  const scrollDownText = document.querySelector(".scroll-down");

  if (!scrollDownText) return;

  const rect = scrollDownText.getBoundingClientRect();
  const parent = scrollDownText.parentElement;

  if (!parent) return;

  const newContainer = document.createElement("div");
  newContainer.style.position = "absolute";
  newContainer.style.top = `${rect.top + window.scrollY}px`;
  newContainer.style.left = `${rect.left}px`;
  newContainer.style.width = `${rect.width}px`;
  newContainer.style.height = `${rect.height}px`;
  newContainer.style.backgroundColor = "black";
  newContainer.style.display = "flex";
  newContainer.style.alignItems = "center";
  newContainer.style.justifyContent = "center";
  newContainer.style.borderRadius = "10px";
  newContainer.style.padding = "10px";
  newContainer.style.textAlign = "center";
  newContainer.style.zIndex = "10";

  // Styled hyperlink
  const link = document.createElement("a");
  link.textContent = "Read about it.";
  link.href = "page2.html"; // Change to your desired URL
  link.target = "_blank"; // Opens in a new tab
  link.style.fontFamily = "'Courier New', monospace";
  link.style.fontSize = "1.2em";
  link.style.color = "#ffcc00";
  link.style.textDecoration = "underline";

  newContainer.appendChild(link);
  parent.appendChild(newContainer);
  scrollDownText.style.visibility = "hidden";
}

document.getElementById("headline").addEventListener("click", showNewImage);
