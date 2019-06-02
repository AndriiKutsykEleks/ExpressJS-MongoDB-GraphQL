const commentSchema = {
    type: 'object',
    required: ['productId', 'userId', 'message', 'date', 'stars'],
    properties: {
        id: { type: 'string' },
        productId: { type: 'string' },
        userId: { type: 'string' },
        message: { type: 'string' },
        date: { type: 'number' },
        categoryId: { type: 'string' },
        stars: { type: 'number' }
    }
};

module.exports = commentSchema;
