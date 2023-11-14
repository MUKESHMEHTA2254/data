import express from 'express';
import { filteredByAny, filteredByCountry, filteredByIntensity, filteredByLikelihood, filteredByPestle, filteredByRegion, filteredBySector, filteredBySource, filteredByTitle, filteredByTopic, filteredByYear, getAllData } from '../controllers/index.js';
import { reportModel } from '../models/index.js';
import mongoose from 'mongoose';
const router = express.Router();
router.post('/all', (req, res, next) => {
    const report = new reportModel({
        _id: new mongoose.Types.ObjectId,
        end_year: req.body.end_year,
        intensity: req.body.intensity,
        sector: req.body.sector,
        topic: req.body.topic
    })
    report.save().then(result => {
        console.log(res);
        res.status(200).json({
            newReport: result
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
})

router.get('/all', getAllData);

router.get("/year/:year", filteredByYear)

router.get("/topic/:topic", filteredByTopic)

router.get("/title/:title", filteredByTitle)

router.get("/sector/:sector", filteredBySector)

router.get("/region/:region", filteredByRegion)

router.get("/country/:country", filteredByCountry)

router.get("/pestle/:pestle", filteredByPestle)

router.get("/source/:source", filteredBySource)

router.get("/intensity/:intensity", filteredByIntensity)


export default router;