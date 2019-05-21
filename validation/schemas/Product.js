const productSchema = {
    type: 'object',
    required: ['name', 'costs', 'quantity', 'categoryId'],
    properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        costs: { type: 'number' },
        quantity: { type: 'number' },
        extra: { type: 'string' },
        categoryId: { type: 'string' }
    }
};

module.exports = productSchema;
