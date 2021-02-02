const express = require('express');
const mongodb = require('./mongodb/mongodb.utils');
const app = express();

const port = 8080;

// Routers
const employeeRouter = require('./routes/api-routes');

app.use(express.json());

app.use('/api', employeeRouter);

app.get('/', (req, res) => {
    res.status(200).json({ hello: 'this is a test' });
    return
})

mongodb.connect();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})