const elem = document.querySelector("#name-input");
const elemValue = document.querySelector("#name-output");
let nameUser = "";

const handleKeyPress = (event) => {
  
  if (event.type === 'keypress') {
  nameUser = nameUser + event.key;
  elemValue.innerHTML = nameUser;
  } else {
    event.key === 'Backspace' ? nameUser = nameUser.substring(0,nameUser.length-1) : nameUser = nameUser;
    nameUser.length<1 ? elemValue.innerHTML = "Anonymous" : elemValue.innerHTML = nameUser;
  }
};

elem.addEventListener("keypress", handleKeyPress);
  
elem.addEventListener("keydown", handleKeyPress);