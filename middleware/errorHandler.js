const ErorrWithHTTPStatus = require('../utils/ErrorWithHttpStatus');

const errorHandler = (err, request, response, next) => {
  console.log(err);
  if (err instanceof ErorrWithHTTPStatus) {
    response.status(err.status).send(`An error has occurred: ${err.message}`);
  }
  console.error(`An error has occurred on the server: ${err}`);
  response.status(500).send(`An error has occurred on the server.`);
};

module.exports = errorHandler;
