let todosOsUsuarios = [];  
let marcadoresAtuais = []; 

const coresPorCategoria = {
  Creche: "#009951",
  Baba: "#D732A8",
  Advogado: "#007AFF",
  Psicólogo: "#BF6A02",
};

const iconeClassePorCategoria = {
  Creche: "fa-solid fa-baby-carriage",
  Baba: "fa-solid fa-baby",
  Advogado: "fa-solid fa-scale-balanced",
  Psicólogo: "fa-solid fa-brain",
};

function normalizarCategoria(nome) {
  return nome.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function criarMarcadorCor(corHex, iconeClasse, categoria) {
  const classeCategoria = normalizarCategoria(categoria);
  return L.divIcon({
    className: `custom-marker ${classeCategoria}`,
    html: `
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="53" viewBox="0 0 32 45">
        <path fill="${corHex}" stroke="#000" stroke-width="2"
              d="M16 0C7.2 0 0 7.2 0 16c0 11.2 16 29 16 29s16-17.8 16-29C32 7.2 24.8 0 16 0z"/>
        <foreignObject x="8" y="8" width="24" height="24">
          <div xmlns="http://www.w3.org/1999/xhtml" class="marker-icon">
            <i class="${iconeClasse}"></i>
          </div>
        </foreignObject>
      </svg>
    `,
    iconSize: [38, 53],
    iconAnchor: [19, 53], 
    popupAnchor: [0, -53],
  });
}

function ordenarAvaliacoes(avaliacoes, criterio) {
  switch (criterio) {
    case "melhores":
      return [...avaliacoes].sort((a, b) => b.nota - a.nota);
    case "piores":
      return [...avaliacoes].sort((a, b) => a.nota - b.nota);
    case "recentes":
      return [...avaliacoes].sort((a, b) => new Date(b.data) - new Date(a.data));
    case "relevantes":
    default:
      return avaliacoes;
  }
}

let usuarios = [];
// ...

fetch("assets/js/profissionais.json")
  .then(response => response.json())
  .then(data => {
    todosOsUsuarios = data;
    atualizarMapaPorCategoria("todos");
  })
  .catch(error => {
    console.error("Erro ao carregar os usuários:", error);
  });

const map = L.map("map").setView([-19.912998, -43.940933], 12);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

todosOsUsuarios = usuarios;

function calcularMediaAvaliacoes(avaliacoes) {
  if (!avaliacoes || avaliacoes.length === 0) return 0;
  const soma = avaliacoes.reduce((acc, a) => acc + a.nota, 0);
  return soma / avaliacoes.length;}


function atualizarMapaPorCategoria(categoriaSelecionada) {
  marcadoresAtuais.forEach((marker) => map.removeLayer(marker));
  marcadoresAtuais = [];

  const usuariosFiltrados =
    categoriaSelecionada === "todos"
      ? todosOsUsuarios
      : todosOsUsuarios.filter((u) => u.categoria === categoriaSelecionada);

  usuariosFiltrados.forEach((usuario) => {
    const cor = coresPorCategoria[usuario.categoria] || "#999";
    const iconeClasse = iconeClassePorCategoria[usuario.categoria] || "fa-solid fa-user";
    const icone = criarMarcadorCor(cor, iconeClasse, usuario.categoria);

    const marker = L.marker([usuario.lat, usuario.lon], { icon: icone }).addTo(map);
    marcadoresAtuais.push(marker);

    marker.on("click", () => {
      let criterioAtual = "recentes";

      function renderizarAvaliacoes(criterio) {
        const avaliacoesOrdenadas = ordenarAvaliacoes(usuario.avaliacoes || [], criterio);
        if (!avaliacoesOrdenadas.length) {
          return `<p class="sem-avaliacoes">Nenhuma avaliação ainda.</p>`;
        }

        return avaliacoesOrdenadas.map((a) => {
          const estrelas = "★".repeat(a.nota) + "☆".repeat(5 - a.nota);
          const tagsHTML = a.tags.map(tag => `<span class="tag">${tag}</span>`).join("");
          return `
            <div class="review-card">
              <div class="review-author">
                
                <span class="author-name">${a.nome}</span>
              </div>
              <div class="author-tags">${tagsHTML}</div>
              <div class="review-rating"><div class="stars">${estrelas}</div></div>
              <p class="review-date">${new Date(a.data).toLocaleString('pt-BR')}</p>
              <p class="review-text">${a.texto}</p>
            </div>
          `;
        }).join("");
      }

      const media = calcularMediaAvaliacoes(usuario.avaliacoes);
const quantidade = (usuario.avaliacoes || []).length;
      const sidebar = document.getElementById("sidebar");
      sidebar.innerHTML = `
         <section class="profile-card">
    <div class="profile-header">
      <img src="${usuario.foto}" alt="${usuario.nome}" class="profile-image">
      <div class="profile-details">
        <h1>${usuario.nome}</h1>
        <p class="profession">${usuario.categoria}</p>
        <div class="rating-line">
          <span class="stars">${media.toFixed(1)} ★</span> 
          <span class="reviews-count">(${quantidade} ${quantidade === 1 ? 'avaliação' : 'avaliações'})</span>
        </div>
          
      </div>
    </div>
    
          </div>
          <div class="profile-description"><p>${usuario.descricao}</p></div>
           <div class="profile-buttons">

       <a href="${usuario.perfilUrl}" class="whatsapp-btn">
                <i class="fab fa-whatsapp"></i> Entrar em contato pelo WhatsApp
            </a>

          
           <div class="profile-endereco">
                <p><strong>Endereço:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 50 - Lorem ipsum</p>
            </div>

      </div>
        </section>

        <section class="reviews-section">
          <h2>Avaliações</h2>
          <div class="review-filters">
            <button class="filter-btn" data-criterio="relevantes">Relevantes</button>
            <button class="filter-btn active" data-criterio="recentes">Recentes</button>
            <button class="filter-btn" data-criterio="melhores">Melhores</button>
            <button class="filter-btn" data-criterio="piores">Piores</button>
          </div>
          <div id="avaliacoes-container">${renderizarAvaliacoes(criterioAtual)}</div>
        </section>
      `;

      sidebar.classList.add("active");

      sidebar.querySelectorAll(".filter-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          criterioAtual = btn.dataset.criterio;
          sidebar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          document.getElementById("avaliacoes-container").innerHTML = renderizarAvaliacoes(criterioAtual);
        });
      });
    });
  });
}

document.querySelectorAll("#filtros-categorias button").forEach((botao) => {
  botao.addEventListener("click", () => {
    const categoria = botao.getAttribute("data-categoria");
    atualizarMapaPorCategoria(categoria);
  });
});

atualizarMapaPorCategoria("todos");