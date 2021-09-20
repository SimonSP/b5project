const exampleService = require('../services/example');


async function exampleController(req, res, next) {

    //chequear si los parametros recibidos son correctos
    //enviar los status code
    try{
        const response = await exampleService()
        return res.status(200).send(response);
    }catch(error){
        return res.status().send(error);
    }
  
    }

      module.exports = {
        exampleController  
      }