const form = document.getElementById('form-login');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const confirmaSenha = document.getElementById('confirmar').value;

  if (nome === '' || email === '' || senha === '' || confirmaSenha === '') {
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

  if (senha !== confirmaSenha) {
    alert('As senhas não coincidem!');
    return;
  }

  window.location.href = 'cadastroprof.html';
});



