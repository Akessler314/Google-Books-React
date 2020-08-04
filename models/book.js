//dependancies 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const googlebooks = new Schema({
    id: { 
        type: String,
        required: true

    },
    title: {
        type: String,
        required: true 
    },

    authors: {
        type: Array,
        required: true
    },

    description : {
        type: String
    },

    image: {
        type: String
    },

    link: {
        type: String
    } 
});

const Book = mongoose.model('Book', googlebooks);

module.exports = Book; 