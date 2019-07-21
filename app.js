document.getElementById('username').addEventListener('keyup', validate);


function validate(e) {

  this.client_id = 'd4f7e8196857336731de';
  this.client_secret = '90b26a7fff7211179dc0fa6ff995b3759bd359ee';
  const message = document.getElementById('message');
  const username = document.getElementById('username');

  const re = /^[\w\-]+$/;

  if (username.value === '') {
    message.innerText = '';
    username.style.boxShadow = 'none';
    username.style.border = '1px solid #333';
  } else if (!re.test(username.value)) {
    setMessage('red', "Username may only contain alphanumeric characters");
  } else {
    fetch(`https://api.github.com/users/${username.value}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
      .then((res) => res.json())
      .then(
        function (data) {
          if (data.message === "Not Found")
            setMessage('green', 'Username is available');
          else
            setMessage('red', 'Username is Taken');
        }
      );
  }

}

function setMessage(color, message) {
  const messege = document.getElementById('message');
  const username = document.getElementById('username');
  messege.style.color = `${color}`;
  messege.innerText = `${message}`;
  username.style.boxShadow = `0.3rem 0.3rem 0.5rem ${color}`;
  username.style.border = `solid 2px ${color}`;

}