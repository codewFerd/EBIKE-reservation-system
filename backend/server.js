
const bcrypt = require('bcryptjs')
const express = require('express')
const cors = require('cors')
const db = require('./db')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('EBIKE Reservation System Backend is running!')
})

app.get('/api/health', (req, res) => {
  db.query('SELECT 1', (err) => {
    if (err) {
      return res.status(500).json({
        status: 'error',
        message: 'MySQL connection failed'
      })
    }

    return res.json({
      status: 'success',
      message: 'Backend and MySQL are connected!'
    })
  })
})

app.get('/api/vehicles', (req, res) => {
  db.query('SELECT * FROM vehicles', (err, results) => {
    if (err) {
      return res.status(500).json({
        error: 'Failed to retrieve vehicles.'
      })
    }

    return res.json(results)
  })
})

// Register
app.post('/api/auth/register', (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    return res.status(400).json({
      error: 'Name, email, and password are required.'
    })
  }

  const fullname = name.trim()
  const cleanEmail = email.trim().toLowerCase()

  db.query(
    'SELECT id FROM users WHERE email = ?',
    [cleanEmail],
    async (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Database error.' })
      }

      if (results.length > 0) {
        return res.status(400).json({
          error: 'An account with this email already exists.'
        })
      }

      try {
        const hashedPassword = await bcrypt.hash(password, 10)

        db.query(
          'INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)',
          [fullname, cleanEmail, hashedPassword],
          (insertError, result) => {
            if (insertError) {
              return res.status(500).json({
                error: 'Failed to create account.'
              })
            }

            return res.status(201).json({
              message: 'Account created successfully',
              user: {
                id: result.insertId,
                name: fullname,
                email: cleanEmail
              }
            })
          }
        )
      } catch (error) {
        return res.status(500).json({
          error: 'Password processing failed.'
        })
      }
    }
  )
})

// Login
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({
      error: 'Email and password are required.'
    })
  }

  const cleanEmail = email.trim().toLowerCase()

  db.query(
    'SELECT * FROM users WHERE email = ?',
    [cleanEmail],
    async (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Database error.' })
      }

      if (results.length === 0) {
        return res.status(401).json({
          error: 'Invalid email or password.'
        })
      }

      const user = results[0]

      try {
        const passwordMatch = await bcrypt.compare(
          password,
          user.password
        )

        if (!passwordMatch) {
          return res.status(401).json({
            error: 'Invalid email or password.'
          })
        }

        return res.json({
          message: 'Login successful',
          user: {
            id: user.id,
            name: user.fullname,
            email: user.email
          }
        })
      } catch (error) {
        return res.status(500).json({
          error: 'Login processing failed.'
        })
      }
    }
  )
})

