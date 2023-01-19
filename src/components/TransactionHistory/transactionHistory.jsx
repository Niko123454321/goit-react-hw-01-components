import PropTypes from 'prop-types';
import css from "./transactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
  return (
  <table className={css.transaction_history}>
  <thead>
    <tr  className={css.nameColumn}>
      <th  className={css.elem}>Type</th>
      <th className={css.elem}>Amount</th>
      <th className={css.elem}>Currency</th>
    </tr>
  </thead>

      <tbody>
        {items.map(({id,type,amount,currency}) => {
        return  (<tr  className={css.nameItem} key={id }>
      <td className={css.elem}>{type}</td>
      <td className={css.elem}>{amount}</td>
      <td className={css.elem}>{currency}</td>
    </tr>)
        }
          
          )}
   

  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
  }))
}
