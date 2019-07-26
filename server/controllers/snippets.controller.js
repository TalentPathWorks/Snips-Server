const Snippet = require('../models/Snippet.model.js');
const ErrorWithHTTPStatus = require('../utils/ErrorWithHttpStatus');
// TODO: Add error handling
exports.createSnippet = async (request, response, next) => {
  try {
    const snippet = await Snippet.insert(request.body);
    response.status(201).send(snippet);
  } catch (err) {
    next(err);
  }
};

exports.getAllSnippets = async (request, response, next) => {
  try {
    const snippets = await Snippet.select(request.query);
    if (snippets.length === 0) {
      throw new ErrorWithHTTPStatus(
        `Nothing was found with that ID or PARAMS.`,
        404
      );
    }
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
      throw new ErrorWithHTTPStatus(`ID does not exists in DB.`, 404);
    }
    response.status(200).send(snippet);
  } catch (err) {
    next(err);
  }
};

exports.updateSnippet = async (request, response, next) => {
  try {
    const { id } = request.params;
    const { body } = request;
    const message = await Snippet.update(`${id}`, body);
    response.status(200).send(message);
  } catch (err) {
    next(err);
  }
};

exports.deleteSnippet = async (request, response, next) => {
  try {
    const { id } = request.params;
    await Snippet.delete(`${id}`);
    response.status(200).send(`Deleted ID: ${id}`);
  } catch (err) {
    next(err);
  }
};
