import React, { } from "react";
import Layout from "../components/Layout";
import SelectYourCar from "../components/SelectYourCar";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
 

  return (
    <div>
      
      

         
           
<Layout>
          <h1 style={{ fontSize: "53px",  fontWeight: "bold"   ,}}>
          ELEVATE YOUR TRAVEL EXPERIENCE 
           </h1>
          <p style={{ fontSize: "23px", fontWeight: "bold", margin: "10px 0" }}>
          Luxury Vehicles, Seamless Service, and a Journey Tailored to Your Comfort.  
          </p>
          <div>
            <button style={styles.button}>Book Your Ride</button>
          </div>
          </Layout>

             
      <div style={styles.container}>
        <h2 style={styles.header}>PREFER TO SPEAK TO SOMEONE?</h2>
        <p style={styles.subHeader}>Call now for a reservation specialist!</p>
        <div style={styles.contactContainer}>
          <div style={styles.location}>
            <p style={styles.phone}>
              📞 <a href="tel:0702610614" style={styles.link}>0702610614</a>
            </p>
          </div>
        </div>
      </div>
      <div >
        <SelectYourCar/>
        <About />
        <Footer />
      </div>
        </div>
     
     
   
   
  );
};

const styles = {
 
  
  container: {
    backgroundColor: "#99001c",
    textAlign: "center",
    padding: "50px 20px",
  },
  header: {
    fontSize: "35px",
    fontWeight: "bold",
    color: "black",
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
