function setCookies() {
  const firstname = document.getElementById('firstname').value;
  const email = document.getElementById('email').value;

  // Set cookies to expire in 10 days
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 10);

  document.cookie = `firstname=${firstname}; expires=${expirationDate.toUTCString()};`;
  document.cookie = `email=${email}; expires=${expirationDate.toUTCString()};`;
}

function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split('=');
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return '';
}

function showCookies() {
  const email = getCookie('email');
  const firstname = getCookie('firstname');
  const cookieContainer = document.getElementById('cookieContainer');
  cookieContainer.innerHTML = '';

  const p = document.createElement('p');
  p.innerHTML = `Email: ${email} - Firstname: ${firstname}`;
  cookieContainer.appendChild(p);
}
