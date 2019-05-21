const Ajv = require('Ajv');
const errorService = require('./errorService');
const validationSchemas = require('./../validation/schemas');

const validateData = (res, data, type) => {
    const ajv = new Ajv({ allErrors: true });

    try {
        const validationSchema = validationSchemas[type];

        if (validationSchema) {
            const valid = ajv.validate(validationSchema, data);

            if (!valid) {
                throw new Error(`${ajv.errors[0].dataPath} ${ajv.errors[0].message}`);
            }

            return valid;
        } else {
            throw new Error('Validation schema is not finding ');
        }
    } catch (err) {
        errorService(res, err.message);
    }
};

module.exports = { validateData };
