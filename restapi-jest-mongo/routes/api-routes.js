const employeeController = require('../controller/employee.controller');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({
        status: "Api is working",
    });
    return
})

router.post('/contacts', employeeController.createEmployee);

module.exports = router;