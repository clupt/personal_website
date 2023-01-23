const faceBtn = document.querySelector('#face-button');

function showBio() {
  const bioDiv = document.querySelector('#bio-div');
  if (bioDiv.style.display === 'none') {
    bioDiv.style.display = 'inline-block';
  } else {
    bioDiv.style.display = 'none';
  }
};

faceBtn.addEventListener('click', () => {
  showBio();
});
