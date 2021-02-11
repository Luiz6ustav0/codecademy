const employeeModel = require('../models/employee.model');
const joi = require('@hapi/joi');
const bcrypt = require('bcrypt');

const schema = joi.object({
    name: joi.string().required(),
    email: joi.string().required().email(),
    password: joi.string().min(6).max(12).required(),
    gender: joi.string(),
    phone: joi.string()
})

exports.createEmployee = async (req, res, next) => {
    try {
        console.log("Create employee caleed");
        
        const joiCheck = await schema.validate(req.body);
        console.log("Validation result: ", joiCheck);
        if (joiCheck.error) return res.status(400).json(joiCheck.error);

        const emailExist = await employeeModel.findOne({email: req.body.email});
        if (emailExist) return res.status(400).json({message: 'The email provided already exists in the database.'});

        const newEmployee = await (employeeModel.create(req.body));
        res.status(201).json(newEmployee);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}