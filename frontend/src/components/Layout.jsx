import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
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
        {/* Navigation */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <img src="logo.png" alt="Company Logo" style={{ width: "150px", marginBottom: "10px" }} />

          {!isMobile ? (
            <nav style={styles.navbarDesktop}>
              <Link to="/" style={styles.navItem}>HOME</Link>
              <Link to="/AboutUs" style={styles.navItem}>ABOUT US</Link>
              <Link to="/fleet" style={styles.navItem}>OUR FLEET</Link>
              <Link to="/Reservation" style={styles.navItem}>RESERVATION</Link>
              <Link to="/ContactUs" style={styles.navItem}>CONTACT US</Link>
            </nav>
          ) : (
            <>
              <div style={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>☰</div>
              {menuOpen && (
                <nav style={styles.navbarMobile}>
                  <Link to="/" style={styles.navItem}>HOME</Link>
                  <Link to="/AboutUs" style={styles.navItem}>ABOUT US</Link>
                  <Link to="/fleet" style={styles.navItem}>OUR FLEET</Link>
                  <Link to="/Reservation" style={styles.navItem}>RESERVATION</Link>
                  <Link to="/ContactUs" style={styles.navItem}>CONTACT US</Link>
                </nav>
              )}
            </>
          )}
        </div>

        {/* Dynamic Content */}
        {children}
      </div>
    </div>
  );
};

const styles = {
  menuIcon: { fontSize: "30px", color: "white", cursor: "pointer", position: "absolute", top: "15px", right: "20px" },
  navbarMobile: { flexDirection: "column", position: "absolute", top: "50px", right: "20px", backgroundColor: "#99001c", borderRadius: "5px", padding: "10px", width: "200px", display: "flex" },
  navbarDesktop: { display: "flex", justifyContent: "center", gap: "20px", position: "absolute", top: "105px", left: "50%", transform: "translateX(-50%)" },
  navItem: { color: "white", textDecoration: "none", padding: "10px", fontSize: "18px", fontWeight: "bold" },
};

export default Layout;
