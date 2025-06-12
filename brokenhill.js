document.addEventListener("DOMContentLoaded", () => {
  const text = "New to the ";
  const clickableText = "Yabba?";
  const container = document.getElementById("typewriter");
  const video = document.getElementById("myVideo");
  const secondVideo = document.getElementById("secondVideo");
  const textDiv = document.getElementById("text");

  const fullText = `Fatigue and dehydration had thoroughly set in once the sun had risen. Any sleep we got was short and rough. We boarded the train in a hurry, with less water than we needed. We were stuffing our sleeping bags under a thirty-five-degree sun that quickly rose to forty-two. The red dirt took over as we got deeper into the desert. At about midday we pulled into Broken Hill, the filming location for Wake in Fright, the famous cultural critique that held a mirror up to Australia, highlighting our dysfunctional rituals and excess. We were dying to get off and explore the inspiration for the fictional ‘Bundanyabba’ and find some shade. But we had somewhere to be in northern NSW and couldn’t spare the time. The train rolled into the Broken Hill yard and slowed to a stop next to a group of Aurizon rail workers. We dropped to the deck of the wagon to hide, the heat of the metal plate searing what skin was exposed. We stared at the sun for a gruelling hour without moving a muscle or making a sound. My sunburnt nose began to sting, and my lips crusted over. We could hear the workers a few metres away, if they saw us, we were done. The air brake finally hissed, signalling we were leaving. The boar eventually chugged its way out of the yard. We could finally quench our thirst. Our next stop was several hours away, in  <a href="https://bucket-site.glitch.me/parkes.html" class="highlight-link">Parkes</a>.`;

  if (!container) {
    console.error("Error: #typewriter element not found in HTML.");
    return;
  }

  let i = 0, j = 0;

  textDiv.style.display = "none";

  const button = document.createElement("button");
  button.style.textDecoration = "underline";
  button.style.color = "inherit";
  button.style.backgroundColor = "transparent";
  button.style.border = "none";
  button.style.cursor = "pointer";
  button.onmouseover = () => (button.style.color = "red");
  button.onmouseout = () => (button.style.color = "inherit");

  button.addEventListener("click", () => {
    container.style.display = "none";
    video.style.display = "block";
    video.play();

    setTimeout(() => {
      secondVideo.style.display = "block";
      secondVideo.play();
    }, 5000);
  });

  function typeEffect() {
    if (i < text.length) {
      container.textContent += text.charAt(i);
      i++;
      setTimeout(typeEffect, 15);
    } else if (i === text.length) {
      container.appendChild(button);
      typeClickableText();
    }
  }

  function typeClickableText() {
    if (j < clickableText.length) {
      button.textContent += clickableText.charAt(j);
      j++;
      setTimeout(typeClickableText, 15);
    }
  }

  function typeTextEffect() {
    let k = 0;
    let displayed = "";
    function typeFullText() {
      if (k < fullText.length) {
        displayed += fullText[k];
        textDiv.innerHTML = displayed;
        k++;
        setTimeout(typeFullText, 15);
      }
    }
    typeFullText();
  }

  const image = document.querySelector("img");

  secondVideo.addEventListener("ended", () => {
    secondVideo.style.display = "none";
    image.style.opacity = "1";
  });

  video.addEventListener("ended", () => {
    video.style.display = "none";
    textDiv.style.display = "block";
    typeTextEffect();
  });

  setTimeout(typeEffect, 1000);
});
