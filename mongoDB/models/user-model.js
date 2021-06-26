const mongoose = require('mongoose');
const validator = require('validator')

const userDetailsSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email')
            }
        }
    },
    message: {
        type: String,
        trim: true
    }
})

const User = mongoose.model('User',userDetailsSchema)

module.exports = User