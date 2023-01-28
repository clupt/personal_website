//make navbar sticky to the top
const navbar = document.getElementById('top-navbar');
let sticky = navbar.offsetTop;

window.onscroll = function () {
  stickyTop();
};

function stickyTop() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

//toggle bio when click on photo of face
const faceBtn = document.querySelector('#face-button');

function toggleBio() {
  const bioDiv = document.querySelector('#bio-div');
  if (bioDiv.style.display === 'none') {
    bioDiv.style.display = 'flex';
  } else {
    bioDiv.style.display = 'none';
  }
};

faceBtn.addEventListener('click', () => {
  toggleBio();
});
