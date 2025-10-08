// src/components/Footer.jsx
import React from "react";

const logo = process.env.PUBLIC_URL + "/assets/img/logo-light.png";

export default function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="footer-head">
          <div className="footer-info">
            <h2>
              Get On Board With The SandCup Express <br />
              And Never Miss A Design Story.
            </h2>

            <div className="mt-6 flex max-w-md">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-3 rounded-l-md text-black focus:outline-none"
              />
              <button className="bg-pink-400 px-5 rounded-r-md hover:bg-pink-500 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  fill="none"
                  viewBox="0 0 25 24"
                >
                  <path
                    fill="#000"
                    fillRule="evenodd"
                    d="M20.25 11c-2.438 0-4.66-2.22-4.66-4.66v-1h-2v1c0 1.774.778 3.438 1.999 4.66H3.25v2h12.339c-1.221 1.222-1.999 2.886-1.999 4.66v1h2v-1c0-2.439 2.222-4.66 4.66-4.66h1v-2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 footer-menu">
            <ul>
              <li>
                <a href="#" className="hover:text-pink-400">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400">
                  Design Talks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400">
                  Sand Saga
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400">
                  Media
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400">
                  Join Our Tribe
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="#" className="hover:text-pink-400">
                  Sands Academy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400">
                  Vrindavan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400">
                  Shivaloca
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400">
                  Design Meetups
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400">
                  Xpsoure
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>
            <img src={logo} loading="lazy" />
          </div>
          <div className="social-icons">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/company/sandcup?originalSubdomain=in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    width="25"
                    height="25"
                    viewBox="0 0 176 176"
                  >
                    <path
                      fill="#fff"
                      d="M152 0H24A24 24 0 0 0 0 24v128a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24V24a24 24 0 0 0-24-24M60 139.28a3.71 3.71 0 0 1-3.71 3.72H40.48a3.71 3.71 0 0 1-3.72-3.72V73a3.72 3.72 0 0 1 3.72-3.72h15.81A3.72 3.72 0 0 1 60 73zM48.38 63a15 15 0 1 1 15-15 15 15 0 0 1-15 15m94.26 76.54a3.41 3.41 0 0 1-3.42 3.42h-17a3.41 3.41 0 0 1-3.42-3.42v-31.05c0-4.64 1.36-20.32-12.13-20.32-10.45 0-12.58 10.73-13 15.55v35.86A3.42 3.42 0 0 1 90.3 143H73.88a3.41 3.41 0 0 1-3.41-3.42V72.71a3.41 3.41 0 0 1 3.41-3.42H90.3a3.42 3.42 0 0 1 3.42 3.42v5.78c3.88-5.83 9.63-10.31 21.9-10.31 27.18 0 27 25.38 27 39.32z"
                      data-name="Layer 2"
                      data-original="#000000"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    width="25"
                    height="25"
                    viewBox="0 0 511 511.9"
                  >
                    <g fill="#fff">
                      <path
                        d="M510.95 150.5c-1.2-27.2-5.598-45.898-11.9-62.102-6.5-17.199-16.5-32.597-29.6-45.398-12.802-13-28.302-23.102-45.302-29.5-16.296-6.3-34.898-10.7-62.097-11.898C334.648.3 325.949 0 256.449 0s-78.199.3-105.5 1.5c-27.199 1.2-45.898 5.602-62.097 11.898-17.204 6.5-32.602 16.5-45.403 29.602-13 12.8-23.097 28.3-29.5 45.3-6.3 16.302-10.699 34.9-11.898 62.098C.75 177.801.449 186.5.449 256s.301 78.2 1.5 105.5c1.2 27.2 5.602 45.898 11.903 62.102 6.5 17.199 16.597 32.597 29.597 45.398 12.801 13 28.301 23.102 45.301 29.5 16.3 6.3 34.898 10.7 62.102 11.898 27.296 1.204 36 1.5 105.5 1.5s78.199-.296 105.5-1.5c27.199-1.199 45.898-5.597 62.097-11.898a130.93 130.93 0 0 0 74.903-74.898c6.296-16.301 10.699-34.903 11.898-62.102 1.2-27.3 1.5-36 1.5-105.5s-.102-78.2-1.3-105.5m-46.098 209c-1.102 25-5.301 38.5-8.801 47.5-8.602 22.3-26.301 40-48.602 48.602-9 3.5-22.597 7.699-47.5 8.796-27 1.204-35.097 1.5-103.398 1.5s-76.5-.296-103.403-1.5c-25-1.097-38.5-5.296-47.5-8.796C94.551 451.5 84.45 445 76.25 436.5c-8.5-8.3-15-18.3-19.102-29.398-3.5-9-7.699-22.602-8.796-47.5-1.204-27-1.5-35.102-1.5-103.403s.296-76.5 1.5-103.398c1.097-25 5.296-38.5 8.796-47.5C61.25 94.199 67.75 84.1 76.352 75.898c8.296-8.5 18.296-15 29.398-19.097 9-3.5 22.602-7.7 47.5-8.801 27-1.2 35.102-1.5 103.398-1.5 68.403 0 76.5.3 103.403 1.5 25 1.102 38.5 5.3 47.5 8.8 11.097 4.098 21.199 10.598 29.398 19.098 8.5 8.301 15 18.301 19.102 29.403 3.5 9 7.699 22.597 8.8 47.5 1.2 27 1.5 35.097 1.5 103.398s-.3 76.301-1.5 103.301zm0 0"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M256.45 124.5c-72.598 0-131.5 58.898-131.5 131.5s58.902 131.5 131.5 131.5c72.6 0 131.5-58.898 131.5-131.5s-58.9-131.5-131.5-131.5m0 216.8c-47.098 0-85.302-38.198-85.302-85.3s38.204-85.3 85.301-85.3c47.102 0 85.301 38.198 85.301 85.3s-38.2 85.3-85.3 85.3m167.402-222c0 16.954-13.747 30.7-30.704 30.7-16.953 0-30.699-13.746-30.699-30.7 0-16.956 13.746-30.698 30.7-30.698 16.956 0 30.703 13.742 30.703 30.699zm0 0"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sandcupstudio/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    width="30"
                    height="30"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#fff"
                      d="M30 16c0 7.2-5.4 13.1-12.3 13.9V19.1H21l.5-3.8h-3.7V13c0-1.1.3-1.8 1.9-1.8h2V7.7c-1-.1-1.9-.1-2.9-.1-2.9 0-4.9 1.8-4.9 5v2.8h-3.3v3.8h3.3v10.7C7.1 28.8 2 23 2 16 2 8.3 8.3 2 16 2s14 6.3 14 14"
                      data-original="#000000"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hr@sandcupstudio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    width="30"
                    height="30"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#fff"
                      fillRule="evenodd"
                      d="m62.843 98.364 138.32 138.38c30.168 30.11 79.482 30.136 109.675 0l138.32-138.38a3.144 3.144 0 0 0-.426-4.814c-14.108-9.839-31.273-15.672-49.763-15.672H113.033c-18.491 0-35.656 5.834-49.764 15.672a3.144 3.144 0 0 0-.426 4.814m-36.964 66.667a86.5 86.5 0 0 1 9.955-40.353 3.144 3.144 0 0 1 5.019-.762l136.569 136.569c43.247 43.31 113.885 43.335 157.158 0l136.569-136.569a3.144 3.144 0 0 1 5.019.762 86.5 86.5 0 0 1 9.955 40.353v181.937c0 48.093-39.121 87.154-87.154 87.154H113.033c-48.032 0-87.154-39.061-87.154-87.154z"
                      clipRule="evenodd"
                      data-original="#000000"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="relative bg-[#E9F000] overflow-hidden py-2">
        <div className="whitespace-nowrap flex animate-scroll">
          <span className="font-semibold text-black text-base mx-4">
            TRIBE HAI TO VIBE HAI / VIBE WITH THE DESIGN TRIBE / TRIBE HAI TO
            VIBE HAI / VIBE WITH THE DESIGN TRIBE / TRIBE HAI TO VIBE HAI / VIBE
            WITH THE DESIGN TRIBE / TRIBE HAI TO VIBE HAI / VIBE WITH THE DESIGN
            TRIBE /
          </span>
          <span className="font-semibold text-black text-base mx-4">
            TRIBE HAI TO VIBE HAI / VIBE WITH THE DESIGN TRIBE / TRIBE HAI TO
            VIBE HAI / VIBE WITH THE DESIGN TRIBE / TRIBE HAI TO VIBE HAI / VIBE
            WITH THE DESIGN TRIBE / TRIBE HAI TO VIBE HAI / VIBE WITH THE DESIGN
            TRIBE /
          </span>
        </div>
      </div>
    </>
  );
}