import Auth from './Auth.js';
import { makeRequest } from "./util.js";

/*
const loginBtn = document.querySelector('#login-btn');
loginBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  const token = await makeRequest('POST', 'http://localhost:3000/login', {
    password,
    email
  });
  
  console.log(token);
})
*/
const auth = new Auth();

const loginBtn = document.querySelector('#login-btn');
loginBtn.addEventListener('click', async (e) => {
  const result = await auth.login(async (token) => {
    console.log('logged in!');

    const postResponse = await makeRequest('GET', 'http://localhost:3000/posts', null, {
      Authorization: 'Bearer ' + token
    });
    console.log('postResponse', postResponse);

    const postsEl = document.querySelector('#posts');
    postResponse.forEach(post => {
      postsEl.innerHTML += `
        <ul>
          <strong>${post.title}</strong>
          <p>${post.content}</p>
        </ul>
      `;
    });
  });
});

const saveBtn = document.querySelector('#save-btn');
saveBtn.addEventListener('click', async (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const content = document.querySelector('#content').value;
  const body = {
    title,
    content
  };

  try {
    const postResponse = await makeRequest('POST', 'http://localhost:3000/posts', body, {
      Authorization: ''//'Bearer ' + auth.jwtToken
    });
  } catch(e) {
    console.log(JSON.stringify(e));
    const errorEl = document.querySelector('#errors');
    errorEl.innerHTML = `${e}`;
    errorEl.classList.remove('hidden');
  }

});