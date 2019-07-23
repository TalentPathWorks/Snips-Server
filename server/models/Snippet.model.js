const fs = require('fs').promises;
const path = require('path');
const shortid = require('shortid');
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
exports.insert = async ({author, code, title, description, language}) => {
  try{
    if(!author || !code || !title || !description || !language){
      throw new Error("Missing Parameters when inserting into database.");
    }
    const dbpath = path.join(__dirname,'..','db','snippets.json');
    const snippets = JSON.parse(await fs.readFile(dbpath));
    //generate default data
    snippets.push({
      id: shortid.generate(),
      author,
      title,
      description,
      language,
      comments: [],
      favorites: 0
    });
    await fs.writeFile(dbpath,JSON.stringify(snippets));
    return snippets[snippets.length -1];

  }catch(err){
    throw err;
  }
  
}
/**
 * Selects snippets from database
 * @param {object{}} [query] Optional if you want a specific records.
 * @returns {Promise<Snippet[]>} Ann array of objects
 */
exports.select = async (query = {}) => {
  try {
    const dbpath = path.join(__dirname,'..','db','snippets.json');
    const snippets = JSON.parse(await fs.readFile(dbpath));
    const filtered = snippets.filter(snippet =>
      Object.keys(query).every(key => query[key] === snippet[key])
    );
    return filtered;
  }
  catch(err){
    throw err;
  }
}
/* Update */
exports.update = () =>{

}
/* Delete */
exports.delete = () =>{
  
}