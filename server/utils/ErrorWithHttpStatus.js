/**
 *  Error object containing user friendly message and
 *  a HTTP status.
 */
class ErrorWithHttpStatus extends Error {
  /**
   *
   * @param {string} message user-friendly error message that can be displayed in the front end
   * @param {number}  status HTTP status code
   */
  constructor(message, status = 500) {
    super(message);
    this.status = status;
  }
}

module.exports = ErrorWithHttpStatus;
