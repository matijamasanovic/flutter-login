class Post {
  post_id = '';
  post_content = '';
  user_id = '';
  likes = '';
  api_url = 'https://6740c325d0b59228b7f142ee.mockapi.io';

  async create(post_content) {
    let session = new Session();
    session_id = session.getSession();

    let data = {
      user_id: session_id,
      content: this.post_content,
      likes: 0,
    };

    data = JSON.stringify(data);

    let response = await fetch(this.api_url + '/posts', {
      method: 'POST',
      headers: {
        'Content-Tyoe': 'application/json',
      },
      body: data,
    });

    data = await response.json();
    return data;
  }
}
