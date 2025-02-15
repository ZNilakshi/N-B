/* eslint-disable jsx-a11y/heading-has-content */
import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { MapPin } from "lucide-react";


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
   {/* Steps Navigation */}
<ul style={{ listStyleType: "none", padding: 0, display: "flex", gap: "10px", marginBottom: "20px" }}>
  <li style={{ display: "flex", fontSize: "22px", alignItems: "center", gap: "2px" ,fontWeight: "bold" }}>
    <span style={{ width: "10px",  height: "10px", borderRadius: "50%", backgroundColor: step === 1 ? "#007bff" : "#ccc", display: "inline-block" }}></span>
    Step 1: Ride Info
  </li>
</ul>
     
   
    <div
      style={{
        display: isDesktop ? "flex" : "block",
        flexDirection: "row",
        gap: "2px",
        padding: "20px",
      }}
    >
      {/* Left Side: Form Section */}
      <div style={{ width: isDesktop ? "50%" : "100%" }}>
      <div>
        <label style={{ fontWeight: "bold" ,  fontSize: "19px", color: "gray"}}>Select Service Type</label>
      </div>
    <select value={serviceType} onChange={(e) => setServiceType(e.target.value)} style={{ width: "49%", padding: "15px", marginTop: "5px", borderRadius: "6px",  fontSize: "17px",border: "1px solid #ccc" }}>
      <option value="">Select</option>
      <option>To Airport</option>
      <option>From Airport</option>
      <option>Round Trip</option>
      <option>Point to Point</option>
      <option>Wedding </option>
      <option>Birthday Party</option>
    </select>
      {errors.serviceType && <p style={{ color: "red", fontSize: "14px" }}>{errors.serviceType}</p>}

      <div>
        <label style={{ fontWeight: "bold" ,color: "gray" , fontSize: "19px", }}>Pickup Date & Time</label>
      </div>
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={{ flex: 1, padding: "10px", borderRadius: "6px", border: "1px solid #ccc" ,  fontSize: "17px",}} />
      
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} style={{ flex: 1, padding: "10px", borderRadius: "6px", border: "1px solid #ccc"  ,  fontSize: "17px",}} />
    </div>
    {errors.date && <p style={{ color: "red", fontSize: "14px" }}>{errors.date}</p>}
    {errors.time && <p style={{ color: "red", fontSize: "14px" }}>{errors.time}</p>}

        <label style={{ fontWeight: "bold" ,  fontSize: "19px", color: "gray" }}>Pick-Up Location</label>
        <input
          type="text"
          placeholder="Enter pick-up location"
          value={pickUp}
          onChange={(e) => handleLocationChange(e.target.value)}
          style={{ width: "94%", padding: "10px", marginTop: "10px", borderRadius: "6px", border: "1px solid #ccc" ,  fontSize: "17px",}}
        />
        {errors.pickUp && <p style={{ color: "red", fontSize: "14px" }}>{errors.pickUp}</p>}

        {/* Add Stops */}
       
<button
  onClick={addStop}
  style={{ marginTop: "10px",fontSize: "17px", color: "#007bff", background: "none", border: "none", cursor: "pointer", fontSize: "14px" }}
>
  + Add Stop
</button>

