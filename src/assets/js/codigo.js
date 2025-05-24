const form = document.getElementById('form-login');
const codigoInput = document.getElementById('codigo');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  if (codigoInput.value.length < 4) {
    alert('O código deve ter no mínimo 4 dígitos.');
  } else {
    window.location.href = 'nova-senha.html';
  }
});




