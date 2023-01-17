export const TransactionHistory = ({ items }) => {
  return (
  <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

      <tbody>
        {items.map(transaction => {
        return  (<tr key={transaction.id}>
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </tr>)
        }
          
          )}
   

  </tbody>
</table>
    )
}