const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const airportSchema = new Schema(
    {
        name: {
            type: String
        },
        iata: {
            type: String
        },
        iso: {
            type: String
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
            type: Number
        },
        lon: {
            type: Number
        }
    },
    {
        timestamps: true
    }
);

const Airport = mongoose.model('Airport', airportSchema);

module.exports = Airport;
