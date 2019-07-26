const ErorrWithHTTPStatus = require('../utils/ErrorWithHttpStatus');

const errorHandler = (err, request, response, next) => {
  if (err instanceof ErorrWithHTTPStatus) {
    response.status(err.status).send(err.message);
  }
  console.error(`An error has occurred on the server: ${err}`);
  response.status(500).send(`An error has occurred on the server.`);
};

module.exports = errorHandler;
