const CURRENT_USER_ID = 1;

const currentUser = {
  id: CURRENT_USER_ID,
  avatar: "assets/images/profile/jessicaSilva.png",
  name: "Jéssica da Silva",
  subtitle: "Mãe solo",
};

const DB_URL = "assets/js/allPosts.json";

let allPosts = [];

async function loadAndRenderPosts() {
  try {
    const response = await fetch(DB_URL);
    if (!response.ok) {
      throw new Error("Não foi possível carregar o arquivo allPosts.json!");
    }
    const data = await response.json();
    allPosts = data.posts;

    allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    renderPosts();
  } catch (error) {
    console.error("Erro ao carregar os posts:", error);
    const postFeed = document.getElementById("postFeed");
    postFeed.innerHTML = "<p>Erro ao carregar o Feed. Verifique o console para mais detalhes.</p>";
  }
}

function renderPosts() {
  const postFeed = document.getElementById("postFeed");
  postFeed.innerHTML = "";

  allPosts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "post";

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
        ${
          canDeletePost
            ? `
          <button class="delete-post-button" data-post-id="${post.id}" title="Excluir post">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
          </button>
        `
            : ""
        }
      </div>
      <div class="post-content">
        <h4 class="title">${post.title}</h4>
        <p>${post.content}</p>
      </div>
      ${post.image ? `<div class="post-image"><img src="${post.image}" alt="Imagem do post" /></div>` : ""}
      <div class="post-stats">
        <div class="likes-info" style="margin-right: 6px">
          <span>${likeCount} ${likeCount === 1 ? "curtida" : "curtidas"}</span>
        </div>
        <div class="comments-info">
          <span>${post.comments.length} comentários</span>
        </div>
      </div>
      <hr class="line" />
      <div class="post-actions">
        <button class="like-button ${isLikedByCurrentUser ? "liked" : ""}" data-post-id="${post.id}">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="${isLikedByCurrentUser ? "#9388AD" : "none"}">
            <path d="M17.869 3.88892C15.773 3.88892 13.982 5.38292 12.998 6.41292C12.014 5.38292 10.227 3.88892 8.132 3.88892C4.521 3.88892 2 6.40592 2 10.0089C2 13.9789 5.131 16.5449 8.16 19.0269C9.59 20.1999 11.07 21.4119 12.205 22.7559C12.396 22.9809 12.676 23.1109 12.97 23.1109H13.028C13.323 23.1109 13.602 22.9799 13.792 22.7559C14.929 21.4119 16.408 20.1989 17.839 19.0269C20.867 16.5459 24 13.9799 24 10.0089C24 6.40592 21.479 3.88892 17.869 3.88892Z" stroke-width="2" stroke="${
              isLikedByCurrentUser ? "#9388AD" : "black"
            }"/>
          </svg>
          <p style="color: ${isLikedByCurrentUser ? "#9388AD" : "black"}">Curtir</p>
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
  return comments
    .map((comment) => {
      const commenter = comment.user;
      const canInteract = commenter.id === CURRENT_USER_ID;
      return `
      <div class="comment" data-comment-id="${comment.id}">
        <div class="comment-user-avatar">
            <img src="${commenter.avatar}" alt="${commenter.name}">
        </div>
        <div class="comment-content">
            <div class="comment-header">
                <div>
                    <span class="comment-user-name">${commenter.name}</span>
                    <span class="comment-user-subtitle">${commenter.subtitle}</span>
                </div>
                <div class="comment-actions">
                    ${
                      canInteract
                        ? `
                    <button class="edit-comment-button" data-post-id="${postId}" data-comment-id="${comment.id}" title="Editar comentário">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M17.657 6.343l-1.414-1.414L5 16.172V19h2.828L19.071 7.757l-1.414-1.414zM4 21h16" stroke="#9388ad" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg>
                    </button>
                    <button class="delete-comment-button" data-post-id="${postId}" data-comment-id="${comment.id}" title="Excluir comentário">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                    </button>
                    `
                        : ""
                    }
                </div>
            </div>
            <p class="comment-text">${comment.text}</p>
            ${
              comment.image
                ? `<div class="comment-image"><img src="${comment.image}" alt="Imagem do comentário" /></div>`
                : ""
            }
        </div>
      </div>
    `;
    })
    .join("");
}

