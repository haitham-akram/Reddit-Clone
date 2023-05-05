/* eslint-disable no-undef */
getPosts = () => {
  const header = createElement('h1', 'header', container);
  if (
    loggedUserData
    && loggedUserData.username === username
    && tokenCheck === 'token'
  ) {
    header.textContent = 'Your Posts';
  } else {
    header.textContent = `${username} Posts`;
  }
  const icon = createElement('i', 'ri-profile-fill', header);
  icon.style = 'margin-left: 10px; cursor: default;';
  getFetch(`/profile/posts/${username}`).then((res) => createCards(res.data));
};
getPosts();

const addForm = document.querySelector('.add-form');
addForm.addEventListener('submit', (btn) => {
  btn.preventDefault();
  const obj = new FormData(addForm);
  const data = Object.fromEntries(obj);
  const addTitleAlert = document.getElementById('addTitleAlert');
  const addContentAlert = document.getElementById('addContentAlert');
  const titleValidation = validation(data.title, addTitleAlert, 'Title');
  const contentValidation = validation(
    data.content,
    addContentAlert,
    'Content',
  );
  if (titleValidation && contentValidation) {
    sendFetch('/posts', data).then((res) => {
      if (res.error === false) {
        const newPost = createCard(res.data);
        if (mood) {
          newPost.classList.toggle('content-dark-mode');
        }
        addForm.reset();
        popup.classList.remove('active');
      } else {
        document.querySelector('.alert').textContent = res.data.message;
      }
    });
  }
});

const postButton = document.getElementById('post-button');
const commentButton = document.getElementById('comment-button');

postButton.addEventListener('click', () => {
  container.textContent = '';
  getPosts();
});
commentButton.addEventListener('click', () => {
  container.textContent = '';
  const header = createElement('h1', 'header', container);
  if (
    loggedUserData
    && loggedUserData.username === username
    && tokenCheck === 'token'
  ) {
    header.textContent = 'Your Comments';
  } else {
    header.textContent = `${username} Comments`;
  }
  const icon = createElement('i', 'ri-question-answer-line', header);
  icon.style = 'margin-left: 10px; cursor: default;';
  getFetch(`/profile/comments/${username}`).then((res) => {
    createCommentCard(res.data);
  });
});
