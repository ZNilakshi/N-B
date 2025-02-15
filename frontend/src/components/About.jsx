import React from "react";

const AboutUs = () => {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px 10%",
    backgroundColor: "#f8f9fa",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  };

  

  const rightColumnStyle = {
    flex: "2",
    minWidth: "400px",
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "500px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const textStyle = {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "20px",
  };

  const highlightStyle = {
    fontWeight: "bold",
  };

  const serviceContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "15px",
  };

  const iconStyle = {
    width: "42px",
    height: "42px",
    backgroundColor: "#99001c",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    fontWeight: "bold",
    color: "black",
  };

  return (
    <div style={containerStyle}>
      {/* Left Column - Image */}
      

      {/* Right Column - Text & Services */}
      <div style={rightColumnStyle}>
        <h2>A Little About Us</h2>
        <p style={textStyle}>
          <span style={highlightStyle}>“Nothing is more important to us</span>{" "}
          than providing our clients with a transportation experience like no
          other.”
        </p>
        <p style={textStyle}>
          With <span style={highlightStyle}>25 years of experience</span> in the
          transportation industry, Wall Street Transportation & Limo brings a
          wealth of knowledge. We are equipped with the latest luxury vehicles,
          cutting-edge technology, and VIP tracking to offer the best services.
        </p>

        {/* Services Section */}
        <div style={serviceContainerStyle}>
          <div style={iconStyle}>✈️</div>
          <div>
            <h4>Airport Transportation</h4>
            <p>Airport Transfers, Port Transfers, Airport Pickups.</p>
          </div>
        </div>

        <div style={serviceContainerStyle}>
          <div style={iconStyle}>🏢</div>
          <div>
            <h4>Corporate Transportation</h4>
            <p>Conventions, work functions, executive meetings.</p>
          </div>
        </div>

        <div style={serviceContainerStyle}>
          <div style={iconStyle}>🎉</div>
          <div>
            <h4>Special Events</h4>
            <p>
              Weddings, Sporting Events, Red Carpet Events, Concerts,
              Bachelor/Bachelorette Parties.
            </p>
          </div>
        </div>
      </div>

      {/* Second Image */}
      <div style={{ flex: "1", marginTop: "30px" }}>
        <img src="home.jpg" alt="Luxury Limo" style={imageStyle} />
      </div>
    </div>
  );
};

export default AboutUs;
