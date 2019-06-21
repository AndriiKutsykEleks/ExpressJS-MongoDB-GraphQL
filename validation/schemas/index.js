const category = require('./Category');
const comment = require('./Comment');
const order = require('./Order');
const product = require('./Product');
const user = require('./User');
const { SCHEMAS } = require('./../../shared/constants');

module.exports = {
    [SCHEMAS.CATEGORY]: category,
    [SCHEMAS.COMMENT]: comment,
    [SCHEMAS.ORDER]: order,
    [SCHEMAS.PRODUCT]: product,
    [SCHEMAS.USER]: user
};
