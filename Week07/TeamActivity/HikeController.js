import HikeModel from './HikeModel.js';
import HikesView from './HikesView.js';
import CommentModel from './CommentModel.js';

// Hike controller
export default class HikesController {
  constructor(parentSelector) {
    this.parentElement = document.querySelector(parentSelector);

    // this is how our controller will know about the model and view...we add them right into the class as members.
    this.hikeModel = new HikeModel();
    this.hikesView = new HikesView(this.parentElement);
    this.commentModel = new CommentModel();
  }

  clearElement() {
    this.parentElement.innerHTML = '';
  }

  showHikeList() {
    this.clearElement();

    this.hikesView.renderHikeList(
      this.hikeModel.getAllHikes(),
      this.hikeCallback.bind(this),
      this.commentSubmitCallback.bind(this),
      this.commentModel.getAllComments(),
    );
  }

  showOneHike(hikeName, parentSelector = null) {
    const parentEl = parentSelector === null
      ? this.parentElement
      : document.querySelector(parentSelector);

    const hike = this.hikeModel.getHike(hikeName);
    const comments = this.commentModel.getCommentsByHike(hike.id);
    this.hikesView.renderHike(hike, comments, parentEl);
  }

  hikeCallback(hike) {
    this.clearElement();

    const comments = this.commentModel.getCommentsByHike(hike.id);

    this.hikesView.renderHike(
      hike,
      comments,
      this.parentElement,
      false,
      null,
      this.showHikeList.bind(this),
      this.commentSubmitCallback.bind(this),
    );
  }

  commentSubmitCallback(hike, comment) {
    this.commentModel.addComment(hike.id, comment);

    this.hikeCallback(hike);
  }
}

