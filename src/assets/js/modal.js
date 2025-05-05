class PostModal {
  constructor(options = {}) {
    const {
      container = document.body,
      userName = "Usuário",
      userAvatar = "/api/placeholder/40/40",
      tag = "Indefinido",
      placeholder = "Sobre o que você quer falar?",
      onSubmit = () => {},
      onClose = () => {},
    } = options;

    this.container = container;
    this.userName = userName;
    this.userAvatar = userAvatar;
    this.tag = tag;
    this.placeholder = placeholder;
    this.onSubmit = onSubmit;
    this.onClose = onClose;
    this.element = null;
    this.postContent = "";

    this.init();
  }

  init() {
    this.createElement();
    this.setupEventListeners();
  }

  createElement() {
    const modal = document.createElement("div");
    modal.className = "modal-container";
    modal.style.display = "none";

    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal">
          <div class="modal-header">
            <div class="user-info">
              <div class="user-avatar">
                <img src="${this.userAvatar}" alt="${this.userName}">
              </div>
              <div class="user-details">
                <div class="user-name">${this.userName}</div>
              </div>
            </div>
            <div class="close-button">
              <svg width="14" height="14" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </div>
          </div>
          <div class="modal-body">
            <textarea class="post-content" placeholder="${this.placeholder}"></textarea>
          </div>
          <div class="modal-footer">
            <div class="media-options">
              <div class="media-option" title="Add video">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M18 4v1h-2V4c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1H6V4c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1v-1h2v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h2v1c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path>
                </svg>
              </div>
              <div class="media-option" title="Add photo">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"></path>
                </svg>
              </div>
              <div class="media-option" title="Add more">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                </svg>
              </div>
            </div>
            <div class="post-actions">
              <button class="post-button">Post</button>
            </div>
          </div>
        </div>
      `;

    this.container.appendChild(modal);
    this.element = modal;
  }

  setupEventListeners() {
    if (!this.element) return;

    const closeButton = this.element.querySelector(".close-button");
    const overlay = this.element.querySelector(".modal-overlay");
    const postButton = this.element.querySelector(".post-button");
    const textarea = this.element.querySelector(".post-content");

    closeButton.addEventListener("click", () => this.close());
    overlay.addEventListener("click", () => this.close());

    textarea.addEventListener("input", (e) => {
      this.postContent = e.target.value;
      this.updatePostButton();
    });

    postButton.addEventListener("click", () => {
      if (this.postContent.trim().length > 0) {
        this.submit();
      }
    });
  }

  updatePostButton() {
    const postButton = this.element.querySelector(".post-button");
    if (this.postContent.trim().length > 0) {
      postButton.classList.add("active");
    } else {
      postButton.classList.remove("active");
    }
  }

  open() {
    if (this.element) {
      this.element.style.display = "flex";
    }
    return this;
  }

  close() {
    if (this.element) {
      this.element.style.display = "none";
      this.onClose();
    }
    return this;
  }

  submit() {
    this.onSubmit(this.postContent);
    this.close();
    return this;
  }

  destroy() {
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
    this.element = null;
  }
}
