module.exports = {
    create: (req, res) => {
        const dbInstance = req.app.get('db');
        const { part_num, id, price, img } = req.body;

        dbInstance.create_product([part_num, id, price, img]).then(()=> res.sendStatus(200)).catch(err => {
            res.status(500).send({errorMessage: "Something went wrong! Please try again."});
            console.log(err)
        });
    },

    getOne: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.read_product([params.id]).then(product =>res.status(200).send(product)).catch(err => {
            res.status(500).send({errorMessage: "Something went wrong! Please try again."});
            console.log(err)
        });
    },

    getAll: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_products().then(products => res.status(200).send(products)).catch(err => {
            res.status(500).send({errorMessage: "Something went wrong! Please try again."});
            console.log(err)
        });
    },

    update: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
        
        dbInstance.update_product([params.id]).then(()=> res.sendStatus(200)).catch(err => {
            res.status(500).send({errorMessage: "Something went wrong! Please try again."});
            console.log(err)
        });
    },

    delete: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.delete_product([params.id]).then(()=> res.sendStatus(200)).catch(err => {
            res.status(500).send({errorMessage: "Something went wrong! Please try again."});
            console.log(err)
        });
    }
}