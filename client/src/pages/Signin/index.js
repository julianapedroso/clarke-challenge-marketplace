import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
// Assets
import Logo from '../../assets/img/clarke-logo.svg';
import Cover from '../../assets/icons/cover-login.svg';

const Signin = () => {
  return (
    <section className="Signin">
      <section className="section__cover">
        <article>
          <img src={Cover} alt="Electricity bill" />
          <h1 className="section__cover-title">
            Clarke Energia Markeplace Manager
          </h1>
          <p className="section__cover-description">
            Gerencie suas escolhas de fornecedores de forma simples, rápida e
            fácil!
          </p>
        </article>
      </section>
      <section className="section__signin">
        <img src={Logo} alt="Logo Clarke" />
        <article>
          <h2 className="section__signin-title">Entrar</h2>
          <p className="section__signin-description">
            Preencha seus dados para entrar
          </p>
          <div className="label__float">
            <input type="email" placeholder=" " />
            <label>E-mail*</label>
          </div>
          <div className="label__float">
            <input type="password" placeholder=" " />
            <label>Senha*</label>
          </div>
          <button className="btn__signin">Login</button>
          <Link to={'/signup'}>
            <p>Ainda não tem uma conta?</p>
          </Link>
        </article>
      </section>
    </section>
  );
};

export default Signin;
