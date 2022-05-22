const express = require('express')
const Homes = require('../models/Homes')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const home = await Homes.find()
        res.json(home)
    } catch (error) {
        res.json(err.message)
    }
})

router.get('/:homeId', async (req, res) => {
    try {
        const home = await Homes.findById(req.params.homeId)
        res.json(home)
    } catch (error) {
        res.json(err.message)

    }
})

router.post('/', async (req, res) => {
    console.log(req.body)
    const home = new Homes({
        name: req.body.name,
        img : req.body.img,
        price: req.body.price,
        room: req.body.room,
        sdb: req.body.sdb,
        description: req.body.description,
        offre: req.body.offre,
        type: req.body.type
    })
    try {
        const savedHome = await home.save()
        res.json(savedHome)
        console.log(home)
    } catch (err) {
        res.json(err.message)
    }

})

router.patch('/:homeId', async (req, res) => {
    try {
        const updateHome = await Homes.updateOne({ _id: req.params.homeId },
            { $set: { offre: req.body.offre } })
            res.json(updateHome)
    } catch (err) {
        res.json(err.message)
    }
})


module.exports = router