import React, { } from "react";
import Layout from "../components/Layout";

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

             
      
      <div >
      <BookingForm /> 
        <Footer />
      </div>
      
        </div>
        
     
     
   
   
  );
};


export default Reservation;
