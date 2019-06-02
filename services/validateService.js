const Ajv = require('Ajv');
const crudService = require('./crudService');
const validationSchemas = require('./../validation/schemas');
const { REST_METHODS_WITH_ID } = require('./../shared/constants');

const isDataExist = (req, res, params) => {
    const value = req.body[params.key];

    let valid = true;

    if (value) {
        if (Array.isArray(value)) {
            value.every(item => {
                if (valid) {
                    valid = isDataExistById(params.model, res, item.id);
                } else {
                    return valid;
                }
            });
        } else {
            valid = isDataExistById(params.model, res, value);
        }
    }

    return valid;
};

const isDataExistById = (model, res, value) => {
    return !!crudService.findById(model, res, value, false);
};

const validateRequestData = (req, res, params) => {
    const ajv = new Ajv({ allErrors: true });
    const id = REST_METHODS_WITH_ID.includes(req.method) ? req.params.id : '';
    const validationSchema = validationSchemas[params.schema];
    const validationSchemaByType = validationSchema && validationSchema[params.type];

    let valid = false;
    let message = 'Validation schema is not finding';

    if (validationSchemaByType) {
        const data = id ? Object.assign({ id }, req.body) : req.body

        valid = ajv.validate(validationSchemaByType, data);
        message = !valid ? `${ajv.errors[0].dataPath} ${ajv.errors[0].message}` : '';
    }

    return { valid, message };
};

const validateService = {
    isDataExist,
    validateRequestData
};

module.exports = validateService;
