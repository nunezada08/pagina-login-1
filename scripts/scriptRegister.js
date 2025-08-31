document.getElementById('register').addEventListener('click', function () {
    const user = document.getElementById('userRegister').value;
    const password = document.getElementById('passwordRegister').value;

    // Salva no localStorage
    localStorage.setItem('user', user);
    localStorage.setItem('password', password);

    window.location.href = '../index.html';
});