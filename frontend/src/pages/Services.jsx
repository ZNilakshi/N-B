import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const places = [
  {
    name: "Badulla",
    thumbnail: "badulla3.jpg",
    size: "Medium",
    images: [
      "badulla1.webp",
      "badulla2.webp",
      "badulla.jpg"
    ]
  },
  {
    name: "Polonnaruwa",
    thumbnail: "polonnaruwa.jpg",
    size: "Large",
    images: [
      "polonnaruwa3.jpg",
      "polonnaruwa2.jpg",
      "polonnaruwa1.jpg"
    ]
  },
  {
    name: "Kandy",
    thumbnail: "kandy.jpg",
    size: "large",
    images: [
      "kandy1.jpg",
      "kandy2.jpg",
      "kandy3.jpg"
    ]
  },
  {
    name: "Mirissa",
    thumbnail: "mirissa.jpg",
    size: "Medium",
    images: [
      "mirissa1.jpg",
      "mirissa2.jpg",
      "mirissa3.jpg",
    ]
  },
  {
    name: "Matara",
    thumbnail: "matara.jpg",
    size: "medium",
    images: [
      "matara1.jpg",
      "matara2.jpg",
      "matara3.jpg"
    ]
  },
  {
    name: "Badulla",
    thumbnail: "badulla3.jpg",
    size: "Medium",
    images: [
      "badulla1.webp",
      "badulla2.webp",
      "badulla.jpg"
    ]
  },
 
 
  {
    name: "Nuwara Eliya",
    thumbnail: "nuwaraeliya.jpg",
    size: "medium",
    images: [
      "nuwaraeliya1.jpg",
      "nuwaraeliya2.jpg",
      "nuwaraeliya3.jpg",
    ]
  },
  
  {
    name: "Galle",
    thumbnail: "galle.jpg",
    size: "large",
    images: [
      "galle1.jpg",
      "galle3.jpg"
    ]
  },
  
  
  {
    name: "Ella",
    thumbnail: "ella.jpg",
    size: "large",
    images: [
      "ella1.jpg",
      "ella2.jpg",
      "ella3.jpg"
    ]
  },
  {
    name: "Galle",
    thumbnail: "galle.jpg",
    size: "large",
    images: [
      "galle1.jpg",
      "galle3.jpg"
    ]
  },
  
  
  {
    name: "Ella",
    thumbnail: "ella.jpg",
    size: "Medium",
    images: [
      "ella1.jpg",
      "ella2.jpg",
      "ella3.jpg"
    ]
  },
  {
    name: "Ambuluwawa",
    thumbnail: "ambuluwawa.jpg",
    size: "large",
    images: [
      "ambuluwawa1.jpg",
      "ambuluwawa2.jpg",
      "ambuluwawa3.jpg",
    ]
  },
  
  
  {
    name: "Sigiriya Rock",
    thumbnail: "seegiriys.jpg",
    size: "large",
    images: [
      "seegiriya1.webp",
      "seegiriya2.jpg",
      "seegiriya3.jpg"
    ]
  },
  {
    name: "Nuwara Eliya",
    thumbnail: "nuwaraeliya.jpg",
    size: "large",
    images: [
      "nuwaraeliya1.jpg",
      "nuwaraeliya2.jpg",
      "nuwaraeliya3.jpg",
    ]
  },
];
export default function Home() {
  const [selectedPlace, setSelectedPlace] = useState(null);
 

  const navigate = useNavigate();

const handleBookRide = () => {
  navigate("/reservation");
};

  const styles = {
    container: {
      padding: "24px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "16px",
      textAlign: "center"
    },
    card: size => ({
      position: "relative",
      cursor: "pointer",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      color: "white",
      gridRow: size === "large" ? "span 2" : size === "small" ? "span 1" : "span 1",
      gridColumn: size === "large" ? "span 2" : "span 1"
    }),
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    overlay: {
      position: "absolute",
      bottom: "0",
      left: "0",
      width: "100%",
      padding: "16px",
      background: "rgba(0, 0, 0, 0.5)",
      textAlign: "left"
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "16px"
    },
    modal: {
      backgroundColor: "white",
      padding: "24px",
      borderRadius: "16px",
      width: "90vw", // Adjust to viewport width
      maxWidth: "600px", // Prevent it from getting too wide
      height: "auto", // Allow content to dictate height
      maxHeight: "80vh", // Prevent excessive height
      overflowY: "auto" // Scroll if content overflows
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // More flexible
      gap: "16px"
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      marginTop: "16px"
    },
    button: {
      padding: "10px 20px",
      border: "none",
      backgroundColor: "#007bff",
      color: "white",
      borderRadius: "8px",
      cursor: "pointer",
      flex: 1, // Make buttons take equal space
      margin: "0 8px" // Add space between buttons
    },
    heading: {
      fontSize: "53px",
      fontWeight: "bold"
    },
    subheading: {
      fontSize: "23px",
      fontWeight: "bold",
      margin: "10px 0"
    }
  };

  return (
    <>
      <Layout>
        <h1 style={styles.heading}>ELEVATE YOUR TRAVEL EXPERIENCE</h1>
        <p style={styles.subheading}>
          Luxury Vehicles, Seamless Service, and a Journey Tailored to Your Comfort.
        </p>
      </Layout>
      <div style={styles.container}>
        {places.map((place, index) => (
          <div key={index} style={styles.card(place.size)} onClick={() => setSelectedPlace(place)}>
            <img src={place.thumbnail} alt={place.name} style={styles.image} />
            <div style={styles.overlay}>
              <h2>{place.name}</h2>
            </div>
          </div>
        ))}
      </div>

      {selectedPlace && (
        <div style={styles.modalOverlay} onClick={() => setSelectedPlace(null)}>
          <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} style={styles.modal}>
            <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>{selectedPlace.name}</h2>
            <div style={styles.grid}>
              {selectedPlace.images.map((img, idx) => (
                <img key={idx} src={img} alt={`${selectedPlace.name} ${idx}`} style={styles.image} />
              ))}
            </div>
            <div style={styles.buttonContainer}>
  <button style={styles.button} onClick={() => setSelectedPlace(null)}>Close</button>
  <button style={styles.button} onClick={handleBookRide}>Book a Ride Now</button>
</div>

    </motion.div>
        </div>
      )}
      <div>
        <Footer />
      </div>
    </>
  );
}