function createNewPost(postData) {
  const newPost = {
    id: String(Date.now()),
    user: currentUser,
    title: postData.title,
    content: postData.content,
    image: "",
    date: new Date().toISOString().split("T")[0],
    comments: [],
    likedBy: [],
  };

  allPosts.unshift(newPost);
  renderPosts();
}

function handleLikeClick(event) {
  const button = event.currentTarget;
  const postId = button.dataset.postId;
  const postToUpdate = allPosts.find((p) => p.id == postId);

  if (postToUpdate) {
    const likedIndex = postToUpdate.likedBy.indexOf(CURRENT_USER_ID);
    if (likedIndex > -1) {
      postToUpdate.likedBy.splice(likedIndex, 1);
    } else {
      postToUpdate.likedBy.push(CURRENT_USER_ID);
    }
    renderPosts();
  }
}

function handlePostDelete(event) {
  const button = event.currentTarget;
  const postId = button.dataset.postId;

  allPosts = allPosts.filter((p) => p.id != postId);
  renderPosts();
}

function handleCommentSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const postId = form.dataset.postId;
  const input = form.querySelector(".comment-input");
  const commentText = input.value.trim();

  if (!commentText) return;

  const postToUpdate = allPosts.find((p) => p.id == postId);
  if (postToUpdate) {
    const newComment = {
      id: Date.now(),
      user: currentUser,
      text: commentText,
      image: "",
    };
    postToUpdate.comments.push(newComment);
    input.value = "";
    renderPosts();
  }
}

function handleCommentDelete(event) {
  const button = event.currentTarget;
  const postId = button.dataset.postId;
  const commentId = button.dataset.commentId;

  const postToUpdate = allPosts.find((p) => p.id == postId);
  if (postToUpdate) {
    postToUpdate.comments = postToUpdate.comments.filter((c) => c.id != commentId);
    renderPosts();
  }
}

function handleCommentEdit(event) {
  const button = event.currentTarget;
  const commentElement = button.closest(".comment");
  const commentTextElement = commentElement.querySelector(".comment-text");
  const currentText = commentTextElement.textContent;

  if (commentElement.querySelector(".edit-comment-container")) return;

  const editContainer = document.createElement("div");
  editContainer.className = "edit-comment-container";
  editContainer.innerHTML = `
    <textarea class="edit-comment-textarea">${currentText}</textarea>
    <button class="update-comment-button">Atualizar</button>
  `;

  commentTextElement.style.display = "none";
  commentTextElement.parentNode.insertBefore(editContainer, commentTextElement.nextSibling);

  const updateButton = editContainer.querySelector(".update-comment-button");
  updateButton.addEventListener("click", () => handleCommentUpdate(button.dataset.postId, button.dataset.commentId));
}

function handleCommentUpdate(postId, commentId) {
  const commentElement = document.querySelector(`.comment[data-comment-id='${commentId}']`);
  const textarea = commentElement.querySelector(".edit-comment-textarea");
  const newText = textarea.value.trim();

  if (!newText) return;

  const postToUpdate = allPosts.find((p) => p.id == postId);
  if (postToUpdate) {
    const commentToUpdate = postToUpdate.comments.find((c) => c.id == commentId);
    if (commentToUpdate) {
      commentToUpdate.text = newText;
    }
  }

  renderPosts();
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

  document.querySelectorAll(".edit-comment-button").forEach((button) => {
    button.removeEventListener("click", handleCommentEdit);
    button.addEventListener("click", handleCommentEdit);
  });

  document.querySelectorAll(".delete-post-button").forEach((button) => {
    button.removeEventListener("click", handlePostDelete);
    button.addEventListener("click", handlePostDelete);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  loadAndRenderPosts();

  const inputCreatePost = document.getElementById("inputCreatePost");
  const createPostBtn = document.getElementById("createPostBtn");

  function initModal() {
    return new PostModal({
      userName: currentUser.name,
      userAvatar: currentUser.avatar,
      onSubmit: function (content, title) {
        createNewPost({ title, content });
      },
    });
  }

  let postModal;

  const openModal = () => {
    if (!postModal) postModal = initModal();
    postModal.open();
  };

  if (inputCreatePost) {
    inputCreatePost.addEventListener("click", openModal);
  }

  if (createPostBtn) {
    createPostBtn.addEventListener("click", openModal);
  }
});
