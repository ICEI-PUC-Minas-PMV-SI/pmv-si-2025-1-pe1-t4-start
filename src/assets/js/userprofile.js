// recupera os dados do localStorage para exibição
document.getElementById("name").innerText = localStorage.getItem("name") || "Nome não informado";
document.getElementById("bio").innerText = localStorage.getItem("bio") || "Bio não informada";
document.getElementById("birthdate").innerText =
    localStorage.getItem("birthdate") || "Data de nascimento não informada";
document.getElementById("children").innerText =
    localStorage.getItem("children") || "Número de filhos não informado";
document.getElementById("location").innerText = localStorage.getItem("location") || "Localização não informada";

// exibe foto de perfil

var profilePic = localStorage.getItem("profilePic");
if (profilePic) {
    document.getElementById("profilePreview").src = profilePic;
} else {
    document.getElementById("profilePreview").src = "../assets/images/no-photo.jpg";
}
