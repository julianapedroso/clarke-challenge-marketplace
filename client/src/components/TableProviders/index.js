import React from 'react';
import './styles.scss';

const TableProviders = ({
  logo,
  name,
  homeState,
  costKwh,
  minKwhLimit,
  totalNumberCustomers,
  averageCustomerRating,
}) => {
  return (
    <main className="TableProviders">
      <table>
        <tr className="table__title-header">
          <th className="table__header">Logo</th>
          <th className="table__header">Companhia</th>
          <th className="table__header">Estado</th>
          <th className="table__header">Custo kWh</th>
          <th className="table__header">Limite mínimo kWh</th>
          <th className="table__header">Nº Clientes</th>
          <th className="table__header">Avaliações</th>
          <th className="table__header">Ações</th>
        </tr>
        <tr className="table__content-row">
          <td className="table__row row__image">
            <img
              src="https://seeklogo.com/images/L/Light_Logomarca-logo-0C4DF9D65C-seeklogo.com.png"
              alt=""
            />
          </td>
          <td className="table__row">LIGHT</td>
          <td className="table__row">SP</td>
          <td className="table__row">R$ 0.89</td>
          <td className="table__row">30</td>
          <td className="table__row">1.000.000</td>
          <td className="table__row">7/10</td>
          <td className="table__row">
            <button className="btn__choose">Escolher</button>
          </td>
        </tr>
        <tr className="table__content-row">
          <td className="table__row row__image">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/EDP_logo.svg/1200px-EDP_logo.svg.png"
              alt=""
            />
          </td>
          <td className="table__row">EDP BANDEIRANTE</td>
          <td className="table__row">SP</td>
          <td className="table__row">R$ 0.92</td>
          <td className="table__row">35</td>
          <td className="table__row">689.000</td>
          <td className="table__row">9/10</td>
          <td className="table__row">
            <button className="btn__choose">Escolher</button>
          </td>
        </tr>
        <tr className="table__content-row">
          <td className="table__row row__image">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Enel_Group_logo.svg/1024px-Enel_Group_logo.svg.png"
              alt=""
            />
          </td>
          <td className="table__row">ENEL</td>
          <td className="table__row">RJ</td>
          <td className="table__row">R$ 0.83</td>
          <td className="table__row">30</td>
          <td className="table__row">129.750</td>
          <td className="table__row">4/10</td>
          <td className="table__row">
            <button className="btn__choose">Escolher</button>
          </td>
        </tr>
      </table>
    </main>
  );
};

export default TableProviders;
