const express = require('express');
const app = express();

const port = 8080;

// Routers
const employeeRouter = require('./routes/api-routes');

app.use(express.json());

app.use('/api', employeeRouter);

app.get('/', (req, res) => {
    res.status(200).json({ hello: 'this is a test' }).send();
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})