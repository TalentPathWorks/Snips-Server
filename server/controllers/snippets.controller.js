const Snippet = require('../models/Snippet.model.js');
const ErorrWithHTTPStatus = require('../utils/ErrorWithHttpStatus');
// TODO: Add error handling
exports.createSnippet = async (request, response) => {
  const snippet = await Snippet.insert(request.body);
  response.status(201).send(snippet);
};

exports.getAllSnippets = async (request, response, next) => {
  try {
    const snippets = await Snippet.select(request.query);
    response.status(200).send(snippets);
  } catch (err) {
    next(err);
  }
};

exports.getSnippetByID = async (request, response, next) => {
  try {
    const { id } = request.params;
    const snippet = await Snippet.select({ id: `${id}` });
    if (snippet.length === 0) {
      throw new ErorrWithHTTPStatus(`ID does not exists in DB.`, 404);
    }
    response.status(200).send(snippet);
  } catch (err) {
    next(err);
  }
};

exports.updateSnippet = async (request, response, next) => {
  try {
    const { id } = request.params;
    const snippet = await Snippet.update();
    response.status(200).send(snippet);
  } catch (err) {
    next(err);
  }
};

exports.deleteSnippet = async (request, response, next) => {
  try {
    const { id } = request.params;
    await Snippet.delete(`${id}`);
    response.status(500).send(`Deleted ID: ${id}`);
  } catch (err) {
    next(err);
  }
};
