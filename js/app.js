document.addEventListener('DOMContentLoaded', () => {
  const newFishCaught = document.querySelector('#new-fish-caught')
  newFishCaught.addEventListener('submit', handleNewFishCaughtSubmit)

  const deleteAllButton = document.querySelector('#delete-all')
  deleteAllButton.addEventListener('click', handleDeleteAllClick)
})


const handleNewFishCaughtSubmit = function(event) {
 event.preventDefault()

const catchesListItem = createCatchesListItem(event.target)
const catchesList = document.querySelector('#catches-list')
catchesList.appendChild(catchesListItem)

event.target.reset()

}
const createCatchesListItem = function (form) {
  const catchesListItem = document.createElement('li')
  catchesListItem.classList.add('catches-list-item');

  const fish = document.createElement('h1')
  fish.textContent = form.fish.value
  catchesListItem.appendChild(fish)

  const techniques = document.createElement('h2')
  techniques.textContent = form.techniques.value
  catchesListItem.appendChild(techniques)

  const spot = document.createElement('h3')
  spot.textContent = form.spot.value
  catchesListItem.appendChild(spot)

  return catchesListItem
}

const handleDeleteAllClick = function (event) {
  const catchesList = document.querySelector('#catches-list');
  catchesList.innerHTML = '';
}
