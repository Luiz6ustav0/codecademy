const mongoose = require('mongoose');

let contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 12
    },
    gender: { type: String }, // optional
    phone: { type: String }, // optional
    created_date: {
        type: Date,
        default: Date.now
    }
});

mongoose.pluralize(null); // Dooesn't make the name plural on mongo
const employeeModel = mongoose.model("myemployee_test", contactSchema);
module.exports = employeeModel;