const productSchema = require('./Product');
const orderSchema = {
    type: 'object',
    required: ['userId', 'products', 'date', 'status'],
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

module.exports = orderSchema;
