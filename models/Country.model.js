const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema(
    {
        name: {
            type: String
        },
        location: {
            type:
            {
                type: String
            },
            coordinates: [Number]
        }

    },
    {
        timestamps: true
    }
);
const Country = mongoose.model('Country', countrySchema);

module.exports = Country;
