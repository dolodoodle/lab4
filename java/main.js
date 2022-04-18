
const baseURL = 'images/';
const nxt = document.querySelector('.nxt');
const prev = document.querySelector('.prev');
const slide = document.querySelector('.pic');
const dogs = ['stitch-cute.png', 'stitch-party.png', 'stitch-sleeping.png', 'stitch-taking.calls.png', 'stitch-monkey.png'];
let index = 0;


nxt.onclick = function(e) {
  e.preventDefault();
  index = index + 1;

  //write a conditional so that the images wrap back to the beginning image.
  if(index >= dogs.length) {
    index = 0;
  }
  slide.src = baseURL + dogs[index];
}

prev.onclick = function(e) {
  e.preventDefault();
  index = index - 1;

  //write a conditional so that the images wrap back to the beginning image.
  if(index <= - 1) {
    index = dogs.length - 1;
  }
  slide.src = baseURL + dogs[index];
}

document.addEventListener("DOMContentLoaded", init);
var myInterval = "";

function init() {
    //create shortcut vars
    const back_btn = document.querySelector(".back-btn");
    const next_btn = document.querySelector(".next-btn");
    const frame = document.querySelector(".frame");
    const slides = frame.querySelectorAll("img");
    const caption = document.querySelector(".caption");
    const controls = document.querySelector(".controls");

    //with JS active, hide all images
    slides.forEach((slide) => {
        slide.classList.add("hide", "abs-pos");
    });

    // show the first slide
    slides[0].classList.remove("hide");

    //make the controls work
    next_btn.addEventListener("click", changeSlide);
    back_btn.addEventListener("click", changeSlide);

    // set the caption dynamically
    caption.innerHTML = frame.firstElementChild.alt;

    //show the controls
    controls.style.display = "block";

    // start the timer
    myInterval = setInterval(changeSlide, 5000);
}

function changeSlide(e) {
    
    // check to see if function called by button click
    // or setInterval. If the event object
    // is passed, button was clicked. kill off the timer.
    if (e) {
        e.preventDefault();
        clearInterval(myInterval);
    }

    //shortcut vars
    const frame = document.querySelector(".frame");
    const slides = frame.querySelectorAll("img");
    const caption = document.querySelector(".caption");
    let showing = document.querySelector(".current");
    let nextUp = "";

    // determine which direction we will be going.
    // if called by myInterval there's no event object passed.
    if (!e || e.target.className == "next-btn") {
        nextUp = showing.nextElementSibling;
    } else {
        nextUp = showing.previousElementSibling;
    }

    // deactivate current image
    showing.classList.toggle("hide");
    showing.classList.toggle("current");

    //make sure next image is there
    if (!nextUp) {
        nextUp = slides[slides.length - 1];
    }

    if (nextUp.nodeName !== "IMG") {
        nextUp = slides[0];
    }

    // activate next image
    nextUp.classList.toggle("hide");
    nextUp.classList.toggle("current");

    //change caption text
    caption.innerHTML = nextUp.alt;
}