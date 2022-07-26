const elem = document.querySelector("#font-size-control");
const elemSpan = document.querySelector("#text");

const handleSlider = (event) => {
    elemSpan.style.fontSize = elem.value +'px';
 };
 elem.addEventListener("input", handleSlider);