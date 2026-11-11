import { useState, useEffect } from 'react'
import './App.css'

const API_BASE_URL = 'http://localhost:5000/api'

// Minimum date helper (prevent booking past dates)
const TODAY = new Date().toISOString().split('T')[0]

// ── AUTHENTIC PHILIPPINE E-BIKE / E-TRIKE VECTOR ILLUSTRATIONS ──────────────
function PhilippineVehicleGraphic({ id }) {
  if (id === 'ebike-2') {
    // Heavy-Duty 6-Seater Philippine E-Trike (Express Max)
    return (
      <svg viewBox="0 0 280 135" className="ph-ebike-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="140" cy="128" rx="125" ry="5" fill="#e2e8f0" />
        {/* Overhead Luggage Roof Rack */}
        <rect x="75" y="16" width="180" height="5" rx="2" fill="#94a3b8" />
        <line x1="105" y1="21" x2="105" y2="26" stroke="#94a3b8" strokeWidth="2.5" />
        <line x1="165" y1="21" x2="165" y2="26" stroke="#94a3b8" strokeWidth="2.5" />
        <line x1="225" y1="21" x2="225" y2="26" stroke="#94a3b8" strokeWidth="2.5" />
        {/* Canopy Roof */}
        <path d="M68 26 L258 26 Q266 26 266 32 L264 36 Q264 39 257 39 L72 39 L64 32 Z" fill="#1e3a8a" />
        <rect x="68" y="25" width="190" height="3" rx="1.5" fill="#93c5fd" />
        {/* Stainless Steel Support Pillars */}
        <line x1="76" y1="39" x2="65" y2="88" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
        <line x1="135" y1="39" x2="135" y2="88" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
        <line x1="195" y1="39" x2="195" y2="88" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
        <line x1="252" y1="39" x2="252" y2="88" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
        <line x1="115" y1="62" x2="256" y2="62" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
        {/* Front Windshield */}
        <polygon points="76,39 63,80 77,80 84,39" fill="#bfdbfe" fillOpacity="0.5" stroke="#60a5fa" strokeWidth="1" />
        {/* Front Fork & Handlebars */}
        <line x1="50" y1="58" x2="38" y2="105" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
        <circle cx="52" cy="56" r="3" fill="#0f172a" />
        <path d="M46 56 Q52 52 58 56" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
        <rect x="42" y="72" width="11" height="8" rx="2" fill="#facc15" />
        {/* Driver Seat */}
        <path d="M80 84 Q88 74 99 76 L103 88 Z" fill="#1e293b" />
        {/* Extended 6-Seater Passenger Cabin */}
        <rect x="110" y="66" width="148" height="30" rx="4" fill="#1e3a8a" />
        <rect x="114" y="70" width="140" height="6" rx="2" fill="#ffffff" />
        <text x="184" y="86" fill="#ffffff" fontSize="8" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">6-SEATER MAX E-TRIKE</text>
        {/* Side Passenger Entry Step */}
        <rect x="115" y="96" width="138" height="4" rx="2" fill="#64748b" />
        {/* Heavy Duty Battery Pack */}
        <rect x="100" y="100" width="80" height="15" rx="3" fill="#0f172a" />
        <text x="140" y="111" fill="#60a5fa" fontSize="7" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">72V HIGH CAPACITY</text>
        {/* Front Wheel */}
        <circle cx="38" cy="110" r="16" fill="#0f172a" />
        <circle cx="38" cy="110" r="10" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
        <circle cx="38" cy="110" r="3" fill="#0f172a" />
        <path d="M26 100 Q38 92 50 100" fill="none" stroke="#94a3b8" strokeWidth="4" />
        {/* Dual Rear Axle / Heavy Wheels */}
        <circle cx="210" cy="110" r="17" fill="#0f172a" />
        <circle cx="210" cy="110" r="11" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
        <circle cx="210" cy="110" r="4" fill="#0f172a" />
        <path d="M195 98 Q210 90 227 98" fill="none" stroke="#94a3b8" strokeWidth="4" />
      </svg>
    )
  }

  if (id === 'ebike-3') {
    // Philippine Commuter Step-Through E-Bike (VoltSprint Duo)
    return (
      <svg viewBox="0 0 280 135" className="ph-ebike-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="140" cy="128" rx="110" ry="5" fill="#e2e8f0" />
        {/* Front Wire Basket */}
        <rect x="52" y="48" width="22" height="18" rx="3" fill="#cbd5e1" stroke="#475569" strokeWidth="1.5" />
        <line x1="57" y1="48" x2="57" y2="66" stroke="#64748b" strokeWidth="1" />
        <line x1="63" y1="48" x2="63" y2="66" stroke="#64748b" strokeWidth="1" />
        <line x1="69" y1="48" x2="69" y2="66" stroke="#64748b" strokeWidth="1" />
        <line x1="52" y1="57" x2="74" y2="57" stroke="#64748b" strokeWidth="1" />
        {/* Upright Handlebars */}
        <path d="M72 44 Q78 38 84 44" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="70" cy="44" r="3" fill="#0f172a" />
        <circle cx="86" cy="44" r="3" fill="#0f172a" />
        <rect x="74" y="52" width="9" height="7" rx="2" fill="#facc15" />
        {/* Head Tube and Fork */}
        <line x1="78" y1="44" x2="58" y2="108" stroke="#d97706" strokeWidth="5" strokeLinecap="round" />
        {/* Step-Through Floorboard Frame */}
        <path d="M73 70 L95 105 L155 105 L175 75 L215 108" fill="none" stroke="#d97706" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        {/* Floorboard Foot Mat */}
        <rect x="100" y="101" width="50" height="5" rx="2" fill="#1e293b" />
        {/* Driver Saddle */}
        <path d="M125 72 Q135 65 148 68 Q140 78 125 72 Z" fill="#0f172a" />
        <line x1="135" y1="72" x2="135" y2="105" stroke="#475569" strokeWidth="4" />
        {/* Rear Passenger Seat with Backrest */}
        <rect x="175" y="68" width="36" height="7" rx="3" fill="#0f172a" />
        <rect x="208" y="52" width="5" height="18" rx="2" fill="#0f172a" />
        <line x1="195" y1="75" x2="215" y2="108" stroke="#64748b" strokeWidth="3" />
        {/* Battery Module Case */}
        <rect x="138" y="80" width="32" height="22" rx="3" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="154" y="94" fill="#facc15" fontSize="7" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">48V</text>
        {/* Front Wheel */}
        <circle cx="58" cy="108" r="17" fill="#0f172a" />
        <circle cx="58" cy="108" r="11" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" />
        <circle cx="58" cy="108" r="3.5" fill="#0f172a" />
        <path d="M46 98 Q58 90 70 98" fill="none" stroke="#d97706" strokeWidth="4" />
        {/* Rear Wheel with Hub Motor */}
        <circle cx="215" cy="108" r="17" fill="#0f172a" />
        <circle cx="215" cy="108" r="11" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" />
        <circle cx="215" cy="108" r="6" fill="#475569" />
        <circle cx="215" cy="108" r="3" fill="#facc15" />
        <path d="M203 98 Q215 90 227 98" fill="none" stroke="#d97706" strokeWidth="4" />
      </svg>
    )
  }

  if (id === 'ebike-4') {
    // Modern Enclosed Philippine Luxe E-Trike (SkyTrike Luxe)
    return (
      <svg viewBox="0 0 280 135" className="ph-ebike-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="140" cy="128" rx="120" ry="5" fill="#e2e8f0" />
        {/* Aerodynamic Enclosed Canopy */}
        <path d="M55 78 Q60 30 115 25 L235 25 Q255 25 255 45 L252 82 Q252 92 240 92 L75 92 Q60 92 55 78 Z" fill="#7e22ce" />
        <path d="M60 76 Q65 34 115 30 L232 30 Q248 30 248 45 L246 80 L76 80 Z" fill="#ffffff" />
        {/* Front Curved Windshield */}
        <path d="M72 70 Q78 40 115 36 L120 74 L78 74 Z" fill="#bfdbfe" fillOpacity="0.65" stroke="#3b82f6" strokeWidth="1" />
        <line x1="90" y1="44" x2="98" y2="65" stroke="#475569" strokeWidth="1.5" />
        {/* Side Passenger Door Cutout */}
        <rect x="135" y="42" width="65" height="42" rx="6" fill="#f8fafc" stroke="#7e22ce" strokeWidth="2" />
        <line x1="135" y1="62" x2="200" y2="62" stroke="#94a3b8" strokeWidth="2" />
        {/* Rear Cabin Tinted Window */}
        <rect x="212" y="44" width="28" height="24" rx="4" fill="#93c5fd" fillOpacity="0.4" stroke="#60a5fa" strokeWidth="1" />
        {/* LED Headlight Bar */}
        <rect x="52" y="74" width="12" height="6" rx="2" fill="#38bdf8" />
        {/* Lower Trim and Battery Casing */}
        <rect x="75" y="90" width="170" height="12" rx="3" fill="#1e1b4b" />
        <text x="160" y="99" fill="#c084fc" fontSize="7" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">LUXE E-TRIKE</text>
        {/* Modern Alloy Wheels */}
        <circle cx="48" cy="112" r="16" fill="#0f172a" />
        <circle cx="48" cy="112" r="9" fill="#e2e8f0" stroke="#7e22ce" strokeWidth="2" />
        <circle cx="48" cy="112" r="3" fill="#0f172a" />
        <circle cx="215" cy="112" r="17" fill="#0f172a" />
        <circle cx="215" cy="112" r="10" fill="#e2e8f0" stroke="#7e22ce" strokeWidth="2" />
        <circle cx="215" cy="112" r="3" fill="#0f172a" />
      </svg>
    )
  }

  // Default: EcoTrike Classic (Philippine 4-Seater Electric Tricycle)
  return (
    <svg viewBox="0 0 280 135" className="ph-ebike-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="140" cy="128" rx="115" ry="5" fill="#e2e8f0" />
      {/* Canopy Roof (Philippine Tricycle Style) */}
      <path d="M78 28 L235 28 Q242 28 242 34 L240 37 Q240 40 234 40 L82 40 L74 34 Z" fill="#c0122c" />
      <rect x="76" y="27" width="166" height="3" rx="1.5" fill="#fca5a5" />
      <path d="M74 34 L66 45 L74 45 Z" fill="#991b1b" />
      {/* Roof Pillars (Stainless steel tubular frame) */}
      <line x1="84" y1="40" x2="72" y2="92" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
      <line x1="145" y1="40" x2="145" y2="92" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
      <line x1="230" y1="40" x2="230" y2="92" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
      <line x1="125" y1="64" x2="235" y2="64" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
      {/* Front Windshield */}
      <polygon points="84,40 70,82 86,82 92,40" fill="#93c5fd" fillOpacity="0.45" stroke="#60a5fa" strokeWidth="1" />
      {/* Front Fork & Handlebars */}
      <line x1="56" y1="62" x2="42" y2="108" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
      <circle cx="58" cy="60" r="3" fill="#0f172a" />
      <path d="M52 60 Q58 56 64 60" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
      <rect x="48" y="76" width="10" height="7" rx="2" fill="#facc15" />
      {/* Driver Seat */}
      <path d="M88 88 Q95 78 108 80 L112 92 Z" fill="#1e293b" />
      <rect x="70" y="92" width="45" height="4" rx="2" fill="#64748b" />
      {/* Passenger Cabin Body */}
      <rect x="120" y="70" width="118" height="28" rx="4" fill="#c0122c" />
      <rect x="124" y="74" width="110" height="6" rx="2" fill="#ffffff" />
      <text x="178" y="89" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">PHILIPPINE E-TRIKE</text>
      {/* Passenger Bench Cushion */}
      <rect x="135" y="66" width="90" height="6" rx="3" fill="#1e293b" />
      <rect x="222" y="52" width="6" height="18" rx="2" fill="#1e293b" />
      {/* Battery Box */}
      <rect x="110" y="98" width="60" height="15" rx="3" fill="#0f172a" />
      <text x="140" y="109" fill="#38bdf8" fontSize="7" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">60V BATTERY</text>
      {/* Front Wheel */}
      <circle cx="42" cy="112" r="16" fill="#0f172a" />
      <circle cx="42" cy="112" r="10" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
      <circle cx="42" cy="112" r="3" fill="#0f172a" />
      <path d="M30 102 Q42 95 54 102" fill="none" stroke="#94a3b8" strokeWidth="4" />
      {/* Rear Wheel */}
      <circle cx="205" cy="112" r="17" fill="#0f172a" />
      <circle cx="205" cy="112" r="11" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
      <circle cx="205" cy="112" r="4" fill="#0f172a" />
      <path d="M190 100 Q205 92 222 100" fill="none" stroke="#94a3b8" strokeWidth="4" />
    </svg>
  )
}

