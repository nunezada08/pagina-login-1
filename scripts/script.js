document.getElementById('login').addEventListener('click', function () {
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    // Recupera do localStorage
    const savedUser = localStorage.getItem('user');
    const savedPassword = localStorage.getItem('password');

    if (user === savedUser && password === savedPassword) {
        window.location.href = './pages/paginaInicial.html';
    } else {
        alert('User ou password is incorrect!');
    }
});