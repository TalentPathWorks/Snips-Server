const fs = require('fs').promises;
const path = require('path');
/* Create */
exports.create = () =>{
  
}
/* Read */
exports.select = async (query = {}) => {
  try {
    const dbpath = path.join(__dirname,'..','db','snipfpets.json');
    const snippets = JSON.parse(await fs.readFile(dbpath));
    // Filter Snipets with a query
    const filtered = snippets.filter(snippet =>
      Object.keys(query).every(key => query[key] === snippet[key])
    );
    return filtered;
  }
  catch(err){
    console.log(`\t (!) An error has occured: ${err}.`);
    throw err;
  }
}
/* Update */
exports.update = () =>{

}
/* Delete */
exports.delete = () =>{
  
}