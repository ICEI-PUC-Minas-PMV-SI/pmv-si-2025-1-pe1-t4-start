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
      *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
      }
      a {
          font-family: 'Roboto', sans-serif;
          text-decoration: none;
          
      }
      header {
          background-color: #FCFCFC;
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
          background-color:#9388AD;
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
      .dropdown-menu {
          position: absolute;
          display: none;
          background-color:#9388AD;
          border-radius: 8px;
          z-index: 9999;
          
      }
      .dropdown-menu a {
          display: block;

      }
      .dropdown:hover .dropdown-menu {
          display: block;
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
          .dropdown-menu {
              position: static;
              display: none;
              background:white;
          }
          .dropdown.active .dropdown-menu {
              display: flex;
              flex-direction: column;
          }
          .dropdown-menu a {
              padding: 8px;
              color: #9388AD;
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
    `;

    const html = `
      <header>
        <nav id="navbar">
          <a href="index.html" class="logo">
            <img src="assets/images/logo.png" alt="Logo" />
          </a>

          <div class="mobile-menu">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>

          <ul class="nav-list">
            <li class="dropdown">
              <a href="#serviços">Serviços</a>
              <div class="dropdown-menu">
                <a href="creches.html">Creches</a>
                <a href="babas.html">Babás</a>
                <a href="psicologos.html">Psicólogos</a>
                <a href="advogados.html">Advogados</a>
              </div>
            </li>
            <li class="nav-item">
              <a href="mapa.html">Mapa</a>
            </li>
            <li class="nav-item">
              <a href="sobre.html">Sobre</a>
            </li>
            <li class="nav-item">
              <a href="forum.html">Fórum</a>
            </li>
            <li class="nav-login">
              <a href="login.html">Entrar</a>
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

    const dropdowns = this.shadowRoot.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          dropdown.classList.toggle("active");
        }
      });
    });
  }
}

customElements.define("header-component", NavBar);
