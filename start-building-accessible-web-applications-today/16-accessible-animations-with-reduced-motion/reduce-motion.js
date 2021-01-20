var animating = true;
var animationTarget = document.getElementById('animation-target');
var toggleBtn = document.getElementById('animation-toggle');
var toggleBtnText = toggleBtn.querySelector('span');


toggleBtn.addEventListener('click', toggleBtnHandler);

function toggleBtnHandler(event) {
  if (animating) {
    disableAnimation();
  } else {
    enableAnimation();
  }
}
function disableAnimation() {
  toggleBtnText.textContent = 'on';
  animationTarget.classList.add('no-animate');
  animating = false;
  localStorage.setItem('animating', 'false');
}
function enableAnimation() {
  toggleBtnText.textContent = 'off';
  animationTarget.classList.remove('no-animate');
  animating = true;
  localStorage.setItem('animating', 'true');
}
// Store preference - whether animation is on or off
if (localStorage.getItem('animating') === 'false') {
  disableAnimation();
}
