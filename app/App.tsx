import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {HomepageHero} from "../components/homepage-hero"; // Ensure the correct path and casing
import WaitlistForm from "../components/waitlist-form"; // Ensure the correct path and casing

function App() {
  return (
    <Router>
      <Route path="/" element={<HomepageHero />} />
    </Router>
  );
}

export default App;