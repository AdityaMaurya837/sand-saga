import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, { y: -50, opacity: 0, duration: 1 });
    gsap.from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });
  }, []);

  return (
    <section ref={heroRef} id="home" className="banner-bg">
      <div className="hero-sec-info">
        <p>
          SandSaga is a proof of our belief that great stories deserve to be
          seen, and artists deserve a spotlight.
        </p>
      </div>
    </section>
  );
};

export default Hero;
