let notaSelecionada = 0;
let avaliacoes = JSON.parse(localStorage.getItem("avaliacoes") || "[]");

const estrelas = document.querySelectorAll(".estrelas .estrela");
const form = document.getElementById("form-avaliacao");
const listaAvaliacoes = document.getElementById("lista-avaliacoes");

function atualizarMedia() {
  if (avaliacoes.length === 0) return;

  const media =
    avaliacoes.reduce((acc, val) => acc + val.nota, 0) / avaliacoes.length;
  document.querySelector(".score").textContent = `${media.toFixed(1)} ★★★★★`;
}

function renderizarAvaliacoes(lista) {
  listaAvaliacoes.innerHTML = "<h4>Avaliações Recentes:</h4>";

  lista.forEach(av => {
    const div = document.createElement("div");
    div.classList.add("comentario");

    div.innerHTML = `
      <p><strong>${av.nome}</strong> ${"★".repeat(av.nota)}</p>
      <p class="texto-comentario">${av.comentario}</p>
      <span class="data">${av.data}</span>
    `;

    listaAvaliacoes.appendChild(div);
  });
}

function ordenarAvaliacoes(tipo) {
  let ordenadas = [...avaliacoes];

  if (tipo === "recentes") {
    ordenadas.sort((a, b) => new Date(b.dataISO) - new Date(a.dataISO));
  } else if (tipo === "melhores") {
    ordenadas.sort((a, b) => b.nota - a.nota);
  } else if (tipo === "piores") {
    ordenadas.sort((a, b) => a.nota - b.nota);
  }

  renderizarAvaliacoes(ordenadas);
}

estrelas.forEach(estrela => {
  estrela.addEventListener("click", () => {
    notaSelecionada = parseInt(estrela.dataset.valor);

    estrelas.forEach(e => {
      e.classList.remove("selecionada");
      if (parseInt(e.dataset.valor) <= notaSelecionada) {
        e.classList.add("selecionada");
      }
    });
  });
});

form.addEventListener("submit", e => {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const comentario = document.getElementById("comentario").value.trim();
  const dataISO = new Date().toISOString();
  const dataLocal = new Date().toLocaleString("pt-BR");

  if (!notaSelecionada || !nome || !comentario) {
    alert("Preencha todos os campos e selecione uma nota.");
    return;
  }

  const nova = { nome, comentario, nota: notaSelecionada, data: dataLocal, dataISO };
  avaliacoes.unshift(nova);
  localStorage.setItem("avaliacoes", JSON.stringify(avaliacoes));

  form.reset();
  notaSelecionada = 0;
  estrelas.forEach(e => e.classList.remove("selecionada"));

  atualizarMedia();
  ordenarAvaliacoes("recentes");
});


document.querySelector(".filtros-avaliacoes").addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    const texto = e.target.textContent.toLowerCase();
    if (texto.includes("recentes")) ordenarAvaliacoes("recentes");
    else if (texto.includes("melhores")) ordenarAvaliacoes("melhores");
    else if (texto.includes("piores")) ordenarAvaliacoes("piores");
    else ordenarAvaliacoes("recentes");
  }
});


atualizarMedia();
ordenarAvaliacoes("recentes");


const creche = {
  nome: "Creche Encanto",
  endereco: "R. Dom José Gaspar, 500 - Coração Eucarístico, Belo Horizonte - MG, 30535-901",
  coordenadas: {
    latitude: -19.92262009954285,
    longitude: -43.99172060391929
  }
};


function inicializarMapa() {
  const { latitude, longitude } = creche.coordenadas;

 
  const mapa = L.map('mapa-creche').setView([latitude, longitude], 16);

  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap',
  }).addTo(mapa);

  
  L.marker([latitude, longitude])
    .addTo(mapa)
    .bindPopup(`<strong>${creche.nome}</strong><br>${creche.endereco}`)
    .openPopup();
}


document.addEventListener("DOMContentLoaded", inicializarMapa);