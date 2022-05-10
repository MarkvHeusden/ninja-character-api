import express from 'express'

const app = express()
const port = process.env.PORT || 5500

// app.use(express.static('public'))
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

const characters = [
    'DarkNinja',
    'GreenNinja',
    'RedSamurai',
    'BlueSamurai',
    'Caveman',
    'Eskimo',
    'Noble',
    'Cavegirl',
    'GrayNinja',
    'Princess',
    'Skeleton',
    'OldMan',
]

app.get('/', (req, res) => {
    res.json(characters)
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})