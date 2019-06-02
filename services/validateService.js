const Ajv = require('Ajv');
const validationSchemas = require('./../validation/schemas');

const validateData = (res, data, type) => {
    const ajv = new Ajv({ allErrors: true });
    const validationSchema = validationSchemas[type];

    if (validationSchema) {
        const valid = ajv.validate(validationSchema, data);
        return !valid ? { valid, message: `${ajv.errors[0].dataPath} ${ajv.errors[0].message}` } : valid;
    } else {
        return { valid: false, message: 'Validation schema is not finding' };
    }
};

module.exports = { validateData };
