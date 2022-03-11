import { getLocation } from './utilities.js';

import Quake from './quakeModel.js';
import QuakeView from './quakeView.js';

// Quake controller
export default class QuakeController {

  constructor(parent, position = null) {
    this.parent = parent;

    // sometimes the DOM won't exist/be ready when the Class gets instantiated,
    // so we will set this later in the init()
    this.parentElement = null;

    // let's give ourselves the option of using a location other than
    // the current location by passing it in.
    this.position = position || {
      lat: 0,
      lon: 0
    };

    // this is how our controller will know about the model and view...
    // we add them right into the class as members.
    this.quake = new Quake();
    this.quakeView = new QuakeView();
  }

  async init() {
    // use this as a place to grab the element identified by this.parent,
    // do the initial call of this.initPos(), and display some quakes
    // by calling this.getQuakesByRadius()
    this.parentElement = document.querySelector(this.parent);

    await this.initPos();

    this.getQuakesByRadius(100);
  }

  async initPos() {
    // if a position has not been set
    if (this.position.lat === 0) {
      try {
        // try to get the position using getLocation()
        const currentLocation = await getLocation({});

        // if we get the location back then set the latitude and longitude into this.position
        this.position.lat = currentLocation.coords.latitude;
        this.position.lon = currentLocation.coords.longitude;

      } catch (error) {
        console.log(error);
      }
    }
  }

  async getQuakesByRadius(radius = 100) {
    // this method provides the glue between the model and view. Notice
    // it first goes out and requests the appropriate data from the model,
    // then it passes it to the view to be rendered. Set loading message
    this.parentElement.innerHTML = 'Loading...';

    // get the list of quakes in the specified radius of the location
    const quakeList = await this.quake.getEarthQuakesByRadius(this.position, radius);

    // render the list to html
    this.quakeView.renderQuakeList(quakeList, this.parentElement);

    // add a listener to the new list of quakes to allow drill down in to the details
    Array.from(this.parentElement.querySelectorAll('li')).forEach((li) => {
      li.addEventListener('click', async () => {
        this.getQuakeDetails(li.dataset.id);
      });
    });
  }

  async getQuakeDetails(quakeId) {
    // get the details for the quakeId provided from the model, then send them to the view to be displayed
    const quake = await this.quake.getQuakeById(quakeId);

    this.quakeView.renderQuake(quake, this.parentElement);

    // Make a button to go back to the list
    const back = document.createElement('button');
    back.innerText = 'Back to List';
    back.addEventListener('click', () => {
      this.getQuakesByRadius();
    });

    this.parentElement.prepend(back);
  }
}
