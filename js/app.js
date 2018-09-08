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

  const bhp = document.createElement('h2');
  let randBhp = Math.floor((Math.random() * 60) + 950);

  if (form.category.value == "LMP1" ){
      bhp.textContent = `${randBhp} BHP - 1000 MAX`;
      if (randBhp > 1000 ? bhp.textContent +=  ' **ILLEGAL**' : bhp.textContent +=  ' - PASSED' );

  } else if (form.category.value == "LMP2") {
      randBhp -= 200;
      bhp.textContent = `${randBhp} BHP - 800 MAX`;
      if (randBhp > 800 ? bhp.textContent +=  ' **ILLEGAL**' : bhp.textContent +=  ' - PASSED' );
  } else if (form.category.value == "LMGTE_Pro" ) {
      randBhp -= 400;
      bhp.textContent = `${randBhp} BHP - 600 MAX`;
      if (randBhp > 600 ? bhp.textContent +=  ' **ILLEGAL**' : bhp.textContent +=  ' - PASSED' );
  } else if (form.category.value == "LMGTE_Am" ) {
      randBhp -= 450;
      bhp.textContent = `${randBhp} BHP - 550 MAX`;
      if (randBhp > 600 ? bhp.textContent +=  ' **ILLEGAL**' : bhp.textContent +=  ' - PASSED' );
  }

    console.log(randBhp);
  //TODO get all values of document bhp and average out SOF. Apply this to each cars BOP Change.
  carListItem.appendChild(bhp);

  return carListItem;
};






const handleDeleteAllClick = function (event) {
  const carList = document.querySelector('#car-list');
  carList.innerHTML = 'POOOOOOOOOO';
};

const handleSortAllClick = function (event) {
    const carList = document.querySelector('#car-list');
    console.dir();
};

