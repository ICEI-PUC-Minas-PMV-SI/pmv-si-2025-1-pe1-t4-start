const CURRENT_USER_ID = 1;

const currentUser = {
  id: CURRENT_USER_ID,
  avatar: "assets/images/profile/jessicaSilva.png",
  name: "Jéssica da Silva",
  subtitle: "Mãe solo",
};

const API_URL = "http://localhost:3000";

async function fetchAndRenderPosts() {
  try {
    const response = await fetch(`${API_URL}/posts`);
    if (!response.ok) {
      throw new Error("Não foi possível buscar os posts!");
    }
    const postsFromServer = await response.json();

    postsFromServer.sort((a, b) => new Date(b.date) - new Date(a.date));
    renderPosts(postsFromServer);
  } catch (error) {
    console.error("Erro ao buscar os posts:", error);
    const postFeed = document.getElementById("postFeed");
    postFeed.innerHTML = "<p>Erro ao carregar o Feed. Tente novamente mais tarde.</p>";
  }
}

function renderPosts(posts) {
  const postFeed = document.getElementById("postFeed");
  postFeed.innerHTML = "";

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "post";
    postElement.dataset.postId = post.id;

    const author = post.user;
    const isLikedByCurrentUser = post.likedBy.includes(CURRENT_USER_ID);
    const likeCount = post.likedBy.length;
    const canDeletePost = author.id === CURRENT_USER_ID;

    postElement.innerHTML = `
      <div class="user-info">
        <div class="user-avatar">
          <img src="${author.avatar}" alt="${author.name}" />
        </div>
        <div class="user-details">
          <h3>${author.name}</h3>
          <span>${author.subtitle}</span>
        </div>
        ${canDeletePost ? `
          <button class="delete-post-button" data-post-id="${post.id}" title="Excluir post">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
          </button>
        ` : ''}
      </div>
      <div class="post-content">
        <h4 class="title">${post.title}</h4>
        <p>${post.content}</p>
      </div>
      ${post.image ? `<div class="post-image"><img src="${post.image}" alt="Imagem do post" /></div>` : ""}
      
      <div class="post-stats">
          <div class="likes-info" style="margin-right: 6px">
              <span>${likeCount} ${likeCount === 1 ? 'curtida' : 'curtidas'}</span>
          </div>
          <div class="comments-info">
              <span>${post.comments.length} comentários</span>
          </div>
      </div>

      <hr class="line" />

      <div class="post-actions">
        <button class="like-button ${isLikedByCurrentUser ? 'liked' : ''}" data-post-id="${post.id}">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="${isLikedByCurrentUser ? '#9388AD' : 'none'}">
            <path d="M17.869 3.88892C15.773 3.88892 13.982 5.38292 12.998 6.41292C12.014 5.38292 10.227 3.88892 8.132 3.88892C4.521 3.88892 2 6.40592 2 10.0089C2 13.9789 5.131 16.5449 8.16 19.0269C9.59 20.1999 11.07 21.4119 12.205 22.7559C12.396 22.9809 12.676 23.1109 12.97 23.1109H13.028C13.323 23.1109 13.602 22.9799 13.792 22.7559C14.929 21.4119 16.408 20.1989 17.839 19.0269C20.867 16.5459 24 13.9799 24 10.0089C24 6.40592 21.479 3.88892 17.869 3.88892Z"
              stroke-width="2" stroke="${isLikedByCurrentUser ? '#9388AD' : 'black'}"/>
          </svg>
          <p style="color: ${isLikedByCurrentUser ? '#9388AD' : 'black'}">Curtir</p>
        </button>
      </div>
      <div class="comments-section">
        <div class="comments-list">
          ${renderComments(post.comments, post.id)}
        </div>
        <form class="comment-form" data-post-id="${post.id}">
          <input type="text" class="comment-input" placeholder="Adicionar um comentário..." required />
          <button type="submit">Comentar</button>
        </form>
      </div>
    `;
    postFeed.appendChild(postElement);
  });

  addEventListeners();
}

function renderComments(comments, postId) {
  if (!comments || comments.length === 0) return "";
  return comments.map((comment) => {
    const commenter = comment.user;
    const canDelete = commenter.id === CURRENT_USER_ID;
    return `
      <div class="comment">
        <div class="comment-user-avatar">
            <img src="${commenter.avatar}" alt="${commenter.name}">
        </div>
        <div class="comment-content">
            <div class="comment-header">
                <div>
                  <span class="comment-user-name">${commenter.name}</span>
                  <span class="comment-user-subtitle">${commenter.subtitle}</span>
                </div>
                ${canDelete ? `
                  <button class="delete-comment-button" data-post-id="${postId}" data-comment-id="${comment.id}" title="Excluir comentário">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                  </button>
                ` : ''}
            </div>
            <p>${comment.text}</p>
            ${comment.image ? `<div class="comment-image"><img src="${comment.image}" alt="Imagem do comentário" /></div>` : ""}
        </div>
      </div>
    `;
  }).join("");
}

