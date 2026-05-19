let profissionais = []; 
let profissionaisAtualmenteExibidos = []; 
let filtroAtivo = "Todos"; 
let termoPesquisaAtivo = ""; 

const containerListaProfissionais = document.getElementById("lista-profissionais");
const tituloCategoriaAtual = document.getElementById("titulo-categoria-atual");
const searchBar = document.querySelector(".barra"); 
const searchButton = document.querySelector(".botao-pesquisa"); 

const userLatitude = -20.1415; 
const userLongitude = -44.8872; 

function calcularDistancia(lat1, lon1, lat2, lon2) {
    const R = 6371; 
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

fetch("assets/js/profissionais2.json") 
    .then((res) => {
        if (!res.ok) throw new Error(`Erro HTTP! Status: ${res.status}`);
        return res.json();
    })
    .then((data) => {
        profissionais = data; 
        filtrarEExibirProfissionais(); 
    })
    .catch((err) => console.error("Erro ao carregar JSON de profissionais:", err));

function exibirProfissionais(lista) {
    containerListaProfissionais.innerHTML = ""; 

    if (lista.length === 0) {
        containerListaProfissionais.innerHTML = "<p style='text-align:center; width:100%; color:#666;'>Nenhum profissional encontrado.</p>";
        return;
    }

    const tamanhoLinha = 3;
    for (let i = 0; i < lista.length; i += tamanhoLinha) {
        const subLista = lista.slice(i, i + tamanhoLinha);
        const linhaWrapper = document.createElement("div");
        linhaWrapper.classList.add("carrossel-linha-wrapper");
        const idLinha = `linha-${i}`;

        linhaWrapper.innerHTML = `
            <button class="seta-carrossel seta-esquerda" data-target="${idLinha}"><i class="fa-solid fa-chevron-left"></i></button>
            <div class="linha-scroll-container" id="${idLinha}">
                ${subLista.map(prof => {
                    const nota = prof.rating !== null && prof.rating !== undefined ? prof.rating.toFixed(1) : '5.0';
                    const total = prof.totalAvaliacoes !== undefined ? prof.totalAvaliacoes : 25;
                    return `
                        <a href="perfil.html?id=${prof.id}" class="card">
                            <img src="${prof.foto || prof.imagem}" alt="${prof.nome}" />
                            <div class="card-info">
                                <div class="nome-verificado">
                                    <h3>${prof.nome}</h3>
                                    <i class="fa-solid fa-circle-check checked-icon"></i>
                                </div>
                                <div class="avaliacao">
                                    <span>${nota}</span>
                                    <i class="fa-solid fa-star star-icon"></i>
                                    <span class="total-avaliacoes">(${total})</span>
                                </div>
                                <p class="profissao-label">${prof.categoria}</p>
                                <p class="endereco-label">${prof.endereco}</p>
                            </div>
                        </a>
                    `;
                }).join('')}
            </div>
            <button class="seta-carrossel seta-direita" data-target="${idLinha}"><i class="fa-solid fa-chevron-right"></i></button>
        `;
        containerListaProfissionais.appendChild(linhaWrapper);
    }

    document.querySelectorAll(".seta-carrossel").forEach(seta => {
        seta.addEventListener("click", (e) => {
            const botao = e.currentTarget;
            const targetId = botao.dataset.target;
            const containerScroll = document.getElementById(targetId);
            const direcao = botao.classList.contains("seta-direita") ? 240 : -240;
            containerScroll.scrollBy({ left: direcao, behavior: 'smooth' });
        });
    });
}

function filtrarEExibirProfissionais() {
    let listaFiltrada = [...profissionais];

    if (filtroAtivo && filtroAtivo !== "Todos") {
        listaFiltrada = listaFiltrada.filter((prof) => prof.categoria === filtroAtivo);
    }

    if (termoPesquisaAtivo) {
        const termo = termoPesquisaAtivo.toLowerCase();
        listaFiltrada = listaFiltrada.filter(
            (prof) =>
                (typeof prof.nome === 'string' && prof.nome.toLowerCase().includes(termo)) ||
                (typeof prof.categoria === 'string' && prof.categoria.toLowerCase().includes(termo)) ||
                (typeof prof.endereco === 'string' && prof.endereco.toLowerCase().includes(termo))
        );
    }

    profissionaisAtualmenteExibidos = listaFiltrada;
    tituloCategoriaAtual.textContent = filtroAtivo === "Todos" ? "Todos os profissionais" : filtroAtivo + "s";
    exibirProfissionais(profissionaisAtualmenteExibidos);
}

document.querySelectorAll("#filtros-categoria button").forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelectorAll("#filtros-categoria button").forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filtroAtivo = btn.dataset.categoria;
        filtrarEExibirProfissionais();
    });
});

searchButton.addEventListener("click", () => {
    termoPesquisaAtivo = searchBar.value.trim();
    filtrarEExibirProfissionais();
});

searchBar.addEventListener("input", () => {
    termoPesquisaAtivo = searchBar.value.trim(); 
    filtrarEExibirProfissionais(); 
});

document.getElementById("btn-mais-avaliados").addEventListener("click", () => {
    profissionaisAtualmenteExibidos.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    exibirProfissionais(profissionaisAtualmenteExibidos);
});

document.getElementById("btn-mais-proximos").addEventListener("click", () => {
    profissionaisAtualmenteExibidos.sort((a, b) => {
        if (a.lat === undefined || b.lat === undefined) return 0;
        return calcularDistancia(userLatitude, userLongitude, a.lat, a.lon) - calcularDistancia(userLatitude, userLongitude, b.lat, b.lon);
    });
    exibirProfissionais(profissionaisAtualmenteExibidos);
});

document.getElementById("btn-limpar-ordenacao").addEventListener("click", () => {
    filtrarEExibirProfissionais();
});