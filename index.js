const API_URL_USERS = 'https://gorest.co.in/public/v2/users';
const API_URL_POSTS = 'https://gorest.co.in/public/v2/posts';

const wrapper = document.querySelector('.wrapper');
const userContainer = document.getElementById('users-list');
const backButton = document.querySelector('.backButton');

let users = [];
let posts = [];

function createMessageBox(message, type = 'success') {
  const cl = `alert-${type}`;
  const errorMessageBox = document.createElement('div');
  errorMessageBox.classList.add('alert', cl);
  errorMessageBox.innerText = message;

  return errorMessageBox;
}

async function getUsers() {
  hideBackButton();
  userContainer.innerHTML = '';
  await fetch(API_URL_USERS)
    .then(response => {
      if (!response.ok) {
        throw new Error('Користувачі незнайдені');
      }
      return response.json()
    })
    .then(data => {
      users = data;
      data.forEach(user => {
        const li = document.createElement('li');
        li.classList.add('nav-item');

        const a = document.createElement('a');
        a.classList.add('nav-link');
        a.href = '#';
        a.innerText = user.name;

        li.appendChild(a);
        userContainer.appendChild(li);
      })
    })
    .catch(error => {
      const errorMessageBox = createMessageBox(error.message);
      userContainer.appendChild(errorMessageBox, 'error');
    })
}

getUsers();

userContainer.addEventListener('click', event => {
  event.preventDefault();

  backButton.style.display = 'block';

  const userName = event.target.innerText;
  const userID = users.find(user => user.name === userName).id;
  document.location.href = `post.html?user_id=${userID}`;
});

function hideBackButton() {
  backButton.style.display = 'none';
}

function showPosts(post) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const a = document.createElement('a');
  a.classList.add('nav-link');
  a.href = `post.html?id=${post.id}`;

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.innerText = post.title;

  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.innerText = post.body;

  cardBody.appendChild(a);
  a.appendChild(cardTitle);
  cardBody.appendChild(cardText);

  card.appendChild(cardBody);

  return card;
}

async function getPosts() {
  await fetch(API_URL_POSTS)
    .then(response => response.json())
    .then(data => {
      posts = data;
    });
}

getPosts();