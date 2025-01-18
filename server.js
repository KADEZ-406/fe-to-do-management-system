const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World! algi');
});

const PORT = 3009;
app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
