function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const elemButton = document.querySelector('.change-color');

const handleColor = (event) => {
  const colorRandom = getRandomHexColor();
  document.querySelector('body').style.backgroundColor = colorRandom;
  document.querySelector('.color').innerHTML = colorRandom;

};
elemButton.addEventListener("click", handleColor);

