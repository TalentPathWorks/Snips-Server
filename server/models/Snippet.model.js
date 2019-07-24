const shortid = require('shortid');
const { readJsonFromFile, writeJsonFromFile } = require('../utils/db.utils.js');
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
 * Inserts a snippet into the database
 * @param {Snippet} newSnippet the data to create the snippet with
 * @returns {Promise<Snippet>} the created snippet
 */
exports.insert = async ({ author, code, title, description, language }) => {
  try {
    if (!author || !code || !title || !description || !language) {
      throw new Error('Missing Parameters when inserting into database.');
    }
    const snippets = await readJsonFromFile('snippets');
    // generate default data
    snippets.push({
      id: shortid.generate(),
      author,
      title,
      code,
      description,
      language,
      comments: [],
      favorites: 0
    });
    writeJsonFromFile('snippets', snippets);
    return snippets[snippets.length - 1];
  } catch (err) {
    throw err;
  }
};
/**
 * Selects snippets from database
 * @param {object{}} [query] Optional if you want a specific records.
 * @returns {Promise<Snippet[]>} Ann array of objects
 */
exports.select = async (query = {}) => {
  try {
    const snippets = await readJsonFromFile('snippets');
    const filtered = snippets.filter(snippet =>
      Object.keys(query).every(key => query[key] === snippet[key])
    );
    return filtered;
  } catch (err) {
    throw err;
  }
};
/* Update */
exports.update = async (id, query) => {
  const snippet = await readJsonFromFile('snippets');
  const newSnippet = snippet.map(snip => {
    // CODE
  });
  return writeJsonFromFile('snippets', newSnippet);
};
/**
 *
 */
exports.delete = async id => {
  // Filter snippets for everything except snippet.id === id
  const snippet = await readJsonFromFile('snippets');
  const newSnippet = snippet.filter(snip => {
    if (snip.id !== id) return snip;
  });
  return writeJsonFromFile('snippets', newSnippet);
};
