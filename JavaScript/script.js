// Author: Logan Berndt 
// JavaScript File for Personal Website Portfolio
// Date Created: 9/26/23


// Code for the seamless scroll under the about header 

const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 1; // Sets speed of which the track moves
  
  const percentage = (mouseDelta / maxDelta) * -100, // sets which direction you slide from 
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  // animates the track 

  track.animate({
    transform: `translate(${nextPercentage}%, -0%)`
  }, { duration: 1200, fill: "forwards"});
  
  // animates the image for the paralax effect 
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards"});
  }
}

// window.onmousedown = e => handleOnDown(e);

// window.ontouchstart = e => handleOnDown(e.touches[0]);

// window.onmouseup = e => handleOnUp(e);

// window.ontouchend = e => handleOnUp(e.touches[0]);

// window.onmousemove = e => handleOnMove(e);

// window.ontouchmove = e => handleOnMove(e.touches[0]);

sliderDiv = document.querySelector(".about-slider")

sliderDiv.onmousedown = e => handleOnDown(e);

sliderDiv.ontouchstart = e => handleOnDown(e.touches[0]);

sliderDiv.onmouseup = e => handleOnUp(e);

sliderDiv.ontouchend = e => handleOnUp(e.touches[0]);

sliderDiv.onmousemove = e => handleOnMove(e);

sliderDiv.ontouchmove = e => handleOnMove(e.touches[0]);




// code for the cards in the skill section 


const cardSubtitles = document.querySelectorAll(".card-subtitle");

const createWord = (text, index) => {
  const word = document.createElement("span");
  word.innerHTML = `${text} `;
  word.classList.add("card-subtitle-word");
  word.style.transitionDelay = `${index * 40}ms`;
  return word;
}

const createSubtitle = (subtitleElement, text) => {
  text.split(" ").forEach((word, index) => {
    subtitleElement.appendChild(createWord(word, index));
  });
}

const subtitlesText = [
  "With experience in building web applications using HTML5, CSS, JavaScript, and web frameworks " +
  "such as ReactJS, NextJS, and Cypress, I have all the tools to build anything I can imagine.",
  "I have years of working with multiple programming languages including but not limted to Python, " + 
  "Java, C#, and Cobol. With a great understanding of programming logic and object oriented" + 
  " programming, I am ready for any challenge.",
  "Having Knowledgable experience working with databases and connecting them through the backend" + 
  " and the front end, I can use databases to bring out the best of all my programs."
];

cardSubtitles.forEach((subtitleElement, index) => {
  createSubtitle(subtitleElement, subtitlesText[index]);
});



