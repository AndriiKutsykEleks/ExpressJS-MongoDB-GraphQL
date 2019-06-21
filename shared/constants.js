const REST_METHODS_WITH_ID = ['DELETE', 'PUT'];

const SCHEMAS = Object.freeze({
    CATEGORY: 'category',
    COMMENT: 'comment',
    ORDER: 'order',
    PRODUCT: 'product',
    USER: 'user'
});

const SCHEMAS_TYPE = Object.freeze({
    CREATE: 'createSchema',
    UPDATE: 'updateSchema'
});

module.exports = {
    REST_METHODS_WITH_ID,
    SCHEMAS,
    SCHEMAS_TYPE
};
