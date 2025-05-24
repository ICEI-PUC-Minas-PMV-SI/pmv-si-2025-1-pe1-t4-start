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
  } else {
    registroInput.value = ''; 
  }
});

button.addEventListener('click', (e) => {
  e.preventDefault();
  const especialidade = especialidadeInput.value;
  const registro = registroInput.value;

  if (especialidade === '' || registro === '') {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  if (!options[especialidade]) {
    alert('Por favor, selecione uma especialidade válida (Psicólogo ou Advogado).');
    return;
  }

  if (!registro.match(/\d/)) {
    alert('O registro profissional deve conter números!');
    return;
  }

  window.location.href = 'forum.html';
});
