const { Gig } = require('../models')
const middleware = require('../middleware')

const GetGigs = async (req, res) => {
  try {
    const gigs = await Gig.findAll()
    res.send(gigs)
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
  GetGigs
}
