import mongoose from 'mongoose';

const matchSchema = new mongoose.Schema(
    {
        city: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        teamA: {
            type: mongoose.Types.ObjectId,
            ref: 'teams',
            required: true
        },
        teamB: {
            type: mongoose.Types.ObjectId,
            ref: 'teams',
            required: true
        }
    },
    { collection: 'matches', },
);

const Match = mongoose.model('matches', matchSchema);

export default Match;
