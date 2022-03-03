
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

