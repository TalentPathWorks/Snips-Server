const fs = require('fs').promises;
const path = require('path');
/**
 * Logs the message on the filename in the /logs/ directory in server folder
 * @param {string} filename Filename of the logs being appended
 * @param {string} message Message to be appended
 */
async function log(filename, message) {
  try {
    const filePath = path.join(__dirname, '../logs/');
    await fs.appendFile(`${filePath}${filename}`, `${message}\n`);
  } catch (err) {
    throw err;
  }
}
module.exports = log;
