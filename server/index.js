const express = require('express');
const router = require('./routes/snippets.routes.js');
const logger = require('./middleware/logger.js');

const app = express();
const PORT = 5000;

app.use(logger);
app.use(router);

app.listen(PORT, () => {
  console.log(`Snips server is running on port: ${PORT}`);
});
