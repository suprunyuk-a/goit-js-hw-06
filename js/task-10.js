// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

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
};

const createBoxes = (event) => {
  let sizeDiv = 20;
  createSet(document.querySelector('[type="number"]').value);
  document.querySelector('[id="boxes"]').append(...set);
  document.querySelectorAll(".boxes_child").forEach((index) => {
    sizeDiv += 10;
    index.setAttribute(
      "style",
      "height: " +
        sizeDiv +
        "px;" +
        "width: " +
        sizeDiv +
        "px;" +
        "background-color:" +
        getRandomHexColor()
    );
  });
};
document.querySelector("[data-create]").addEventListener("click", createBoxes);

const destroyBoxes = (event) => {
  set.clear();
  document.querySelectorAll(".boxes_child").forEach((index) => index.remove());
};
document
  .querySelector("[data-destroy]")
  .addEventListener("click", destroyBoxes);
