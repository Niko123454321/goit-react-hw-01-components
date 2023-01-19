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
        {items.map(transaction => {
        return  (<tr  className={css.nameItem} key={transaction.id }>
      <td className={css.elem}>{transaction.type}</td>
      <td className={css.elem}>{transaction.amount}</td>
      <td className={css.elem}>{transaction.currency}</td>
    </tr>)
        }
          
          )}
   

  </tbody>
</table>
    )
}