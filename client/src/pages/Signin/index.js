import React, { useState, useContext } from 'react';
// Context
import { AuthContext } from '../../context/auth';
import { Link } from 'react-router-dom';
import './styles.scss';
// Assets
import Logo from '../../assets/img/clarke-logo.svg';
import Cover from '../../assets/icons/cover-login.svg';

const Signin = () => {
  const { authenticated, login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('aqui', { email, password });
    login(email, password);
  };

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
          <p>{String(authenticated)}</p>
          <form className="section__form" onSubmit={handleSubmit}>
            <div className="label__float">
              <input
                type="email"
                name="email"
                id="email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>E-mail*</label>
            </div>
            <div className="label__float">
              <input
                type="password"
                name="password"
                id="password"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Senha*</label>
            </div>
            <button className="btn__signin" type="submit">
              Login
            </button>
          </form>
          <Link to={'/signup'}>
            <p>Ainda não tem uma conta?</p>
          </Link>
        </article>
      </section>
    </section>
  );
};

export default Signin;
