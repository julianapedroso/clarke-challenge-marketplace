import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './styles.scss';
// API
import { getProviderById } from '../../services/api';
// Components
import { Navbar } from '../../components';

const ProviderDetails = () => {
  const [providerDetails, setProviderDetails] = useState([]);
  const [isToggleOn, setIsToggleOn] = useState(false);
  const { _id } = useParams();

  useEffect(() => {
    getProviderDetails();
  }, []);

  const getProviderDetails = async () => {
    try {
      const response = await getProviderById();
      setProviderDetails(response.data.providers);
    } catch (error) {
      console.log(error);
    }
  };

  const handleButtonToggle = () => {
    if (window.confirm('Deseja contratar este fornecedor?')) {
      setIsToggleOn(!isToggleOn);
    }
    return;
  };

  return (
    <>
      <Navbar />
      <section className="ProviderDetails">
        {providerDetails
          .filter((provider) => provider._id === _id)
          .map((provider) => {
            const {
              _id,
              name,
              logo,
              averageCustomerRating,
              costKwh,
              minKwhLimit,
              totalNumberCustomers,
            } = provider;
            return (
              <section className="details__section" key={_id}>
                <img src={logo} alt="Provider logo" />
                <hr />
                <section className="section__info">
                  <h2>Informações do Fornecedor</h2>
                  <h3>
                    Companhia Elétrica: <strong>{name}</strong>
                  </h3>
                </section>
                <table>
                  <thead>
                    <tr className="table__title-header">
                      <th className="table__header">Custo kWh</th>
                      <th className="table__header">Limite mínimo kWh</th>
                      <th className="table__header">Total de clientes</th>
                      <th className="table__header">Avaliação</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table__content-row">
                      <td className="table__row">R$ {costKwh}</td>
                      <td className="table__row">{minKwhLimit}</td>
                      <td className="table__row">{totalNumberCustomers}</td>
                      <td className="table__row">{averageCustomerRating}/10</td>
                    </tr>
                  </tbody>
                </table>
                <div className="table__footer">
                  <p>Subtotal: $ {costKwh}</p>
                  <p>Total: $ {Math.round(costKwh * minKwhLimit)}</p>
                </div>
                <section className="section__btn">
                  <button
                    className={
                      'btn__choose ' + (isToggleOn ? '' : 'toggle__close')
                    }
                    onClick={handleButtonToggle}
                  >
                    {isToggleOn ? 'Contratado' : 'Contratar'}
                  </button>
                </section>
              </section>
            );
          })}
      </section>
    </>
  );
};

export default ProviderDetails;
