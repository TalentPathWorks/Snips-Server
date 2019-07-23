const controller = require('./models/Snippet.model.js');

async function testModels() {
  try{
    // Testing Select
    /*********************************************
    const snippets = await controller.select({id: '1'});
    console.log(snippets);
    //*////////////////////////////////////////////////

    // Testing Insert
    //*********************************************
    const snippet = await controller.insert({author: "Robert",code: "console.log(Hello World);",description: "It displays hello world", title: "adsf", language: "javascript"}); 
    console.log(snippet);
    //*////////////////////////////////////////////////
    
  }catch(err){
    console.error(`\t(!) An error has occurred: ${err}`);
  }
}
testModels();