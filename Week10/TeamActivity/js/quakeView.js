
// Quake View handler
export default class QuakeView {

  renderQuakeList(quakeList, listElement) {
    // build a list of the quakes...include the title and time of each quake
    // then append the list to listElement. You should also add the id of the
    // quake record as a data- property to the li. ie. <li data-id="">
    listElement.innerHTML = '';

    quakeList.features.forEach(quake => {
      const li = document.createElement('li');

      li.innerHTML = `
        <p><strong>${quake.properties.title}</strong></p>
        <p class="quake-time">${new Date(quake.properties.time)}</p>`;

      li.setAttribute('data-id', quake.id);

      listElement.append(li);
    });
  }

  renderQuake(quake, element) {
    const quakeProperties = Object.entries(quake.properties);

    // for the provided quake make a list of each of the properties associated with it.
    // Then append the list to the provided element. Notice the first line of this method.
    // Object.entries() is a slick way to turn an object into an array so that we
    // can iterate over it easier!

    element.innerHTML = '';

    quakeProperties.forEach(([ name, value ]) => {
      const li = document.createElement('li');
      const b = document.createElement('b');
      const span = document.createElement('span');

      b.innerText = `${name}: `;
      span.innerText = value;

      li.append(b);
      li.append(span);

      element.append(li);
    });
  }

}
