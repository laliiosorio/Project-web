const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const airportSchema = new Schema(
    {
        name: {
            type: String,
            required:true,
            minlength:2,
            maxlength: 700,
        },
        iata: {
            type: String,
            maxlength: 3,
        },
        iso: {
            type: String,
            maxlength:2
        },
        status: {
            type: Boolean
        },
        continent: {
            type: String
        },
        type: {
            type: String
        },
        size: {
            type: String
        },
        lat: {
            type: Number,
            maxlength:9
        },
        lon: {
            type: Number,
            maxlength: 9
        }
    },
    {
        timestamps: true
    }
);

const Airport = mongoose.model('Airport', airportSchema);

module.exports = Airport;
