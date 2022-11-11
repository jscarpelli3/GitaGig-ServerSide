const router = require('express').Router()
const controller = require('../controllers/GigController')
const middleware = require('../middleware')

router.post(
  '/gigs/',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.CreateGig
)
router.put(
  '/gigs/:gigId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateGig
)

router.delete(
  ',gigs/:gigId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteGig
)

module.exports = router
