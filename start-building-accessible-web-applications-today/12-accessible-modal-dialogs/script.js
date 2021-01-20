document.addEventListener("DOMContentLoaded", pageLoaded);

function pageLoaded(event) {
  // ADD CODE HERE
    var dialogBtn = document.getElementById('dialogTrigger'),
        closeBtn = document.getElementById('closeBtn'),
        dialog = document.querySelector('dialog');
        wrapper = document.querySelector('.wrapper');

    dialogPolyfill.registerDialog(dialog); // register our polyfill

    // Event handlers to open dialog
    dialogBtn.addEventListener('click', dialogBtnHandler);
    closeBtn.addEventListener('click', dialogCloseBtnHandler);

    function dialogBtnHandler(event) {
      dialog.showModal();

      // document.addEventListener('keydown', keydownHandler);
      wrapper.setAttribute('inert', '');
    }

    function dialogCloseBtnHandler(event) {
      closeDialog();
    }

    function closeDialog() {
      dialog.close();

      setTimeout(function() { // no delay, make it wait a tick before focusing
        dialogBtn.focus();
      });

      wrapper.removeAttribute('inert');
    }

    function keydownHandler(event) {
      if (event.keyCode === 27) { // 27 is the escape key
        closeDialog()
      }
    }
}
