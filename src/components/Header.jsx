import React, { useState } from "react";
import { Button } from "@mui/material";

const logo = process.env.PUBLIC_URL + "/assets/img/logo-dark.png";

const ResponsiveHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const menuItems = [
    {
      label: "SandsKriti",
      type: "dropdown",
      items: [
        { label: "Web Development", href: "#web-dev" },
        { label: "Mobile Apps", href: "#mobile" },
        { label: "Cloud Solutions", href: "#cloud" },
      ],
    },
    {
      label: "Community Engagement",
      type: "dropdown",
      items: [
        { label: "Join Now", href: "#product1" },
        { label: "Explore More", href: "#product2" },
      ],
    },
    {
      label: "Knowledge",
      type: "dropdown",
      items: [
        { label: "Documentation", href: "#docs" },
        { label: "Tutorials", href: "#tutorials" },
        { label: "Blog", href: "#blog" },
      ],
    },
    { label: "Event", href: "#senders", type: "link" },
    { label: "Job", href: "#senders", type: "link" },
    { label: "Contact Us", href: "#contact", type: "link" },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 relative">
      <div className="max-w-10xl pl-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <img src={logo} className="header-logo" />
          </div>

          <nav className="hidden lg:flex space-x-1 items-center">
            {menuItems.map((item, index) => (
              <div key={item.label} className="relative">
                {item.type === "link" ? (
                  <a
                    href={item.href}
                    className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 text-bases"
                  >
                    {item.label}
                  </a>
                ) : (
                  <div className="relative header-dropdown">
                    <button
                      onClick={() => handleDropdown(index)}
                      className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 text-base flex items-center"
                    >
                      {item.label}
                      <svg
                        className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${
                          openDropdown === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {openDropdown === index && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                        {item.items.map((dropdownItem) => (
                          <a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-base text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            <Button className="action-btn">Join The Tribe</Button>
          </nav>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span
                  className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-current transition duration-300 ease-in-out ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 bg-white">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item, index) => (
                <div key={item.label}>
                  {item.type === "link" ? (
                    <a
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-md transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <div>
                      <button
                        onClick={() => handleDropdown(index)}
                        className="w-full flex justify-between items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-md transition-colors duration-200"
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 transform transition-transform duration-200 ${
                            openDropdown === index ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {openDropdown === index && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.items.map((dropdownItem) => (
                            <a
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-base text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-200"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setOpenDropdown(null);
                              }}
                            >
                              {dropdownItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {openDropdown !== null && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpenDropdown(null)}
        />
      )}
    </header>
  );
};

export default ResponsiveHeader;
