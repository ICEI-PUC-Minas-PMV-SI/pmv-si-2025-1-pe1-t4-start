let profissionais = []; 
let profissionaisAtualmenteExibidos = []; 
let filtroAtivo = "Todos"; 
let termoPesquisaAtivo = ""; 

const containerListaProfissionais = document.getElementById("lista-profissionais");
const tituloCategoriaAtual = document.getElementById("titulo-categoria-atual");
const searchBar = document.querySelector(".barra"); 
const searchButton = document.querySelector(".botao-pesquisa"); 

// definição de coordenadas do usuário
const userLatitude = -20.1415; // Ex: Latitude de Divinópolis/MG
const userLongitude = -44.8872; // Ex: Longitude de Divinópolis/MG

function calcularDistancia(lat1, lon1, lat2, lon2) {
    const R = 6371; 
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distancia = R * c; 
    return distancia;
}

// carrega os dados do JSON de profissionais
fetch("assets/js/profissionais2.json") 
    .then((res) => {
        if (!res.ok) {
            throw new Error(`Erro HTTP! Status: ${res.status}`);
        }
        return res.json();
    })
    .then((data) => {
        console.log("Profissionais carregados:", data);
        profissionais = data; 
        filtrarEExibirProfissionais(); 
    })
    .catch((err) => console.error("Erro ao carregar JSON de profissionais:", err));

// exibe os profissionais na tela

function exibirProfissionais(lista) {
    containerListaProfissionais.innerHTML = ""; 

    if (lista.length === 0) {
        containerListaProfissionais.innerHTML = "<p>Nenhum profissional encontrado para os critérios selecionados.</p>";
        return;
    }

    lista.forEach((prof) => {
        const card = document.createElement("a");
        card.href = prof.perfilUrl;
        card.classList.add("card");

        
        const ratingDisplay = prof.rating !== null && prof.rating !== undefined ? `${prof.rating}⭐` : 'Sem avaliação';

        card.innerHTML = `
            <img src="${prof.foto}" alt="${prof.nome}" />
            <h3 class="nome-de-usuario">${prof.nome}</h3>
            <p class="nota">${ratingDisplay}</p>
            <p class="profissao">${prof.categoria}</p>
            <p class="endereco">${prof.endereco}</p>
        `;
        containerListaProfissionais.appendChild(card);
    });
}

// filtro e pesquisa

function filtrarEExibirProfissionais() {
    let listaFiltrada = [...profissionais]; 

    
    if (filtroAtivo && filtroAtivo !== "Todos") {
        listaFiltrada = listaFiltrada.filter((prof) => prof.categoria === filtroAtivo);
    }

    
    if (termoPesquisaAtivo) {
        const termo = termoPesquisaAtivo.toLowerCase();
        listaFiltrada = listaFiltrada.filter(
            (prof) =>
                prof.nome.toLowerCase().includes(termo) ||
                prof.categoria.toLowerCase().includes(termo) ||
                prof.endereco.toLowerCase().includes(termo) ||
                (prof.descricao && prof.descricao.toLowerCase().includes(termo)) 
        );
    }

    
    profissionaisAtualmenteExibidos = listaFiltrada;

    
    tituloCategoriaAtual.textContent = filtroAtivo === "Todos" ? "Todos os Profissionais" : filtroAtivo + "s";
    if (termoPesquisaAtivo) {
        tituloCategoriaAtual.textContent += ` (Resultados para "${termoPesquisaAtivo}")`;
    }

    
    exibirProfissionais(profissionaisAtualmenteExibidos);
}



document.querySelectorAll("#filtros-categoria button").forEach((btn) => {
    btn.addEventListener("click", () => {
        
        document.querySelectorAll("#filtros-categoria button").forEach(b => b.classList.remove('active'));
        
        btn.classList.add('active');

        filtroAtivo = btn.dataset.categoria;
        termoPesquisaAtivo = searchBar.value.trim(); 
        filtrarEExibirProfissionais();
    });
});


searchButton.addEventListener("click", () => {
    termoPesquisaAtivo = searchBar.value.trim();
    filtrarEExibirProfissionais();
});


searchBar.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        termoPesquisaAtivo = searchBar.value.trim();
        filtrarEExibirProfissionais();
    }
});


document.querySelector(".clear-btn").addEventListener("click", () => {
    searchBar.value = ''; 
    termoPesquisaAtivo = "";
    filtrarEExibirProfissionais();
});
searchBar.addEventListener("input", () => {
    if (searchBar.value.trim() === "") {
        termoPesquisaAtivo = "";
        filtrarEExibirProfissionais();
    }
});




document.getElementById("btn-mais-avaliados").addEventListener("click", () => {
    
    const ordenados = [...profissionaisAtualmenteExibidos].sort((a, b) => {
        const ratingA = a.rating !== null && a.rating !== undefined ? a.rating : -1; 
        const ratingB = b.rating !== null && b.rating !== undefined ? b.rating : -1;
        return ratingB - ratingA;
    });
    tituloCategoriaAtual.textContent = (filtroAtivo === "Todos" ? "Todos os Profissionais" : filtroAtivo + "s") + " (Mais Avaliados)";
    if (termoPesquisaAtivo) {
        tituloCategoriaAtual.textContent += ` (Resultados para "${termoPesquisaAtivo}")`;
    }
    exibirProfissionais(ordenados);
});

document.getElementById("btn-mais-proximos").addEventListener("click", () => {
    // ordena por proximidade, calculando a distância para cada profissional
    const ordenados = [...profissionaisAtualmenteExibidos].sort((a, b) => {
        
        if (a.lat === undefined || a.lon === undefined || b.lat === undefined || b.lon === undefined) {
            
            return 0;
        }
        const distA = calcularDistancia(userLatitude, userLongitude, a.lat, a.lon);
        const distB = calcularDistancia(userLatitude, userLongitude, b.lat, b.lon);
        return distA - distB; 
    });
    tituloCategoriaAtual.textContent = (filtroAtivo === "Todos" ? "Todos os Profissionais" : filtroAtivo + "s") + " (Mais Próximos)";
    if (termoPesquisaAtivo) {
        tituloCategoriaAtual.textContent += ` (Resultados para "${termoPesquisaAtivo}")`;
    }
    exibirProfissionais(ordenados);
});

document.getElementById("btn-limpar-ordenacao").addEventListener("click", () => {
    
    filtrarEExibirProfissionais();
});