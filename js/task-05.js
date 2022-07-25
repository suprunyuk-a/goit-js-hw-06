const elem = document.querySelector("#name-input");
const elemValue = document.querySelector("#name-output");
let nameUser = "";

const handleKeyPress = (event) => {
  
  if (event.type === 'keypress') {
  nameUser = nameUser + event.key;
  elemValue.innerHTML = nameUser;
  } else {

    if (event.key === 'Backspace') {
          nameUser = nameUser.substring(0,elem.selectionStart-1) + nameUser.substring(elem.selectionStart,elem.length);
          elemValue.innerHTML = nameUser;
    }
    if (event.key === 'Delete') {
        nameUser = nameUser.substring(0,elem.selectionStart) + nameUser.substring(elem.selectionStart+1,elem.length);
        elemValue.innerHTML = nameUser;
  }
    nameUser.length<1 ? elemValue.innerHTML = "Anonymous" : elemValue.innerHTML = nameUser;
  }
};

elem.addEventListener("keypress", handleKeyPress);
  
elem.addEventListener("keydown", handleKeyPress);