const exampleService = require('../services/example');


async function exampleController(req, res, next) {
  //chequear si los parametros recibidos son correctos
  //enviar los status code
  try {
    const response = await exampleService()
    return res.send(`Hello world`)
  } catch (error) {
    return next(error)
  }

}

module.exports = {
  exampleController
}