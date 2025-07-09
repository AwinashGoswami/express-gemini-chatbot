const mongoose = require('mongoose');

const session = new mongoose.Schema({
    sessionId: {
        type: String,
        required: true,
        unique: true
    },
    messages: [
        {
            role: {
                type: String,
                enumm: ['user', 'model'],
                required: true,
            },
            content: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('session', session);