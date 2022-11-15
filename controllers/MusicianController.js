const { Musician } = require('../models')
const middleware = require('../middleware')

const GetMusicians = async (req, res) => {
  try {
    const musicians = await Musician.findAll()
    res.send(musicians)
  } catch (error) {
    throw error
  }
}

const GetMusiciansByGig = async (req, res) => {
  try {
    const musicians = await Musician.findAll({
      where: { gigId: req.params.gigId }
    })
    res.send(musicians)
  } catch (error) {
    throw error
  }
}

// const CreateGig = async (req, res) => {
//   try {
//     const gig = await Gig.create({ ...req.body })
//     res.send(gig)
//   } catch (error) {
//     throw error
//   }
// }

const UpdateMusician = async (req, res) => {
  try {
    const updatedMusician = await Musician.update(
      { ...req.body },
      { where: { id: req.params.musicianId }, returning: true }
    )
    res.send(updatedMusician)
  } catch (error) {
    throw error
  }
}

// const DeleteGig = async (req, res) => {
//   try {
//     await Gig.destroy({ where: { id: req.params.gigId } })
//     res.send({ msg: 'Gig Deleted', payload: req.params.gigId, status: 'Ok' })
//   } catch (error) {
//     throw error
//   }
// }

module.exports = {
  GetMusiciansByGig,
  GetMusicians,
  UpdateMusician,
  // DeleteMusician,
  // CreateMusician,
}
