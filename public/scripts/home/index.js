/* eslint-disable no-undef */
getFetch('/posts').then((res) => createCards(res.data));
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
