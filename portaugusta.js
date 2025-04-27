window.onload = function () {
  const headline = document.getElementById("headline");
  const video = document.getElementById("video");
  const image = document.getElementById("myImage");

  // Typing text element (first one)
  const textElement = document.createElement("p");
  textElement.style.color = "black";
  textElement.style.fontSize = "20px";
  textElement.style.fontFamily = "monospace";
  textElement.style.position = "absolute";
  textElement.style.opacity = 0; // Initially hidden
  textElement.style.transition = "opacity 1s ease";
  textElement.style.paddingBottom = "200px";
  textElement.style.fontWeight = "bold";

  // New image to fade in after scrolling
  const newImage = document.createElement("img");
  newImage.src = "https://cdn.glitch.global/46ef7de7-8069-4c1a-9681-2c2ef81f5cad/000006.JPG?v=1744165093061";
  newImage.id = "newImage";
  newImage.style.display = "none";
  newImage.style.opacity = 0;
  newImage.style.transition = "opacity 1s ease-in";
  newImage.style.width = "600px";
  newImage.style.height = "auto";
  newImage.style.position = "absolute";
  newImage.style.right = "200px";
  newImage.style.top = "700px";
  newImage.style.zIndex = "10";

  // Second typing text element (appears after scroll)
  const textElement2 = document.createElement("p");
  textElement2.style.color = "black";
  textElement2.style.fontSize = "20px";
  textElement2.style.fontFamily = "monospace";
  textElement2.style.position = "absolute";
  textElement2.style.opacity = 0; // Initially hidden
  textElement2.style.transition = "opacity 1s ease";
  textElement2.style.fontWeight = "bold";
  textElement2.style.width = "400px";
  textElement2.style.left = "115px"; // positioned to the left
  textElement2.style.top = "615px";  // aligned near newImage
  textElement2.style.zIndex = "9";

  document.body.appendChild(newImage);
  document.body.appendChild(textElement);
  document.body.appendChild(textElement2);

  document.body.style.overflow = "hidden"; // Disable scrolling on page load

  if (headline && video && image) {
    headline.addEventListener("click", function () {
      headline.style.display = "none";
      video.style.display = "block";
      video.play();
    });

    video.style.display = "none";
    image.style.display = "none";
    image.style.opacity = 0;
    image.style.transition = "opacity 1s ease-in";

    video.onended = function () {
      const rect = video.getBoundingClientRect();

      // Set textElement's position to where blackBox used to be
      textElement.style.width = `${rect.width}px`;
      textElement.style.height = `1010px`;
      textElement.style.left = `${rect.left}px`;
      textElement.style.top = `${rect.top}px`;

      video.style.display = "none";
      image.style.display = "block";

      // Fade-in effect for text and image
      setTimeout(function () {
        textElement.style.opacity = 1;
        image.style.opacity = 1;
      }, 50);

      // Start the typing effect with the full original text
      typeText(
        "The rolling hills east of Adelaide receded as the train rocketed through the city, giving way to dry, grassy plains dotted with trees. Our amazement at what we saw was tainted by anxiety, knowing the train might not stop in Port Augusta and continue through the Nullabor to ",
        textElement
      );

      setTimeout(function () {
        document.body.style.overflow = "auto"; // Re-enable scrolling
      }, 1000);
    };
  }

  // Fade in new image and second text when scrolling past a certain point
  let newImageShown = false;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200 && !newImageShown) {
      newImageShown = true;

      newImage.style.display = "block";

      setTimeout(function () {
        newImage.style.opacity = 1;
      }, 50);

      setTimeout(function () {
        textElement2.style.opacity = 1;
        simpleTypeText(
          "We waited in a bush by the tracks in Port Augusta for two days, with countless discussions as to whether or not we should bail. The heat was merciless, and any food or water was a two hour walk away. Our patience paid off when a Sydney bound train finally arrived in the middle of the night, and we were off to Broken Hill.",
          textElement2
        );
      }, 1000);
    }
  });
};

// Typing text effect function WITH clickable Perth
function typeText(text, element) {
  let i = 0;
  let typingParts = text.split("Perth.");
  let brokenHillText = "Perth.";
  let typingStep = "before";

  function type() {
    if (typingStep === "before") {
      if (i < typingParts[0].length) {
        element.innerHTML += typingParts[0][i];
        i++;
        setTimeout(type, 15);
      } else {
        typingStep = "link";
        i = 0;

        const clickable = document.createElement("span");
        clickable.style.color = "red";
        clickable.style.textDecoration = "underline";
        clickable.style.cursor = "pointer";
        clickable.style.transition = "color 0.3s";
        clickable.onmouseover = function () {
          this.style.color = "white";
        };
        clickable.onmouseout = function () {
          this.style.color = "red";
        };
        clickable.onclick = function () {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
          });
        };

        element.appendChild(clickable);
        type();
      }
    } else if (typingStep === "link") {
      const clickable = element.querySelector("span");
      if (i < brokenHillText.length) {
        clickable.innerHTML += brokenHillText[i];
        i++;
        setTimeout(type, 15);
      } else {
        typingStep = "after";
        i = 0;
        type();
      }
    } else if (typingStep === "after") {
      if (i < typingParts[1].length) {
        element.innerHTML += typingParts[1][i];
        i++;
        setTimeout(type, 15);
      }
    }
  }

  type();
}

function simpleTypeText(text, element) {
  let i = 0;
  let typingParts = text.split("Broken Hill");
  let brokenHillText = "Broken Hill";
  let typingStep = "before";

  function type() {
    if (typingStep === "before") {
      if (i < typingParts[0].length) {
        element.innerHTML += typingParts[0][i];
        i++;
        setTimeout(type, 15);
      } else {
        typingStep = "link";
        i = 0;
        element.innerHTML += `<a href="https://bucket-site.glitch.me/brokenhill.html" style="color: red; text-decoration: underline; transition: color 0.3s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='red'">`;
        type();
      }
    } else if (typingStep === "link") {
      if (i < brokenHillText.length) {
        element.lastChild.innerHTML += brokenHillText[i];
        i++;
        setTimeout(type, 15);
      } else {
        typingStep = "after";
        i = 0;
        element.innerHTML += `</a>`;
        type();
      }
    } else if (typingStep === "after") {
      if (i < typingParts[1].length) {
        element.innerHTML += typingParts[1][i];
        i++;
        setTimeout(type, 15);
      }
    }
  }

  type();
}