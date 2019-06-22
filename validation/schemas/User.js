const { SCHEMAS_TYPE } = require('./../../shared/constants');

const userSchema = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        dob: { type: 'number' },
        isAdmin: { type: 'boolean' },
        password: { type: 'string' }
    }
};

const createSchema = Object.assign({
    required: ['firstName', 'lastName', 'dob', 'password']
}, userSchema);

const readSchema = Object.assign({
    required: ['firstName', 'password']
}, userSchema);

const updateSchema = Object.assign({
    required: ['id']
}, userSchema);

module.exports = {
    [SCHEMAS_TYPE.CREATE]: createSchema,
    [SCHEMAS_TYPE.READ]: readSchema,
    [SCHEMAS_TYPE.UPDATE]: updateSchema
};
