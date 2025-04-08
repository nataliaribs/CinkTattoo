import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Estúdio Cink. Todos os direitos reservados.</p>
      <div className="social">
        <a href="https://www.instagram.com/cink.tattoo" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        {/* pode adicionar mais links se quiser */}
      </div>
    </footer>
  );
}

export default Footer;
