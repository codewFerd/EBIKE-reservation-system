
import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2>EBIKE<span> RESERVATION</span></h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#booking">Book a Ride</a>
          <a href="#about">About</a>
        </div>

        <button>Login</button>
      </nav>

      <section className="hero" id="home">
        <div>
          <p className="tagline">YOUR RIDE, YOUR CONVENIENCE</p>
          <h1>Book Your E-Bike Ride Today.</h1>
          <p>
            Reserve a Philippine-style electric tricycle
            for your next trip. Simple, convenient, and accessible.
          </p>
          <a href="#booking" className="primary-btn">
            Book a Ride
          </a>
        </div>
      </section>

      <section className="booking" id="booking">
        <h2>Reserve Your Ride</h2>
        <p>Enter your trip details to get started.</p>

        <form onSubmit={(e) => {
          e.preventDefault()
          alert('Booking feature will be connected to the backend soon.')
        }}>
          <label>Pickup Location</label>
          <input type="text" placeholder="Enter pickup location" required />

          <label>Destination</label>
          <input type="text" placeholder="Enter destination" required />

          <label>Reservation Date</label>
          <input type="date" required />

          <label>Reservation Time</label>
          <input type="time" required />

          <button type="submit">Submit Reservation</button>
        </form>
      </section>

      <section className="about" id="about">
        <h2>About Our Service</h2>
        <p>
          Our EBIKE Reservation System provides a convenient
          way for passengers to reserve electric tricycle rides.
        </p>
      </section>

      <footer>
        <h3>EBIKE RESERVATION SYSTEM</h3>
        <p>Convenient rides for everyday travel.</p>
        <p>© 2026 EBIKE Reservation System</p>
      </footer>
    </div>
  )
}

export default App