{stops.map((stop, index) => (
  <div key={index} style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
    <input
      type="text"
      placeholder={`Stop ${index + 1}`}
      value={stop}
      onChange={(e) => handleLocationChange(e.target.value, "stop", index)}
      style={{ flex: 1, padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
    />
    <button
      onClick={() => removeStop(index)}
      style={{ marginLeft: "10px", background: "none", border: "none", cursor: "pointer", color: "red" }}
    >
      <FaTrash />
    </button>
  </div>
))}


        {/* Drop-Off Location */}
        <label style={{ fontWeight: "bold", color: "gray" , fontSize: "19px", marginTop: "10px", display: "block" }}>Drop-Off Location</label>
        <input
          type="text"
          placeholder="Enter drop-off location"
          value={dropOff}
          onChange={(e) => handleLocationChange(e.target.value, "dropOff")}
          style={{ width: "94%", padding: "10px",fontSize: "17px", marginTop: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        {errors.dropOff && <p style={{ color: "red", fontSize: "14px" }}>{errors.dropOff}</p>}
      </div>

      {/* Right Side: Map Section */}
      <div style={{ width: isDesktop ? "50%" : "100%", marginTop: isDesktop ? "0" : "20px" }}>
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
            {markers.map((marker, index) => (
              <Marker key={index} position={marker} />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
    <button onClick={handleSelectVehicle} style={{ width: "50%", marginTop: "20px", backgroundColor: "#007bff", color: "white", padding: "12px", borderRadius: "6px", border: "none", cursor: "pointer", fontSize: "16px" }}>Select Vehicle</button>
   {/* Steps Navigation */}
<ul style={{ listStyleType: "none", padding: 0, display: "flex", gap: "10px", marginBottom: "20px" }}>
  
  <li style={{ display: "flex", fontSize: "22px", alignItems: "center", gap: "5px" }}>
    <span style={{ width: "14px" , fontWeight: "bold",  height: "14px", borderRadius: "50%", backgroundColor: step === 2 ? "#007bff" : "#ccc", display: "inline-block" }}></span>
    Step 2: Select Vehicle
  </li>
  
</ul>
<ul style={{ listStyleType: "none", padding: 0, display: "flex", gap: "10px", marginBottom: "20px" }}>
  
  <li style={{ display: "flex", fontSize: "22px", alignItems: "center", gap: "5px" }}>
    <span style={{ width: "14px" ,  fontWeight: "bold" , height: "14px", borderRadius: "50%", backgroundColor: step === 3 ? "#007bff" : "#ccc", display: "inline-block" }}></span>
    Step 3: Final Details
  </li>
 
</ul>

  </>
)}


      {/* Step 2: Select Vehicle */}
      {step === 2 && (
        <>
        <ul style={{ listStyleType: "none", padding: 0, display: "flex", gap: "10px", marginBottom: "20px" }}>
  <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
    <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: step === 1 ? "#007bff" : "#ccc", display: "inline-block" }}></span>
    Step 1: Ride Info
  </li>
  
</ul>
           
<div style={{ padding: "16px", border: "1px solid #e5e7eb", borderRadius: "8px", marginTop: "16px" }}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
  <h3 style={{ fontSize: "18px", fontWeight: "600" }}></h3>
  <button onClick={() => setStep(1)} style={{ color: "#007bff", border: "none", background: "none", cursor: "pointer" }}>Edit</button>
</div>
<p>{date} {time}</p>

<p style={{ display: "flex", alignItems: "center", gap: "8px" }}><MapPin size={16} color="#6b7280" /> From: {pickUp}</p>
{stops.length > 0 && stops.map((stop, index) => (
  <p key={index} style={{ display: "flex", alignItems: "center", gap: "8px" }}><MapPin size={16} color="#6b7280" /> Stop {index + 1}: {stop}</p>
))}
<p style={{ display: "flex", alignItems: "center", gap: "8px" }}><MapPin size={16} color="#6b7280" /> To: {dropOff}</p>
</div>
          <ul style={{ listStyleType: "none", padding: 0, display: "flex", gap: "10px", marginBottom: "20px" }}>
  
          <li style={{ display: "flex", alignItems: "center", gap: "5px" ,  fontWeight: "bold" ,fontSize: "18px",  }}>
            <span style={{ width: "10px", height: "10px", fontSize: "18px",  borderRadius: "50%", backgroundColor: step === 2 ? "#007bff" : "#ccc", display: "inline-block" }}></span>
            Step 2: Select Vehicle
          </li>
          
        </ul> <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
            {vehicles.map((v, index) => (
              <div key={index} style={{ width: "30%", textAlign: "center", border: "1px solid #ddd", padding: "15px", borderRadius: "8px", boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)" }}>
                <img src={v.img} alt={v.name} style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "6px" }} />
                <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{v.name}</h3>
                <p style={{ fontSize: "14px", color: "#666" }}>Seats: {v.seats} | Luggage: {v.luggage}</p>
                <button onClick={() => handleBookVehicle(v)} style={{ backgroundColor: "#007bff", color: "white", padding: "8px 12px", borderRadius: "6px", border: "none", cursor: "pointer" }}>Book</button>
              
              </div>
              
            ))}
          </div>
          <ul style={{ listStyleType: "none", padding: 0, display: "flex", gap: "10px", marginBottom: "20px" }}>
  
          <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: step === 3 ? "#007bff" : "#ccc", display: "inline-block" }}></span>
            Step 3: Final Details
          </li>
         
        </ul>
        </>
      )}

      {/* Step 3: Final Details */}
      {step === 3 && (
  <>
  <ul style={{ listStyleType: "none", padding: 0, display: "flex", gap: "10px", marginBottom: "20px" }}>
  <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
    <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: step === 1 ? "#007bff" : "#ccc", display: "inline-block" }}></span>
    Step 1: Ride Info
  </li>
  
</ul>
<div style={{ padding: "16px", border: "1px solid #e5e7eb", borderRadius: "8px", marginTop: "16px" }}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
  <h3 style={{ fontSize: "18px", fontWeight: "600" }}></h3>
  <button onClick={() => setStep(1)} style={{ color: "#007bff", border: "none", background: "none", cursor: "pointer" }}>Edit</button>
</div>
<p><strong>{date} {time}</strong></p>

