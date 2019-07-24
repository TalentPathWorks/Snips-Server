const controller = require('./models/Snippet.model.js');

async function testSelect() {
  try {
    console.log(`Testing out Select:`);
    const snippets = await controller.select({ id: '1' });
    console.log(snippets);
  } catch (err) {
    console.error(`\t(!) An error has occurred: ${err}`);
  }
}
async function testInsert() {
  try {
    const snippet = await controller.insert({
      author: 'Robert',
      code: 'console.log(Hello World);',
      description: 'It displays hello world',
      title: 'adsf',
      language: 'javascript'
    });
    console.log(snippet);
  } catch (err) {
    console.error(`\t(!) An error has occurred: ${err}`);
  }
}

async function testDelete() {
  try {
    await controller.delete('3CKx3AKD1');
  } catch (err) {
    console.log(`asdf ${err}`);
  }
}
// testSelect();
// testInsert();
testDelete();
