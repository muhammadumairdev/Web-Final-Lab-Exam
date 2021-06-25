import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
    },
    { collection: 'teams', },
);

const Team = mongoose.model('teams', teamSchema);

export default Team;
