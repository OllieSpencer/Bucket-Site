window.onload = function () {
  const headline = document.getElementById("headline");
  const video = document.getElementById("video");
  const image = document.getElementById("myImage");

  // Typing text element (was inside blackBox, now independent)
  const textElement = document.createElement("p");
  textElement.style.color = "black";
  textElement.style.fontSize = "20px";
  textElement.style.fontFamily = "monospace";
  textElement.style.position = "absolute";
  textElement.style.opacity = 0; // Initially hidden
  textElement.style.transition = "opacity 1s ease";
  textElement.style.paddingBottom = "200px"; // Fade-in effect

  // New image to fade in after scrolling
  const newImage = document.createElement("img");
  newImage.src =
    "https://cdn.glitch.global/46ef7de7-8069-4c1a-9681-2c2ef81f5cad/000051.JPG?v=1744243352241";
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

  document.body.appendChild(newImage);
  document.body.appendChild(textElement);

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
        'Known as the "Crossroads of Australia," the remote town of Port Augusta serves as a transport hub for rail and road networks. ' +
          "It sits north-west of Adelaide, where South Australia transforms from farmland into an arid red desert. " +
          "Tig and I were confident we’d be able to board the train that travels from the Whyalla Steelworks to Newcastle. " +
          "The train is scheduled to stop in Port Augusta for about an hour every morning before continuing on. " +
          "This never happened. We were spotted by a rail worker in a ute when we arrived at the yard, forcing us to run and hide in a bush by the tracks. " +
          "This bush became our home for 37 hours. For two days, nothing eastbound showed up. " +
          "Around the 20 hour mark, Tig pulled the trigger on a go for broke supply run. " +
          "I was sure he'd get pinched leaving the yard, but thankfully he wasn't. " +
          "The closest water source was a two hour walk away, so our only way out of town could of pulled in and out while Tig was gone. " +
          "Fat chance. Finally as we were coming to terms with another night's sleep in the bush, " +
          "an Aurizon train travelling from Perth to Sydney pulled in. " +
          "We immediately jumped on, only to anxiously wait on board for another three hours, illuminated by a spotlight. " +
          'At about 3 o\'clock in the morning we finally left the "Crossroads of Australia," and were heading east into the desert towards Broken Hill.',
        textElement
      );

      setTimeout(function () {
        document.body.style.overflow = "auto"; // Re-enable scrolling
      }, 1000);
    };
  }

  // Fade in new image when scrolling past a certain point
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      if (newImage.style.display === "none") {
        newImage.style.display = "block";
        setTimeout(function () {
          newImage.style.opacity = 1;
        }, 50);
      }
    }
  });
};

// Typing text effect function
function typeText(text, element) {
  let i = 0;
  let typingParts = text.split("Broken Hill");
  let brokenHillText = "Broken Hill";
  let typingStep = "before";

  function type() {
    if (typingStep === "before") {
      if (i < typingParts[0].length) {
        element.innerHTML += typingParts[0][i];
        i++;
        setTimeout(type, 25);
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
        setTimeout(type, 25);
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
        setTimeout(type, 25);
      }
    }
  }

  type();
}
