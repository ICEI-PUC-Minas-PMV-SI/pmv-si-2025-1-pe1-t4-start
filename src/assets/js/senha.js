
const form = document.getElementById('form-login');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;

    if (email === '') {
        alert('Preencha todos os campos!');
        return;
    }

    if (!email.includes('@')) {
        alert('E-mail inválido!');
        return;
    }

    window.location.href = 'nova-senha.html';
});

