const Table = () => {
  return (
    <table cellPadding="0" cellSpacing="0">
      <tbody>
        <tr className="heading">
          <td>Item</td>

          <td>Price</td>
        </tr>

        <tr className="item last">
          <td>Death Star</td>
          <td>1100,39 EUR</td>
        </tr>
        <tr className="item last">
          <td>Star destroyer</td>
          <td>399,99 EUR</td>
        </tr>

        <tr className="total">
          <td></td>

          <td>Total: 1500,38 EUR</td>
        </tr>
        <tr className="vat">
          <td></td>
          <td>VAT (19%): 285,07 EUR</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
