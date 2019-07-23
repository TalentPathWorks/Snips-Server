const controller = require('./models/Snippet.model.js');

async function testModels() {
  try{
    const snippets = await controller.select({id: '1'});
    console.log(snippets)
  }catch(err){
    console.log(`\tOOPSIE WOOPSIE: ${err}`)

  }
    
}
testModels();