const router = require('express').Router()
const controller = require('../controllers/MusicianController')
const middleware = require('../middleware')

router.get('/', controller.GetMusicians)

router.get('/:gigId', controller.GetMusiciansByGig)

router.post('/', controller.CreateMusician)
router.put('/:musicianId', controller.UpdateMusician)

module.exports = router
