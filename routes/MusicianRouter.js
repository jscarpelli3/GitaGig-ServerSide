const router = require('express').Router()
const controller = require('../controllers/MusicianController')
const middleware = require('../middleware')

router.get(
  '/',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.GetMusicians
)

router.get(
  '/:gigId',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.GetMusiciansByGig
)

// router.post(
//   '/',
//   // middleware.stripToken,
//   // middleware.verifyToken,
//   controller.CreateGig
// )
router.put(
  '/:musicianId',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.UpdateMusician
)

// router.delete(
//   '/:gigId',
//   // middleware.stripToken,
//   // middleware.verifyToken,
//   controller.DeleteGig
// )

module.exports = router
