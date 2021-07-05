const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const airportSchema = new Schema(
    {
        name: {
            type: String
        },
        country: {
            type: String
        },
        city: {
            type: String
        },
        location: {
            type: {
                type: String
            },
            coordinates: [Number]
        }
    },
    {
        timestamps: true
    }
);

const Airport = mongoose.model('Airport', airportSchema);

module.exports = Airport;
