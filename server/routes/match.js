import {Router} from "express";
import {authenticated} from "../utils/authenticated.js";
import Match from "../models/match.js";

const router = Router();

// ADD MATCH
router.post('/', authenticated, async (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    try {
        if(req.body.teamA.toString() === req.body.teamB.toString()){
            return res.sendStatus(400);
        }
        let match = await Match.create(req.body);
        res.status(200).json({match});
    } catch (e) {
        next(e)
    }
});

// GET MATCHES
router.get('/', async (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    try {
        let matches = await Match.find({}).populate("teamA").populate("teamB");
        res.status(200).json({matches});
    } catch (e) {
        next(e)
    }
});

export default router;
