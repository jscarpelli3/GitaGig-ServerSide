const { Gig, Musician } = require('../models')
const middleware = require('../middleware')

const GetGigs = async (req, res) => {
  try {
    const gigs = await Gig.findAll()
    res.send(gigs)
  } catch (error) {
    throw error
  }
}

const GetGigsByBandleader = async (req, res) => {
  try {
    const gigs = await Gig.findAll({
      where: { bandleaderId: req.params.bandleaderId }
    })
    res.send(gigs)
  } catch (error) {
    throw error
  }
}

const GetGigWithMusicians = async (req, res) => {
  try {
    const gigDetails = await Gig.findAll({
      where: { id: req.params.gigId },
      include: Musician,
      raw: true,
      nest: true
    })
    res.send(gigDetails)
  } catch (error) {
    throw error
  }
}

const CreateGig = async (req, res) => {
  try {
    const gig = await Gig.create({ ...req.body })
    res.send(gig)
  } catch (error) {
    throw error
  }
}

const UpdateGig = async (req, res) => {
  try {
    const updatedGig = await Gig.update(
      { ...req.body },
      { where: { id: req.params.gigId }, returning: true }
    )
    res.send(updatedGig)
  } catch (error) {
    throw error
  }
}

const DeleteGig = async (req, res) => {
  try {
    await Gig.destroy({ where: { id: req.params.gigId } })
    res.send({ msg: 'Gig Deleted', payload: req.params.gigId, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  UpdateGig,
  DeleteGig,
  CreateGig,
  GetGigs,
  GetGigsByBandleader,
  GetGigWithMusicians
}
