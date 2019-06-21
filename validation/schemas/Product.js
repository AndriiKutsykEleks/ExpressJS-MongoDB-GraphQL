const { SCHEMAS_TYPE } = require('./../../shared/constants');

const productSchema = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        costs: { type: 'number' },
        quantity: { type: 'number' },
        extra: { type: 'string' },
        categoryId: { type: 'string' }
    }
};

const createSchema = Object.assign({
    required: ['name', 'costs', 'quantity', 'categoryId'],
}, productSchema);

const updateSchema = Object.assign({
    required: ['id'],
}, productSchema);

module.exports = {
    [SCHEMAS_TYPE.CREATE]: createSchema,
    [SCHEMAS_TYPE.UPDATE]: updateSchema
};
