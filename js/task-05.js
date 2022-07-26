// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
//    <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const elem = document.querySelector("#name-input");
const elemValue = document.querySelector("#name-output");
let nameUser = "";

//var_1.0
// const handleKeyPress = (event) => {

//   if (event.type === 'keypress') {
//   nameUser = nameUser + event.key;
//   elemValue.innerHTML = nameUser;
//   } else {

//     if (event.key === 'Backspace') {
//           nameUser = nameUser.substring(0,elem.selectionStart-1) + nameUser.substring(elem.selectionStart,elem.length);
//           elemValue.innerHTML = nameUser;
//     }
//     if (event.key === 'Delete') {
//         nameUser = nameUser.substring(0,elem.selectionStart) + nameUser.substring(elem.selectionStart+1,elem.length);
//         elemValue.innerHTML = nameUser;
//   }
//     nameUser.length<1 ? elemValue.innerHTML = "Anonymous" : elemValue.innerHTML = nameUser;
//   }
// };

// elem.addEventListener("keypress", handleKeyPress);

// elem.addEventListener("keydown", handleKeyPress);

//var_2.0

const handleKeyPress = (event) => {
  elem.value.length < 1
    ? (elemValue.innerHTML = "Anonymous")
    : (elemValue.innerHTML = elem.value);
};
elem.addEventListener("input", handleKeyPress);
