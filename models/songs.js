const { Schema, model } = require('.');

const songsSchema = new Schema({
    title: String,
    artist: String
});

const Songs = model('Songs', songsSchema);

module.exports = Songs;
