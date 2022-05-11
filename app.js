import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

async function loadData() {
    const dogs = await getDogs();
    for (let dog of dogs) {
        const dogEl = renderDogCard(dog);
        dogListContainer.append(dogEl);
    }
}
loadData();
// on load
// fetch all dogs
// render and append all dog cards to the container
