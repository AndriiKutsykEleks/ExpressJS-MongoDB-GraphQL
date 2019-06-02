const categorySchema = {
    type: 'object',
    required: ['parentId', 'name'],
    properties: {
        id: { type: 'string' },
        parentId: { type: 'string' },
        name: { type: 'string' }
    }
};

module.exports = categorySchema;
