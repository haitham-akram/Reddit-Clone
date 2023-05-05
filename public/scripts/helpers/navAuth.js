/* eslint-disable no-undef */
const navAuth = document.getElementById('auth');
if (navAuth) {
  if (tokenCheck === 'token' && loggedUserData) {
    const username = createElement('a', 'username', navAuth);
    username.textContent = loggedUserData.username;
    username.href = `/user-profile/${loggedUserData.username}`;
    const logout = createElement('a', 'login', navAuth);
    logout.textContent = 'log Out';
    logout.addEventListener('click', () => {
      getFetch('/logOut').then((res) => {
        if (res.statusCode === 200) {
          localStorage.clear();
          window.location.href = '/';
        }
      });
    });
  } else {
    const login = createElement('a', 'login', navAuth);
    login.href = '/signIn';
    login.textContent = 'Log In';
    const signUp = createElement('a', 'signup', navAuth);
    signUp.href = '/signUp';
    signUp.textContent = 'Sign Up';
  }
}
