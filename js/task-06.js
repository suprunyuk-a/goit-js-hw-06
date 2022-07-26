const elem = document.querySelector("#validation-input");

const handleBlur = (event) => {
    elem.classList.forEach((item, index) => elem.classList.remove(item));
    elem.value.length != elem.getAttribute('data-length') ? elem.classList.add("invalid") : 
                         elem.classList.add("valid");
};
 elem.addEventListener("blur", handleBlur);