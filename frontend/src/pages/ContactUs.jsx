import React, { } from "react";
import Layout from "../components/Layout";

import Footer from "../components/Footer";

const ContactUs = () => {
 

  return (
    <div>
      
      

         
           
<Layout>
          <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
           CONTACT US  </h1>
          <p style={{ fontSize: "22px", margin: "20px 0" }}>
            Professional Chauffeurs, Luxury Vehicles, and the most personalized service in the industry
          </p>
          
          </Layout>

          <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "50px",
        backgroundColor: "#f8f9fa",
      }}
    >
      {/* Left Section: Icon & Contact Info */}
      <div style={{ flex: 1, paddingRight: "50px" }}>
        {/* Location Icon */}
        <img
          src="location-icon.png" // Replace with your location icon URL
          alt="Location Icon"
          style={{ width: "120px", marginBottom: "20px" }}
        />

        {/* Contact Details */}
        <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#1a1a1a" }}>
          N&B TAXI SERVICES
        </h2>
        <p style={{ fontSize: "16px", color: "#555" }}>
          Professional Chauffeurs, Luxury Vehicles, and the most personalized service in the industry.
        </p>
        <p style={{ fontSize: "16px", fontWeight: "bold", color: "#333" }}>address</p>

        {/* Phone Numbers */}
        <div>
           <p>📞 0702610614</p>
          
        </div>

      </div>

      {/* Right Section: Google Map */}
      <div style={{ flex: 1 }}>
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
      
      <div >
        
        <Footer />
      </div>
        </div>
     
     
   
   
  );
};


export default ContactUs;
