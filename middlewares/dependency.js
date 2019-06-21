const { errorService, validateService } = require('./../services');

const dependencyMiddleware = (model, key) => {
    return async (req, res, next) => {
        const valid = await validateService.isDataExist(req, res, { model, key });
        valid ? next() : errorService.sendError(res, `${key} value not exist`, 400);
    };
};

module.exports = dependencyMiddleware;
