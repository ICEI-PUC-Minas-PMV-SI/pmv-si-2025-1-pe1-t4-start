
const especialidadeInput = document.getElementById('especialidade');
const registroContainer = document.getElementById('registroContainer');
const registroInput = document.getElementById('registro');
const locInput = document.getElementById('loc');
const button = document.querySelector('.prof');

const options = {
  'Psicólogo': 'CRP:',
  'Advogado': 'OAB:',
  'Baba': null,
  'Creche': null
};

function toggleRegistroInput() {
  const especialidade = especialidadeInput.value;
  if (especialidade === 'Psicólogo' || especialidade === 'Advogado') {
    registroInput.value = options[especialidade] || '';
    registroInput.required = true;
    registroContainer.style.display = 'block'; 
  } else {
    registroInput.value = '';
    registroInput.required = false;
    registroContainer.style.display = 'none';  
  }
}

especialidadeInput.addEventListener('input', toggleRegistroInput);

button.addEventListener('click', (e) => {
  e.preventDefault();
  const especialidade = especialidadeInput.value;
  const registro = registroInput.value;
  const localizacao = locInput.value;

  if (especialidade === '') {
    alert('Por favor, selecione uma especialidade!');
    return;
  }

  if ((especialidade === 'Psicólogo' || especialidade === 'Advogado') && registro === '') {
    alert('Por favor, preencha o registro profissional!');
    return;
  }

  if ((especialidade === 'Psicólogo' || especialidade === 'Advogado') && !registro.match(/\d/)) {
    alert('O registro profissional deve conter números!');
    return;
  }

  if (localizacao === '') {
    alert('Por favor, preencha o campo de cidade!');
    return;
  }

  window.location.href = 'forum.html';
});

toggleRegistroInput();
