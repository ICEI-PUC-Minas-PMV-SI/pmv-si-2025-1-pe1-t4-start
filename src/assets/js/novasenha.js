const form = document.getElementById('form-login');
const senhaInput = document.getElementById('nova-senha');
const confirmeInput = document.getElementById('confirme');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const senha = senhaInput.value;
  if (senha.length < 8) {
    alert('A senha deve ter no mínimo 8 caracteres!');
  } else if (senha !== confirmeInput.value) {
    alert('As senhas não coincidem!');
  } else {
    alert('Senha redefinida com sucesso!');
    window.location.href = 'index.html';
  }
});


