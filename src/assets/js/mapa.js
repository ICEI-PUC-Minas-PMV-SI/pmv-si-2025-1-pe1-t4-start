const coresPorCategoria = {
    Creche: '#009951',      
    Baba: '#D732A8',     
    Advogado: '#007AFF',
    Psicólogo: '#BF6A02'   
  };
  
 
  function criarMarcadorCor(corHex) {
    return L.divIcon({
      className: "",
      html: `
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="45" viewBox="0 0 32 45">
          <path fill="${corHex}" stroke="#000" stroke-width="2"
                d="M16 0C7.2 0 0 7.2 0 16c0 11.2 16 29 16 29s16-17.8 16-29C32 7.2 24.8 0 16 0zM16 22c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>
        </svg>
      `,
      iconSize: [32, 45],
      iconAnchor: [16, 45],
      popupAnchor: [0, -45]
    });
  }
  
  
  const usuarios = [
    {
      nome: "Dr Lucas Silveira",
      lat: -19.92368338798214, 
      lon: -43.936048081856,
      categoria: "Advogado",
      foto: "assets/images/profissionais/Adv-JJ.png",
      descricao: "Especializado em advocacia do trabalho busco auxiliar mães com problemas referentes ao ambiente laboral que necessitem de apoio jurídico.",
      perfilUrl: "/"
    },
    {
      nome: "Lúcia Figueiredo",
      lat: -19.922625142919983, 
      lon: -43.99253063120594,
      categoria: "Baba",
      foto: "assets/images/profissionais/Babas-JA.png",
      descricao: "Especializada em cuidado infantil e atuante em centros infantis da região.",
      perfilUrl: "/"
    },
    {
      nome: "Creche Encanto",
      lat: -19.91631679989123,
      lon: -43.93468649349994,
      categoria: "Creche",
      foto: "assets/images/foto-creche.jpg",
      descricao: "Cuidamos com carinho e dedicação do seu bem mais precioso!",
      perfilUrl: "creches.html"
      
    },
    {
       nome: "Dr Pedro Paulo",
       lat: -19.97268462468003, 
       lon: -43.93759196461644,
       categoria: "Psicólogo",
       foto: "assets/images/profissionais/Psic-RA.png",
       descricao: "Especializado em terapias cognitivas e emocionais, focado no auxílio ao equilíbrio mental, superação de desafios emocionais e promoção do bem-estar psicológico.",
       perfilUrl: "/"
       
    }
    
  ];
  
  
  const map = L.map('map').setView([-19.912998, -43.940933], 12);
  
   
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  
  
  usuarios.forEach(usuario => {
    const cor = coresPorCategoria[usuario.categoria] || '#999';
    const icone = criarMarcadorCor(cor);
  
    const popupHTML = `
    <div class="popup-container">
      <img src="${usuario.foto}" alt="Foto de ${usuario.nome}" />
      <div>
        <strong>${usuario.nome}</strong><br/>
        <small>Categoria: <b>${usuario.categoria}</b></small><br/>
        <p>${usuario.descricao}</p>
        <a href="${usuario.perfilUrl}" target="_blank">Perfil Completo</a>
      </div>
    </div>
  `;
  
    L.marker([usuario.lat, usuario.lon], { icon: icone })
      .addTo(map)
      .bindPopup(popupHTML);
  });