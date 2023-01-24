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