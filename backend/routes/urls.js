const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Url = require('../models/Urls');
const shortid = require("shortid");

router.get('/dashboard', fetchuser, async (req, res) => {
    try {
        const urls = await Url.find({ user: req.user.id });
        res.json(urls);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.post('/', fetchuser, async (req, res) => {
        try {
            const shortID = shortid();
            await Url.create({
                shortId: shortID,
                redirectURL: req.body.url,
                visitHistory: [],
                user: req.user.id,
            });
            res.json({ id: shortID });
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

module.exports = router