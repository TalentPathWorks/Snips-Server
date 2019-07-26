const express = require('express');
const router = require('./routes/snippets.routes.js');
const logger = require('./middleware/logger.js');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = 5000;

/* Middle Ware */
app.use(logger);
app.use(express.json()); // Handles JSON in requests
app.use(router);
app.use(errorHandler);

/* Start Server */
app.listen(PORT, () => {
  console.log(`Snips server is running on port: ${PORT}`);
});
