const boom = require('@hapi/boom');

function validationHandler(schema, check = 'body') {
  return async function (req, res, next) {
    try {
      await schema.validateAsync(req[check]);
      next();
    } catch (err) {
      next(boom.badRequest(err));
    }
  };
}

module.exports = validationHandler;
