import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div>
      <style>
        {`
          @media (min-width: 768px) {
            .contact-container {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
            }

            .contact-details {
              width: 50%;
            }

            .map-section {
              width: 50%;
            }
          }
        `}
      </style>

      <Layout>
        <h1 style={{ fontSize: "40px", fontWeight: "bold", textAlign: "center" }}>CONTACT US</h1>
        <p style={{ fontSize: "22px", margin: "20px 0", textAlign: "center" }}>
          Professional Chauffeurs, Luxury Vehicles, and the most personalized service in the industry
        </p>
      </Layout>

      <div
        style={{
          display: "flex",
          flexDirection: "column", // Default for mobile
          alignItems: "center",
          justifyContent: "center",
          padding: "50px",
          backgroundColor: "#f3f4f6",
          backgroundSize: "cover",
        }}
      >
        <div className="contact-container" style={{ width: "100%", maxWidth: "1100px" }}>
          {/* Contact Details Section */}
          <div className="contact-details" style={{ textAlign: "center", padding: "20px" }}>
            <img
              src="location-icon.png" // Replace with your location icon URL
              alt="Location Icon"
              style={{ width: "120px", marginBottom: "20px" }}
            />
            <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#1a1a1a" }}>
              N&B TAXI SERVICES
            </h2>
            <p style={{ fontSize: "16px", color: "#555" }}>
              Professional Chauffeurs, Luxury Vehicles, and the most personalized service in the industry.
            </p>
            <p style={{ fontSize: "16px", fontWeight: "bold", color: "#333" }}>Address</p>
            <p>📞 0702610614</p>
          </div>

          {/* Google Map Section */}
          <div className="map-section">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.092568577249!2d-80.26635042448737!3d26.27185637959854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91b1f4d4aa553%3A0xc16c2c55098a65fa!2sCoral%20Springs%2C%20FL%2033076!5e0!3m2!1sen!2sus!4v1645247894695"
              width="100%"
              height="300"
              style={{ border: "none", borderRadius: "10px" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
