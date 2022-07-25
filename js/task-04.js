let counterValue = 0;
const elemDecrement = document.querySelector('[data-action="decrement"]');
const value = document.querySelector('#value');

const handleClickDecrement = () => {
    counterValue = counterValue-1;
    value.innerHTML = counterValue;
  };

elemDecrement.addEventListener("click", handleClickDecrement);

const elemIncrement = document.querySelector('[data-action="increment"]');

const handleClickIncrement = () => {
    counterValue = counterValue+1;
    value.innerHTML = counterValue;
  };

elemIncrement.addEventListener("click", handleClickIncrement);
