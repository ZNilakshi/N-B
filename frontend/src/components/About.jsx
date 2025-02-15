import React from "react";

const AboutUs = () => {
  return (
    <div
      style={{
        backgroundImage: " url('back.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Parallax Effect
        color: "white",
        padding: "80px 10%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Right Column - Text & Services */}
      <div
        style={{
          flex: "2",
          minWidth: "350px",
          padding: "30px",
          borderRadius: "15px",
          
        }}
      >
        

        {/* Services Section */}
        {[
          { icon: "✈️", title: "Airport Transportation", desc: "Airport Transfers, Port Transfers, Airport Pickups." },
          { icon: "🏢", title: "Corporate Transportation", desc: "Conventions, work functions, executive meetings." },
          {
            icon: "🎉",
            title: "Special Events",
            desc: "Weddings, Sporting Events, Red Carpet Events, Concerts, Bachelor/Bachelorette Parties.",
          },
        ].map((service, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              marginBottom: "20px",
              backgroundColor: "rgba(94, 92, 92, 0.45)",
              padding: "15px",
              borderRadius: "12px",
             
              transition: "0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div
              style={{
                width: "55px",
                height: "55px",
                background: "linear-gradient(135deg, rgb(124, 11, 21), rgb(175, 18, 78))",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: "bold",
                color: "white",
                
              }}
            >
              {service.icon}
            </div>
            <div>
              <h4 style={{ fontSize: "25px", fontWeight: "bold", color: "#99001c" }}>{service.title}</h4>
              <p style={{ fontSize: "18px" }}>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Second Image */}
    
    </div>
  );
};

export default AboutUs;
