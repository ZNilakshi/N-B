import React, { useState, useEffect } from "react";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: "url('home.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          color: "white",
          textAlign: "center",
          padding: "20px",
          position: "relative",
        }}
      >
        {/* Content Container */}
        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Logo */}
          <img
            src="logo.png"
            alt="Company Logo"
            style={{ width: "150px", height: "auto", marginBottom: "10px" }}
          />

          {/* Navigation Menu */}
          {!isMobile ? (
            <nav style={styles.navbarDesktop}>
              <a href="/" style={styles.navItem}>HOME</a>
              <a href="/about" style={styles.navItem}>ABOUT US</a>
              <a href="/fleet" style={styles.navItem}>OUR FLEET</a>
              <a href="/reservation" style={styles.navItem}>RESERVATION</a>
              <a href="/contact" style={styles.navItem}>CONTACT US</a>
            </nav>
          ) : (
            <>
              <div style={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
                ☰
              </div>
              {menuOpen && (
                <nav style={styles.navbarMobile}>
                  <a href="/" style={styles.navItem}>HOME</a>
                  <a href="/AboutUs" style={styles.navItem}>ABOUT US</a>
                  <a href="/fleet" style={styles.navItem}>OUR FLEET</a>
                  <a href="/reservation" style={styles.navItem}>RESERVATION</a>
                  <a href="/contact" style={styles.navItem}>CONTACT US</a>
                </nav>
              )}
            </>
          )}

          <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
            CHAUFFEURED TRANSPORTATION LIKE NO OTHER
          </h1>
          <p style={{ fontSize: "22px", margin: "20px 0" }}>
            Professional Chauffeurs, Luxury Vehicles, and the most personalized service in the industry
          </p>
          <div>
            <button style={styles.button}>Reserve Transportation</button>
          </div>
        </div>
      </div>

     
    </div>
  );
};

const styles = {
  menuIcon: {
    fontSize: "30px",
    color: "white",
    cursor: "pointer",
    position: "absolute",
    top: "15px",
    right: "20px",
  },
  navbarMobile: {
    flexDirection: "column",
    position: "absolute",
    top: "50px",
    right: "20px",
    backgroundColor: "#99001c",
    borderRadius: "5px",
    padding: "10px",
    width: "200px",
    display: "flex",
  },
  navbarDesktop: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    position: "absolute",
    top: "105px",
    left: "50%",
    transform: "translateX(-50%)",
  },
  navItem: {
    color: "white",
    textDecoration: "none",
    padding: "10px",
    fontSize: "18px",
    fontWeight: "bold",
    transition: "background 0.3s ease",
  },
  container: {
    backgroundColor: "#99001c",
    textAlign: "center",
    padding: "50px 20px",
  },
  header: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "white",
  },
  subHeader: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "white",
  },
  contactContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  phone: {
    fontSize: "18px",
    color: "#99001c",
    backgroundColor: "white",
    padding: "10px 15px",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "#99001c",
  },
  button: {
    backgroundColor: "#99001c",
    color: "white",
    padding: "13px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Home;
