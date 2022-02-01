import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
// API
import { getProviders } from '../../services/api';
// Components
import { Footer, Navbar, Pagination, TableProviders } from '../../components';

const Home = () => {
  const [providers, setProviders] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [itemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    getAllProviders();
  }, []);

  const getAllProviders = async () => {
    try {
      const response = await getProviders();
      setProviders(response.data.providers);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeInputValue = (event) => {
    setInputValue(event.target.value);
  };

  // Pagination
  const pages = Math.ceil(providers.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = providers.slice(startIndex, endIndex);

  return (
    <>
      <Navbar />
      <main className="Home">
        <h1 className="home__title">
          Encontre o melhor fornecedor de acordo com sua necessidade
        </h1>
        <p className="home__description">
          Pesquise pela demanda mínima de kWh desejada
        </p>
        <section className="home__result-finded">
          <input
            className="home__input-kwh"
            type="number"
            min={0}
            max={100}
            placeholder="Demanda de kWh"
            value={inputValue}
            onChange={onChangeInputValue}
          />
          <button className="btn__find-provider">Encontrar fornecedor</button>
        </section>

        <section className="home__providers">
          <h2 className="home__providers-title">Fornecedores</h2>
          <p>Gerencie seus fornecedores</p>
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
                {!!currentItems &&
                  currentItems
                    .filter((provider) => provider.minKwhLimit >= inputValue)
                    .map((provider) => {
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
                          <Link to={`/providers/${_id}`}>
                            <TableProviders
                              logo={logo}
                              name={name}
                              homeState={homeState}
                              costKwh={costKwh}
                              minKwhLimit={minKwhLimit}
                              totalNumberCustomers={totalNumberCustomers}
                              averageCustomerRating={averageCustomerRating}
                            />
                          </Link>
                        </div>
                      );
                    })}
              </tbody>
            </table>
            <Pagination
              pages={pages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
