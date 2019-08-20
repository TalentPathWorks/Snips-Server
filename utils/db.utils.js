const fs = require('fs').promises;
const path = require('path');
const ErrorWithHTTPStatus = require('../utils/ErrorWithHttpStatus');

/**
 * @typedef {Object} Snippet
 * @property {string} id
 * @property {string} author
 * @property {string} code
 * @property {string} title
 * @property {string} description
 * @property {string} language
 * @property {string[]} comments
 * @property {number} favorites
 */
/**
 * Gets the relative file path of the filename
 * @param {string} resource Filename
 * @returns {string} directory of the filename
 */
const dbpath = resource => path.join(__dirname, '..', 'db', `${resource}.json`);
/**
 * Reads json object from a file
 * @param {string} fileName Takes in a filename with no extensions ie. snippets
 * @returns {Promise<Snippet[]>} Returns an array of snippets
 */
exports.readJsonFromFile = async fileName => {
  try {
    return JSON.parse(await fs.readFile(dbpath(fileName)));
  } catch (err) {
    throw new ErrorWithHTTPStatus('Error accessing Database.', 500);
  }
};
/**
 * Writes to a json file
 * @param {string} fileName Takes in a filename with no extension. ie. snippets
 * @param {Snippet[]} data An array of Snippet Objects
 */
exports.writeJsonFromFile = (fileName, data) => {
  try {
    fs.writeFile(dbpath(fileName), JSON.stringify(data));
  } catch (err) {
    throw new ErrorWithHTTPStatus('Error writing to Database', 500);
  }
};
