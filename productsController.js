module.exports = {
    create: (req, res) => {
        const dbInstance = req.app.get('db');
        const {name, description, price, imageUrl} = req.body;

        dbInstance.createProduct( [name, description, price, imageUrl] )
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    },
    getOne: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.readProduct( [req.params.id] )
        .then( product => res.status(200).send(product) )
        .catch( () => res.status(500).send());
    },
    getAll: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.readProducts()
        .then( products => res.status(200).send(products) )
        .catch( () => res.status(500).send() );
    },
    update: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.updateProduct( [req.params.id, req.query.desc] )
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    },
    delete: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.deleteProduct([req.params.id])
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    }
}