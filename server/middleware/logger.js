const log = require('../utils/log.utils');

async function logger(request, response, next) {
  try {
    await log(
      'log.txt',
      `Method used: ${request.method} on ${request.path} at ${Date.now()}`
    );
  } catch (err) {
    console.error(err);
  } finally {
    next();
  }
}

module.exports = logger;
