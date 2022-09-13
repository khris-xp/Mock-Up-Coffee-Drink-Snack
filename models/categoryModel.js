const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
        uniaue: true,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Category", categorySchema);