import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const TableProviders = (props) => {
  const {
    logo,
    name,
    homeState,
    costKwh,
    minKwhLimit,
    totalNumberCustomers,
    averageCustomerRating,
  } = props;
  return (
    <main className="TableProviders">
      <tr className="table__content-row">
        <td>
          <img className="table__content-logo" src={logo} alt="Provider logo" />
        </td>
        <td className="table__row">{name}</td>
        <td className="table__row">{homeState}</td>
        <td className="table__row">R$ {costKwh}</td>
        <td className="table__row">{minKwhLimit}</td>
        <td className="table__row">{totalNumberCustomers}</td>
        <td className="table__row">{averageCustomerRating}/10</td>
        <td className="table__row">
          <button className="btn__choose">Escolher</button>
        </td>
      </tr>
    </main>
  );
};

TableProviders.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  homeState: PropTypes.string.isRequired,
  costKwh: PropTypes.number.isRequired,
  minKwhLimit: PropTypes.number.isRequired,
  totalNumberCustomers: PropTypes.number.isRequired,
  averageCustomerRating: PropTypes.number.isRequired,
};

export default TableProviders;
