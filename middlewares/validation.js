const { sendService, validateService } = require('./../services');

const validationMiddleware = (schema, type) => {
    return (req, res, next) => {
        const result = validateService.validateRequestData(req, res, { schema, type });
        result.valid ? next() : sendService.sendError(res, result.message, 400);
    };
};

module.exports = validationMiddleware;
