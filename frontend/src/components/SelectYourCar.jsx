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
      image: "car1.png",
      description:
        "Luxury sedan for 3 passengers. Ideal for business, airport transfers, and nights out.",
      features: ["3 Passenger Seating", "Vanity Mirrors", "USB Ports", "AC/DC plug", "Bottled water/coffee"],
    },
    {
      name: "Stretched Limo",
      image: "car2.png",
      description:
        "Luxury stretch limousines for 10 to 12 passengers. Perfect for executive and special events.",
      features: ["Fiber Optic Lighting", "DVD/CD", "Flat Screen TV", "2 large ice chests", "Leather Seating"],
    },
    {
      name: "15 to 20 Passenger Escalade & Hummerzines",
      image: "car3.png",
      description:
        "Party on wheels with luxury seating and entertainment options for 15-20 passengers.",
      features: ["Fiber Optic Lighting", "DVD/CD", "Flat Screen TV", "Multiple Ice Chests", "Privacy Divider"],
    },
  ];

  return (
    <div style={styles.container}>
      <h1>SELECT YOUR CAR</h1>
      <p>From sedan to mini bus, our vehicles accommodate 3 to 55 passengers</p>

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
            <a href="/Fleet" style={styles.button}>VIEW VEHICLE</a>
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
              <a href="/Fleet" style={styles.button}>VIEW VEHICLE</a>
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
    backgroundColor: "#0c0e16",
    color: "white",
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
    backgroundColor: "white",
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
    color: "white",
    cursor: "pointer",
    background: "none",
    border: "none",
    marginRight: "10px",
  },
  arrowRight: {
    fontSize: "30px",
    color: "white",
    cursor: "pointer",
    background: "none",
    border: "none",
    marginLeft: "10px",
  },
};

export default SelectYourCar;
