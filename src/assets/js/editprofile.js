const userEmail = "renata.oliveira@gmail.com";

// carrega dados existentes
fetch("./assets/js/usermaes.json")
    .then(response => response.json())
    .then(data => {
        const user = data.maes.find(mae => mae.email === userEmail);
        const dadosSalvos = JSON.parse(localStorage.getItem(userEmail));
        const userData = dadosSalvos || user;

        if (userData) {
            document.getElementById('name').value = userData.name;
            document.getElementById('bio').value = userData.bio;
            document.getElementById('birthdate').value = userData.birthdate;
            document.getElementById('children').value = userData.children;
            document.getElementById('location').value = userData.location;
            document.getElementById('email').value = userData.email;
            document.getElementById('profilePreview').src = userData.image || "./assets/images/no-photo.jpg";
        }
    });

// preview imagem
function previewProfilePicture(event) {
    const reader = new FileReader();
    reader.onload = function () {
        document.getElementById('profilePreview').src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}

// salvar perfil
function salvarPerfil(event) {
    event.preventDefault();

    const dadosAtualizados = {
        name: document.getElementById('name').value,
        bio: document.getElementById('bio').value,
        birthdate: document.getElementById('birthdate').value,
        children: document.getElementById('children').value,
        location: document.getElementById('location').value,
        email: document.getElementById('email').value,
        image: document.getElementById('profilePreview').src
    };

    localStorage.setItem(userEmail, JSON.stringify(dadosAtualizados));
    alert("Perfil atualizado com sucesso!");
    window.location.href = "userprofile.html";
}

// excluir perfil
function excluirPerfil() {
    const confirmacao = confirm("Tem certeza que deseja excluir seu perfil?");
    if (confirmacao) {
        localStorage.removeItem(userEmail);
        alert("Perfil excluído com sucesso.");
        window.location.href = "landing-page.html";
    } else {
        alert("Exclusão cancelada.");
    }
}
