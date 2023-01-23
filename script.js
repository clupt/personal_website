const faceBtn = document.querySelector('#face-button');

function showBio() {
  document.querySelector('#bio-div').style.display = 'inline-block';
};

faceBtn.addEventListener('click', () => {
  showBio();
});
