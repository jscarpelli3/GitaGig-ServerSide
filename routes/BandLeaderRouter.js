const router = require('express').Router()
const controller = require('../controllers/BandLeaderController')
const middleware = require('../middleware')

router.get(
  '/:bandleader_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetBandleaderById
)

// router.post('/',
// middleware.stripToken,
// middleware.verifyToken,
// controller.CreateBandleader)
