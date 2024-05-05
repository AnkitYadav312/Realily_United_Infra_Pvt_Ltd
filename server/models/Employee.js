// const mongoose = require('mongoose')
// const EmployeeSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String
// })

// const EmployeeModel = mongoose.model("employee", EmployeeSchema);
// module.exports = EmployeeModel


const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Hash password before saving to the database
EmployeeSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const EmployeeModel = mongoose.model("employee", EmployeeSchema);
module.exports = EmployeeModel;