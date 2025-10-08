import React, { useState } from "react";
import { Button } from "@mui/material";

const NavigationTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const left = process.env.PUBLIC_URL + "/assets/img/Icon/left.png";
  const right = process.env.PUBLIC_URL + "/assets/img/Icon/right.png";

  const tabContent = [
    {
      id: 0,
      label: "Latest",
      content: {
        number: "#6",
        title: "Retro is the go",
        buttonText: "Read More",
      },
    },
    {
      id: 1,
      label: "All Episodes",
      content: {
        number: "#7",
        title: "Rewind. Refresh. Repeat.",
        buttonText: "Read More",
      },
    },
    {
      id: 2,
      label: "Upcoming",
      content: {
        number: "#8",
        title: "Timeless is trending",
        buttonText: "Read More",
      },
    },
  ];

  const handleNextTab = () => {
    setActiveTab((prevTab) => (prevTab + 1) % tabContent.length);
  };

  const handlePrevTab = () => {
    setActiveTab(
      (prevTab) => (prevTab - 1 + tabContent.length) % tabContent.length
    );
  };

  const currentContent = tabContent.find((tab) => tab.id === activeTab);

  return (
    <div className="nav-container padding-sm">
      <div className="nav-tabs-wrapper">
        <div className="nav-tabs-inner">
          {tabContent.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`nav-tab-button ${
                activeTab === tab.id ? "active" : "inactive"
              }`}
            >
              {activeTab === tab.id && (
                <>
                  <div className="active-indicator-dot"></div>
                  <div className="active-bottom-line"></div>
                  <div className="active-corner top-left"></div>
                  <div className="active-corner top-right"></div>
                  <div className="active-corner bottom-left"></div>
                  <div className="active-corner bottom-right"></div>
                </>
              )}

              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="content-area">
        <div className="content-inner">
          <div className="new-main-sec">
            <div className="news-info">
              <div className="news-info-text">
                <h2>{currentContent.content.number}</h2>
                <h3>{currentContent.content.title}</h3>
                <Button
                  variant="contained"
                  className="read-more-btn"
                  sx={{
                    background: "linear-gradient(45deg, #FF6B6B, #FFD93D)",
                    color: "white",
                    fontWeight: "bold",
                    textTransform: "none",
                    padding: "12px 24px",
                    borderRadius: "25px",
                    "&:hover": {
                      background: "linear-gradient(45deg, #FF5252, #FFC107)",
                    },
                  }}
                >
                  {currentContent.content.buttonText}
                </Button>
              </div>
              <div className="new-action-btn flex gap-2">
                <Button
                  onClick={handlePrevTab}
                  className="nav-arrow-btn"
                  sx={{
                    minWidth: "auto",
                    padding: "8px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.2)",
                    },
                  }}
                >
                  <img src={left} alt="Previous" />
                </Button>
                <Button
                  onClick={handleNextTab}
                  className="nav-arrow-btn"
                  sx={{
                    minWidth: "auto",
                    padding: "8px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.2)",
                    },
                  }}
                >
                  <img src={right} alt="Next" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationTabs;
