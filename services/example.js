const exampleDao = require('../daos/example');

async function exampleService() {
    const user = await exampleDao();
    //agregar mensajes o errores en base a lo que responde el dao
}

module.exports = { exampleService };