class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const style = `
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

      * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }

      footer {
          background-color: white;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: 'Roboto', sans-serif;
      }

      .footer-content {
          width: 100%;
          max-width: 1200px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 30px;
      }

      .nav-footer {
          display: flex;
          gap: 40px;
          color: #726397;
      }

      .nav-footer ul {
          list-style: none;
      }

      .nav-footer ul li:first-child {
          font-weight: bold;
          margin-bottom: 10px;
          font-size: 16px;
      }

      .nav-footer ul li a {
          text-decoration: none;
          color: #726397;
          font-size: 14px;
      }

      .footer-logo {
          width: 150px;
          height: auto;
      }

      .privacidade {
          width: 100%;
          max-width: 1200px;
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          font-family: 'Roboto', sans-serif;
      }

      .privacidade a {
          text-decoration: none;
          color: #726397;
          font-size: 12px;
      }

      footer p {
          color: #726397;
          font-size: 14px;
          text-align: center;
      }
    `;

    const html = `
      <footer>
        <div class="footer-content">
          <div class="nav-footer">
            <ul>
              <li>Serviços</li>
              <li><a href="#">Profissionais</a></li>
              <li><a href="#">Mapa</a></li>
              <li><a href="#">Fórum</a></li>
            </ul>
            <ul>
              <li>Suporte</li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
            <ul>
              <li>Sobre</li>
              <li><a href="#">Sobre o projeto</a></li>
            </ul>
          </div>
          <img src="assets/images/logo.png" alt="Logo" class="footer-logo" />
        </div>

        <div class="privacidade">
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
        </div>

      <p>2025 Mães em Foco</p>
    </footer>
    `;

    this.shadowRoot.innerHTML = `
    <style>${style}</style>
      ${html}
    `;
  }
}

customElements.define("footer-component", Footer);
