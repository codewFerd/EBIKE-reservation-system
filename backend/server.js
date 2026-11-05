
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('EBIKE Reservation System Backend is running!')
  })

  app.get('/api/health', (req, res) => {
    res.json({
        status: 'success',
            message: 'Backend API is working!'
              })
              })

              const PORT = 5000

              app.listen(PORT, () => {
                console.log(`Server running on http://localhost:${PORT}`)
                })

                