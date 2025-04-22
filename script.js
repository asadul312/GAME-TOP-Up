function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('loginMessage');

    if (username === 'admin' && password === 'password123') {
        message.textContent = 'Login successful!';
        document.getElementById('logoutBtn').style.display = 'inline-block';
    } else {
        message.textContent = 'Invalid credentials. Try again.';
    }
}

function logout() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('loginMessage').textContent = '';
    document.getElementById('logoutBtn').style.display = 'none';
}
