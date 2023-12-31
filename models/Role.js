const {Schema, model} = require('mongoose')

const User = new Schema({
    value: {type: String, unique: true, default: 'UNBLOCK'},
})

module.exports = model('Role', User)