const URL_POSTS = 'https://gorest.co.in/public/v2/posts';
const URL_COMMENTS = 'https://gorest.co.in/public/v2/comments';

const container = document.querySelector('.container');
const params = new URL(document.location).searchParams;

async function getPosts(id, key) {
    container.innerHTML = '';
    await fetch(`${URL_POSTS}?${id}`)
        .then(response => response.json())
        .then(posts => {
          if (key === 'user_id') {
            if (!posts[0]) {
                const errorMessageBox = createMessageBox('У даного користувача відсутні пости');
                container.appendChild(errorMessageBox, 'success');
            }
          }
        
            posts.forEach(post => {

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

              container.appendChild(card);

            })
            const backButton = document.createElement('a');
            backButton.classList.add('backButton', 'btn', 'btn-primary');
            if (key === 'id') {
              backButton.href = `post.html?user_id=${posts[0].user_id}`;
              backButton.innerText = 'Назад';
              container.appendChild(backButton);
              comments(posts[0].id);
            }
            if (key === 'user_id') {
              backButton.href = 'index.html';
              backButton.innerText = 'Назад';
              container.appendChild(backButton);
            }
          })
}

if (params.get('id')) {
  getPosts(`id=${params.get('id')}`, 'id');
}

if (params.get('user_id')) {
  getPosts(`user_id=${params.get('user_id')}`, 'user_id');
}

async function comments(id) {
  await fetch(`${URL_COMMENTS}?post_id=${id}`)
    .then(response => response.json())
    .then(comments => {
      const title = document.createElement('h3');
      title.classList.add('title');
      title.innerText = 'Коментарі';
      container.appendChild(title);
      if (comments.length === 0) {
        const errorMessageBox = createMessageBox('Коментарі відсутні');
        container.appendChild(errorMessageBox, 'success');
      }
      comments.forEach(comment => {

        const card = document.createElement('div');
        card.classList.add('card');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.innerText = comment.name;

        const cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.innerText = comment.body;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);

        card.appendChild(cardBody);
        container.appendChild(card);
      });
    });
}

function createMessageBox(message, type = 'success') {
  const cl = `alert-${type}`;
  const errorMessageBox = document.createElement('div');
  errorMessageBox.classList.add('alert', cl);
  errorMessageBox.innerText = message;

  return errorMessageBox;
}