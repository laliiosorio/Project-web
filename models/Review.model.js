const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
    {
        reviewUser: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        reviewAirport: [{ type: Schema.Types.ObjectId,ref: 'Airport'}],
        reviewCountry: [{ type: Schema.Types.ObjectId, ref: 'Country'}],
        startDate: Date,
        quarantine: Boolean,
        migrationTime: number,
        positiveExperience: String,
        negativeExperience: String,
        evaluate: number,
        pcr: Boolean,
        vacune: Boolean,
        passport: Boolean
    },
    {
        timestamps: true
    }
    );
    const Review = mongoose.model('Review', reviewSchema);

    module.exports = Review;

