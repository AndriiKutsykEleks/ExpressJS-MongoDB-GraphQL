const { SCHEMAS_TYPE } = require('./../../shared/constants');

const commentSchema = {
    type: 'object',
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

const createSchema = Object.assign({
    required: ['productId', 'userId', 'message', 'date', 'stars'],
}, commentSchema);

const updateSchema = Object.assign({
    required: ['id'],
}, commentSchema);

module.exports = {
    [SCHEMAS_TYPE.CREATE]: createSchema,
    [SCHEMAS_TYPE.UPDATE]: updateSchema
};
