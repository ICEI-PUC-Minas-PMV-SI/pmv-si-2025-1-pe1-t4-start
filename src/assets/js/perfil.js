// captura o ID na URL
function getIdDaUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

function carregarPerfil() {
  const id = getIdDaUrl();

  if (!id) {
    document.getElementById('conteudo-perfil').innerHTML = '<p>ID do profissional não informado na URL. Verifique o link.</p>';
    return;
  }

  fetch('assets/js/profissionais2.json') 
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro ao carregar o arquivo JSON: Status ${response.status}.`);
      }
      return response.json();
    })
    .then(data => {
      const profissional = data.find(p => p.id == id);

      if (!profissional) {
        document.getElementById('conteudo-perfil').innerHTML = '<p>Profissional não encontrado com o ID fornecido.</p>';
        return;
      }

      const conteudoPerfilDiv = document.getElementById('conteudo-perfil');
      
      // número de telefone genérico fixo
      const genericPhoneNumber = '99999999999'; 

      conteudoPerfilDiv.innerHTML = `
        <div class="perfil-container">
            <div class="topo-perfil">
                <img src="${profissional.foto || 'assets/images/placeholder.png'}" alt="${profissional.nome}" class="foto-perfil">
                <div class="info-perfil">
                    <h1>${profissional.nome}</h1>
                    <p class="profissao">${profissional.categoria}</p>
                    <p class="nota">${profissional.rating !== null && profissional.rating !== undefined ? profissional.rating + ' ⭐' : 'Sem avaliação'}</p>
                    <a href="tel:${genericPhoneNumber}" class="botao-contato">Entrar em Contato</a>
                    <a href="mailto:${profissional.email}" class="botao-contato email-contato">Enviar Email</a>
                </div>
            </div>

            <div class="detalhes">
                <h3>Sobre ${profissional.nome.split(' ')[0]}</h3>
                <p>${profissional.descricao || 'Nenhuma descrição disponível.'}</p>
                <p><strong>Endereço:</strong> ${profissional.endereco || 'Não informado'}</p>
            </div>

            <div class="avaliacoes">
                <h3>Avaliações</h3>
                ${renderizarAvaliacoes(profissional.avaliacoes)}
            </div>
        </div>
      `;

      // remove a mensagem de carregamento inicial
      const loadingMessage = conteudoPerfilDiv.querySelector('p');
      if (loadingMessage && loadingMessage.textContent === 'Carregando perfil do profissional...') {
          loadingMessage.remove();
      }

    })
    .catch(error => {
      console.error("Erro ao carregar o perfil:", error);
      document.getElementById('conteudo-perfil').innerHTML = '<p>Ocorreu um erro ao carregar as informações do profissional. Por favor, tente novamente mais tarde.</p>';
    });
}

// renderiza as avaliações
function renderizarAvaliacoes(avaliacoes) {
  if (!avaliacoes || avaliacoes.length === 0) {
    return '<p>Nenhuma avaliação disponível ainda.</p>';
  }

  let avaliacoesHtml = '';
  avaliacoes.forEach(avaliacao => {
    const dataFormatada = new Date(avaliacao.data).toLocaleDateString('pt-BR');
    
    avaliacoesHtml += `
      <div class="avaliacao-item">
        <strong>${avaliacao.nome}</strong> - ${avaliacao.nota}⭐ <br>
        <small>${dataFormatada}</small>
        <p>${avaliacao.texto}</p>
        ${avaliacao.tags && avaliacao.tags.length > 0 ? `<p class="tags">${avaliacao.tags.map(tag => `<span>#${tag}</span>`).join(' ')}</p>` : ''}
      </div>
    `;
  });
  return avaliacoesHtml;
}

window.addEventListener('DOMContentLoaded', carregarPerfil);