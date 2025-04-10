window.onload = function () {
  const headline = document.getElementById("headline");
  const video = document.getElementById("video");
  const image = document.getElementById("myImage");

  const blackBox = document.createElement("div");
  blackBox.id = "blackBox";
  const textElement = document.createElement("p"); // Typing text

  // New image to fade in after scroll
  const newImage = document.createElement("img");
  newImage.src = "https://cdn.glitch.global/46ef7de7-8069-4c1a-9681-2c2ef81f5cad/000051.JPG?v=1744243352241"; // Replace with the new image URL
  newImage.id = "newImage";
  newImage.style.display = "none"; // Initially hidden
  newImage.style.opacity = 0; // Initially invisible
  newImage.style.transition = "opacity 1s ease-in"; // Fade-in effect over 1 second

  // Apply the same size as the original image
  newImage.style.width = "600px"; // Same width as #myImage
  newImage.style.height = "auto"; // Maintain aspect ratio
  newImage.style.position = "absolute"; // Ensure it's positioned relative to the document
  newImage.style.zIndex = "10"; // Ensure it appears above other elements

  // Position the new image horizontally same as the original image
  newImage.style.left = `${image.offsetLeft}px`; // Same horizontal position as the original image
  newImage.style.top = `${image.offsetTop + image.offsetHeight + 20}px`; // 20px below the original image

  document.body.appendChild(newImage); // Append the new image to the body
  document.body.appendChild(blackBox);
  blackBox.appendChild(textElement);

  // Disable scrolling as soon as the page loads
  document.body.style.overflow = "hidden"; // Disable scrolling immediately

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
    blackBox.style.display = "none"; // Initially hidden
    blackBox.style.opacity = 0; // Initially invisible
    blackBox.style.transition = "opacity 1s ease"; // Apply fade-in transition

    // Style the text element (start from top-left of black box)
    textElement.style.color = "#fff33a";
    textElement.style.fontSize = "20px";
    textElement.style.fontFamily = "monospace";
    textElement.style.position = "absolute";
    textElement.style.top = "-10px"; // Move text up slightly
    textElement.style.left = "10px";
    textElement.style.whiteSpace = "pre-wrap";

    // Add initial styling to the image
    image.style.display = "none"; // Initially hide the image
    image.style.opacity = 0; // Set opacity to 0 (hidden)
    image.style.transition = "opacity 1s ease-in"; // Fade-in effect over 1 second

    video.onended = function () {
      const rect = video.getBoundingClientRect();
      blackBox.style.width = `${rect.width}px`;
      blackBox.style.height = `1010px`;
      blackBox.style.left = `${rect.left}px`;
      blackBox.style.top = `${rect.top}px`;

      video.style.display = "none";
      blackBox.style.display = "block"; // Show the black box
      image.style.display = "block"; // Show the image

      // Fade-in both the black box and the image
      setTimeout(function () {
        blackBox.style.opacity = 1; // Fade in the black box
        image.style.opacity = 1; // Fade in the image
      }, 50); // Slight delay to ensure display change happens first

      // Start the typing effect immediately
      typeText(
        "Known as the \"Crossroads of Australia,\" the remote town of Port Augusta serves as a transport hub for rail and road networks. It sits north-west of Adelaide, where South Australia transforms from farmland into an arid red desert. Tig and I were confident we’d be able to board the train that travels from the Whyalla Steelworks to Newcastle. The train is scheduled to stop in Port Augusta for about an hour every morning before continuing on. This never happened. We were spotted by a rail worker in a ute when we arrived at the yard, forcing us to run and hide in a bush by the tracks. This bush became our home for 37 hours. For two days, nothing eastbound showed up. Around the 20 hour mark, Tig pulled the trigger on a go for broke supply run. I was sure he'd get pinched leaving the yard, but thankfully he wasn't. The closest water source was a two hour walk away, so there was a chance our only way out of town would pull in and out while Tig was gone. Fat chance. Finally as we were coming to terms with another night's sleep in the bush, an Aurizon train travelling from Perth to Sydney pulled in. We immediately jumped on, only to anxiously wait on board for another three hours, illuminated by a spotlight. At about 3 o'clock in the morning we finally left the \"Crossroads of Australia,\" and were heading east into the desert towards Broken Hill.",
        textElement
      );

      // Once both elements have finished fading in, enable scrolling
      // Both elements will take 1 second to fade in, so we wait for that duration
      setTimeout(function () {
        document.body.style.overflow = "auto"; // Re-enable scrolling after 1 second
      }, 1000); // 1 second to match the fade-in duration
    };
  }

  // Check if the user has scrolled to a certain point to trigger the fade-in for the new image
  window.addEventListener("scroll", function () {
    console.log("scrollY:", window.scrollY); // Log scroll position for debugging

    if (window.scrollY > 200) { // Adjust this value as needed for the scroll trigger point
      if (newImage.style.display === "none") {
        newImage.style.display = "block"; // Make the image visible
        setTimeout(function () {
          newImage.style.opacity = 1; // Start fading in the image
        }, 50); // Slight delay to ensure display change happens first
      }
    }
  });
};

// Typing effect function
function typeText(text, element) {
  let i = 0;
  element.textContent = "";
  function type() {
    if (i < text.length) {
      element.textContent += text[i];
      i++;
      setTimeout(type, 15); // Adjust speed of typing here
    }
  }
  type();
}
