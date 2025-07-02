const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/signals', (req, res) => {
  const pairs = ['USDBDT', 'USDINR', 'USDMXN', 'USDPKR', 'USDBRL', 'USDTRY'];
  const signals = pairs.map(pair => {
    const isBuy = Math.random() > 0.5;
    return {
      pair,
      signal: isBuy ? 'BUY' : 'SELL',
      tp: (isBuy ? 1.1 : 0.9).toFixed(2),
      sl: (isBuy ? 0.9 : 1.1).toFixed(2)
    };
  });
  res.json(signals);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
