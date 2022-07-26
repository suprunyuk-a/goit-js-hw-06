// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const elem = document.querySelector("#font-size-control");
const elemSpan = document.querySelector("#text");
elemSpan.style.fontSize = elem.value + "px";

const handleSlider = (event) => {
  elemSpan.style.fontSize = elem.value + "px";
};
elem.addEventListener("input", handleSlider);
