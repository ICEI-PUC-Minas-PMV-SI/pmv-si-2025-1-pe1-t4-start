fetch('./assets/js/posts.json')
  .then(response => response.json())
  .then(posts => {
    const container = document.querySelector('.posts-section');

    // randomiza os posts para exibir 4 posts aleatórios
    const postsAleatorios = posts.sort(() => Math.random() - 0.5).slice(0, 4);

    postsAleatorios.forEach(post => {
      const postCard = document.createElement('div');
      postCard.classList.add('post-card');

      postCard.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        ${post.image ? `<img src="${post.image}" alt="Imagem do Post" />` : ''}
        <div class="post-actions">
          <button class="btn"><i class="fa-solid fa-comment"></i> Comentar</button>
          <button class="btn"><i class="fa-solid fa-pen-to-square"></i></button>
          <button class="btn"><i class="fa-solid fa-trash"></i></button>
        </div>
      `;

      if (container) {
        container.appendChild(postCard);
      }
    });
  })
  .catch(error => console.error('Erro ao carregar os posts:', error));
