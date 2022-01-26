import React, { useEffect, useState } from 'react';
import './styles.scss';
// API
import api from '../../services/api';
// Component
import { TableProviders } from '../../components';

const Home = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    getAllProviders();
  }, []);

  const getAllProviders = async () => {
    try {
      const response = await api.get('/providers');
      setProviders(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
        <article className="table__providers">
          <table>
            <thead>
              <tr className="table__title-header">
                <th className="table__header">Logo</th>
                <th className="table__header company">Companhia</th>
                <th className="table__header state">Estado</th>
                <th className="table__header cost">Custo kWh</th>
                <th className="table__header min-limit">Limite min kWh</th>
                <th className="table__header customers">Nº Clientes</th>
                <th className="table__header ratings">Avaliações</th>
                <th className="table__header actions">Ações</th>
              </tr>
            </thead>
            <tbody>
              {providers.map((provider) => {
                const {
                  _id,
                  logo,
                  name,
                  homeState,
                  costKwh,
                  minKwhLimit,
                  totalNumberCustomers,
                  averageCustomerRating,
                } = provider;
                return (
                  <div key={_id}>
                    <TableProviders
                      logo={logo}
                      name={name}
                      homeState={homeState}
                      costKwh={costKwh}
                      minKwhLimit={minKwhLimit}
                      totalNumberCustomers={totalNumberCustomers}
                      averageCustomerRating={averageCustomerRating}
                    />
                  </div>
                );
              })}
            </tbody>
          </table>
        </article>
      </section>
    </main>
  );
};

export default Home;
