class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    const style = `
      * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
      }
      a {
          font-family: 'Roboto', sans-serif;
          text-decoration: none;
          
      }
      header {
          padding-inline: 16px;
          
      }
      nav {
          margin-inline: auto;
          max-width: 1280px;
          height: 70px;
          display: flex;
          justify-content: space-between;
          align-items: center;
      }
      nav li a {
          padding: 8px 12px;
          color: black;
          display: inline-block;
      }
      nav li a:hover {
          background-color: #9388AD;
          border-radius: 8px;
          color: #FCFCFC;
          transition: background-color 0.3s ease, color 0.3s ease;
      }
      .logo img {
          height: 60px;
      }
      .nav-list {
          gap: 32px;
          display: flex;
          list-style: none;
          align-items: center;
      }
      .nav-list a {
          font-size: 16px;
          padding-block: 16px;
          color: black;
      }
      .nav-login a {
          padding: 8px 12px;
          background-color:#9388AD;
          border-radius: 8px;
          color:#FCFCFC;
          text-decoration: none;
          transition: background-color 0.3s ease;
          display: inline-block;
      }
      .mobile-menu {
        display: none;
          cursor: pointer;
      }
      .mobile-menu div {
          width: 25px;
          height: 2px;
          background: black;
          margin: 5px;
      }

      @media (max-width:999px) {
          body {
              overflow-x: hidden;
          }
          .nav-list {
              position: absolute;
              top: 8vh;
              right: 0;
              height: 92vh;
              width: 100vw;
              background: white;
              flex-direction: column;
              align-items: center;
              justify-content: space-around;
              transform: translateX(100%);
              transition: transform 0.3s ease-in-out;
              
          }
          .nav-list li {
              margin-left: 0;
              opacity: 0;
              transition: opacity 0.5s ease;
          }
          .mobile-menu {
              display: block;
          }
          
      }
      .nav-list.active {
          transform: translateX(0);
      }
      .nav-list li {
          transition: opacity 0.5s ease;
          ;
      }
      .nav-list.active li {
          opacity: 1;
          transition: opacity 0.5s ease-in-out;
      }
      .nav-user a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        background-color: #9388AD; 
        border-radius: 50%;
        color: #FCFCFC; 
        font-size: 18px;
        transition: background-color 0.3s ease;
      }
      .nav-user a:hover {
          background-color: #6f6490; 
          border-radius: 50%;
      }    
    `;

    const html = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      <header>
        <nav id="navbar">
          <a href="landing-page.html" class="logo">
            <img src="assets/images/logo.png" alt="Logo" />
          </a>

          <div class="mobile-menu">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>

          <ul class="nav-list">
            <li class="nav-item"> <a href="servicos.html" style="display: flex; align-items: center">Serviços</a>
            </li>
              
            
            <li class="nav-item">
              <a href="mapa.html">Mapa</a>
            </li>
            <li class="nav-item">
              <a href="landing-page.html">Sobre</a>
            </li>
            <li class="nav-item">
              <a href="forum.html">Feed</a>
            </li>
            <li class="nav-login">
              <a href="index.html">Entrar</a>
            </li>
            <li class="nav-user">
              <a href="userprofile.html"><i class="fa-solid fa-user"></i></a>
            </li>
          </ul>
        </nav>
      </header>
    `;

    this.shadowRoot.innerHTML = `
    <style>${style}</style>
      ${html}
    `;
  }

  addEventListeners() {
    const mobileMenu = this.shadowRoot.querySelector(".mobile-menu");
    const navList = this.shadowRoot.querySelector(".nav-list");

    if (mobileMenu) {
      mobileMenu.addEventListener("click", () => {
        navList.classList.toggle("active");
        mobileMenu.classList.toggle("active");
      });
    }

   
  }
}

customElements.define("header-component", NavBar);

