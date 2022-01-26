import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
// Assets
import Logo from '../../assets/img/clarke-logo.svg';
import Cover from '../../assets/icons/cover-login.svg';

const Register = () => {
  return (
    <section className="Register">
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
      <section className="section__register">
        <img src={Logo} alt="Logo Clarke" />
        <article>
          <h2 className="section__register-title">Criar conta</h2>
          <p className="section__register-description">
            Não possui uma conta? Cadastre-se agora
          </p>
          <div className="label__float">
            <input type="text" placeholder=" " />
            <label>Nome*</label>
          </div>
          <div className="label__float">
            <input type="text" placeholder=" " />
            <label>E-mail*</label>
          </div>
          <div className="label__float">
            <input type="text" placeholder=" " />
            <label>Senha*</label>
          </div>
          <button className="btn__register">Cadastrar</button>
          <Link to={'/signin'}>
            <p>Já possui uma conta?</p>
          </Link>
        </article>
      </section>
    </section>
  );
};

export default Register;
