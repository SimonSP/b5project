const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const router = require(`./routes`)



const PORT = process.env.PORT || 5000
const app = express()

app.use(`/api/v1`, router)
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))




//GET EXAMPLE
/* app.get('/users', async (req, res) => {
    const users = await db.select().from('users')
    res.json(users)
}) */

//POST EXAMPLE
/* app.post('/users', async (req, res) => {
    const user = await db('users').insert({ name: req.body.name }).returning('*')
    res.json(user)
}) */

app.listen(PORT, () => console.log(`Server up at http://localhost:${PORT}`))