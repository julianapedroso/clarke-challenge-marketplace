import React from 'react';
import './styles.scss';
// Component
import { TableProviders } from '../../components';

const Home = () => {
  return (
    <main className="Home">
      <h1 className="home__title">
        Encontre o melhor fornecedor de acordo com sua necessidade
      </h1>
      <p className="home__description">
        Pesquise pela sua demanda de kWh mensal
      </p>
      <section className="home__result-finded">
        <input
          className="home__input-kwh"
          type="number"
          min={0}
          max={1000}
          placeholder="Demanda de kWh"
        />
        <button className="btn__find-provider">Encontrar fornecedor</button>
      </section>

      <section className="home__providers">
        <h2 className="home__providers-title">Fornecedores</h2>
        <p>Gerencie suas fornecedores</p>
        <TableProviders />
      </section>
    </main>
  );
};

export default Home;
