const errorService = require('./../services/errorService');
const validateService = require('./../services/validateService');

const validationMiddleware = (schema, type) => (req, res, next) => {
    const result = validateService.validateData(req, res, schema, type);
    result.valid ? next() : errorService.sendError(res, result.message, 400);
};

module.exports = validationMiddleware;
