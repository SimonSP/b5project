const express = require(`express`)
const router = express.Router()

const { exampleController } = require('../controllers/example');


router.get(`/asd`, exampleController);


module.exports = router
