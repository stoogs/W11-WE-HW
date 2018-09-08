document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

  const sortAllButton = document.querySelector('#sort-all');
  sortAllButton.addEventListener('click', handleSortAllClick);

  console.log('JavaScript loaded form and delete');

});

const handleNewItemFormSubmit = function (event){
  event.preventDefault();
  const carListItem = createCarListItem(event.target);
  const carList = document.querySelector('#car-list');
  carList.appendChild(carListItem);
  event.target.reset();
};

const createCarListItem = function(form){
  const carListItem = document.createElement('li');
  carListItem.classList.add('car-list-item');

  const manufacturer = document.createElement('h1');
  manufacturer.textContent = form.manufacturer.value;
  carListItem.appendChild(manufacturer);

  const model = document.createElement('h2');
  model.textContent = form.model.value;
  carListItem.appendChild(model);

  const category = document.createElement('h2');
  category.textContent = form.category.value;
  carListItem.appendChild(category);

  const bhpDocument = document.createElement('h2');

  if (form.category.value == "LMP1" ){
      // [lower, upper] limit
      let limitsBhp = [950,980];
      carBhp = changeColorPassFail(bhpDocument, limitsBhp);
      bhpDocument.textContent = `${carBhp} BHP - ${limitsBhp[1]} MAX`;
  } else if (form.category.value == "LMP2") {
      let limitsBhp = [850,880];
      carBhp = changeColorPassFail(bhpDocument, limitsBhp);
      bhpDocument.textContent = `${carBhp} BHP - ${limitsBhp[1]} MAX`;
  } else if (form.category.value == "LMGTE_Pro" ) {
      let limitsBhp = [650,680];
      carBhp = changeColorPassFail(bhpDocument, limitsBhp);
      bhpDocument.textContent = `${carBhp} BHP - ${limitsBhp[1]} MAX`;
  } else if (form.category.value == "LMGTE_Am" ) {
      let limitsBhp = [620,650];
      carBhp = changeColorPassFail(bhpDocument, limitsBhp);
      bhpDocument.textContent = `${carBhp} BHP - ${limitsBhp[1]} MAX`;
  }

  //TODO get all values of document bhpDocument and average out SOF. Apply this to each cars BOP Change.
  carListItem.appendChild(bhpDocument);

  return carListItem;
};






const handleDeleteAllClick = function (event) {
  const carList = document.querySelector('#car-list');
  carList.innerHTML = 'POOOOOOOOOO';
};

const handleSortAllClick = function (event) {
    const carList = document.querySelector('#car-list');
};

const changeColorPassFail = function(bhpDocument, limitsBhp){
    let carBhp = Math.floor((Math.random() * 50) + limitsBhp[0]);
    if (carBhp > limitsBhp[1]) {
        bhpDocument.style.color = 'red';
        bhpDocument.textContent +=  ' **ILLEGAL**';
    } else {
        bhpDocument.style.color = 'green';
        bhpDocument.textContent +=  ' - PASSED';
    }
    return carBhp;
};
