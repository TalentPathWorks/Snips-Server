const log = require('../utils/log.utils');

async function logger(request, response, next) {
  try {
    await log(
      'actions.log',
      `Method used: ${request.method} on ${request.path} at ${Date.now()}`
    );
  } catch (err) {
    console.error(err);
    throw err;
  } finally {
    next();
  }
}

module.exports = logger;
