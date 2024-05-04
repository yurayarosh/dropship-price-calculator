import { useMemo, useState } from 'react';

import './App.scss';

function App() {
  const [productCost, setProductCost] = useState('100');
  const [ebayFee, setEbayFee] = useState('15');
  const [fixedTransactionFee, setFixedTransactionFee] = useState('0.3');
  const [profit, setProfit] = useState('10');

  const calculatePrice = (prf: number) => {
    return (Number(productCost) + Number(fixedTransactionFee) + prf) / (1 - Number(ebayFee) / 100);
  };

  const breakevenProfit = useMemo(() => {
    return calculatePrice(0);
  }, [productCost, ebayFee, fixedTransactionFee]);

  const soldPrice = useMemo(() => {
    return calculatePrice(Number(profit));
  }, [productCost, ebayFee, fixedTransactionFee, profit]);

  return (
    <div id="App">
      <form action="">
        <div>
          <label htmlFor="product-cost">Product cost:</label>
          <input
            type="number"
            name="product-cost"
            id="product-cost"
            min={0}
            value={productCost}
            onChange={e => setProductCost(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="fees">Fees:</label>
          <input
            type="number"
            name="fees"
            id="fees"
            value={ebayFee}
            min={0}
            onChange={e => setEbayFee(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="fee-ammount">Fee ammount:</label>
          <input
            type="number"
            name="fee-ammount"
            id="fee-ammount"
            value={fixedTransactionFee}
            min={0}
            onChange={e => setFixedTransactionFee(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="profit">Profit:</label>
          <input
            type="number"
            name="profit"
            id="profit"
            value={profit}
            onChange={e => setProfit(e.target.value)}
          />
        </div>
      </form>

      <dl>
        <dt>Break even profit:</dt>
        <dd>{breakevenProfit.toFixed(2)}</dd>
        <dt>Sold price:</dt>
        <dd>{soldPrice.toFixed(2)}</dd>
      </dl>
    </div>
  );
}

export default App;
