const express = require('express');
const snippets = require('../controllers/snippets.controller.js');

const router = express.Router();

router.get('/', (request, response) => {
  response.end('Welcome to Snips home route!');
});
router.get('/api/snippets', snippets.getAllSnippets);
router.post('/api/snippets', snippets.createSnippet);
router.get('/api/snippets/:id', snippets.getSnippetByID);
router.patch('/api/snippets/:id', snippets.updateSnippet);
router.delete('/api/snippets/:id', snippets.deleteSnippet);
module.exports = router;
