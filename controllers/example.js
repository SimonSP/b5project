const exampleService = require('../services/example');


async function exampleController(req, res, next) {
  //chequear si los parametros recibidos son correctos
  //enviar los status code
  try {
    const response = await exampleService()
    return res.status(200).json({ success: true, data: [] })
  } catch (error) {
    return next(error)
  }

}

module.exports = {
  exampleController
}