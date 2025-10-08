// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import News from "./components/News";
import Episode from "./components/Episode";
import Footer from "./components/Footer";
import Sketch from "./components/Sketch";
import Community from "./components/Community";
import Tribe from "./components/Tribe";


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <News />
        <Episode />
        <Sketch />
        <Community />
        <Tribe />
              <Footer />
      </main>
    </div>
  );
}

export default App;
