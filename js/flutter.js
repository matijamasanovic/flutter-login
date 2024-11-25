let session = new Session();
session_id = session.getSession();

if (session_id !== '') {
  async function populateUserData() {
    let user = new User();
    user = await user.get(session_id);

    document.querySelector('#username').innerText = user['username'];
    document.querySelector('#email').innerText = user['email'];

    document.querySelector('#korisnicko_ime').value = user['username'];
    document.querySelector('#edit_email').value = user['email'];
  }

  populateUserData();
} else {
  window.location.href = '/';
}

document.querySelector('#logout').addEventListener('click', (e) => {
  e.preventDefault();

  session.destroySession();
  window.location.href = '/';
});

document.querySelector('#edit-account').addEventListener('click', function () {
  document.querySelector('.register-popup').style.display = 'block';
});

document.querySelector('#close-modal').addEventListener('click', function () {
  document.querySelector('.register-popup').style.display = 'none';
});

document.querySelector('#editForm').addEventListener('submit', function () {
  e.preventDefault();

  let user = new User();
  user.username = document.querySelector('#korisnicko_ime').value;
  user.email = document.querySelector('#edit_email').value;
  user.edit();
});

document.querySelector('#deleteProfile').addEventListener('click', (e) => {
  e.preventDefault();

  let text = 'Are you sure you want to delete profile';

  if (confirm(text) === true) {
    let user = new User(session_id);
    user.delete();
  }
});

document.querySelector('#postForm').addEventListener('submit', (e) => {
  e.preventDefault();

  async function createPost() {
    let content = document.querySelector('#postContent').value;

    let post = new Post();
    post.post_fcontent = content;
    post = await post.create();

    console.log(post);
  }
  createPost();
});
