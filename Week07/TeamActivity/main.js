import HikesController from './HikeController.js';

//on load grab the array and insert it into the page
window.addEventListener("load", () => {
  const hikeController = new HikesController('#hikes');
  hikeController.showHikeList();
});

