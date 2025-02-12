import React from "react";
import HomePage from "./pages/Home"; // Adjust the path if needed
import SelectYourCar from "./components/SelectYourCar";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <HomePage />
      <SelectYourCar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
