document.addEventListener("DOMContentLoaded", pageLoaded);

function pageLoaded() {
  // Bind an event on the fake button using addEventListener
	var btn = document.getElementById('fakeBtn');
	btn.addEventListener('click', btnEventHandler);
  btn.addEventListener('keydown', btnEventHandler);
}

// Callback function
function btnEventHandler(event) {
	console.log(event.type); // What event got fired? click or keydown (spacebar) -

  var realBtn = document.getElementById('realBtn');
  realBtn.focus();
}
