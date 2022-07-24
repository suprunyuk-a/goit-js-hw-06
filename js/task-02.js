const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elem = document.querySelector('#ingredients');
for (let i = 0; i < ingredients.length; i++) {
  let itemLi = document.createElement("li");
  itemLi.classList.add("item");
  itemLi.textContent = ingredients[i];
  elem.append(itemLi);
}