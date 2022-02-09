// Create a close button and append it to each list item
let mylist = document.getElementsByTagName('LI');
for (let i = 0; i < mylist.length; i++) {
  let div = document.createElement('DIV');
  let txt = document.createTextNode('X');
  div.className = 'close';
  div.appendChild(txt);
  mylist[i].appendChild(div);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName('close');
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = 'none';
  }
}

// click on li to cross out list item
let cross = document.getElementsByClassName('checked');

for (let i = 0; i < cross.length; i++) {
  cross[i].onclick = function () {
    let div = this.parentElement;
    div.style.textDecoration = 'line-through';
    // div.id = 'complete';
  }
}

// Toggles to a 'checked' class when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function (event) {
  if (event.target.tagName == 'LI') {
    event.target.classList.toggle('checked');
    event.target.id = 'complete';
  }
}, false);


// Create a new list item when clicking on the 'Add' button
function newItem() {
  let itemArray = document.getElementsByTagName('li');
  let li = document.createElement('LI');
  let inputValue = document.getElementById('myInput').value;
  //  itemArray.push(inputValue);
  console.log(itemArray);
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') { // if no text added display warning
    document.getElementById('warning').style.display = 'block';
  } else { // add to list li and remove warning
    document.getElementById('myUL').appendChild(li);
    document.getElementById('warning').style.display = 'none';
    // here may be good to save to local storage
    saveList(inputValue);

  }

  // clear the text field when done 
  document.getElementById('myInput').value = '';

  // create div for the x to clear the item from the list (append the text 'X') add to li above
  let div = document.createElement('DIV');
  let txt = document.createTextNode('X');
  div.className = 'close';
  div.appendChild(txt);
  li.appendChild(div);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.parentElement.removeChild(div);
      // div.style.display = 'none'; // hides versus removes
    }
  }
}
// if checked and crossed out will remove the item from the list
function tasksLeft() {
  let done = document.querySelectorAll('li');
  done.forEach((item) => {
    if (item.classList == 'checked') {
      console.log(item);
      item.parentElement.removeChild(item); // 
    }
  });
}

function showAll() {
  let savedList = JSON.parse(localStorage.getItem(myTodoList));
  savedList.forEach((item) => {
    item = document.getElementById('display').innerHTML;

  });
}

function showComplete() {
  let completed = localStorage.getItem(myTodoList);
  // let completedItems = completed.filter(i => i.id == 'complete');
  // console.log(completedItems);
}

// to display how many items are on the list (doesn't update unless new add)
function countToDo() {
  let count = document.querySelectorAll('li');
  let total = count.length;
  console.log(total); // shows in browser
  document.getElementById('count').innerHTML = 'You have ' + total + ' tasks left.';
}

// saving the data entered to retrieve later

// grab the text in a variable and save to local storage
// let list = {};
// let saveText = document.getElementsByTagName('li');
// let keys = Object.keys(saveText);
// let current = new Date();
// for (let i = 0; 1 < keys.length; i++){
//   list[keys[i]] = saveText[i];
// }
// saveText.forEach((item) => {localStorage.setItem(Object.keys(saveText[item]), saveText[item])});
//     console.log(list);

// }

const myTodoList = 'myList';

function saveList(todo) {
  if (!localStorage.getItem(myTodoList)) {
    let storage = [];
    storage.push(todo);
    localStorage.setItem(myTodoList, JSON.stringify(storage));
  } else {
    let storage = JSON.parse(localStorage.getItem(myTodoList));
    localStorage.setItem(myTodoList, JSON.stringify(storage));
    console.log(storage);
  }
}



// trying to add a checkbox 
// let box = document.createTextNode('u25a2');
// let check = document.createTextNode('✔');