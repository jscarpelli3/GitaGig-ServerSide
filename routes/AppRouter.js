const router = require('express').Router()
const BandLeaderRouter = require('./BandLeaderRouter')
const GigRouter = require('./GigRouter')
// const MusicianRouter = require('./MusicianRouter')
router.use('/bandleader', BandLeaderRouter)
router.use('/gig', GigRouter)
// router.use('/musician', MusicianRouter)

module.exports = router
