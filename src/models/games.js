const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gamesSchema = new Schema({
    id:{
        type: String,
        trim: true,
    },
    name:{
        type: String,
        trim: true,
    },
    año:{
        type: String,
        trim: true,
    },
    estudio:{
        type: String,
        trim: true,
    },
    image:{
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('Games',gamesSchema);
