import {Router} from "express";
import {authenticated} from "../utils/authenticated.js";
import Team from "../models/team.js";

const router = Router();

// ADD TEAM
router.post('/', authenticated, async (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    try {
        let team = await Team.create(req.body);
        res.status(200).json({team});
    } catch (e) {
        next(e)
    }
});

// GET TEAMS
router.get('/', async (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    try {
        let teams = await Team.find({});
        res.status(200).json({teams});
    } catch (e) {
        next(e)
    }
});

export default router;
