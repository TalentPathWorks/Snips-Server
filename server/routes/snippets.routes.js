const express = require('express');
const controller = require('../models/Snippet.model.js');

const router = express.Router();

router.get('/', (request, response) => {
  console.log('WE IN ROUTER;')
  response.end('HELLO');
});
router.get('/api/snippets', async (request, response) => {
  const snippets = await controller.select();
  response.status(200).send(snippets);
});
router.get('/api/snippets/:id', async (request, response) => {
  const { id } = request.params;
  const snippet = await controller.select({ id: `${id}` });
  response.send(snippet);
});
router.post('/api/snippets', (request, response) => {
  // Something happens
});
router.patch('/api/snippets/:id', async (request, response) => {
  const { id } = request.params;
  const snippet = await controller.update();
  response.send(snippet);
});
router.delete('/api/snippets/:id', async (request, response) => {
  const { id } = request.params;
  const snippet = await controller.delete({ id: `${id}` });
  response.send(snippet);
});
module.exports = router;
