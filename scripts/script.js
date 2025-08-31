document.getElementById('login').addEventListener('click', function () {
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    if (user === 'Livia' && password === '0805') {
        window.location.href = './pages/paginaInicial.html';
    } else {
        alert('Usuário ou senha incorretos!');
    }
});