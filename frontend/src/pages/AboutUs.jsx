import React from "react";
import Layout from "../components/Layout";
import TestimonialSection from "../components/TestimonialSection";
import Footer from "../components/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const AboutUs = () => {
  return (
    <div style={{  backgroundColor: "#f3f4f6" }}>
      <Layout>
        <h1 style={{ fontSize: "55px", fontWeight: "bold", textAlign: "center" }}>
          ABOUT US
        </h1>
        <p style={{ fontSize: "30px" , fontWeight: "bold", margin: "20px 0", textAlign: "center" }}>
          We provide luxury Car services with high-quality vehicles and professional drivers
        </p>
      </Layout>

      <h1 style={{ fontSize: "36px", fontWeight: "bold", textAlign: "center" }}>
        <span style={{ color: "#99001c" }}>For the past 25 years</span> we have provided service{" "}
        <span style={{ color: "#1e3a8a" }}>that is incomparable.</span>
      </h1>

      <p style={{ fontSize: "18px", textAlign: "center", marginTop: "20px", color: "#4b5563" }}>
        Anybody can take you from point A to point B. But we create amazing transportation experiences.
      </p>

      {/* Swiper Section */}
      <div style={{ position: "relative", width: "100%", maxWidth: "100%" }}>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true} // Enables arrows
          breakpoints={{
            768: { slidesPerView: 3 }, // Show 3 columns on larger screens
          }}
          modules={[Pagination, Navigation]}
          style={{ paddingBottom: "20px" , "--swiper-navigation-color": "#99001c" , "--swiper-theme-color": "#99001c"}}
        >
          {/* Column 1 */}
          <SwiperSlide>
            <div style={{
              backgroundColor: "#fff",
              padding: "20px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              maxWidth: "350px",
              textAlign: "center",
              margin: "auto",
            }}>
              <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>N & B Taxi Services</h2>
              <p style={{ marginTop: "10px", color: "#4b5563" }}>
                A full-service transportation company catering to the individual needs of our clients.
                 Our fleet consists of:
              </p>
              <ul style={{ marginTop: "10px", paddingLeft: "20px", textAlign: "left", color: "#374151" }}>
                <li>Late model Lincoln Town Cars</li>
                
                <li>Luxury SUVs, Vans, Minibuses</li>
                
              </ul>
            </div>
          </SwiperSlide>

          {/* Column 2 */}
          <SwiperSlide>
            <div style={{
              backgroundColor: "#fff",
              padding: "20px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              maxWidth: "350px",
              textAlign: "center",
              margin: "auto",
            }}>
              <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>Premium Airport Transfers</h2>
<p style={{ marginTop: "10px", color: "#4b5563" }}>
  Enjoy stress-free airport transfers with our reliable and punctual service.
</p>
<p style={{ marginTop: "10px", color: "#4b5563" }}>
  Our <strong>dedicated chauffeurs track your flight in real-time</strong> to ensure timely pickups, even in case of delays.
</p>
<p style={{ marginTop: "10px", color: "#4b5563" }}>
  We provide complimentary wait times, luggage assistance, and a smooth ride to your destination.
</p>

            </div>
          </SwiperSlide>

          {/* Column 3 */}
          <SwiperSlide>
            <div style={{
              backgroundColor: "#fff",
              padding: "20px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              maxWidth: "350px",
              textAlign: "center",
              margin: "auto",
            }}>
              <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>Individual Customized Service</h2>
              <p style={{ marginTop: "10px", color: "#4b5563" }}>
                We take pride in offering <strong>individual customized service</strong>, ensuring flexibility and efficiency.
              </p>
              <p style={{ marginTop: "10px", color: "#4b5563" }}>
                <strong>We create profiles</strong> of each customer's preferences, including favorite beverages (coffee, cappuccino, tea, juice, soda, etc.).
              </p>
              <p style={{ marginTop: "10px", fontStyle: "italic", color: "#4b5563" }}>
                "Our commitment to our customers is to provide customized, timely, courteous, professional service in highly maintained safe vehicles."
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Centered Images */}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
        <img 
          src="wed.jpg" 
          alt="Luxury Experience" 
          style={{ width: "45%", borderRadius: "10px" }} 
        />
        <img 
          src="air.webp" 
          alt="Luxury Experience" 
          style={{ width: "45%", borderRadius: "10px" }} 
        />
      </div>

      <p style={{ fontSize: "24px", fontWeight: "bold" , textAlign: "center", marginTop: "20px", color: "#99001c" }}>
        On-time, courteous chauffeurs, personalized service, and stunning vehicles. That is what you can expect.
      </p>
<div>
<TestimonialSection />
</div>
<div>
<Footer />
</div>
      
    </div>
    
    
  );
};

export default AboutUs;
