import QuakeController from './quakeController.js';

const controller = new QuakeController('#quakeList');

controller.init();

const searchEl = document.querySelector('#search');
const radiusEl = document.querySelector('#radius');


searchEl.addEventListener('click', () => {
  const radius = Number.parseInt(radiusEl.value);
  controller.getQuakesByRadius(radius);
});

