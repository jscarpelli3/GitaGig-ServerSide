const router = require('express').Router()
const controller = require('../controllers/GigController')
const middleware = require('../middleware')

router.get(
  '/',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.GetGigs
)

// router.get(
//   '/:bandleaderId',
//   // middleware.stripToken,
//   // middleware.verifyToken,
//   controller.GetGigsByBandleader
// )

router.get(
  '/:gigId',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.GetGigWithMusicians
)

router.post(
  '/',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.CreateGig
)
router.put(
  '/:gigId',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.UpdateGig
)

router.delete(
  '/:gigId',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.DeleteGig
)

module.exports = router
