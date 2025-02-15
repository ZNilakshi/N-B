import React, { } from "react";
import Layout from "../components/Layout";
import { FaSignInAlt, FaExternalLinkAlt } from "react-icons/fa";

import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";

const Reservation = () => {
 

  return (
    <div>
      
      

         
           
<Layout>
          <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
          Make A Reservation</h1>
          <p style={{ fontSize: "22px", margin: "20px 0" }}>
             </p>
          
          </Layout>

             
          {/* Buttons for login and new reservation positioned in left and right corners */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px" }}>
          <a href="/Reservation" style={{ display: "flex", alignItems: "center", color: "#007BFF", textDecoration: "none", fontSize: "18px" }}>
            <FaExternalLinkAlt style={{ marginRight: "5px" }} /> New Reservation
          </a>
          <a href="/login" style={{ display: "flex", alignItems: "center", color: "#007BFF", textDecoration: "none", fontSize: "18px" }}>
            <FaSignInAlt style={{ marginRight: "5px" }} /> Log in
          </a>
        </div>
      <div >
      <BookingForm /> 
        <Footer />
      </div>
      
        </div>
        
     
     
   
   
  );
};


export default Reservation;
