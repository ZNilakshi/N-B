import React, { useState, useEffect } from "react";

const SelectYourCar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextCar = () => setCurrentIndex((prev) => (prev + 1) % cars.length);
  const prevCar = () => setCurrentIndex((prev) => (prev - 1 + cars.length) % cars.length);

  const cars = [
    {
      name: "MKT Lincoln Town Car",
      image: "ls.png",
      description:
        "Luxury sedan for 3 passengers. Ideal for business, airport transfers, and nights out.",
      features: ["3 Passenger Seating", "Vanity Mirrors", ],
    },
    {
      name: "Stretched Limo",
      image: "suzuki.png",
      description:
        "Luxury stretch limousines for 10 to 12 passengers. Perfect for executive and special events.",
      features: ["Fiber Optic Lighting",  "Leather Seating"],
    },
    {
      name: "15 to 20 Passenger Escalade & Hummerzines",
      image: "prius.png",
      description:
        "Party on wheels with luxury seating and entertainment options for 15-20 passengers.",
      features: ["Fiber Optic Lighting", "Privacy Divider"],
    },
  ];

  return (
    <div style={styles.container}>
      <h1>SELECT YOUR CAR</h1>
      <p>From sedan to mini vans, our vehicles accommodate 3 to 14 passengers</p>

      {isMobile ? (
        <div style={styles.mobileContainer}>
          <button onClick={prevCar} style={styles.arrowLeft}>❮</button>
          <div style={styles.card}>
            <img src={cars[currentIndex].image} alt={cars[currentIndex].name} style={styles.image} />
            <h4>{cars[currentIndex].name}</h4>
            <p>{cars[currentIndex].description}</p>
            <ul style={styles.featureList}>
              {cars[currentIndex].features.map((feature, idx) => (
                <li key={idx} style={styles.featureItem}>{feature}</li>
              ))}
            </ul>
              <a href="/reservation" style={styles.button}>🚗 Reserve Now</a>
          </div>
          <button onClick={nextCar} style={styles.arrowRight}>❯</button>
        </div>
      ) : (
        <div style={styles.gridContainer}>
          {cars.map((car, index) => (
            <div key={index} style={styles.card}>
              <img src={car.image} alt={car.name} style={styles.image} />
              <h4>{car.name}</h4>
              <p>{car.description}</p>
              <ul style={styles.featureList}>
                {car.features.map((feature, idx) => (
                  <li key={idx} style={styles.featureItem}>{feature}</li>
                ))}
              </ul>
                   <a href="/reservation" style={styles.button}>🚗 Reserve Now</a>
            </div>
          ))}
        </div>
      )}

      <button style={{ ...styles.button, marginTop: "20px" }}>See The Rest of Our Fleet</button>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f3f4f6",
    color: "black",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "40px 0",
  },
  gridContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  mobileContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  card: {
    background: "linear-gradient(to right,rgb(255, 255, 255),rgb(255, 255, 255))", // Modern gradient background
   color: "black",
    borderRadius: "10px",
    textAlign: "center",
    padding: "20px",
    width: "300px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    marginBottom: "15px",
  },
  featureList: {
    listStyle: "none",
    padding: "0",
    textAlign: "left",
    marginTop: "15px",
  },
  featureItem: {
    paddingBottom: "5px",
    borderBottom: "1px solid #ddd",
  },
  button: {
    backgroundColor: "#99001c",
    color: "white",
    padding: "10px 15px",
    textDecoration: "none",
    display: "block",
    borderRadius: "5px",
    marginTop: "10px",
    fontWeight: "bold",
    
  },
  arrowLeft: {
    fontSize: "30px",
    color: "#99001c",
    cursor: "pointer",
    background: "none",
    border: "none",
    marginRight: "10px",
  },
  arrowRight: {
    fontSize: "30px",
    color: "#99001c",
    cursor: "pointer",
    background: "none",
    border: "none",
    marginLeft: "10px",
  },
};

export default SelectYourCar;
