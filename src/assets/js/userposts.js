
// edição do post
function handleEditPost(event) {
  const button = event.currentTarget;
  const postCard = button.closest('.post-card');
  const postId = postCard.dataset.postId; // ID do post 


  const postTitleElement = postCard.querySelector('h3');
  const postContentElement = postCard.querySelector('p');
  const postImageElement = postCard.querySelector('img');

  const currentTitle = postTitleElement.textContent;
  const currentContent = postContentElement.textContent;
  const currentImageSrc = postImageElement ? postImageElement.src : '';


  if (postCard.querySelector('.edit-post-container')) {
    return;
  }


  const editContainer = document.createElement('div');
  editContainer.className = 'edit-post-container';

  editContainer.innerHTML = `
    <input type="text" class="edit-title-input" value="${currentTitle}" placeholder="Título do Post" />
    <textarea class="edit-content-textarea" placeholder="Conteúdo do Post">${currentContent}</textarea>
    <input type="text" class="edit-image-input" value="${currentImageSrc}" placeholder="URL da Imagem (opcional)" />
    <div class="edit-buttons">
      <button class="save-post-btn">Salvar</button>
      <button class="cancel-edit-btn">Cancelar</button>
    </div>
  `;


  postTitleElement.style.display = 'none';
  postContentElement.style.display = 'none';
  if (postImageElement) {
    postImageElement.style.display = 'none';
  }
  postCard.querySelector('.post-actions').style.display = 'none';

  postCard.appendChild(editContainer);


  editContainer.querySelector('.save-post-btn').addEventListener('click', () => {
    const newTitle = editContainer.querySelector('.edit-title-input').value;
    const newContent = editContainer.querySelector('.edit-content-textarea').value;
    const newImageSrc = editContainer.querySelector('.edit-image-input').value;

    // atualiza o conteúdo do post
    postTitleElement.textContent = newTitle;
    postContentElement.textContent = newContent;

    if (newImageSrc) {
      if (postImageElement) {

        postImageElement.src = newImageSrc;
        postImageElement.style.display = '';
      } else {

        const newImg = document.createElement('img');
        newImg.src = newImageSrc;
        newImg.alt = "Imagem do Post";

        postCard.querySelector('.post-actions').before(newImg);
      }
    } else {

      if (postImageElement) {
        postImageElement.remove();
      }
    }


    postTitleElement.style.display = '';
    postContentElement.style.display = '';
    postCard.querySelector('.post-actions').style.display = '';
    editContainer.remove();


    console.log(`Post ${postId} editado:`, { newTitle, newContent, newImageSrc });
  });

  editContainer.querySelector('.cancel-edit-btn').addEventListener('click', () => {

    postTitleElement.style.display = '';
    postContentElement.style.display = '';
    if (postImageElement) {
      postImageElement.style.display = '';
    }
    postCard.querySelector('.post-actions').style.display = '';
    editContainer.remove();
  });
}

// remover post
function handleRemovePost(event) {
  const button = event.currentTarget;
  const postCard = button.closest('.post-card');
  const postId = postCard.dataset.postId;


  if (confirm(`Tem certeza que deseja remover o post "${postCard.querySelector('h3').textContent}"?`)) {
    postCard.remove();


    console.log(`Post ${postId} removido.`);
  }
}
// criação de um novo post
function handleNewPost() {
  const postsSection = document.querySelector('.posts-section');

  if (!postsSection) {
    console.error("Elemento '.posts-section' não encontrado para criar o novo post.");
    return;
  }

    if (document.querySelector('.new-post-form-container')) {
    return; 
  }

  const newPostFormContainer = document.createElement('div');
  newPostFormContainer.className = 'new-post-form-container post-card'; 

  newPostFormContainer.innerHTML = `
        <h3>Criar Novo Post</h3>
        <input type="text" class="new-post-title-input" placeholder="Título do Novo Post" />
        <textarea class="new-post-content-textarea" placeholder="Conteúdo do Novo Post"></textarea>
        <input type="text" class="new-post-image-input" placeholder="URL da Imagem (opcional)" />
        <div class="new-post-buttons">
            <button class="save-new-post-btn">Salvar Novo Post</button>
            <button class="cancel-new-post-btn">Cancelar</button>
        </div>
    `;

    postsSection.prepend(newPostFormContainer); 

    newPostFormContainer.querySelector('.save-new-post-btn').addEventListener('click', () => {
    const newTitle = newPostFormContainer.querySelector('.new-post-title-input').value.trim();
    const newContent = newPostFormContainer.querySelector('.new-post-content-textarea').value.trim();
    const newImage = newPostFormContainer.querySelector('.new-post-image-input').value.trim();

    if (!newTitle || !newContent) {
      alert('Título e conteúdo do post não podem ser vazios!');
      return;
    }

    // simula a criação de um novo ID
    const newId = Date.now(); 

    // cria o novo card de post
    const newPostCard = document.createElement('div');
    newPostCard.classList.add('post-card');
    newPostCard.dataset.postId = newId;

    newPostCard.innerHTML = `
            <h3>${newTitle}</h3>
            <p>${newContent}</p>
            ${newImage ? `<img src="${newImage}" alt="Imagem do Post" />` : ''}
            <div class="post-actions">
                <button class="btn edit-btn"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="btn remove-btn"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;


    newPostCard.querySelector('.edit-btn').addEventListener('click', handleEditPost);
    newPostCard.querySelector('.remove-btn').addEventListener('click', handleRemovePost);

    postsSection.prepend(newPostCard);

    newPostFormContainer.remove();

    console.log('Novo post criado:', { id: newId, title: newTitle, content: newContent, image: newImage });
  });

  newPostFormContainer.querySelector('.cancel-new-post-btn').addEventListener('click', () => {
    newPostFormContainer.remove(); // remove o formulário de criação
  });
}


document.addEventListener('DOMContentLoaded', () => {
  const newPostButton = document.querySelector('.new-post-btn');
  if (newPostButton) {
    newPostButton.addEventListener('click', handleNewPost);
  } else {
    console.warn("Botão '.new-post-btn' não encontrado. Certifique-se de adicioná-lo ao seu HTML com a classe 'new-post-btn'.");
  }
});

// carregamento dos posts
fetch('./assets/js/posts.json')
  .then(response => response.json())
  .then(posts => {
    const container = document.querySelector('.posts-section');

    if (!container) {
      console.error("Elemento '.posts-section' não encontrado no DOM.");
      return;
    }

    // randomiza os posts para exibir 4 posts aleatórios 
    const postsAleatorios = posts.sort(() => Math.random() - 0.5).slice(0, 4);

    postsAleatorios.forEach(post => {
      const postCard = document.createElement('div');
      postCard.classList.add('post-card');
      postCard.dataset.postId = post.id;

      postCard.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        ${post.image ? `<img src="${post.image}" alt="Imagem do Post" />` : ''}
        <div class="post-actions">
          <button class="btn edit-btn"><i class="fa-solid fa-pen-to-square"></i></button>
          <button class="btn remove-btn"><i class="fa-solid fa-trash"></i></button>
        </div>
      `;

      container.appendChild(postCard);


      postCard.querySelector('.edit-btn').addEventListener('click', handleEditPost);
      postCard.querySelector('.remove-btn').addEventListener('click', handleRemovePost);
    });
  })
  .catch(error => console.error('Erro ao carregar os posts:', error));