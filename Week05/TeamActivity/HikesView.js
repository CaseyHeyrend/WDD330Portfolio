// Hike View handler
export default class HikesView {

    constructor(listElement) {
      this.imgBasePath = '//byui-cit.github.io/cit261/examples/';
      this.listElement = listElement;
    }
  
    renderHikeList(hikeList, clickCallback = null) {
      hikeList.forEach(hike => {
          this.renderHike(hike, this.listElement, true, clickCallback);
      });
    }
  
    renderHike(hike, parentEl, light = false, clickCallback = null, backCallback = null) {
      const item = document.createElement('li');
      item.classList.add('hike');
  
      item.innerHTML = `<aside><h2>${hike.name}</h2></aside>
        <div class="body">
          <div class="image"><img src="${this.imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
          <div>
            <div>
                <h3>Distance</h3>
                <p>${hike.distance}</p>
            </div>
            <div>
                <h3>Difficulty</h3>
                <p>${hike.difficulty}</p>
            </div>`;
  
      if (light === false) {
        item.innerHTML += `
            <div>
                <h3>Directions</h3>
                <p>${hike.directions}</p>
            </div>
            <div>
                <h3>Description</h3>
                <p>${hike.description}</p>
            </div>
            <div>
                <h3>Long Description</h3>
                <p>${hike.longDescription}</p>
            </div>`;
      }
  
      item.innerHTML += `
          </div>
        </div>`;
  
      if (light === false && backCallback !== null) {
        const backButton = document.createElement('button');
  
        backButton.innerText = 'Back';
        backButton.addEventListener('click', backCallback);
  
        item.prepend(backButton);
      }
  
  
      if (clickCallback !== null) {
        item.addEventListener('click', () => clickCallback(hike));
        item.addEventListener('touchend', () => clickCallback(hike));
      }
  
      parentEl.append(item);
    }
  
  }