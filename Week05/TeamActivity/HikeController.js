import HikeModel from './HikeModel.js';
import HikesView from './HikesView.js';

// Hike controller
export default class HikesController {
  constructor(parentSelector) {
    this.parentElement = document.querySelector(parentSelector); 

    // this is how our controller will know about the model and view...we add them right into the class as members.
    this.hikeModel = new HikeModel();
    this.hikesView = new HikesView(this.parentElement);
  }

  clearElement() {
    this.parentElement.innerHTML = '';
  }

  showHikeList() {
    this.clearElement();

    this.hikesView.renderHikeList(
      this.hikeModel.getAllHikes(),
      this.hikeCallback.bind(this)
    );
  }

  showOneHike(hikeName, parentSelector = null) {
    const parentEl = parentSelector === null
      ? this.parentElement
      : document.querySelector(parentSelector);

    const hike = this.hikeModel.getHike(hikeName);

    this.hikesView.renderHike(hike, parentEl);
  }

  hikeCallback(hike) {
    this.clearElement();

    this.hikesView.renderHike(hike, this.parentElement, false, null, this.showHikeList.bind(this));
  }
}