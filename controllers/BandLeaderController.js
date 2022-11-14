const { Bandleader, Gig } = require('../models')
const middleware = require('../middleware')

const getBandleaderById = async (req, res) => {
  try {
    const curBandleader = await Bandleader.findAll({
      where: { id: req.params.bandleaderId }
    })
    res.send(curBandleader)
  } catch (error) {
    throw error
  }
}

const getBandleaderByIdwithGigs = async (req, res) => {
  try {
    const curBandleader = await Bandleader.findAll({
      where: { id: req.params.bandleaderId },
      include: Gig,
      raw: true,
      nest: true
    })
    res.send(curBandleader)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getBandleaderById,
  getBandleaderByIdwithGigs
}
