const { SCHEMAS_TYPE } = require('./../../shared/constants');

const userSchema = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        dob: { type: 'number' },
        isAdmin: { type: 'boolean' }
    }
};

const createSchema = Object.assign({
    required: ['firstName', 'lastName', 'dob'],
}, userSchema);

const updateSchema = Object.assign({
    required: ['id'],
}, userSchema);

module.exports = {
    [SCHEMAS_TYPE.CREATE]: createSchema,
    [SCHEMAS_TYPE.UPDATE]: updateSchema
};
