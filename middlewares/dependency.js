const { errorService, validateService } = require('./../services');

const dependencyMiddleware = (model, key) => {
    return (req, res, next) => {
        const valid = validateService.isDataExist(req, res, { model, key });
        console.log('RESULT', valid);
        valid ? next() : errorService.sendError(res, `${fields.key} value not exist`, 400);
    };
};

module.exports = dependencyMiddleware;
