const express = require(`express`)
const router = express.Router()

const exampleController = require('../controllers/example');


router.get(`/`, exampleController);


module.exports = router
