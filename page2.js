window.onload = function () {
  const headline = document.getElementById("headline");
  const video = document.getElementById("video");
  const image = document.getElementById("myImage");

  const blackBox = document.createElement("div");
  const textElement = document.createElement("p"); // Typing text

  document.body.appendChild(blackBox);
  blackBox.appendChild(textElement);

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
    textElement.style.color = "#fff33a";
    textElement.style.fontSize = "20px";
    textElement.style.fontFamily = "monospace";
    textElement.style.position = "absolute";
    textElement.style.top = "-10px"; // Move text up slightly
    textElement.style.left = "10px";
    textElement.style.whiteSpace = "pre-wrap";

    video.onended = function () {
      const rect = video.getBoundingClientRect();
      blackBox.style.width = `${rect.width}px`;
      blackBox.style.height = `1170px`;
      blackBox.style.left = `${rect.left}px`;
      blackBox.style.top = `${rect.top}px`;

      video.style.display = "none";
      blackBox.style.display = "block";

      image.style.display = "block"; // Show image after video

      // Start the typing effect
      typeText("Known as the \"Crossroads of Australia,\" the remote town of Port Augusta serves as a transport hub for rail and road networks. It sits north-west of Adelaide, where South Australia transforms from farmland into an arid red desert. Tig and I were confident we’d be able to board the train that travels from the Whyalla Steelworks to Newcastle. The train is scheduled to stop in Port Augusta for about an hour every morning before continuing on. This never happened. We were spotted by a rail worker in a ute when we arrived at the yard, forcing us to run and hide in a bush by the tracks. This bush became our home for 37 hours. For two days, nothing eastbound showed up. Around the 20 hour mark, Tig pulled the trigger on a go for broke supply run. I was sure he'd get pinched leaving the yard, but thankfully he wasn't. The closest water source was a two hour walk away, so there was a chance our only way out of town would pull in and out while Tig was gone. Fat chance. Finally as we were coming to terms with another night's sleep in the bush, an Aurizon train travelling from Perth to Sydney pulled in. We immediately jumped on, only to anxiously wait on board for another three hours, illuminated by a spotlight directly above us. At about 3 o'clock in the morning we finally left the \"Crossroads of Australia,\" and were heading east into the desert towards Broken Hill.", textElement);
    };
  }
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