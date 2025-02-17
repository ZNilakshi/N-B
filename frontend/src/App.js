import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Ensure these are correctly imported

import HomePage from "./pages/Home"; // Adjust the path if needed
import AboutUs from "./pages/AboutUs"; // Adjust the path if needed
import ContactUs from "./pages/ContactUs"; // Adjust the path if needed
import Reservation from "./pages/Reservation"; // Adjust the path if needed
import Services from "./pages/Services"; // Adjust the path if needed

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/Services" element={<Services />} />
      
      </Routes>
    </Router>
  );
}

export default App;
