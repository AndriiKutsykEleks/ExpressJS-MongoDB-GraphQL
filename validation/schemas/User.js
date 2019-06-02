const userSchema = {
    type: 'object',
    required: ['firstName', 'lastName', 'dob'],
    properties: {
        id: { type: 'string' },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        dob: { type: 'number' }
    }
};

module.exports = userSchema;
