const mongoose = require('mongoose')
const Schema = mongoose.Schema


let studentSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    rollno: {
        type: Number
    }
}, {
    collation: 'Students'
})

module.exports = mongoose.model('Students', studentSchema)