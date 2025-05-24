
const especialidadeInput = document.getElementById('especialidade');
const registroInput = document.getElementById('registro');
const button = document.querySelector('.prof'); 
const options = {
  'Psicólogo': 'CRP:',
  'Advogado': 'OAB:'
};

especialidadeInput.addEventListener('input', () => {
  const especialidade = especialidadeInput.value;
  if (options[especialidade]) {
    registroInput.value = options[especialidade];
  }
});

button.addEventListener('click', (e) => {
  const especialidade = especialidadeInput.value;
  const registro = registroInput.value;

  if (especialidade === '' || registro === '') {
    e.preventDefault();
    alert('Por favor, preencha todos os campos!');
  } else if (!registro.match(/\d/)) {
    e.preventDefault();
    alert('O registro profissional deve conter números!');
  } else {
    e.preventDefault();
    window.location.href = 'forum.html';
  }
});
