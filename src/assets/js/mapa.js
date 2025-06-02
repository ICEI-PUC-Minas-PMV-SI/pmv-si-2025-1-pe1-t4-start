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
  Psicologo: "fa-solid fa-brain",
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
      <foreignObject x="8" y="8" width="24" height="24"> <div xmlns="http://www.w3.org/1999/xhtml" class="marker-icon">
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
const usuarios = [
  {
    nome: "Dr Lucas Silveira",
    lat: -19.92368338798214,
    lon: -43.936048081856,
    categoria: "Advogado",
    foto: "assets/images/profissionais/Adv-JJ.png",
    descricao:
      "Especializado em advocacia do trabalho busco auxiliar mães com problemas referentes ao ambiente laboral que necessitem de apoio jurídico.",
    perfilUrl: "/",
  },
  {
    nome: "Lúcia Figueiredo",
    lat: -19.922625142919983,
    lon: -43.99253063120594,
    categoria: "Baba",
    foto: "assets/images/profissionais/Babas-JA.png",
    descricao:
      "Especializada em cuidado infantil e atuante em centros infantis da região.",
    perfilUrl: "/",
  },
  {
    nome: "Creche Encanto",
    lat: -19.91631679989123,
    lon: -43.93468649349994,
    categoria: "Creche",
    foto: "assets/images/foto-creche.jpg",
    descricao: "Cuidamos com carinho e dedicação do seu bem mais precioso!",
    perfilUrl: "creches.html",
  },
  {
    nome: "Dr Pedro Paulo",
    lat: -19.97268462468003,
    lon: -43.93759196461644,
    categoria: "Psicólogo",
    foto: "assets/images/profissionais/Psic-RA.png",
    descricao:
      "Especializado em terapias cognitivas e emocionais, focado no auxílio ao equilíbrio mental, superação de desafios emocionais e promoção do bem-estar psicológico.",
    perfilUrl: "/",
  },
];

const map = L.map("map").setView([-19.912998, -43.940933], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

usuarios.forEach((usuario) => {
  const categoriaNormalizada = normalizarCategoria(usuario.categoria);
  const cor = coresPorCategoria[usuario.categoria] || "#999";
  const iconeClasse = iconeClassePorCategoria[usuario.categoria] || "fa-solid fa-user";

  const icone = criarMarcadorCor(cor, iconeClasse, usuario.categoria);

  const marker = L.marker([usuario.lat, usuario.lon], { icon: icone }).addTo(map);

  marker.on("click", () => {
  const infoHTML = `
    <section class="profile-card">
            <div class="profile-header">
                <img src="${usuario.foto}" alt="Foto de ${usuario.nome}" class="profile - image">
    <div class="profile-details">
                    <div class="name-actions">
                        <h1>${usuario.nome}</h1>
                        <button class="favorite-btn"><i class="far fa-heart"></i></button>
                    </div>
                    <div class="rating-line">
                        <span class="stars">5.0 ★</span> <span class="reviews-count">(40 avaliações)</span>
                    </div>
                    <p class="profession">${usuario.categoria}</p>
                    <div class="tags">
                        <span class="tag">Libras</span>
                        <span class="tag">LGBTQIA+ Friendly</span>
                    </div>
                    <div class="social-icons">
                        <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                        <a href="#" aria-label="Website"><i class="fas fa-link"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    </div>
                </div >
            </div >
            <a href="${usuario.perfilUrl}" class="whatsapp-btn">
                <i class="fab fa-whatsapp"></i> Entrar em contato pelo WhatsApp
            </a>
            <div class="profile-description">
                <p>${usuario.descricao}</p>
            </div>
            <div class="profile-address">
                <p><strong>Endereço:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 50 - Lorem ipsum</p>
            </div>
        </section >

    <section class="reviews-section">
      <h2>Avaliações</h2>
      <div class="overall-rating">
        <div class="main-rating-score">
          <span class="score-value">5.0</span>
          <div class="stars big-stars">★★★★★</div> </div>
        <div class="rating-breakdown">
          <div class="rating-item">
            <span>atendimento</span>
            <div class="progress-bar-container">
              <div class="progress-bar" style="width: 100%;"></div>
            </div>
            <span>5.0</span>
          </div>
          <div class="rating-item">
            <span>acessibilidade</span>
            <div class="progress-bar-container">
              <div class="progress-bar" style="width: 100%;"></div>
            </div>
            <span>5.0</span>
          </div>
          <div class="rating-item">
            <span>instalações</span>
            <div class="progress-bar-container">
              <div class="progress-bar" style="width: 100%;"></div>
            </div>
            <span>5.0</span>
          </div>
          <div class="rating-item">
            <span>outros</span>
            <div class="progress-bar-container">
              <div class="progress-bar" style="width: 100%;"></div>
            </div>
            <span>5.0</span>
          </div>
        </div>
      </div>

      <div class="review-filters">
        <button class="filter-btn">Relevantes</button>
        <button class="filter-btn active"><i class="fas fa-check"></i> Recentes</button>
        <button class="filter-btn">Melhores Avaliações</button>
        <button class="filter-btn">Piores Avaliações</button>
      </div>

      <div class="review-card">
        <div class="review-author">
          <img src="https://via.placeholder.com/40" alt="Foto de Ana Maria" class="author-avatar">
            <span class="author-name">Ana Maria</span>
        </div>
        <div class="author-tags">
          <span class="tag">Carinhosa</span>
          <span class="tag">Respeitosa</span>
          <span class="tag">Paciente</span>
        </div>
        <div class="review-rating">
          <div class="stars">★★★★★</div> </div>
        <p class="review-date">21 de outubro de 2024 - 11h30</p>
        <p class="review-text">
          Deixo meu filho todos os dias na creche do bairro nas mãos da Lúcia. Meu filho adora ela e o apelido que ele deu a ele é de "titia lucinha". ela é uma ótima cuidadora!
        </p>
      </div>
    </section>
  `;

  const marker = L.marker([usuario.lat, usuario.lon], { icon: icone }).addTo(map);

  
    const sidebar = document.getElementById("sidebar");
    sidebar.innerHTML = infoHTML;
    sidebar.classList.add("active");
  });
  
});
