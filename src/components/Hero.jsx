// src/components/Hero.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, { y: -50, opacity: 0, duration: 1 });
    gsap.from(subtitleRef.current, { y: 50, opacity: 0, duration: 1, delay: 0.5 });
  }, []);

  // Background image URL - replace with your actual image URL
  const backgroundImageUrl = "https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

  return (
    <section
      ref={heroRef}
      id="home"
      className="banner-bg"
    >
      <div className="hero-sec-info">
        <p>SandSaga is a proof of our belief that great stories deserve to be seen,
          and artists deserve a spotlight.</p>
      </div>
    </section>
  );
};

export default Hero;