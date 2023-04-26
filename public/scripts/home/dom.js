/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
let mood = false;
window.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('toggleDayOrNight')
    .addEventListener('click', (event) => {
      mood = !mood;
      document.querySelector('body').classList.toggle('body-dark-mode');
      const logo = document.querySelector('.reddit-name');
      if (
        logo.getAttribute('src').split('/')[4] === 'Reddit_name_OnWhite.png'
      ) {
        logo.src = '../../assets/images/Reddit-name.png';
      } else {
        logo.src = '../../assets/images/Reddit_name_OnWhite.png';
      }
      document.querySelector('.nav').classList.toggle('nav-dark-mode');
      document.querySelectorAll('.content').forEach((element) => {
        element.classList.toggle('content-dark-mode');
      });
      document
        .querySelector('.add-form')
        .classList.toggle('add-form-dark-mode');

      if (document.querySelector('body').className) {
        document.getElementById('toggleDayOrNight').classList = 'ri-sun-fill';
      } else {
        document.getElementById('toggleDayOrNight').classList = 'ri-contrast-2-fill';
      }
    });
});
const container = document.getElementById('container');
const closes = document.querySelector('.ri-close-line');
const popup = document.querySelector('.popup');
const addPost = document.querySelector('.create_btn');
const popup2 = document.querySelector('.popup2');
const closeEdit = document.getElementById('close');
const editForm = document.querySelector('.edit-form');

addPost.addEventListener('click', () => {
  popup.classList.add('active');
});

