const router = require('express').Router()
const controller = require('../controllers/BandLeaderController')
const middleware = require('../middleware')

router.get(
  '/:bandleaderId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getBandleaderByIdwithGigs
)

module.exports = router

// router.post('/',
// middleware.stripToken,
// middleware.verifyToken,
// controller.CreateBandleader)
