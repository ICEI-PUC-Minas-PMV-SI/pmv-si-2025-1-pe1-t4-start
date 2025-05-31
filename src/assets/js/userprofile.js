// recupera os dados do localStorage para exibição
document.getElementById("name").innerText =
    localStorage.getItem("name") || "Nome não informado";
document.getElementById("bio").innerText =
    localStorage.getItem("bio") || "Bio não informada";
document.getElementById("birthdate").innerText =
    localStorage.getItem("birthdate") || "Data de nascimento não informada";
document.getElementById("children").innerText =
    localStorage.getItem("children") || "Número de filhos não informado";
document.getElementById("location").innerText =
    localStorage.getItem("location") || "Localização não informada";
document.getElementById("email").innerText =
    localStorage.getItem("email") || "Email não informado";

// exibe foto de perfil

var profilePic = localStorage.getItem("profilePic");
if (profilePic) {
    document.getElementById("profilePreview").src = profilePic;
} else {
    document.getElementById("profilePreview").src = "../assets/images/no-photo.jpg";
}

function previewProfilePicture(event) {
    const reader = new FileReader();
    reader.onload = function () {
        document.getElementById('profilePreview').src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}

// salva os dados do perfil 

function salvarPerfil(event) {
    event.preventDefault();

    const nome = document.getElementById('name').value;
    const bio = document.getElementById('bio').value;
    const dataNasc = document.getElementById('birthdate').value;
    const filhos = document.getElementById('children').value;
    const localizacao = document.getElementById('location').value;
    const email = document.getElementById('email').value;

    const profilePic = document.getElementById('profilePreview').src;
    const formattedDate = new Date(dataNasc).toLocaleDateString('pt-BR');

    localStorage.setItem('name', nome);
    localStorage.setItem('bio', bio);
    localStorage.setItem('birthdate', formattedDate);
    localStorage.setItem('children', filhos);
    localStorage.setItem('location', localizacao);
    localStorage.setItem('profilePic', profilePic);
    localStorage.setItem('email', email);
    window.location.href = "userprofile.html";
}
// botao para excluir perfil

function excluirPerfil() {
    const confirmacao = confirm("Tem certeza que deseja excluir seu perfil?");
    if (confirmacao) {
        localStorage.removeItem("name");
        localStorage.removeItem("bio");
        localStorage.removeItem("birthdate");
        localStorage.removeItem("children");
        localStorage.removeItem("location");
        localStorage.removeItem("profilePic");
        localStorage.removeItem("email");
        alert("Perfil excluído com sucesso.");
        window.location.href = "landing-page.html";
    } else {
        alert("Exclusão cancelada.");
    }
}
