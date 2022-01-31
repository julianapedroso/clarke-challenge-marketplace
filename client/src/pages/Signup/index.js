import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
// Assets
import Logo from '../../assets/img/clarke-logo.svg';
import Cover from '../../assets/icons/cover-login.svg';

const Signup = () => {
  return (
    <section className="Signup">
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
      <section className="section__signup">
        <img src={Logo} alt="Logo Clarke" />
        <article>
          <h2 className="section__signup-title">Criar conta</h2>
          <p className="section__signup-description">
            Não possui uma conta? Cadastre-se agora
          </p>
          <form className="section__form">
            <div className="label__float">
              <input type="text" name="name" id="name" placeholder=" "/>
              <label>Nome*</label>
            </div>
            <div className="label__float">
              <input type="email" name="email" id="email" placeholder=" " />
              <label>E-mail*</label>
            </div>
            <div className="label__float">
              <input type="password" name="password" id="password" placeholder=" " />
              <label>Senha*</label>
            </div>
            <button className="btn__signup" type="submit">Cadastrar</button>
          </form>
            <Link to={'/signin'}>
              <p>Já possui uma conta?</p>
            </Link>
        </article>
      </section>
    </section>
  );
};

export default Signup;
