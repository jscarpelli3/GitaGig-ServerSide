const { Bandleader } = require('../models')
const middleware = require('../middleware')

const getBandleaderById = async () => {
  try {
    const curBandleader = await Gig.findAll({
      where: { id: req.params.bandleaderId }
    })
    res.send(curBandleader)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getBandleaderById
}
