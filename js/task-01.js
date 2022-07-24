const categoryMass = document.querySelector('#categories').querySelectorAll(".item");
console.log("Number of categories: " + categoryMass.length);

for (let i = 0; i < categoryMass.length; i++) {
    let list = categoryMass[i].firstElementChild;
    console.log("Category: " + list.innerHTML);
    console.log("Elements: " + categoryMass[i].lastElementChild.querySelectorAll('li').length);
}

