const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.get('/providers', (req, res) => {
  res.send({ express: 'fornecedores' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
