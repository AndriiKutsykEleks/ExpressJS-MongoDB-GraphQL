const APIS = Object.freeze({
    auth: '/auth',
    categories: '/categories',
    comments: '/comments',
    orders: '/orders',
    products: '/products',
    users: '/users'
});

const REST_METHODS = Object.freeze({
    DELETE: 'DELETE',
    GET: 'GET',
    PATCH: 'PATCH',
    POST: 'POST',
    PUT: 'PUT'
});

const REST_METHODS_WITH_ID = [
    REST_METHODS.DELETE,
    REST_METHODS.PUT
];

const SCHEMAS = Object.freeze({
    CATEGORY: 'category',
    COMMENT: 'comment',
    ORDER: 'order',
    PRODUCT: 'product',
    USER: 'user'
});

const SCHEMAS_TYPE = Object.freeze({
    CREATE: 'createSchema',
    READ: 'readSchema',
    UPDATE: 'updateSchema'
});

const URLS = Object.freeze({
    access: [
        {
            methods: [REST_METHODS.POST],
            path: APIS.auth
        },
        {
            methods: [
                REST_METHODS.POST,
                REST_METHODS.PUT
            ],
            path: APIS.users
        }
    ]
});

module.exports = {
    APIS,
    REST_METHODS,
    REST_METHODS_WITH_ID,
    SCHEMAS,
    SCHEMAS_TYPE,
    URLS
};
