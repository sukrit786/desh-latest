const mongoose = require('mongoose');

let providerSchema = new mongoose.Schema({
    name: { type: String },
    insurance: { type: Array },
    role: { type: Array }
});
mongoose.model('Provider', providerSchema);
