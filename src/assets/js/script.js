const form = document.getElementById('form-login');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email === '' || senha === '') {
        alert('Preencha todos os campos!');
        return;
    }

    if (!email.includes('@')) {
        alert('E-mail inválido!');
        return;
    }

    if (senha.length < 8) {
        alert('A senha deve conter pelo menos 8 caracteres!');
        return;
    }

    if (email === '0000907077@senaimgaluno.com.br' && senha === '12345678') {
        window.location.href = 'forum.html';
    } else {
        alert('Essa conta não existe');
    }
});

