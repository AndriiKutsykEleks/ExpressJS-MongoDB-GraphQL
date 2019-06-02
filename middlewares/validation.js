const errorService = require('./../services/errorService');
const validateService = require('./../services/validateService');

const validationMiddleware = (type) => (req, res, next) => {
    const valid = validateService.validateData(res, req.body, type);
    valid ? next() : errorService.sendError(res, result.message, 400);
};

module.exports = validationMiddleware;
