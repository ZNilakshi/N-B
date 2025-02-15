/* eslint-disable jsx-a11y/heading-has-content */
import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { MapPin } from "lucide-react";
import "./RideInfoForm.css";


const mapContainerStyle = {
  width: "100%",
  height: "300px",
};

const center = {
  lat: 37.7749, // Default latitude (San Francisco)
  lng: -122.4194,
};

const RideBookingForm = () => {
  // State Management
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [stops, setStops] = useState([""]); // List of stop locations
  const [markers, setMarkers] = useState([]);
  const [errors, setErrors] = useState({});
  const [vehicle, setVehicle] = useState(null);
  const [login, setLogin] = useState({ email: "", password: "" });
  const [guest, setGuest] = useState({ firstName: "", lastName: "", phone: "", email: "" });


  // Vehicle Options
  const vehicles = [
    {
      name: "Luxury Midsize SUV",
      seats: 5,
      luggage: 4,
      img: "https://example.com/luxury-suv.jpg",
    },
    {
      name: "Cadillac Escalade",
      seats: 6,
      luggage: 6,
      img: "https://example.com/cadillac-escalade.jpg",
    },
    {
      name: "Suburban",
      seats: 7,
      luggage: 6,
      img: "https://example.com/suburban.jpg",
    },
  ];

  // Function to add a stop
  const addStop = () => {
    setStops([...stops, ""]);
  };
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Function to remove a stop
  const removeStop = (index) => {
    const updatedStops = [...stops];
    updatedStops.splice(index, 1);
    setStops(updatedStops);
  };

  const validateForm = () => {
    let newErrors = {};
    if (!serviceType) newErrors.serviceType = "Service Type is required";
    if (!date) newErrors.date = "Date is required";
    if (!time) newErrors.time = "Time is required";
    if (!pickUp) newErrors.pickUp = "Pick-Up Location is required";
    if (!dropOff) newErrors.dropOff = "Drop-Off Location is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleLocationChange = (value, type, index) => {
    if (type === "stop") {
      const updatedStops = [...stops];
      updatedStops[index] = value; // Update the specific stop
      setStops(updatedStops);
    } else if (type === "dropOff") {
      setDropOff(value);
    } else {
      setPickUp(value);
    }

    updateMarkers(pickUp, stops, dropOff);
  };
  // Function to update markers
  const updateMarkers = (pick, stopList, drop) => {
    let newMarkers = [];
    if (pick) newMarkers.push({ lat: center.lat + 0.01, lng: center.lng }); // Fake lat/lng
    stopList.forEach((stop, i) => {
      if (stop) newMarkers.push({ lat: center.lat + 0.01 * (i + 2), lng: center.lng }); // Adjust fake positions
    });
    if (drop) newMarkers.push({ lat: center.lat - 0.01, lng: center.lng });

    setMarkers(newMarkers);
  };

  const handleSelectVehicle = () => {
    if (validateForm()) setStep(2);
  };

  const handleBookVehicle = (selectedVehicle) => {
    setVehicle(selectedVehicle);
    setStep(3);
  };
  const handleLogin = () => {
    // Implement login functionality here
    console.log("Logging in with:", login);
  };

  const validatePhone = (phone) => {
    return /^[0-9]{10,}$/.test(phone);
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleConfirmBooking = () => {
    let phoneError = "";
    let emailError = "";

    if (!validatePhone(guest.phone)) {
      phoneError = "Invalid phone number (must be at least 10 digits).";
    }
    if (!validateEmail(guest.email)) {
      emailError = "Invalid email format.";
    }

    setErrors({ phone: phoneError, email: emailError });

    if (!phoneError && !emailError) {
      alert("Booking confirmed!");
    }
  };

  return (
    <div style={{  maxWidth: "85%", margin: "auto", padding: "10px", backgroundColor: "white", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
     

{/* Step 1: Ride Info */}
{step === 1 && (
      <>
        <ul className="steps-navigation">
          <li className={`step-item ${step === 1 ? "active" : ""}`}>Step 1: Ride Info</li>
        </ul>

        <div className={isDesktop ? "form-container desktop" : "form-container mobile"}>
          <div className="form-section">
            <label className="form-label">Select Service Type</label>
            <select value={serviceType} onChange={(e) => setServiceType(e.target.value)} className="form-select">
              <option value="">Select</option>
              <option>To Airport</option>
              <option>From Airport</option>
              <option>Round Trip</option>
              <option>Point to Point</option>
              <option>Wedding</option>
              <option>Birthday Party</option>
            </select>
            {errors.serviceType && <p className="error-message">{errors.serviceType}</p>}

            <label className="form-label">Pickup Date & Time</label>
            <div className="input-group">
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="form-input" />
              <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="form-input" />
            </div>
            {errors.date && <p className="error-message">{errors.date}</p>}
            {errors.time && <p className="error-message">{errors.time}</p>}

            <label className="form-label">Pick-Up Location</label>
            <input type="text" placeholder="Enter pick-up location" value={pickUp} onChange={(e) => handleLocationChange(e.target.value)} className="form-input" />
            {errors.pickUp && <p className="error-message">{errors.pickUp}</p>}

            <button onClick={addStop} className="add-stop">+ Add Stop</button>
            {stops.map((stop, index) => (
              <div key={index} className="stop-item">
                <input type="text" placeholder={`Stop ${index + 1}`} value={stop} onChange={(e) => handleLocationChange(e.target.value, "stop", index)} className="form-input" />
                <button onClick={() => removeStop(index)} className="delete-button">
                  <FaTrash />
                </button>
              </div>
            ))}

            <label className="form-label">Drop-Off Location</label>
            <input type="text" placeholder="Enter drop-off location" value={dropOff} onChange={(e) => handleLocationChange(e.target.value, "dropOff")} className="form-input" />
            {errors.dropOff && <p className="error-message">{errors.dropOff}</p>}
          </div>

          <div className="map-section">
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
                {markers.map((marker, index) => (
                  <Marker key={index} position={marker} />
                ))}
              </GoogleMap>
            </LoadScript>
          </div>
        </div>

        <button onClick={handleSelectVehicle} className="next-button">Select Vehicle</button>
        <ul className="steps-navigation">
          <li className={`step-item ${step === 2 ? "active" : ""}`}>Step 2: Select Vehicle</li>
             </ul>
        <ul className="steps-navigation">
              <li className={`step-item ${step === 3 ? "active" : ""}`}>Step 3: Final Details</li>
        </ul>
      </>
    )}


      {/* Step 2: Select Vehicle */}
      { step === 2 && (
      <>
        <ul className="steps-list">
          <li className={`step-item ${step === 1 ? "active" : ""}`}> 
            <span className="step-circle"></span> Step 1: Ride Info
          </li>
        </ul>
        
        <div className="info-box">
          <div className="info-header">
            <h3></h3>
            <button onClick={() => setStep(1)} className="edit-button">Edit</button>
          </div>
          <p>{date} {time}</p>
          <p className="location"><MapPin size={16} /> From: {pickUp}</p>
          {stops.length > 0 && stops.map((stop, index) => (
            <p key={index} className="location"><MapPin size={16} /> Stop {index + 1}: {stop}</p>
          ))}
          <p className="location"><MapPin size={16} /> To: {dropOff}</p>
        </div>
        
        <ul className="steps-list">
          <li className={`step-item active-bold ${step === 2 ? "active" : ""}`}>
            <span className="step-circle"></span> Step 2: Select Vehicle
          </li>
        </ul>
        
        <div className="vehicle-container">
          {vehicles.map((v, index) => (
            <div key={index} className="vehicle-card">
              <img src={v.img} alt={v.name} className="vehicle-img" />
              <h3 className="vehicle-name">{v.name}</h3>
              <p className="vehicle-details">Seats: {v.seats} | Luggage: {v.luggage}</p>
              <button onClick={() => handleBookVehicle(v)} className="book-button">Book</button>
            </div>
          ))}
        </div>
        
        <ul className="steps-list">
          <li className={`step-item ${step === 3 ? "active" : ""}`}>
            <span className="step-circle"></span> Step 3: Final Details
          </li>
        </ul>
      </>
    )}

      {/* Step 3: Final Details */}
      {step === 3 && (
  <>
    <ul className="steps">
      <li className={`step-item ${step === 1 ? 'active' : ''}`}>Step 1: Ride Info</li>
    </ul>
    
    <div className="card">
      <div className="card-header">
        <h3></h3>
        <button onClick={() => setStep(1)} className="edit-btn">Edit</button>
      </div>
      <p><strong>{date} {time}</strong></p>
      <p className="location-info">From: {pickUp}</p>
      {stops.length > 0 && stops.map((stop, index) => (
        <p key={index} className="location-info">Stop {index + 1}: {stop}</p>
      ))}
      <p className="location-info">To: {dropOff}</p>
    </div>
    
    <ul className="steps">
      <li className={`step-item ${step === 2 ? 'active' : ''}`}>Step 2: Select Vehicle</li>
    </ul>
    
    <div className="card">
      <div className="card-header">
        <h3></h3>
        <button onClick={() => setStep(2)} className="edit-btn">Edit</button>
      </div>
      <p><strong>Vehicle:</strong> {vehicle?.name}</p>
      {vehicle?.img && <img src={vehicle.img} alt={vehicle.name} className="vehicle-img" />}
    </div>
    
    <ul className="steps">
      <li className={`step-item ${step === 3 ? 'active' : ''} final-step`}>Step 3: Final Details</li>
    </ul>
    
    <p>Please <strong>Log In</strong> to your account or <strong>continue as guest</strong> to book your reservation.</p>
    
    <div className="container">
      <div className="form-wrapper">
        <div className="card">
          <h3 className="card-title">Log In to Your Account</h3>
          <input type="text" placeholder="Email Address / Username" value={login.email} onChange={(e) => setLogin({ ...login, email: e.target.value })} className="input" />
          <input type="password" placeholder="Password" value={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })} className="input" />
          <p className="forgot-password">Forgot password?</p>
          <button onClick={handleLogin} className="login-btn">Log In</button>
        </div>
        
        <div className="card">
          <h3 className="card-title">Continue as Guest</h3>
          <input type="text" placeholder="First Name" value={guest.firstName} onChange={(e) => setGuest({ ...guest, firstName: e.target.value })} className="input" />
          <input type="text" placeholder="Last Name" value={guest.lastName} onChange={(e) => setGuest({ ...guest, lastName: e.target.value })} className="input" />
          <input type="tel" placeholder="Phone Number" value={guest.phone} onChange={(e) => setGuest({ ...guest, phone: e.target.value })} className="input" />
          {errors.phone && <p className="error-text">{errors.phone}</p>}
          <input type="email" placeholder="Email Address" value={guest.email} onChange={(e) => setGuest({ ...guest, email: e.target.value })} className="input" />
          {errors.email && <p className="error-text">{errors.email}</p>}
          <button onClick={handleConfirmBooking} className="guest-btn">Continue as Guest</button>
        </div>
      </div>
    </div>
  </>
)}

    </div>
  );
};

export default RideBookingForm;
