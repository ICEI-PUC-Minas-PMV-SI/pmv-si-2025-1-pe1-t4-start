
const jsonData = {
  "maes": [
    {
      "email": "maria.souza@gmail.com",
      "nome": "Maria Souza",
      "senha": "Mae12345",
      "confirmarSenha": "Mae12345"
    },
    {
      "email": "joana.pereira@gmail.com",
      "nome": "Joana Pereira",
      "senha": "MaeJoana2023",
      "confirmarSenha": "MaeJoana2023"
    },
    {
      "email": "ana.lima@gmail.com",
      "nome": "Ana Lima",
      "senha": "AnaMae!789",
      "confirmarSenha": "AnaMae!789"
    },
    {
      "email": "patricia.silva@gmail.com",
      "nome": "Patricia Silva",
      "senha": "PatriciaMae",
      "confirmarSenha": "PatriciaMae"
    },
    {
      "email": "lucia.martins@gmail.com",
      "nome": "Lucia Martins",
      "senha": "LuciaMae2024",
      "confirmarSenha": "LuciaMae2024"
    },
    {
      "email": "renata.oliveira@gmail.com",
      "nome": "Renata Oliveira",
      "senha": "ReOliveira#1",
      "confirmarSenha": "ReOliveira#1"
    },
    {
      "email": "fabiana.costa@gmail.com",
      "nome": "Fabiana Costa",
      "senha": "FabianaMae!",
      "confirmarSenha": "FabianaMae!"
    },
    {
      "email": "carla.ferreira@gmail.com",
      "nome": "Carla Ferreira",
      "senha": "CarlaMae2023",
      "confirmarSenha": "CarlaMae2023"
    },
    {
      "email": "helena.santos@gmail.com",
      "nome": "Helena Santos",
      "senha": "HelenaMae!",
      "confirmarSenha": "HelenaMae!"
    },
    {
      "email": "paula.alves@gmail.com",
      "nome": "Paula Alves",
      "senha": "PaulaMae#9",
      "confirmarSenha": "PaulaMae#9"
    }
  ]
}

const form = document.getElementById('form-login');

function verificarCredenciais(email, senha) {
  for (const key in jsonData) {
    if (jsonData.hasOwnProperty(key)) {
      const lista = jsonData[key];
      for (const usuario of lista) {
        if (usuario.email === email && usuario.senha === senha) {
          return true;
        }
      }
    }
  }
  return false;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const confirmaSenha = document.getElementById('confirmar').value;
  const name = document.getElementById('nome').value;

  if (email === '' || senha === '' || confirmaSenha === ''|| name === '' ) {
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
    window.location.href = 'edit-userprofile.html';

});
