const router = require('express').Router()
const BandLeaderRouter = require('./BandLeaderRouter')
const GigRouter = require('./GigRouter')
const AuthRouter = require('./AuthRouter')
// const MusicianRouter = require('./MusicianRouter')
router.use('/bandleader', BandLeaderRouter)
router.use('/gigs', GigRouter)
router.use('/auth', AuthRouter)
// router.use('/musician', MusicianRouter)

module.exports = router
