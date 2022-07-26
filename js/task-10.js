const set = new Set();

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createSet = (amount) => {
  for (let item of Array(Number(amount))) { 
    let divName = document.createElement("div");
    divName.classList.add("boxes_child");
    set.add(divName);   
  }
}

const createBoxes = (event) => {
  let sizeDiv = 20;
  createSet(document.querySelector('[type="number"]').value);
  document.querySelector('[id="boxes"]').append(...set);
  document.querySelectorAll('.boxes_child').forEach(index => {
    sizeDiv += 10;
    index.setAttribute('style', 'height: '+ sizeDiv + 'px;' + 'width: ' + sizeDiv + 
                       'px;' + 'background-color:' + getRandomHexColor())
  } );
};
document.querySelector('[data-create]').addEventListener("click", createBoxes);

const destroyBoxes = (event) => {
  set.clear();
  document.querySelectorAll('.boxes_child').forEach(index => index.remove());
};
document.querySelector('[data-destroy]').addEventListener("click", destroyBoxes);