import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const RideBookingForm = () => {
  // State Management
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [passengers, ] = useState(1);
  const [stops, setStops] = useState([]);
  const [errors, setErrors] = useState({});
  const [contact, ] = useState({ name: "", email: "", phone: "" });
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

  // Helper Functions
  const addStop = () => setStops([...stops, ""]);
  const removeStop = (index) => setStops(stops.filter((_, i) => i !== index));

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

  const handleConfirmBooking = () => {
    if (!contact.name || !contact.email || !contact.phone) {
      setErrors({ contact: "Please fill in all contact details" });
      return;
    }
    alert("Booking Confirmed!");
  };

  return (
    <div style={{ maxWidth: "700px", margin: "auto", padding: "16px", backgroundColor: "white", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
      {/* Step 1: Ride Info */}
      {step === 1 && (
        <>
          <h2 style={{ color: "#333", textAlign: "left" }}>Step 1: Ride Info</h2>
          <label style={{ fontWeight: "bold" }}>Select Service Type</label>
          <select value={serviceType} onChange={(e) => setServiceType(e.target.value)} style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "6px", border: "1px solid #ccc" }}>
            <option value="">Select</option>
            <option>To Airport</option>
            <option>From Airport</option>
          </select>
          {errors.serviceType && <p style={{ color: "red", fontSize: "14px" }}>{errors.serviceType}</p>}
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={{ flex: 1, padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} />
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} style={{ flex: 1, padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} />
          </div>
          {errors.date && <p style={{ color: "red", fontSize: "14px" }}>{errors.date}</p>}
          {errors.time && <p style={{ color: "red", fontSize: "14px" }}>{errors.time}</p>}
          <input type="text" placeholder="Pick-Up Location" value={pickUp} onChange={(e) => setPickUp(e.target.value)} style={{ width: "100%", padding: "10px", marginTop: "10px", borderRadius: "6px", border: "1px solid #ccc" }} />
          {errors.pickUp && <p style={{ color: "red", fontSize: "14px" }}>{errors.pickUp}</p>}
          <button onClick={addStop} style={{ marginTop: "10px", color: "#007bff", background: "none", border: "none", cursor: "pointer", fontSize: "14px" }}>+ Add Stop</button>
          {stops.map((stop, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
              <input type="text" placeholder={`Stop ${index + 1}`} style={{ flex: 1, padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} />
              <button onClick={() => removeStop(index)} style={{ marginLeft: "10px", background: "none", border: "none", cursor: "pointer", color: "red" }}>
                <FaTrash />
              </button>
            </div>
          ))}
          <input type="text" placeholder="Drop-Off Location" value={dropOff} onChange={(e) => setDropOff(e.target.value)} style={{ width: "100%", padding: "10px", marginTop: "10px", borderRadius: "6px", border: "1px solid #ccc" }} />
          {errors.dropOff && <p style={{ color: "red", fontSize: "14px" }}>{errors.dropOff}</p>}
          <button onClick={handleSelectVehicle} style={{ width: "100%", marginTop: "20px", backgroundColor: "#007bff", color: "white", padding: "12px", borderRadius: "6px", border: "none", cursor: "pointer", fontSize: "16px" }}>Select Vehicle</button>
          <h2 style={{ color: "#333", textAlign: "left" }}>Step 2: Ride Info</h2>
          <h2 style={{ color: "#333", textAlign: "left" }}>Step 3: Ride Info</h2>
         
        </>
      )}

      {/* Step 2: Select Vehicle */}
      {step === 2 && (
        <>
          <h2 style={{ color: "#333" }}>Step 1: Ride Info</h2>
          <button onClick={() => setStep(1)} style={{ float: "right", color: "blue", border: "none", background: "none", cursor: "pointer" }}>Edit</button>
          <p><strong>{date} {time}</strong></p>
          <p>Passenger: <strong>{passengers}</strong></p>
          <p>From: {pickUp}</p>
          <p>To: {dropOff}</p>
          <h2 style={{ color: "#333" }}>Step 2: Select Vehicle</h2>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
            {vehicles.map((v, index) => (
              <div key={index} style={{ width: "30%", textAlign: "center", border: "1px solid #ddd", padding: "15px", borderRadius: "8px", boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)" }}>
                <img src={v.img} alt={v.name} style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "6px" }} />
                <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{v.name}</h3>
                <p style={{ fontSize: "14px", color: "#666" }}>Seats: {v.seats} | Luggage: {v.luggage}</p>
                <button onClick={() => handleBookVehicle(v)} style={{ backgroundColor: "#007bff", color: "white", padding: "8px 12px", borderRadius: "6px", border: "none", cursor: "pointer" }}>Book</button>
              
              </div>
              
            ))}
          </div>
          <h2 style={{ color: "#333", textAlign: "left" }}>Step 3: Ride Info</h2>
         
        </>
      )}

      {/* Step 3: Final Details */}
      {step === 3 && (
  <>
    <h2>Step 1: Ride Info</h2>
    <button onClick={() => setStep(1)} style={{ float: "right", color: "blue", border: "none", background: "none", cursor: "pointer" }}>Edit</button>
    <p><strong>{date} {time}</strong></p>
    <p>Passenger: <strong>{passengers}</strong></p>
    <p>From: {pickUp}</p>
    <p>To: {dropOff}</p>

    <h2>Step 2: Select Vehicle</h2>
    <button onClick={() => setStep(2)} style={{ float: "right", color: "blue", border: "none", background: "none", cursor: "pointer" }}>Edit</button>
    <p><strong>Vehicle:</strong> {vehicle?.name}</p>

    <h2>Step 3: Final Details</h2>
    <p>Please <strong>Log In</strong> to your account or <strong>continue as guest</strong> to book your reservation.</p>

    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {/* Log In Section */}
      <div style={{ width: "48%" }}>
        <h3>Log In to your account</h3>
        <input type="text" placeholder="Email Address / Username" value={login.email} onChange={(e) => setLogin({ ...login, email: e.target.value })} style={{ width: "100%", padding: "8px" }} />
        <input type="password" placeholder="Password" value={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })} style={{ width: "100%", padding: "8px", marginTop: "8px" }} />
        <p style={{ color: "blue", cursor: "pointer" }}>Forgot password?</p>
        <button onClick={handleLogin} style={{ width: "100%", marginTop: "8px", backgroundColor: "blue", color: "white", padding: "8px" }}>Log in</button>
      </div>

      {/* Continue as Guest Section */}
      <div style={{ width: "48%" }}>
        <h3>Continue as Guest</h3>
        <input type="text" placeholder="First Name" value={guest.firstName} onChange={(e) => setGuest({ ...guest, firstName: e.target.value })} style={{ width: "100%", padding: "8px" }} />
        <input type="text" placeholder="Last Name" value={guest.lastName} onChange={(e) => setGuest({ ...guest, lastName: e.target.value })} style={{ width: "100%", padding: "8px", marginTop: "8px" }} />
        <input type="tel" placeholder="Phone Number" value={guest.phone} onChange={(e) => setGuest({ ...guest, phone: e.target.value })} style={{ width: "100%", padding: "8px", marginTop: "8px" }} />
        <input type="email" placeholder="Email Address" value={guest.email} onChange={(e) => setGuest({ ...guest, email: e.target.value })} style={{ width: "100%", padding: "8px", marginTop: "8px" }} />
        <button onClick={handleConfirmBooking} style={{ width: "100%", marginTop: "16px", backgroundColor: "green", color: "white", padding: "8px" }}>Continue as Guest</button>
      </div>
    </div>
  </>
)
}
    </div>
  );
};

export default RideBookingForm;
