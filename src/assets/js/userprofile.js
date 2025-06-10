const userEmail = "renata.oliveira@gmail.com";

// carrega dados do JSON e localStorage
function carregarDadosDoJson() {
    fetch("./assets/js/usermaes.json")
        .then(response => response.json())
        .then(data => {
            const user = data.maes.find(mae => mae.email === userEmail);
            const dadosSalvos = verificarLocalStorage(userEmail);
            const userData = dadosSalvos || user;

            if (userData) {
                preencherDados(userData);
            } else {
                console.error("Usuário não encontrado.");
            }
        })
        .catch(error => console.error("Erro ao carregar dados:", error));
}

// verifica localStorage
function verificarLocalStorage(email) {
    return JSON.parse(localStorage.getItem(email));
}

// preenche dados na tela
function preencherDados(user) {
    document.getElementById("name").innerText = user.name;
    document.getElementById("bio").innerText = user.bio;
    document.getElementById("birthdate").innerText = new Date(user.birthdate).toLocaleDateString('pt-BR');
    document.getElementById("children").innerText = user.children;
    document.getElementById("location").innerText = user.location;
    document.getElementById("email").innerText = user.email;
    document.getElementById("profilePreview").src = user.image || "./assets/images/no-photo.jpg";
}

// excluir perfil
function excluirPerfil() {
  const confirmacao = confirm("Tem certeza que deseja excluir seu perfil?");
  if (confirmacao) {
    localStorage.removeItem("email");
    localStorage.removeItem("nome");
    localStorage.removeItem("bio");
    localStorage.removeItem("foto");
    localStorage.removeItem("localizacao");
    localStorage.removeItem("userLogado");

    alert("Perfil excluído com sucesso.");
    window.location.href = "landing-page.html";
  } else {
    alert("Exclusão cancelada.");
  }
}

carregarDadosDoJson();