const VEHICLES = [
  {
    id: 'ebike-1',
    name: 'EcoTrike Classic',
    type: 'Philippine Electric Tricycle',
    capacity: 4,
    rate: 50,
    battery: 95,
    isAvailable: true,
    description: 'Traditional 4-seater Philippine e-trike with covered canopy roof.'
  },
  {
    id: 'ebike-2',
    name: 'EcoTrike Express Max',
    type: 'Heavy-Duty E-Trike (6-Seater)',
    capacity: 6,
    rate: 70,
    battery: 88,
    isAvailable: true,
    description: 'Heavy-duty Philippine e-trike with extended passenger cabin and roof rack.'
  },
  {
    id: 'ebike-3',
    name: 'VoltSprint Solo/Duo',
    type: 'Commuter E-Bike (2-Seater)',
    capacity: 2,
    rate: 35,
    battery: 28,
    isAvailable: false,
    description: 'Philippine step-through 2-seater commuter e-bike with front basket.'
  },
  {
    id: 'ebike-4',
    name: 'SkyTrike Luxe',
    type: 'Modern Enclosed E-Tricycle',
    capacity: 4,
    rate: 90,
    battery: 100,
    isAvailable: true,
    description: 'Modern enclosed Philippine electric tricycle with aerodynamic cabin.'
  }
]

