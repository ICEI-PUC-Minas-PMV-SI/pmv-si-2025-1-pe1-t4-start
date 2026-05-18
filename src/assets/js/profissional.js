const form = document.getElementById('form-login');
const campoEspecialidade = document.getElementById('especialidade');
const containerRegistro = document.getElementById('registroContainer');
const inputRegistro = document.getElementById('registro');
const telaSucesso = document.getElementById('tela-sucesso');

const dados = {
  psicologos: [
    { "email": "karine.ferraz@gmail.com" },
    { "email": "laiscarvalhoclinica@gmail.com" },
    { "email": "fernandacarvalho@gmail.com" },
    { "email": "luana.silva.psi@gmail.com" },
    { "email": "alicia.martins@gmail.com" },
    { "email": "bruno.silva@yahoo.com" },
    { "email": "isabela.mendes@outlook.com" },
    { "email": "joao.pereira@yahoo.com" },
    { "email": "karla.alves@terra.com.br" },
    { "email": "lucas.oliveira@gmail.com" },
    { "email": "mariana.rocha@hotmail.com" },
    { "email": "nicolas.teixeira@bol.com.br" },
    { "email": "tiago.nunes@gmail.com" },
    { "email": "patricia.monteiro@psiemail.com" },
    { "email": "andressa.souza@clinicapsi.com" },
    { "email": "vinicius.martins@psicocuidado.com" },
    { "email": "caroline.ramos@saudemental.com" },
    { "email": "0000907077@senaimgaluno.com.br" }
  ],
  advogados: [
    { "email": "ana.campos@direitobrasil.com" },
    { "email": "ricardo.torres@jurispro.com" },
    { "email": "fernando.lima@justmail.com" },
    { "email": "tatiane.sousa@defensoria.org" },
    { "email": "maria.gomes@advlegal.com" },
    { "email": "eduardo.silva@justonline.net" },
    { "email": "juliana.moura@advmail.org" },
    { "email": "bruno.castro@direitohoje.com" },
    { "email": "paula.ferraz@legalmente.com" },
    { "email": "vinicius.cardoso@juridiconet.com" },
    { "email": "lais.martins@direitoemail.com" },
    { "email": "marcos.alves@bradv.com" },
    { "email": "natalia.santos@advorg.com" },
    { "email": "camila.freitas@jusbrasil.org" },
    { "email": "lucas.ribeiro@advcenter.com" },
    { "email": "aline.pereira@escritoriolegal.com" },
    { "email": "gustavo.ferreira@legis.net" },
    { "email": "helena.dias@jurisweb.com" }
  ],
  babas: [
    { "email": "camila.souza@cuidadoinfantil.com" },
    { "email": "marcela.ramos@familiafeliz.net" },
    { "email": "juliana.mendes@babysafe.org" },
    { "email": "renata.lima@cuidadoras.com" },
    { "email": "lara.silva@babycare.com" },
    { "email": "tatiane.freitas@meubebe.net" },
    { "email": "roberta.pinto@casinha.com.br" },
    { "email": "vanessa.almeida@cuidadoras-kids.com" },
    { "email": "aline.costa@babysmile.org" },
    { "email": "sabrina.martins@bebeleve.com" }
  ],
  creches: [
    { "email": "creche.sorrisos@educabem.com" },
    { "email": "jardim.dosanjos@infantilbr.org" },
    { "email": "escolinha.solnascente@crecheemail.com" },
    { "email": "creche.bemmequer@cuidadoinfantil.com" },
    { "email": "creche.pequenospassos@educar.org" },
    { "email": "nossolar.infantil@abracokids.com" },
    { "email": "escolinha.arcoiris@infantnet.com" },
    { "email": "mundoencantado.creche@educamais.com" },
    { "email": "amorecarinho.creche@familiakids.com" },
    { "email": "creche.luzdavida@infantil.org" }
  ],
  maes: [
    { "email": "maria.souza@gmail.com" },
    { "email": "joana.pereira@gmail.com" },
    { "email": "ana.lima@gmail.com" },
    { "email": "patricia.silva@gmail.com" },
    { "email": "lucia.martins@gmail.com" },
    { "email": "renata.oliveira@gmail.com" },
    { "email": "fabiana.costa@gmail.com" },
    { "email": "carla.ferreira@gmail.com" },
    { "email": "helena.santos@gmail.com" },
    { "email": "paula.alves@gmail.com" }
  ]
};

campoEspecialidade.addEventListener('input', () => {
  const valor = campoEspecialidade.value;
  if (valor === 'Psicólogo' || valor === 'Advogado') {
    containerRegistro.style.display = 'flex';
    inputRegistro.setAttribute('required', 'true');
  } else {
    containerRegistro.style.display = 'none';
    inputRegistro.removeAttribute('required');
    inputRegistro.value = '';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();
  const cidade = document.getElementById('cidade').value.trim();
  const especialidade = campoEspecialidade.value.trim();
  const registro = inputRegistro.value.trim();
  const termos = document.getElementById('termos').checked;

  if (!name || !email || !senha || !cidade || !especialidade) {
    alert('Preencha todos os campos!');
    return;
  }

  if ((especialidade === 'Psicólogo' || especialidade === 'Advogado') && !registro) {
    alert('Preencha o seu registro profissional!');
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

  if (!termos) {
    alert('Você deve aceitar os termos de privacidade.');
    return;
  }

  const emailJaCadastrado = Object.entries(dados).some(([categoria, lista]) => {
    if (categoria === 'maes') return false;
    return lista.some(usuario => usuario.email.toLowerCase() === email.toLowerCase());
  });

  if (emailJaCadastrado) {
    alert('Este e-mail já está cadastrado.');
    return;
  }

  telaSucesso.style.display = 'flex';
});

const btnFecharSucesso = document.getElementById('btn-fechar-sucesso');
btnFecharSucesso.addEventListener('click', () => {
  telaSucesso.style.display = 'none';
  form.reset();
  window.location.href = 'index.html';
});