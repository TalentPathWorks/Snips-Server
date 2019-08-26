const express = require('express');
const cors = require('cors');
const router = require('./routes/snippets.routes.js');
const logger = require('./middleware/logger.js');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = 5000;

/* Middle Ware */
app.use(cors());
app.use(logger);
app.use(express.json()); // Handles JSON in requests
app.use(router);
app.use(errorHandler);

/* Start Server */
app.listen(process.env.PORT || PORT, () => {
  console.log(`Snips server running on port ${PORT}`);
});
