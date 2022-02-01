import React from 'react';
import './styles.scss';

const Footer = () => {
  return (
    <footer className="Footer">
      <section className="footer__info">
        <p>2022© Copyright. Todos os Direitos Reservados.</p>
        <p className="footer__link-media">
          Aplicação desenvolvida com ❤️ por{' '}
          <a
            href="https://github.com/julianapedroso"
            target="_blank"
            rel="noreferrer"
          >
            Juliana Pedroso
          </a>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
