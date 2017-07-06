const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
const config = require('./config.json');
const pc = require('./productsController');

const app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

const connectionString = config.connectionString;
massive(connectionString).then( dbInstance => app.set('db', dbInstance) ); 

// ================ ENDPOINTS ===========
app.get('/api/products', pc.getAll);
app.get('/api/product/:id', pc.getOne);
app.put('/api/product/:id', pc.update);
app.post('/api/product', pc.create);
app.delete('/api/product/:id', pc.delete);


app.listen(3000, () => console.log("Listening on port 3000"));