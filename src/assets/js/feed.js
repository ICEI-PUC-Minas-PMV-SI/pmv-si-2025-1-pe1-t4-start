const currentUser = {
  avatar: "assets/images/profile/jessicaSilva.png",
  name: "Jéssica da Silva",
  subtitle: "Mãe solo",
};

const initialPosts = [
  {
    user: {
      avatar: "assets/images/profile/jessicaSilva.png",
      name: "Jéssica da Silva",
      subtitle: "Mãe solo",
    },
    content:
      "Hoje, depois de uma semana cansativa de trabalho e ocupações, foi dia de lazer com meu filho e sua primeira vez andando de bicicleta! Um momento muito emocionante ao seu lado, filho. É muito bom ver você crescendo!",
    image: "assets/images/posts/child_bike.jpg",
    comments: [
      {
        user: {
          avatar: "assets/images/profile/jessicaSilva.png",
          name: "Jéssica da Silva",
          subtitle: "Mãe solo",
        },
        text: "Lindo momento, parabéns!",
      },
    ],
  },
  // ...adicione outros posts aqui...
];

function renderPosts(posts) {
  const postFeed = document.getElementById("postFeed");
  postFeed.innerHTML = "";
  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "post";
    postElement.innerHTML = `
      <div class="user-info">
        <div class="user-avatar">
          <img src="${post.user.avatar}" alt="${post.user.name}" />
        </div>
        <div class="user-details">
          <h3>${post.user.name}</h3>
          <span>${post.user.subtitle}</span>
        </div>
      </div>
      <div class="post-content">
        <p>${post.content}</p>
      </div>
      ${post.image ? `<div class="post-image"><img src="${post.image}" alt="Imagem do post" /></div>` : ""}
      <div class="likes">1 likes</div>
      <hr class="line" />
      <div>
        <button class="like-button">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M17.869 3.88892C15.773 3.88892 13.982 5.38292 12.998 6.41292C12.014 5.38292 10.227 3.88892 8.132 3.88892C4.521 3.88892 2 6.40592 2 10.0089C2 13.9789 5.131 16.5449 8.16 19.0269C9.59 20.1999 11.07 21.4119 12.205 22.7559C12.396 22.9809 12.676 23.1109 12.97 23.1109H13.028C13.323 23.1109 13.602 22.9799 13.792 22.7559C14.929 21.4119 16.408 20.1989 17.839 19.0269C20.867 16.5459 24 13.9799 24 10.0089C24 6.40592 21.479 3.88892 17.869 3.88892Z"
              stroke-width="2" stroke="black"/>
          </svg>
          <p>Curtir</p>
        </button>
      </div>
      <div class="comments-section">
        <div class="comments-list">
          ${post.comments
            .map(
              (comment) => `
            <div class="comment">
              <div class="comment-user-avatar">
                <img src="${comment.user.avatar}" alt="${comment.user.name}">
              </div>
              <div class="comment-content">
                <span class="comment-user-name">${comment.user.name}</span>
                <span class="comment-user-subtitle">${comment.user.subtitle}</span>
                <p>${comment.text}</p>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
        <form class="comment-form">
          <input type="text" class="comment-input" placeholder="Adicionar um comentário..." required />
          <button type="submit">Comentar</button>
        </form>
      </div>
    `;
    postFeed.appendChild(postElement);
  });
}

function addPostListeners() {
  // Like
  document.querySelectorAll(".like-button").forEach(function (likeButton) {
    let isLiked = false;
    const svgPath = likeButton.querySelector("svg path");
    const likeText = likeButton.querySelector("p");
    likeButton.addEventListener("click", function () {
      isLiked = !isLiked;
      if (isLiked) {
        svgPath.setAttribute("stroke", "#9388AD");
        svgPath.setAttribute("fill", "#9388AD");
        likeText.style.color = "#9388AD";
      } else {
        svgPath.setAttribute("stroke", "black");
        svgPath.setAttribute("fill", "none");
        likeText.style.color = "black";
      }
    });
  });

  // Comentário
  document.querySelectorAll(".post").forEach(function (post) {
    const form = post.querySelector(".comment-form");
    const input = post.querySelector(".comment-input");
    const list = post.querySelector(".comments-list");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const comment = input.value.trim();
        if (comment) {
          const commentDiv = document.createElement("div");
          commentDiv.className = "comment";
          commentDiv.innerHTML = `
            <div class="comment-user-avatar">
              <img src="${currentUser.avatar}" alt="${currentUser.name}">
            </div>
            <div class="comment-content">
              <span class="comment-user-name">${currentUser.name}</span>
              <span class="comment-user-subtitle">${currentUser.subtitle}</span>
              <p>${comment}</p>
            </div>
          `;
          list.appendChild(commentDiv);
          input.value = "";
        }
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderPosts(initialPosts);
  addPostListeners();

  const inputCreatePost = document.getElementById("inputCreatePost");
  const createPostBtn = document.getElementById("createPostBtn");

  // Cria o modal apenas quando o DOM estiver pronto
  function initModal() {
    return new PostModal({
      userName: currentUser.name,
      tag: currentUser.subtitle,
      userAvatar: currentUser.avatar,
      placeholder: "Sobre o que você quer falar?",
      onSubmit: function (content) {
        initialPosts.unshift({
          user: { ...currentUser },
          content,
          comments: [],
        });
        renderPosts(initialPosts);
        addPostListeners();
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
