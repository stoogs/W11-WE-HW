document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

  console.log('JavaScript loaded form and delete');

})

const handleNewItemFormSubmit = function (event){
  event.preventDefault();
  const carListItem = createCarListItem(event.target);
  const carList = document.querySelector('#car-list');
  carList.appendChild(carListItem);
  event.target.reset();
}

const createCarListItem = function(form){
  
  console.dir(form)
  const carListItem = document.createElement('li')
  carListItem.classList.add('car-list-item')
  console.log(carListItem);

  const manufacturer = document.createElement('h1');
  manufacturer.textContent = form.manufacturer.value;
  console.log(manufacturer);
  carListItem.appendChild(manufacturer);

  const model = document.createElement('h2');
  model.textContent = form.model.value;
  console.log(model);
  carListItem.appendChild(model);

  const category = document.createElement('h2');
  category.textContent = form.category.value;
  console.dir(category);
  carListItem.appendChild(category);

  return carListItem;
}

const handleDeleteAllClick = function (event) {
  const carList = document.querySelector('#car-list');
  carList.innerHTML = '';
}

 

