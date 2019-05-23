const errorService = require('./../services/errorService');
const validateService = require('./../services/validateService');

const validationMiddleware = (req, res, next, type) => {
    const result = validateService.validateData(res, req.body, type);
    result.valid ? next() : errorService.sendError(res, result.message);
};

module.exports = validationMiddleware;
