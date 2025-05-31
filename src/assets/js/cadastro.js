const jsonData = {
  "maes": [
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

const outrosCadastrados = {
  "psicologos": [
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
  "advogados": [
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
  "babas": [
    { "email": "camila.souza@cuidadoinfantil.com" },
    { "email": "marcela.ramos@familiafeliz.net" },
    { "email": "juliana.mendes@babysafe.org" },
    { "email": "renata.lima@cuidadoras.com" },
    { "email": "lara.silva@babycare.com" },
    { "email": "tatiane.freitas@meubebe.net" },
    { "email": "roberta.pinto@casinha.com.br" },
    { "email": "vanessa.almeida@cuidadorakids.com" },
    { "email": "aline.costa@babysmile.org" },
    { "email": "sabrina.martins@bebeleve.com" }
  ],
  "creches": [
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
  ]
};

const form = document.getElementById('form-login');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();
  const confirmaSenha = document.getElementById('confirmar').value.trim();
  const name = document.getElementById('nome').value.trim();

  if (email === '' || senha === '' || confirmaSenha === '' || name === '') {
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


  const emailExisteEmMaes = jsonData.maes.some(mae => mae.email === email);

  
  const emailExisteNosOutros = Object.values(outrosCadastrados).some(lista =>
    lista.some(pessoa => pessoa.email === email)
  );

  if (emailExisteEmMaes || emailExisteNosOutros) {
    alert('Este e-mail já está cadastrado.');
    return;
  }

 
  window.location.href = 'edit-userprofile.html';
});