<p style={{ display: "flex", alignItems: "center", gap: "8px" }}><MapPin size={16} color="#6b7280" /> From: {pickUp}</p>
{stops.length > 0 && stops.map((stop, index) => (
  <p key={index} style={{ display: "flex", alignItems: "center", gap: "8px" }}><MapPin size={16} color="#6b7280" /> Stop {index + 1}: {stop}</p>
))}
<p style={{ display: "flex", alignItems: "center", gap: "8px" }}><MapPin size={16} color="#6b7280" /> To: {dropOff}</p>
</div>

    <ul style={{ listStyleType: "none", padding: 0, display: "flex", gap: "10px", marginBottom: "20px" }}>
  
    <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: step === 2 ? "#007bff" : "#ccc", display: "inline-block" }}></span>
      Step 2: Select Vehicle
    </li>
    
  </ul>
  <div style={{ padding: "16px", border: "1px solid #e5e7eb", borderRadius: "8px", marginTop: "16px" }}>
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <h3 style={{ fontSize: "18px", fontWeight: "600" }}></h3>
    <button onClick={() => setStep(2)} style={{ color: "#007bff", border: "none", background: "none", cursor: "pointer" }}>Edit</button>
  </div>
  <p><strong>Vehicle:</strong> {vehicle?.name}</p>
  {vehicle?.img && <img src={vehicle.img} alt={vehicle.name} style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "6px", marginTop: "10px" }} />}
    
  
</div>

<ul style={{ listStyleType: "none", padding: 0, display: "flex", gap: "10px", marginBottom: "20px" }}>
  
  <li style={{ display: "flex", alignItems: "center", fontWeight: "bold",  fontSize: "18px" , gap: "5px" }}>
    <span style={{ width: "10px", height: "10px",  borderRadius: "50%", backgroundColor: step === 3 ? "#007bff" : "#ccc", display: "inline-block" }}></span>
    Step 3: Final Details
  </li>
 
</ul>
    <p>Please <strong>Log In</strong> to your account or <strong>continue as guest</strong> to book your reservation.</p>

    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      minHeight: "60vh", 
      backgroundColor: "white", 
      
    }}>
      <div style={{ 
        display: "flex", 
        flexWrap: "wrap", 
        gap: "20px", 
        justifyContent: "center", 
        maxWidth: "900px", 
        width: "100%" 
      }}>
        
        {/* Log In Section */}
        <div style={{ 
          flex: "1", 
          minWidth: "320px", 
          backgroundColor: "white", 
          padding: "24px", 
          borderRadius: "12px", 
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)" 
        }}>
          <h3 style={{ fontSize: "22px", fontWeight: "600", color: "#333", marginBottom: "12px" }}>
            Log In to Your Account
          </h3>
          <input
            type="text"
            placeholder="Email Address / Username"
            value={login.email}
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
            style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc", marginBottom: "10px" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={login.password}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
            style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc", marginBottom: "10px" }}
          />
          <p style={{ color: "#007BFF", cursor: "pointer", fontSize: "14px", marginBottom: "10px" }}>
            Forgot password?
          </p>
          
          <button
            onClick={handleLogin}
            style={{ 
              width: "100%", 
              backgroundColor: "#007BFF", 
              color: "white", 
              padding: "10px", 
              borderRadius: "6px", 
              border: "none", 
              cursor: "pointer", 
              fontSize: "16px",
              transition: "background 0.3s"
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
          >
            Log In
          </button>
        </div>

        {/* Continue as Guest Section */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "60vh", backgroundColor: "white" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", maxWidth: "900px", width: "100%" }}>
              <div style={{ flex: "1", minWidth: "320px", backgroundColor: "white", padding: "24px", borderRadius: "12px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                <h3 style={{ fontSize: "22px", fontWeight: "600", color: "#333", marginBottom: "12px" }}>Continue as Guest</h3>
                <input type="text" placeholder="First Name" value={guest.firstName} onChange={(e) => setGuest({ ...guest, firstName: e.target.value })} style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc", marginBottom: "10px" }} />
                <input type="text" placeholder="Last Name" value={guest.lastName} onChange={(e) => setGuest({ ...guest, lastName: e.target.value })} style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc", marginBottom: "10px" }} />
                <input type="tel" placeholder="Phone Number" value={guest.phone} onChange={(e) => setGuest({ ...guest, phone: e.target.value })} style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc", marginBottom: "10px" }} />
                {errors.phone && <p style={{ color: "red", fontSize: "14px" }}>{errors.phone}</p>}
                <input type="email" placeholder="Email Address" value={guest.email} onChange={(e) => setGuest({ ...guest, email: e.target.value })} style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc", marginBottom: "10px" }} />
                {errors.email && <p style={{ color: "red", fontSize: "14px" }}>{errors.email}</p>}
                <button onClick={handleConfirmBooking} style={{ width: "100%", backgroundColor: "#28A745", color: "white", padding: "10px", borderRadius: "6px", border: "none", cursor: "pointer", fontSize: "16px", transition: "background 0.3s" }} onMouseOver={(e) => (e.target.style.backgroundColor = "#218838")} onMouseOut={(e) => (e.target.style.backgroundColor = "#28A745")}>Continue as Guest</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  </>
)
}
    </div>
  );
};

export default RideBookingForm;
