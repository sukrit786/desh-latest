const mongoose = require('mongoose');

let medSchema = new mongoose.Schema({
    name: { type: String },
});
mongoose.model('Medication', medSchema);
