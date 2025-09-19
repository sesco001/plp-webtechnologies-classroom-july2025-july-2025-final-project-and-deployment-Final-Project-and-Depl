// PART 2: Functions with Parameters & Return Values
function calculateScale(base, multiplier) {
  return base * multiplier;
}

function showMessage(message) {
  console.log("Message: " + message);
}

// Global variable
let boxElement = document.querySelector('.box');

// Local scope demo
function animateBox(scaleMultiplier) {
  let scaleValue = calculateScale(1, scaleMultiplier); // local variable
  boxElement.style.transform = `scale(${scaleValue}) rotate(360deg)`;
  showMessage("Box animated with scale " + scaleValue);
}

// PART 3: Combining CSS & JS
document.getElementById('animateBtn').addEventListener('click', () => {
  boxElement.classList.toggle('animate'); // toggles CSS class
});

// Popup logic
const popup = document.getElementById('popup');
const popupBtn = document.getElementById('popupBtn');
const closePopup = document.getElementById('closePopup');

popupBtn.addEventListener('click', () => {
  popup.classList.remove('hidden');
  popup.classList.add('show');
});

closePopup.addEventListener('click', () => {
  popup.classList.remove('show');
  setTimeout(() => popup.classList.add('hidden'), 500); // wait for fade-out
});
