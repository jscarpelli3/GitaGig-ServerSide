const { Bandleader } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try { 
    const bandleader = await Bandleader.findOne({ 
      where: { email: req.body.email },
      raw: true
    }) 
    if (
      bandleader && 
      (await middleware.comparePassword(bandleader.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: bandleader.id,
        email: bandleader.email,
        name: bandleader.name
      }
      let token = middleware.createToken(payload)
      return res.send({ bandleader: payload, token})
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized'})
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { email, password, name, band, socialMedia, blImage } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const bandleader = await Bandleader.create({ email, passwordDigest, name, band, socialMedia, blImage})
    res.send(bandleader)
  } catch (error) {
    throw error
  }
}

const UpdatePassword = async (req, res) => {
  try {
    const bandleader = await Bandleader.findOne({
      where: { email: req.body.email }
    })
    if (
      bandleader && (await middleware.comparePassword(
        bandleader.dataValues.passwordDigest,
        req.body.oldPassword
      ))
    ) {
      let passwordDigest = await middleware.hashPassword(req.body.newPassword)
      await bandleader.update({ passwordDigest})
      return res.send({ status: 'Success', msg: 'Password updated'})
    }
    res.status(401).send({ status: 'Error', msg: "Unauthorized"})
  } catch (error) {
    throw error
  }
}

module.exports = {
  Login,
  Register,
  UpdatePassword
}