closes.addEventListener('click', () => {
  popup.classList.remove('active');
});
closeEdit.addEventListener('click', () => {
  popup2.classList.remove('active');
});
const createComment = (allComments, comment, countComment) => {
  const commentsContent = createElement('div', 'content-comments', allComments);
  const userInfoComment = createElement(
    'div',
    'user-info-comment',
    commentsContent,
  );
  const userImg = createElement('img', 'user-img', userInfoComment);
  userImg.src = '../../assets/images/reddit.png';
  const nameUser = createElement('a', 'username', userInfoComment);
  nameUser.href = `/user-profile/${comment.username}`;
  nameUser.textContent = comment.username;

  const createCommentTime = createElement(
    'span',
    'comment-create',
    userInfoComment,
  );
  createCommentTime.textContent = formatTime(comment.created_at);
  const commentTextContent = createElement(
    'p',
    'comment-text',
    commentsContent,
  );
  commentTextContent.textContent = comment.content;

  if (loggedUserData && loggedUserData.id === comment.user_id) {
    const deleteComment = createElement(
      'i',
      'ri-chat-delete-fill delete-comment-icon',
      commentsContent,
    );
    deleteComment.addEventListener('click', () => {
      deleteFetch(`/comment/${comment.id}`).then((deleted) => {
        if (deleted.error === false) {
          countComment.textContent = +countComment.textContent - 1;
          commentsContent.remove();
        }
      });
    });
    const editComment = createElement(
      'i',
      'ri-edit-box-fill edit-comment-icon',
      commentsContent,
    );

    editComment.addEventListener('click', () => {
      if (!document.querySelector('.edit-content')) {
        const editContent = createElement(
          'div',
          'edit-content',
          commentsContent,
        );
        const editCommentInput = createElement(
          'textarea',
          'edit-input',
          editContent,
        );
        editCommentInput.value = comment.content;
        const submitEdit = createElement(
          'i',
          'ri-chat-check-fill edit-comment-icon2',
          editContent,
        );
        const commentContentAlert2 = createElement(
          'div',
          'alert',
          commentsContent,
        );
        submitEdit.addEventListener('click', () => {
          if (validation(editCommentInput.value, commentContentAlert2, 'Content')) {
            editFetch(`/comment/${comment.id}`, {
              content: editCommentInput.value,
            }).then((res) => {
              if (res.error === false) {
                commentTextContent.textContent = res.data.content;
                createCommentTime.textContent = formatTime(res.data.created_at);
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
};

const showComments = (postDetails, data, commentsButton, countComment) => {
  const commentsContainer = createElement(
    'div',
    'comment-container',
    postDetails,
  );
  const allComments = createElement('div', 'all-comment', postDetails);
  if (tokenCheck === 'token' && loggedUserData) {
    const commentsText = createElement('textarea', '', commentsContainer);
    commentsText.setAttribute('name', 'comment');
    commentsText.setAttribute('placeholder', 'Enter Your Comment');
    commentIconDiv = createElement('div', 'mainCommentIcon', commentsContainer);
    commentSubmit = createElement('i', 'ri-chat-new-fill', commentIconDiv);
    const commentContentAlert = createElement('div', 'alert', postDetails);
    commentSubmit.addEventListener('click', () => {
      if (validation(commentsText.value, commentContentAlert, 'Content')) {
        sendFetch('/comment', {
          content: commentsText.value,
          post_id: data.id,
        }).then((commentData) => {
          countComment.textContent = +countComment.textContent + 1;
          createComment(allComments, commentData.data, countComment);
          commentsText.value = '';
        });
      }
    });
  }

  allComments.id = `commentsAll-${data.id}`;
  commentsButton.addEventListener('click', () => {
    if (allComments.textContent === '') {
      getFetch(`/post/${data.id}/comments`).then((result) => {
        allComments.textContent = '';
        result.data.forEach((comment) => {
          createComment(allComments, comment, countComment);
        });
      });
    } else {
      allComments.textContent = '';
    }
  });
};

const createCard = (element) => {
  const content = createElement('div', 'content', container);
  const userInfo = createElement('div', 'user-info', content);
  const title = createElement('h2', 'title', content);
  title.textContent = element.title;
  const userImg = createElement('img', 'user-img', userInfo);
  userImg.setAttribute('alt', 'username-img');
  userImg.setAttribute('src', '../../assets/images/reddit.png');
  const posted = createElement('p', 'p', userInfo);
  posted.textContent = 'Posted By';
  const username = createElement('a', 'username', userInfo);
  username.textContent = element.username;
  username.href = `/user-profile/${element.username}`;
  const createdAt = createElement('p', '', userInfo);
  createdAt.textContent = formatTime(element.created_at);
  const postContent = createElement('p', '', content);
  postContent.textContent = element.content;
  if (element.images) {
    const postImg = createElement('img', 'image', content);
    postImg.setAttribute('alt', 'post-img');
    postImg.setAttribute('src', element.images);
  }
  const buttons = createElement('div', 'buttons', content);
  if (loggedUserData && loggedUserData.id === element.user_id) {
    const userButton = createElement('div', 'votes', buttons);
    const editButton = createElement('i', 'ri-pencil-line', userButton);
    editButton.id = element.id;
    const handleEditFormSubmit = (btn) => {
      btn.preventDefault();
      const obj = new FormData(editForm);
      const data = Object.fromEntries(obj);
      const editTitleAlert = document.getElementById('editTitleAlert');
      const editContentAlert = document.getElementById('editContentAlert');
      const titleValidation = validation(data.title, editTitleAlert, 'Title');
      const contentValidation = validation(
        data.content,
        editContentAlert,
        'Content',
      );
      if (titleValidation && contentValidation) {
        editFetch(`/posts/${element.id}`, data).then((result) => {
          if (result.error === false) {
            content.remove();
            createCard(result.data);
            editForm.reset();
            popup2.classList.remove('active');
            editForm.removeEventListener('submit', handleEditFormSubmit);
          } else {
            document.querySelector('.alert').textContent = result.data.message;
          }
        });
      }
    };
    editButton.addEventListener('click', () => {
      getFetch(`/posts/${element.id}`).then((res) => {
        for (const [name, value] of Object.entries(res.data[0])) {
          const input = editForm.querySelector(`[name="${name}"]`);
          if (input) {
            input.value = value;
          }
        }
        popup2.classList.add('active');
        editForm.addEventListener('submit', handleEditFormSubmit);
      });
    });
    const deleteButton = createElement('i', 'ri-delete-bin-7-line', userButton);
    deleteButton.id = element.id;
    deleteButton.addEventListener('click', () => {
      deleteFetch(`/posts/${element.id}`).then((res) => {
        if (res.error === false) {
          content.remove();
        }
      });
    });
  }
  if (tokenCheck === 'token' && loggedUserData) {
    const votes = createElement('div', 'votes', buttons);
    const upVote = createElement('i', 'ri-arrow-up-circle-line', votes);
    const countVote = createElement('p', 'count-vote', votes);
    const downVote = createElement('i', 'ri-arrow-down-circle-line', votes);

    const count = element.upvotes - element.downvotes;
    countVote.textContent = count;

    upVote.addEventListener('click', () => {
      sendFetch(`/vote/${element.id}`, { vote_type: 'up' }).then((res) => {
        countVote.textContent = res.data.allVoteCount;
      });
    });
    downVote.addEventListener('click', () => {
      sendFetch(`/vote/${element.id}`, { vote_type: 'down' }).then((res) => {
        countVote.textContent = res.data.allVoteCount;
      });
    });
  }
  const comments = createElement('div', 'comments', buttons);
  const commentButton = createElement('i', 'ri-question-answer-line', comments);
  const countComment = createElement('p', 'count-comment', comments);
  countComment.textContent = element.comment_count;
  showComments(
    content,
    element,
    commentButton,
    countComment,
    +element.comment_count,
  );
  return content;
};

const createCards = (data) => {
  data.forEach((element) => {
    createCard(element);
  });
};

if (!loggedUserData && tokenCheck !== 'token') {
  document.getElementById('addDiv').style = 'display:none;';
}
