const employeeModel = require('../models/employee.model');

exports.createEmployee = async (req, res, next) => {
    try {
        console.log("Create employee caleed");
        const newEmployee = await (employeeModel.create(req.body));
        res.status(201).json(newEmployee);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}