const appRouter = app => {
    app.get('/', (req, res) => {
        res.status(200).send('Welcome to our Web Shop');
    });

    app.get('/product', (req, res) => {
        const data = ({
            id: 1,
            name: 'TV',
            costs: 12000,
            quantity: 1,
            extra: 'additional',
            categoryId: 1
        });
        res.status(200).send(data);
    });

    app.get('/category', (req, res) => {
        const data = ({
            id: 1,
            parentId: 1,
            name: 'TV & Monitors'
        });
        res.status(200).send(data);
    });

    app.get('/order', (req, res) => {
        const data = ({
            id: 1,
            userId: 1,
            products: [1],
            date: 1555230700,
            status: 'pending'
        });
        res.status(200).send(data);
    });

    app.get('/comment', (req, res) => {
        const data = ({
            id: 1,
            productId: 1,
            userId: 1,
            message: 'Hi',
            date: 1555230700,
            stars: 5
        });
        res.status(200).send(data);
    });

    app.get('/user', (req, res) => {
        const data = ({
            firstName: 'Andriy',
            lastName: 'Kutsyk',
            username: 'andrii.kutsyk',
            email: 'andrii.kutsyk@eleks.com'
        });
        res.status(200).send(data);
    });

};

module.exports = appRouter;