// ── LOCAL STORAGE HELPERS ────────────────────────────────────────────────────
const LOCAL_USERS_KEY = 'ebikego_users'
const LOCAL_BOOKINGS_KEY = 'ebikego_bookings'

function getLocalUsers() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_USERS_KEY) || '[]')
  } catch {
    return []
  }
}

function saveLocalUsers(users) {
  localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(users))
}

function getLocalBookings() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_BOOKINGS_KEY) || '[]')
  } catch {
    return []
  }
}

function saveLocalBookings(bookings) {
  localStorage.setItem(LOCAL_BOOKINGS_KEY, JSON.stringify(bookings))
}

function localRegister({ name, email, password }) {
  const users = getLocalUsers()
  if (users.find((u) => u.email.toLowerCase() === email.toLowerCase())) {
    throw new Error('An account with this email already exists.')
  }
  const newUser = {
    id: `local-${Date.now()}`,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    password
  }
  saveLocalUsers([...users, newUser])
  return { id: newUser.id, name: newUser.name, email: newUser.email }
}

function localLogin({ email, password }) {
  const users = getLocalUsers()
  const user = users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  )
  if (!user) throw new Error('Invalid email or password.')
  return { id: user.id, name: user.name, email: user.email }
}
// ─────────────────────────────────────────────────────────────────────────────