async function handleLikeClick(event) {
  const button = event.currentTarget;
  const postId = button.dataset.postId;

  try {
    const response = await fetch(`${API_URL}/posts/${postId}`);
    if (!response.ok) throw new Error('Post não encontrado!');
    const postToUpdate = await response.json();

    const likedIndex = postToUpdate.likedBy.indexOf(CURRENT_USER_ID);

    if (likedIndex > -1) {
      postToUpdate.likedBy.splice(likedIndex, 1);
    } else {
      postToUpdate.likedBy.push(CURRENT_USER_ID);
    }

    const updateResponse = await fetch(`${API_URL}/posts/${postId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postToUpdate),
    });

    if (!updateResponse.ok) throw new Error('Falha ao atualizar o like.');

    fetchAndRenderPosts();

  } catch (error) {
    console.error("Erro ao processar o like:", error);
  }
}

async function handleCommentSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const postId = form.dataset.postId;
  const input = form.querySelector(".comment-input");
  const commentText = input.value.trim();

  if (!commentText) return;

  try {
    const postResponse = await fetch(`${API_URL}/posts/${postId}`);
    const postToUpdate = await postResponse.json();

    const newComment = {
      id: Date.now(),
      user: currentUser,
      text: commentText,
      image: "",
    };

    postToUpdate.comments.push(newComment);

    const updateResponse = await fetch(`${API_URL}/posts/${postId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postToUpdate),
    });

    if (updateResponse.ok) {
      input.value = "";
      fetchAndRenderPosts();
    } else {
      console.error("Falha ao atualizar o post com o novo comentário.");
    }
  } catch (error) {
    console.error("Erro ao adicionar comentário:", error);
  }
}

async function handleCommentDelete(event) {
  const button = event.currentTarget;
  const postId = button.dataset.postId;
  const commentId = button.dataset.commentId;

  try {
    const response = await fetch(`${API_URL}/posts/${postId}`);
    if (!response.ok) throw new Error('Post não encontrado!');
    const postToUpdate = await response.json();

    const commentIndex = postToUpdate.comments.findIndex(comment => comment.id == commentId);

    if (commentIndex > -1) {
      postToUpdate.comments.splice(commentIndex, 1);
    } else {
      return;
    }

    const updateResponse = await fetch(`${API_URL}/posts/${postId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postToUpdate),
    });

    if (!updateResponse.ok) throw new Error('Falha ao excluir o comentário.');

    fetchAndRenderPosts();

  } catch (error) {
    console.error("Erro ao excluir o comentário:", error);
  }
}

async function handlePostDelete(event) {
  const button = event.currentTarget;
  const postId = button.dataset.postId;

  try {
    const response = await fetch(`${API_URL}/posts/${postId}`, {
      method: 'DELETE',
    });

    if (!response.ok) throw new Error('Falha ao excluir o post.');

    fetchAndRenderPosts();

  } catch (error) {
    console.error("Erro ao excluir o post:", error);
  }
}

function addEventListeners() {
  document.querySelectorAll(".comment-form").forEach((form) => {
    form.removeEventListener("submit", handleCommentSubmit);
    form.addEventListener("submit", handleCommentSubmit);
  });

  document.querySelectorAll(".like-button").forEach((button) => {
    button.removeEventListener("click", handleLikeClick);
    button.addEventListener("click", handleLikeClick);
  });

  document.querySelectorAll(".delete-comment-button").forEach((button) => {
    button.removeEventListener("click", handleCommentDelete);
    button.addEventListener("click", handleCommentDelete);
  });

  document.querySelectorAll(".delete-post-button").forEach((button) => {
    button.removeEventListener("click", handlePostDelete);
    button.addEventListener("click", handlePostDelete);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchAndRenderPosts();

  const inputCreatePost = document.getElementById("inputCreatePost");
  const createPostBtn = document.getElementById("createPostBtn");

  async function createNewPost(postData) {
    try {
      const response = await fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        fetchAndRenderPosts();
      } else {
        console.error("Erro ao criar este post!");
      }
    } catch (error) {
      console.error("Erro na requisição POST: ", error);
    }
  }

  function initModal() {
    return new PostModal({
      userName: currentUser.name,
      tag: currentUser.subtitle,
      userAvatar: currentUser.avatar,
      placeholder: "Sobre o que você quer falar?",
      onSubmit: function (postContent, title) {
        const newPost = {
          user: currentUser,
          title: title,
          content: postContent,
          image: "",
          date: new Date().toISOString().split("T")[0],
          comments: [],
          likedBy: []
        };
        createNewPost(newPost);
      },
    });
  }

  let postModal;

  if (inputCreatePost) {
    inputCreatePost.addEventListener("click", () => {
      if (!postModal) postModal = initModal();
      postModal.open();
    });
  }

  if (createPostBtn) {
    createPostBtn.addEventListener("click", () => {
      if (!postModal) postModal = initModal();
      postModal.open();
    });
  }
});
