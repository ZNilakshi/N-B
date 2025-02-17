import React from "react";

const Testimonials = () => {
  return (
    <div
      style={{
        backgroundImage: "url('back.png')", // Change to your background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 20px",
        color: "#fff",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <h2 style={{ fontSize: "40px", fontWeight: "bold", textTransform: "uppercase" }}>
        What Do Our Customers Say?
      </h2>
      <p style={{ fontSize: "20px", fontStyle: "italic" }}>
        Our mission is to <span style={{ color: "#99001c" }}>"Make a new client a permanent client."</span>
      </p>

      {/* Testimonial Container */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {/* Testimonial 1 */}
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "20px",
            maxWidth: "350px",
            borderRadius: "10px",
            textAlign: "left",
          }}
        >
          <span style={{ fontSize: "50px", color: "#99001c" }}>❝</span>
          <p>
            I just wanted to drop you a note and tell you that we were thrilled with our car service this past Friday night...
          </p>
          <p style={{ fontWeight: "bold", marginTop: "10px" }}>- Mark</p>
             
        </div>

        {/* Testimonial 2 */}
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "20px",
            maxWidth: "350px",
            borderRadius: "10px",
            textAlign: "left",
          }}
        >
          <span style={{ fontSize: "50px", color: "#99001c" }}>❝</span>
          <p>
            You guys were great, thanks for your help on short notice. It was perfect. And the price was right!
          </p>
          <p style={{ fontWeight: "bold", marginTop: "10px" }}>- Andy</p>
        </div>

        {/* Testimonial 3 */}
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "20px",
            maxWidth: "350px",
            borderRadius: "10px",
            textAlign: "left",
          }}
        >
          <span style={{ fontSize: "50px", color: "#99001c" }}>❝</span>
          <p>
            I had a great experience with Wall Street Limos. The driver was great and very courteous...
          </p>
          <p style={{ fontWeight: "bold", marginTop: "10px" }}>- Niki</p>
        </div>
      </div>

      {/* Add Review Button
    
      <button
        style={{
          marginTop: "30px",
          padding: "12px 25px",
          fontSize: "18px",
          fontWeight: "bold",
          backgroundColor: "#99001c",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "0.3s",
          color: "white"
        }}
        onClick={() => alert("Redirect to Add Review Form")} // Change this to navigate to the form page
      >
        Add Your Review
      </button>
      */}
    </div>
  );
};

export default Testimonials;