export default function App() {
  // Authentication State
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      return JSON.parse(sessionStorage.getItem('ebikego_session') || 'null')
    } catch {
      return null
    }
  })

  // Vehicle Selection State
  const [vehicles, setVehicles] = useState([])
  const [selectedVehicle, setSelectedVehicle] = useState(null)

  useEffect(() => {
  fetch(`${API_BASE_URL}/vehicles`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch vehicles')
      }
      return response.json()
    })
    .then(data => {
      if (!Array.isArray(data)) {
        throw new Error('Invalid vehicle data received from the server.')
      }

      const formattedVehicles = data.map((vehicle) => {
        const fallback = VEHICLES.find(
          (item) => item.id === `ebike-${vehicle.id}`
        )

        return {
          id: `ebike-${vehicle.id}`,
          dbId: vehicle.id,
          name: vehicle.vehicle_name,
          type: vehicle.vehicle_type,
          capacity: fallback?.capacity || 4,
          rate: Number(vehicle.price_per_hour),
          battery: fallback?.battery ?? 100,
          description:
            fallback?.description || 'Electric vehicle available for reservation.',
          isAvailable: vehicle.status === 'available'
        }
      })

      setVehicles(formattedVehicles)
      setSelectedVehicle(formattedVehicles[0] || null)
    })
    .catch(error => {
      console.error('Vehicle loading error:', error)
      setVehicles([])
      setSelectedVehicle(null)
    })
}, [])

  // Modal Auth State: only opened when user clicks Sign In or Create Account at top right
  const [authModal, setAuthModal] = useState(null) // 'login' | 'register' | null
  const [authFields, setAuthFields] = useState({ name: '', email: '', password: '' })
  const [authLoading, setAuthLoading] = useState(false)
  const [authError, setAuthError] = useState('')

  // Authenticated Portal View Tab: 'book' | 'my-bookings'
  const [portalTab, setPortalTab] = useState('book')

  // User's Bookings List (tracked with live status)
  const [userBookings, setUserBookings] = useState(() => {
    try {
      const session = JSON.parse(sessionStorage.getItem('ebikego_session') || 'null')
      if (!session) return []
      const allLocal = getLocalBookings()
      return allLocal.filter(
        (b) => b.userId === session.id || b.userName === session.name
      )
    } catch {
      return []
    }
  })

  // Booking Form State
  const [bookingFields, setBookingFields] = useState({
    pickup: '',
    destination: '',
    date: TODAY,
    time: '08:00',
    passengers: 1,
    durationHours: 1
  })
  const [bookingLoading, setBookingLoading] = useState(false)
  const [bookingError, setBookingError] = useState('')
  const [confirmedBooking, setConfirmedBooking] = useState(null)

  // Toast feedback
  const [toast, setToast] = useState(null)

  const showToast = (type, message) => {
    setToast({ type, message })
    setTimeout(() => setToast(null), 3500)
  }

  // Persist auth session
  useEffect(() => {
    if (currentUser) {
      sessionStorage.setItem('ebikego_session', JSON.stringify(currentUser))
    } else {
      sessionStorage.removeItem('ebikego_session')
    }
  }, [currentUser])

  // Fetch updated bookings from backend when currentUser changes
  useEffect(() => {
    if (!currentUser) return

    let isMounted = true
    const loadBackendBookings = async () => {
      try {
        const controller = new AbortController()
        const timeout = setTimeout(() => controller.abort(), 3000)
        const res = await fetch(`${API_BASE_URL}/reservations/user/${currentUser.id}`, {
          signal: controller.signal
        })
        clearTimeout(timeout)
        if (res.ok) {
          const data = await res.json()
          if (isMounted && Array.isArray(data) && data.length > 0) {
            setUserBookings(data)
          }
        }
      } catch {
        // Backend offline; local bookings remain active
      }
    }

    loadBackendBookings()
    return () => {
      isMounted = false
    }
  }, [currentUser])

  const openAuth = (mode) => {
    setAuthModal(mode)
    setAuthError('')
    setAuthFields({ name: '', email: '', password: '' })
  }

  const closeAuth = () => {
    setAuthModal(null)
    setAuthError('')
  }

  // Handle Login & Register submission
  const handleAuthSubmit = async (e) => {
    e.preventDefault()
    setAuthError('')

    if (!authFields.email.trim() || !authFields.password) {
      setAuthError('Email and password are required.')
      return
    }

    if (authModal === 'register' && !authFields.name.trim()) {
      setAuthError('Full name is required.')
      return
    }

    setAuthLoading(true)
    let user

    try {
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 3500)
      const endpoint = authModal === 'login' ? '/auth/login' : '/auth/register'

      const res = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify(
          authModal === 'login'
            ? { email: authFields.email.trim(), password: authFields.password }
            : { name: authFields.name.trim(), email: authFields.email.trim(), password: authFields.password }
        )
      })
      clearTimeout(timeout)

      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Authentication failed.')
      user = data.user
    } catch (backendErr) {
      const isNetwork =
        backendErr.name === 'AbortError' ||
        backendErr.name === 'TypeError' ||
        backendErr.message.toLowerCase().includes('fetch') ||
        backendErr.message.toLowerCase().includes('network')

      if (isNetwork) {
        try {
          if (authModal === 'register') {
            user = localRegister({
              name: authFields.name.trim(),
              email: authFields.email.trim(),
              password: authFields.password
            })
          } else {
            user = localLogin({
              email: authFields.email.trim(),
              password: authFields.password
            })
          }
        } catch (localErr) {
          setAuthError(localErr.message)
          setAuthLoading(false)
          return
        }
      } else {
        setAuthError(backendErr.message)
        setAuthLoading(false)
        return
      }
    }

    setCurrentUser(user)
    closeAuth()
    setPortalTab('book')
    const myLocal = getLocalBookings().filter(
      (b) => b.userId === user.id || b.userName === user.name
    )
    setUserBookings(myLocal)
    showToast(
      'success',
      authModal === 'register'
        ? `Welcome, ${user.name}! Account created.`
        : `Signed in as ${user.name}.`
    )
    setAuthLoading(false)
  }

  const handleLogout = () => {
    setCurrentUser(null)
    setAuthModal(null)
    setAuthError('')
    setPortalTab('book')
    setUserBookings([])
    showToast('success', 'You have been signed out.')
  }

  // Handle Booking submission
  const handleBookingSubmit = async (e) => {
    e.preventDefault()
    setBookingError('')

    if (!selectedVehicle) {
      setBookingError('Please select an available vehicle.')
      return
    }

    if (!selectedVehicle.isAvailable) {
      setBookingError(`${selectedVehicle.name} is currently unavailable.`)
      return
    }

    const { pickup, destination, date, time } = bookingFields
    if (!pickup.trim() || !destination.trim() || !date || !time) {
      setBookingError('Please fill in pickup, destination, date, and time.')
      return
    }

    setBookingLoading(true)

    const fare = Number(selectedVehicle.rate) * Number(bookingFields.durationHours)
    const payload = {
      pickupLocation: pickup.trim(),
      pickup: pickup.trim(),
      destination: destination.trim(),
      reservationDate: date,
      date,
      reservationTime: time,
      time,
      vehicleId: selectedVehicle.dbId || selectedVehicle.id,
      vehicleName: selectedVehicle.name,
      passengers: bookingFields.passengers,
      durationHours: Number(bookingFields.durationHours),
      fare,
      userId: currentUser.id,
      userName: currentUser.name
    }

    let bookingId

    try {
      const res = await fetch(`${API_BASE_URL}/reservations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(data.error || `Server responded with ${res.status}`)
      }

      bookingId = data.bookingId || data.id
    } catch (error) {
      setBookingError(error.message || 'Reservation failed. Please try again.')
      setBookingLoading(false)
      return
    }

    const newBookingRecord = {
      ...payload,
      id: bookingId,
      bookingId,
      vehicle: selectedVehicle,
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    }

    // Persist in local storage
    const existing = getLocalBookings()
    const updated = [newBookingRecord, ...existing.filter((b) => b.bookingId !== bookingId)]
    saveLocalBookings(updated)

    // Update state
    setUserBookings((prev) => [newBookingRecord, ...prev])
    setConfirmedBooking(newBookingRecord)

    // Reset form
    setBookingFields({
      pickup: '',
      destination: '',
      date: TODAY,
      time: '08:00',
      passengers: 1,
      durationHours: 1
    })

    setBookingLoading(false)
  }

  // Cancel a booked ride
  const handleCancelBooking = async (bookingId) => {
    // 1. Update local storage
    const existing = getLocalBookings()
    const updated = existing.map((b) =>
      b.bookingId === bookingId || b.id === bookingId ? { ...b, status: 'Cancelled' } : b
    )
    saveLocalBookings(updated)

    // 2. Update state
    setUserBookings((prev) =>
      prev.map((b) =>
        b.bookingId === bookingId || b.id === bookingId ? { ...b, status: 'Cancelled' } : b
      )
    )

    // 3. Notify backend if reachable
    try {
      await fetch(`${API_BASE_URL}/reservations/${bookingId}`, { method: 'DELETE' })
    } catch {
      // Offline fallback
    }

    showToast('success', `Reservation ${bookingId} has been cancelled.`)
  }

  return (
    <div className="app-container">
      {/* Toast Notification */}
      {toast && (
        <div className={`toast toast-${toast.type}`}>
          {toast.message}
        </div>
      )}

      {/* Top Navbar */}
      <header className="top-navbar">
        <div className="brand-logo">
          <h1>EBIKE<span> RESERVATION</span></h1>
        </div>

        <div className="nav-controls">
          {currentUser ? (
            <div className="user-nav-group">
              <div className="nav-tab-switch">
                <button
                  type="button"
                  className={`btn-nav-tab ${portalTab === 'book' ? 'active-nav-tab' : ''}`}
                  onClick={() => setPortalTab('book')}
                >
                  Book a Ride
                </button>
                <button
                  type="button"
                  className={`btn-nav-tab ${portalTab === 'my-bookings' ? 'active-nav-tab' : ''}`}
                  onClick={() => setPortalTab('my-bookings')}
                >
                  My Booked E-Bikes ({userBookings.length})
                </button>
              </div>

              <div className="user-profile-pill">
                <span className="user-display-name">Hi, {currentUser.name}</span>
                <button type="button" className="btn-signout" onClick={handleLogout}>
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <div className="auth-nav-buttons">
              <button
                type="button"
                className="btn-nav-signin"
                onClick={() => openAuth('login')}
              >
                Sign In
              </button>
              <button
                type="button"
                className="btn-nav-signup"
                onClick={() => openAuth('register')}
              >
                Create Account
              </button>
            </div>
          )}
        </div>
      </header>

      {/* ── CONDITIONAL VIEW ── */}
      {!currentUser ? (
        /* SCREEN 1: ONLY WEBSITE INTRODUCTION (NO BOTTOM BUTTONS, NO BOOKING PREVIEW) */
        <main className="intro-full-layout">
          <section className="intro-content-wrapper">
            <h2 className="intro-heading">
              Clean, Fast and Accessible <span className="highlight-text">Electric Ride Travel</span>
            </h2>

            <p className="intro-main-description">
              Welcome to the E-Bike Reservation System. We provide a sustainable, convenient, and
              accessible electric tricycle transit network designed for commuters, students, and
              everyday community travel.
            </p>

            <div className="intro-features-grid">
              <div className="intro-feature-card">
                <span className="feature-tag">Eco-Friendly</span>
                <h4>Zero Emission Commute</h4>
                <p>Noise-free electric tricycles and e-bikes for cleaner local transit across the community.</p>
              </div>

              <div className="intro-feature-card">
                <span className="feature-tag">Modern Fleet</span>
                <h4>Maintained Electric Fleet</h4>
                <p>Standard and high-capacity Philippine-style e-trikes maintained with reliable battery packs.</p>
              </div>

              <div className="intro-feature-card">
                <span className="feature-tag">Transparent</span>
                <h4>Affordable Community Fares</h4>
                <p>Clear, fixed base pricing per vehicle category with guaranteed rates for every trip.</p>
              </div>
            </div>
          </section>
        </main>
      ) : (
        /* SCREEN 2: AUTHENTICATED PORTAL (BOOK RIDE VIEW OR MY BOOKINGS STATUS VIEW) */
        <main className="portal-main-layout">
          {portalTab === 'book' ? (
            /* VIEW A: BOOK A VEHICLE */
            <>
              {/* Left Column: Vehicle Selection with Philippine E-Bike Visuals */}
              <section className="portal-vehicles-panel">
                <div className="panel-title-bar">
                  <h3>Select E-Bike Vehicle</h3>
                  <span className="badge-subtitle">Choose an available vehicle</span>
                </div>

                <div className="portal-vehicle-items">
                  {vehicles.map((vehicle) => {
                    const isSelected = selectedVehicle?.id === vehicle.id
                    return (
                      <div
                        key={vehicle.id}
                        className={`portal-vehicle-card ${isSelected ? 'selected' : ''} ${
                          !vehicle.isAvailable ? 'unavailable' : ''
                        }`}
                        onClick={() => vehicle.isAvailable && setSelectedVehicle(vehicle)}
                      >
                        {/* Authentic Philippine E-Bike Illustration */}
                        <div className="vehicle-photo-container">
                          <PhilippineVehicleGraphic id={vehicle.id} />
                          <span
                            className={`photo-status-tag ${
                              vehicle.isAvailable ? 'available' : 'unavailable'
                            }`}
                          >
                            {vehicle.isAvailable ? 'Available' : 'Unavailable'}
                          </span>
                        </div>

                        <div className="card-info-content">
                          <div className="card-top-row">
                            <div>
                              <h4>{vehicle.name}</h4>
                              <span className="vehicle-type-text">{vehicle.type}</span>
                            </div>
                            <strong className="vehicle-rate-badge">
                              PHP {vehicle.rate} <small>/base</small>
                            </strong>
                          </div>

                          <p className="vehicle-description-text">{vehicle.description}</p>

                          <div className="card-specs-row">
                            <span>Capacity: {vehicle.capacity} Pax</span>
                            <span>Battery: {vehicle.battery}%</span>
                          </div>

                          <button
                            type="button"
                            className={`btn-choose-vehicle ${isSelected ? 'active-choose' : ''}`}
                            disabled={!vehicle.isAvailable}
                          >
                            {!vehicle.isAvailable
                              ? 'Unavailable'
                              : isSelected
                              ? 'Selected'
                              : 'Choose Vehicle'}
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </section>

              {/* Right Column: Trip & Reservation Details Form */}
              <section className="portal-booking-panel">
                <div className="panel-title-bar">
                  <h3>Trip and Reservation Details</h3>
                  <span className="badge-subtitle">Passenger: {currentUser.name}</span>
                </div>

                {selectedVehicle && (
                  <div className="active-vehicle-banner">
                    <div className="banner-graphic-thumb">
                      <PhilippineVehicleGraphic id={selectedVehicle.id} />
                    </div>
                    <div className="banner-details">
                      <span className="banner-label">Selected Vehicle</span>
                      <h4>{selectedVehicle.name}</h4>
                      <p>
                        {selectedVehicle.type} - Max {selectedVehicle.capacity} passengers
                      </p>
                    </div>
                    <div className="banner-rate">
                      <span>Base Rate</span>
                      <strong>PHP {selectedVehicle.rate}</strong>
                    </div>
                  </div>
                )}

                {bookingError && <div className="booking-error-alert">{bookingError}</div>}

                <form className="portal-form" onSubmit={handleBookingSubmit}>
                  <div className="form-two-col">
                    <div className="portal-input-group">
                      <label htmlFor="tripPickup">Pickup Location</label>
                      <input
                        id="tripPickup"
                        type="text"
                        placeholder="Enter pickup location"
                        value={bookingFields.pickup}
                        onChange={(e) =>
                          setBookingFields({ ...bookingFields, pickup: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="portal-input-group">
                      <label htmlFor="tripDest">Destination</label>
                      <input
                        id="tripDest"
                        type="text"
                        placeholder="Enter destination"
                        value={bookingFields.destination}
                        onChange={(e) =>
                          setBookingFields({ ...bookingFields, destination: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="form-three-col">
                    <div className="portal-input-group">
                      <label htmlFor="tripDate">Reservation Date</label>
                      <input
                        id="tripDate"
                        type="date"
                        min={TODAY}
                        value={bookingFields.date}
                        onChange={(e) =>
                          setBookingFields({ ...bookingFields, date: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="portal-input-group">
                      <label htmlFor="tripTime">Reservation Time</label>
                      <input
                        id="tripTime"
                        type="time"
                        value={bookingFields.time}
                        onChange={(e) =>
                          setBookingFields({ ...bookingFields, time: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="portal-input-group">
                      <label htmlFor="tripPax">Passengers</label>
                      <select
                        id="tripPax"
                        value={bookingFields.passengers}
                        onChange={(e) =>
                          setBookingFields({
                            ...bookingFields,
                            passengers: Number(e.target.value)
                          })
                        }
                      >
                        {Array.from(
                          { length: selectedVehicle?.capacity || 4 },
                          (_, i) => i + 1
                        ).map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? 'Passenger' : 'Passengers'}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="portal-input-group">
                      <label htmlFor="tripDuration">Rental Duration</label>
                      <select
                        id="tripDuration"
                        value={bookingFields.durationHours}
                        onChange={(e) =>
                          setBookingFields({
                            ...bookingFields,
                            durationHours: Number(e.target.value)
                          })
                        }
                        required
                      >
                        {Array.from({ length: 12 }, (_, i) => i + 1).map((hours) => (
                          <option key={hours} value={hours}>
                            {hours} {hours === 1 ? 'Hour' : 'Hours'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {selectedVehicle && (
                    <div className="live-fare-card">
                      <div className="fare-line">
                        <span>Base Fare ({selectedVehicle.name})</span>
                        <span>PHP {selectedVehicle.rate}</span>
                      </div>
                      <div className="fare-line">
                        <span>Rental Duration</span>
                        <span>{bookingFields.durationHours} {bookingFields.durationHours === 1 ? 'hour' : 'hours'}</span>
                      </div>
                      <div className="fare-separator" />
                      <div className="fare-line total">
                        <span>Estimated Total Fare</span>
                        <strong>PHP {(Number(selectedVehicle.rate) * Number(bookingFields.durationHours)).toFixed(2)}</strong>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="btn-confirm-ride"
                    disabled={bookingLoading || !selectedVehicle?.isAvailable}
                  >
                    {bookingLoading ? 'Submitting Reservation...' : 'Confirm Reservation'}
                  </button>
                </form>
              </section>
            </>
          ) : (
            /* VIEW B: MY BOOKED E-BIKES & LIVE STATUS */
            <section className="my-bookings-full-panel">
              <div className="panel-title-bar">
                <div>
                  <h3>My Booked E-Bikes and Status</h3>
                  <span className="badge-subtitle">
                    Track your current reservations, pickup schedule, and live status
                  </span>
                </div>
                <button
                  type="button"
                  className="btn-new-reservation"
                  onClick={() => setPortalTab('book')}
                >
                  + Book Another E-Bike
                </button>
              </div>

              {userBookings.length === 0 ? (
                <div className="empty-bookings-box">
                  <h4>No E-Bike Bookings Found</h4>
                  <p>You have not made any electric ride reservations yet.</p>
                  <button
                    type="button"
                    className="btn-empty-book"
                    onClick={() => setPortalTab('book')}
                  >
                    Book Your First Ride
                  </button>
                </div>
              ) : (
                <div className="bookings-grid-list">
                  {userBookings.map((b) => {
                    const normalizedStatus = (b.status || 'Confirmed').toLowerCase()
                    const statusClass =
                      normalizedStatus === 'confirmed'
                        ? 'status-confirmed'
                        : normalizedStatus === 'cancelled'
                        ? 'status-cancelled'
                        : 'status-pending'

                    return (
                      <div key={b.bookingId || b.id} className="booking-status-card">
                        <div className="card-status-header">
                          <div className="status-ref-group">
                            <span className="status-label">REFERENCE:</span>
                            <strong className="status-ref-code">{b.bookingId || b.id}</strong>
                          </div>
                          <span className={`live-status-badge ${statusClass}`}>
                            {b.status || 'Confirmed'}
                          </span>
                        </div>

                        <div className="card-vehicle-row">
                          <div className="booked-vehicle-thumb">
                            <PhilippineVehicleGraphic id={b.vehicleId || b.vehicle?.id || 'ebike-1'} />
                          </div>
                          <div>
                            <h4>{b.vehicleName || b.vehicle?.name}</h4>
                            <span className="booked-passenger-text">
                              Passenger: {b.userName || currentUser.name} ({b.passengers || 1} Pax)
                            </span>
                          </div>
                          <div className="booked-fare-tag">
                            <span>Total Fare</span>
                            <strong>PHP {b.fare || 50}</strong>
                          </div>
                        </div>

                        <div className="card-route-box">
                          <div className="route-point">
                            <span className="point-dot pickup" />
                            <div>
                              <span className="route-label">PICKUP:</span>
                              <strong>{b.pickup || b.pickupLocation}</strong>
                            </div>
                          </div>
                          <div className="route-line" />
                          <div className="route-point">
                            <span className="point-dot dest" />
                            <div>
                              <span className="route-label">DESTINATION:</span>
                              <strong>{b.destination}</strong>
                            </div>
                          </div>
                        </div>

                        <div className="card-schedule-footer">
                          <div className="schedule-info">
                            <span className="schedule-label">SCHEDULE:</span>
                            <strong>
                              {b.date || b.reservationDate} at {b.time || b.reservationTime}
                            </strong>
                          </div>

                          <div className="booking-card-actions">
                            <button
                              type="button"
                              className="btn-view-receipt"
                              onClick={() => setConfirmedBooking(b)}
                            >
                              View Receipt
                            </button>
                            {(b.status || '').toLowerCase() !== 'cancelled' && (
                              <button
                                type="button"
                                className="btn-cancel-ride"
                                onClick={() => handleCancelBooking(b.bookingId || b.id)}
                              >
                                Cancel Ride
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </section>
          )}
        </main>
      )}

      {/* ── AUTH MODAL: ONLY SHOWN WHEN CLICKING SIGN IN OR CREATE ACCOUNT AT TOP RIGHT ── */}
      {authModal && (
        <div className="modal-overlay" onClick={closeAuth}>
          <div className="auth-dialog" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="dialog-close" onClick={closeAuth}>
              X
            </button>

            <div className="auth-tab-switch">
              <button
                type="button"
                className={`auth-tab-btn ${authModal === 'login' ? 'active-tab' : ''}`}
                onClick={() => {
                  setAuthModal('login')
                  setAuthError('')
                }}
              >
                Sign In
              </button>
              <button
                type="button"
                className={`auth-tab-btn ${authModal === 'register' ? 'active-tab' : ''}`}
                onClick={() => {
                  setAuthModal('register')
                  setAuthError('')
                }}
              >
                Create Account
              </button>
            </div>

            <div className="dialog-header">
              <h3>{authModal === 'login' ? 'Welcome Back' : 'Create an Account'}</h3>
              <p>
                {authModal === 'login'
                  ? 'Sign in to access vehicle booking and manage rides.'
                  : 'Register a free rider account to get started.'}
              </p>
            </div>

            {authError && <div className="dialog-error-box">{authError}</div>}

            <form className="dialog-form" onSubmit={handleAuthSubmit}>
              {authModal === 'register' && (
                <div className="dialog-input-group">
                  <label htmlFor="regName">Full Name</label>
                  <input
                    id="regName"
                    type="text"
                    placeholder="Enter your full name"
                    value={authFields.name}
                    onChange={(e) => setAuthFields({ ...authFields, name: e.target.value })}
                    required
                  />
                </div>
              )}

              <div className="dialog-input-group">
                <label htmlFor="regEmail">Email Address</label>
                <input
                  id="regEmail"
                  type="email"
                  placeholder="name@example.com"
                  value={authFields.email}
                  onChange={(e) => setAuthFields({ ...authFields, email: e.target.value })}
                  required
                />
              </div>

              <div className="dialog-input-group">
                <label htmlFor="regPass">Password</label>
                <input
                  id="regPass"
                  type="password"
                  placeholder="Enter your password"
                  value={authFields.password}
                  onChange={(e) => setAuthFields({ ...authFields, password: e.target.value })}
                  required
                />
              </div>

              <button type="submit" className="btn-dialog-submit" disabled={authLoading}>
                {authLoading
                  ? 'Processing...'
                  : authModal === 'login'
                  ? 'Sign In'
                  : 'Create Account'}
              </button>
            </form>

            <div className="dialog-switch-hint">
              {authModal === 'login' ? (
                <p>
                  Do not have an account?{' '}
                  <span
                    className="link-span"
                    onClick={() => {
                      setAuthModal('register')
                      setAuthError('')
                    }}
                  >
                    Create one here
                  </span>
                </p>
              ) : (
                <p>
                  Already registered?{' '}
                  <span
                    className="link-span"
                    onClick={() => {
                      setAuthModal('login')
                      setAuthError('')
                    }}
                  >
                    Sign in here
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── RECEIPT CONFIRMATION MODAL ── */}
      {confirmedBooking && (
        <div className="modal-overlay" onClick={() => setConfirmedBooking(null)}>
          <div className="receipt-modal-box" onClick={(e) => e.stopPropagation()}>
            <span className="receipt-badge-label">
              {confirmedBooking.status ? confirmedBooking.status.toUpperCase() : 'CONFIRMED'}
            </span>
            <h3>Reservation Receipt</h3>
            <p className="receipt-subtitle">Details of your electric ride reservation.</p>

            <div className="receipt-summary-table">
              <div className="receipt-item-row">
                <span className="lbl">Booking Reference:</span>
                <strong className="code-value">{confirmedBooking.bookingId || confirmedBooking.id}</strong>
              </div>
              <div className="receipt-item-row">
                <span className="lbl">Status:</span>
                <strong className="val-status">{confirmedBooking.status || 'Confirmed'}</strong>
              </div>
              <div className="receipt-item-row">
                <span className="lbl">Passenger:</span>
                <strong>{confirmedBooking.userName}</strong>
              </div>
              <div className="receipt-item-row">
                <span className="lbl">Vehicle:</span>
                <strong>{confirmedBooking.vehicleName || confirmedBooking.vehicle?.name}</strong>
              </div>
              <div className="receipt-item-row">
                <span className="lbl">Pickup:</span>
                <strong>{confirmedBooking.pickup || confirmedBooking.pickupLocation}</strong>
              </div>
              <div className="receipt-item-row">
                <span className="lbl">Destination:</span>
                <strong>{confirmedBooking.destination}</strong>
              </div>
              <div className="receipt-item-row">
                <span className="lbl">Schedule:</span>
                <strong>
                  {confirmedBooking.date || confirmedBooking.reservationDate} at{' '}
                  {confirmedBooking.time || confirmedBooking.reservationTime}
                </strong>
              </div>
              <div className="receipt-item-row">
                <span className="lbl">Passengers:</span>
                <strong>{confirmedBooking.passengers}</strong>
              </div>
              <div className="receipt-item-divider" />
              <div className="receipt-item-row fare-summary-row">
                <span className="lbl">Total Fare:</span>
                <strong className="fare-total-val">PHP {confirmedBooking.fare}</strong>
              </div>
            </div>

            <button
              type="button"
              className="btn-modal-close"
              onClick={() => setConfirmedBooking(null)}
            >
              Done and Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
