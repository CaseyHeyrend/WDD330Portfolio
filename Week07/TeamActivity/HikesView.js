// Hike View handler
export default class HikesView {

  constructor(listElement) {
    this.imgBasePath = '//byui-cit.github.io/cit261/examples/';
    this.listElement = listElement;
  }

  renderHikeList(hikeList, clickCallback = null, commentSubmitCallback = null, comments = []) {
    hikeList.forEach(hike => {
        const hikeComments = comments.filter(comment => comment.hikeId === hike.id);
        this.renderHike(hike, hikeComments, this.listElement, true, clickCallback, null, commentSubmitCallback);
    });
  }

  renderHike(
    hike,
    comments,
    parentEl,
    light = false,
    clickCallback = null,
    backCallback = null,
    commentSubmitCallback = null
  ) {
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
        <div>
          <h3>Comments</h3>
        </div>
      `;

    if (light === false) {
      // Eww
      setTimeout(() => {
        const submitCommentButton = document.querySelector('.submit-comment');

        submitCommentButton.addEventListener('click', (event) => {
          event.preventDefault();

          const newComment = document.querySelector('#comment');

          if (commentSubmitCallback) {
            commentSubmitCallback(hike, newComment.value);
          }
        });
      }, 250);

      item.innerHTML += `
        <form style="margin-bottom: 2em; display: flex; flex-direction: column; gap: 1em; align-items: center;">
          <label style="width: 100%;" for="comment">Comment</label>
          <textarea style="width: 100%; height: 50px;" id="comment"></textarea>
          <button class="submit-comment" style="max-width: 200px;">Submit Comment</button>
        </form>
      `;
    }

    // Add the comments box
    item.innerHTML += this.renderComments(comments);

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

  renderComments(comments){
    const commentsDiv= document.createElement('div');

    commentsDiv.classList.add ('hike-comments');

    comments.forEach(comment => {
      const commentDiv = document.createElement('div');

      commentDiv.classList.add('hike-comment');
      commentDiv.innerHTML = `<strong> ${comment.date.toLocaleDateString()}</strong> <br /> ${comment.content}`;

      commentsDiv.append(commentDiv);
    });

    return commentsDiv.outerHTML;
  }

}
