
const form = document.getElementById('form-login');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;

    if (email === '') {
        alert('Preencha o campo de e-mail!');
        return;
    }

    if (!email.includes('@')) {
        alert('E-mail inválido!');
        return;
    }

    alert('E-mail enviado com sucesso!');

    window.location.href = 'nova-senha.html';
});


