/* Mode switch JavaScript */
const modeSwitch = document.getElementById('mode-switch');
const body = document.body;

modeSwitch.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    modeSwitch.textContent = 'Switch to Light Mode';
  } else {
    modeSwitch.textContent = 'Switch to Dark Mode';
  }
});