// Create reservation in MySQL
app.post('/api/reservations', (req, res) => {
  const pickup = String(
    req.body.pickupLocation || req.body.pickup || ''
  ).trim()

  const destination = String(req.body.destination || '').trim()
  const date = req.body.reservationDate || req.body.date
  const time = req.body.reservationTime || req.body.time
  const vehicleId = Number(req.body.vehicleId)
  const userId = Number(req.body.userId)
  const passengers = Number(req.body.passengers || 1)
  const durationHours = Number(req.body.durationHours)

  if (!pickup || !destination || !date || !time) {
    return res.status(400).json({
      error: 'Pickup, destination, date, and time are required.'
    })
  }

  if (!Number.isInteger(vehicleId) || vehicleId <= 0) {
    return res.status(400).json({
      error: 'A valid vehicle is required.'
    })
  }

  if (!Number.isInteger(userId) || userId <= 0) {
    return res.status(400).json({
      error: 'Please sign in with a valid account.'
    })
  }

  if (!Number.isInteger(passengers) || passengers < 1) {
    return res.status(400).json({
      error: 'Passenger count is invalid.'
    })
  }

  if (
    !Number.isInteger(durationHours) ||
    durationHours < 1 ||
    durationHours > 12
  ) {
    return res.status(400).json({
      error: 'Rental duration must be between 1 and 12 hours.'
    })
  }

  const startDate = new Date(`${date}T${time}:00`)

  if (Number.isNaN(startDate.getTime())) {
    return res.status(400).json({
      error: 'Reservation date or time is invalid.'
    })
  }

  const endDate = new Date(
    startDate.getTime() + durationHours * 60 * 60 * 1000
  )

  const toMySQLDateTime = (value) => {
    const pad = (number) => String(number).padStart(2, '0')

    return `${value.getFullYear()}-${pad(value.getMonth() + 1)}-${pad(value.getDate())} ${pad(value.getHours())}:${pad(value.getMinutes())}:${pad(value.getSeconds())}`
  }

  db.query(
    'SELECT id, vehicle_name, price_per_hour FROM vehicles WHERE id = ?',
    [vehicleId],
    (vehicleError, vehicleResults) => {
      if (vehicleError) {
        return res.status(500).json({
          error: 'Could not verify the selected vehicle.'
        })
      }

      if (vehicleResults.length === 0) {
        return res.status(404).json({
          error: 'Selected vehicle was not found.'
        })
      }

      const vehicle = vehicleResults[0]
      const hourlyRate = Number(vehicle.price_per_hour)

      if (!Number.isFinite(hourlyRate) || hourlyRate <= 0) {
        return res.status(500).json({
          error: 'Selected vehicle has an invalid hourly rate.'
        })
      }

      const totalPrice = hourlyRate * durationHours

      db.query(
        `INSERT INTO reservations
        (user_id, vehicle_id, pickup_location, destination, passengers,
        start_datetime, end_datetime, total_price, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'confirmed')`,
        [
          userId,
          vehicleId,
          pickup,
          destination,
          passengers,
          toMySQLDateTime(startDate),
          toMySQLDateTime(endDate),
          totalPrice
        ],
        (insertError, result) => {
          if (insertError) {
            console.error('Reservation insert failed:', insertError)

            return res.status(500).json({
              error: 'Failed to save reservation in MySQL. Check the reservations table columns.'
            })
          }

          return res.status(201).json({
            message: 'Reservation saved successfully.',
            bookingId: result.insertId,
            reservation: {
              id: result.insertId,
              userId,
              vehicleId,
              vehicleName: vehicle.vehicle_name,
              pickup,
              destination,
              passengers,
              startDatetime: toMySQLDateTime(startDate),
              endDatetime: toMySQLDateTime(endDate),
              durationHours,
              totalPrice,
              status: 'confirmed'
            }
          })
        }
      )
    }
  )
})

// Get all reservations
app.get('/api/reservations', (req, res) => {
  const sql = `
    SELECT r.*, v.vehicle_name
    FROM reservations r
    JOIN vehicles v ON v.id = r.vehicle_id
    ORDER BY r.created_at DESC
  `

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({
        error: 'Failed to retrieve reservations.'
      })
    }

    return res.json(results)
  })
})

// Get reservations for one user
app.get('/api/reservations/user/:userId', (req, res) => {
  const userId = Number(req.params.userId)

  if (!Number.isInteger(userId) || userId <= 0) {
    return res.status(400).json({
      error: 'Invalid user ID.'
    })
  }

  const sql = `
    SELECT r.*, v.vehicle_name
    FROM reservations r
    JOIN vehicles v ON v.id = r.vehicle_id
    WHERE r.user_id = ?
    ORDER BY r.created_at DESC
  `

  db.query(sql, [userId], (err, results) => {
    if (err) {
      return res.status(500).json({
        error: 'Failed to retrieve user reservations.'
      })
    }

    return res.json(results)
  })
})

// Cancel reservation in MySQL
app.delete('/api/reservations/:id', (req, res) => {
  const reservationId = Number(req.params.id)

  if (!Number.isInteger(reservationId) || reservationId <= 0) {
    return res.status(400).json({
      error: 'Invalid reservation ID.'
    })
  }

  db.query(
    "UPDATE reservations SET status = 'cancelled' WHERE id = ?",
    [reservationId],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          error: 'Failed to cancel reservation.'
        })
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({
          error: 'Reservation not found.'
        })
      }

      return res.json({
        message: 'Reservation cancelled successfully.'
      })
    }
  )
})

const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
