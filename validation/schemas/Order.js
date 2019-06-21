const productSchema = require('./Product');
const { SCHEMAS_TYPE } = require('./../../shared/constants');

const orderSchema = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        userId: { type: 'string' },
        products: {
            type: 'array',
            items: productSchema
        },
        date: { type: 'number' },
        status: { type: 'string' }
    }
};

const createSchema = Object.assign({
    required: ['userId', 'products', 'date', 'status'],
}, orderSchema);

const updateSchema = Object.assign({
    required: ['id']
}, orderSchema);

module.exports = {
    [SCHEMAS_TYPE.CREATE]: createSchema,
    [SCHEMAS_TYPE.UPDATE]: updateSchema
};
