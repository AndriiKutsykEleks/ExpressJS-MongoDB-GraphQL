const { SCHEMAS_TYPE } = require('./../../shared/constants');

const categorySchema = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        parentId: { type: 'string' },
        name: { type: 'string' }
    }
};

const createSchema = Object.assign({
    required: ['parentId', 'name']
}, categorySchema);

const updateSchema = Object.assign({
    required: ['id']
}, categorySchema);

module.exports = {
    [SCHEMAS_TYPE.CREATE]: createSchema,
    [SCHEMAS_TYPE.UPDATE]: updateSchema
};
