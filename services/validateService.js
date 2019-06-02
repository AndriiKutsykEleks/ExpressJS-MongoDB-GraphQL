const Ajv = require('Ajv');
const validationSchemas = require('./../validation/schemas');
const { REST_METHODS_WITH_ID } = require('./../shared/constants');

const validateData = (req, res, schema, type) => {
    const ajv = new Ajv({ allErrors: true });
    const id = REST_METHODS_WITH_ID.includes(req.method) ? req.params.id : '';
    const validationSchema = validationSchemas[schema];
    const validationSchemaByType = validationSchema && validationSchema[type];

    if (validationSchemaByType) {
        const data = id ? Object.assign({ id }, req.body) : req.body
        const valid = ajv.validate(validationSchemaByType, data);

        return {
            valid,
            message: !valid ? `${ajv.errors[0].dataPath} ${ajv.errors[0].message}` : ''
        }
    } else {
        return { valid: false, message: 'Validation schema is not finding' };
    }
};

module.exports = { validateData };
