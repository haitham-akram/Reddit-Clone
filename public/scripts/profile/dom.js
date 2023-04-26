/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const username = window.location.href.split('/')[4];
if (!loggedUserData && tokenCheck !== 'token') {
  document.getElementById('addDiv').style.display = 'none';
}
if (
  loggedUserData
  && loggedUserData.username !== username
  && tokenCheck === 'token'
) {
  document.getElementById('addDiv').style.display = 'none';
}

const usernamePlace = document.getElementById('username-place');
const emailPlace = document.getElementById('email-place');
const cakePlace = document.getElementById('cake-place');
getFetch(`/profile/${username}`).then((res) => {
  usernamePlace.textContent = res.data.username;
  emailPlace.textContent = res.data.email;
  cakePlace.textContent = `Created ${formatTime(res.data.created_at)}`;
});

const createCommentCard = (data) => {
  data.forEach((element) => {
    const content = createElement('div', 'content', container);
    const userInfo = createElement('div', 'user-info', content);
    const title = createElement('h2', 'title', content);
    title.textContent = element.title;
    const userImg = createElement('img', 'user-img', userInfo);
    userImg.setAttribute('alt', 'username-img');
    userImg.setAttribute('src', '../../assets/images/reddit.png');
    const posted = createElement('p', 'p', userInfo);
    posted.textContent = 'Commented By';
    const userName = createElement('a', 'username', userInfo);
    userName.textContent = element.username;
    userName.href = `/user-profile/${element.username}`;
    const createdAt = createElement('p', '', userInfo);
    createdAt.textContent = formatTime(element.created_at);
    const commentContent = createElement('h4', '', content);
    commentContent.textContent = element.content;
    if (
      loggedUserData
      && loggedUserData.username === username
      && tokenCheck === 'token'
    ) {
      const buttons = createElement('div', 'buttons buttons2', content);
      const deleteComment = createElement('i', 'ri-chat-delete-fill', buttons);
      deleteComment.addEventListener('click', () => {
        deleteFetch(`/comment/${element.id}`).then((deleted) => {
          if (deleted.error === false) {
            content.remove();
          }
        });
      });

      const editComment = createElement('i', 'ri-edit-box-fill', buttons);
      editComment.addEventListener('click', () => {
        if (!document.querySelector('.edit-content')) {
          const editContent = createElement('div', 'edit-content', content);
          const editCommentInput = createElement(
            'textarea',
            'edit-input',
            editContent,
          );
          editCommentInput.value = element.content;
          const submitEdit = createElement(
            'i',
            'ri-chat-check-fill edit-comment-icon2',
            editContent,
          );
          const commentContentAlert3 = createElement('div', 'alert', content);
          submitEdit.addEventListener('click', () => {
            if (
              validation(
                editCommentInput.value,
                commentContentAlert3,
                'Content',
              )
            ) {
              editFetch(`/comment/${element.id}`, {
                content: editCommentInput.value,
              }).then((res) => {
                if (res.error === false) {
                  commentContent.textContent = res.data.content;
                  createdAt.textContent = formatTime(res.data.created_at);
                  editContent.remove();
                }
              });
            }
          });
        } else {
          document.querySelector('.edit-content').remove();
        }
      });
    }
  });
};
