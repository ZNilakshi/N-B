import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation(); // Get current route

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to determine active link style
  const getLinkStyle = (path) => ({
    ...styles.navItem,
    color: location.pathname === path ? "#99001c" : "white",
  });

  return (
    <div>
      <div
        style={{
          backgroundImage: "url('backk.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          color: "white",
          textAlign: "center",
          padding: "10px",
          
          
          position: "relative",
            
        }}
      >
        {/* Navigation */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <img src="logo.png" alt="Company Logo" style={{ width: "180px", }} />

          {!isMobile ? (
            <nav style={styles.navbarDesktop}>
              <Link to="/" style={getLinkStyle("/")}>HOME</Link>
              <Link to="/AboutUs" style={getLinkStyle("/AboutUs")}>ABOUT US</Link>
              <Link to="/Services" style={getLinkStyle("/Services")}>SERVICES</Link>
              <Link to="/Reservation" style={getLinkStyle("/Reservation")}>RESERVATION</Link>
              <Link to="/ContactUs" style={getLinkStyle("/ContactUs")}>CONTACT US</Link>
            </nav>
          ) : (
            <>
              <div style={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>☰</div>
              {menuOpen && (
                <nav style={styles.navbarMobile}>
                  <Link to="/" style={getLinkStyle("/")}>HOME</Link>
                  <Link to="/AboutUs" style={getLinkStyle("/AboutUs")}>ABOUT US</Link>
                  <Link to="/Services" style={getLinkStyle("/Services")}>SERVICES</Link>
                  <Link to="/Reservation" style={getLinkStyle("/Reservation")}>RESERVATION</Link>
                  <Link to="/ContactUs" style={getLinkStyle("/ContactUs")}>CONTACT US</Link>
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
  navbarMobile: { flexDirection: "column", position: "absolute", top: "50px", right: "20px",  backgroundColor: "rgba(75, 72, 72, 0.8)", borderRadius: "5px", padding: "10px", width: "200px", display: "flex" },
  navbarDesktop: { display: "flex", justifyContent: "center", gap: "20px", position: "absolute", top: "135px", left: "50%", transform: "translateX(-50%)" },
  navItem: { textDecoration: "none", padding: "10px", fontSize: "18px", fontWeight: "bold" },
};

export default Layout;
