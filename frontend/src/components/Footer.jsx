import { FaFacebookF, FaGooglePlusG, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#0a0a0a", color: "#ffffff", padding: "40px 20px", textAlign: "center" }}>
      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#99001c" }}>GET SOCIAL WITH US</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "15px" }}>
          <a href="h" style={{ backgroundColor: "#ffffff", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #ccc" }}>
            <FaFacebookF size={18} style={{ color: "#000" }} />
          </a>
          <a href="h" style={{ backgroundColor: "#ffffff", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #ccc" }}>
            <FaGooglePlusG size={18} style={{ color: "#000" }} />
          </a>
          <a href="#=" style={{ backgroundColor: "#ffffff", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #ccc" }}>
            <FaTwitter size={18} style={{ color: "#000" }} />
          </a>
          <a href="#h" style={{ backgroundColor: "#ffffff", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #ccc" }}>
            <FaInstagram size={18} style={{ color: "#000" }} />
          </a>
        </div>
      </div>
      <p style={{ color: "#aaa", fontSize: "14px", borderTop: "1px solid #333", paddingTop: "15px" }}>
         All Rights Reserved.
      </p>
      <nav style={{ marginTop: "20px" }}>
        <ul style={{ listStyle: "none", padding: "0", display: "flex", justifyContent: "center", gap: "20px", fontSize: "14px" }}>
          <li><a href="/home" style={{ color: "#ccc", textDecoration: "none", transition: "color 0.3s" }} onMouseOver={(e) => e.target.style.color = "#d4c86e"} onMouseOut={(e) => e.target.style.color = "#ccc"}>HOME</a></li>
          <li><a href="/about-us" style={{ color: "#ccc", textDecoration: "none", transition: "color 0.3s" }} onMouseOver={(e) => e.target.style.color = "#d4c86e"} onMouseOut={(e) => e.target.style.color = "#ccc"}>ABOUT US</a></li>
          <li><a href="/our-fleet" style={{ color: "#ccc", textDecoration: "none", transition: "color 0.3s" }} onMouseOver={(e) => e.target.style.color = "#d4c86e"} onMouseOut={(e) => e.target.style.color = "#ccc"}>OUR FLEET</a></li>
          <li><a href="/reservation" style={{ color: "#ccc", textDecoration: "none", transition: "color 0.3s" }} onMouseOver={(e) => e.target.style.color = "#d4c86e"} onMouseOut={(e) => e.target.style.color = "#ccc"}>RESERVATION</a></li>
          <li><a href="/contact-us" style={{ color: "#ccc", textDecoration: "none", transition: "color 0.3s" }} onMouseOver={(e) => e.target.style.color = "#d4c86e"} onMouseOut={(e) => e.target.style.color = "#ccc"}>CONTACT US</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
