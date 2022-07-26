const elemSubmit = document.querySelector('.login-form');
const userData = {};

console.log(elemSubmit.elements);

 const handleSubmit = (event) => {
    event.preventDefault();
    if (!elemSubmit.elements.email.value || !elemSubmit.elements.password.value) {
        alert('Email or Password is empty!');
    } 
    
    userData[elemSubmit.elements.email.name] = elemSubmit.elements.email.value;
    userData[elemSubmit.elements.password.name] = elemSubmit.elements.password.value;
    console.log(userData);

    elemSubmit.reset();
  };
elemSubmit.addEventListener("submit", handleSubmit);