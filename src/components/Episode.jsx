import React, { useState } from "react";


const episodesData = [
  { id: 1, episodeNo: 1, title: "The Tea Designer", creator: "Sandcup Studio", img: '/assets/img/Episodes/episode1.svg' },
  { id: 2, episodeNo: 2, title: "The Laughing Dhanukya", creator: "Sandcup Studio", img: '/assets/img/Episodes/episode2.svg' },
  { id: 3, episodeNo: 3, title: "The Vegetamilian", creator: "Sandcup Studio", img: '/assets/img/Episodes/episode3.svg' },
  { id: 4, episodeNo: 4, title: "Ruby: A Gem of an HR", creator: "Sandcup Studio", img: '/assets/img/Episodes/episode4.svg' },
  { id: 5, episodeNo: 5, title: "That’s What He Said", creator: "Sandcup Studio", img: '/assets/img/Episodes/episode5.svg' },
  { id: 6, episodeNo: 6, title: "The Puzzle", creator: "Sandcup Studio", img: '/assets/img/Episodes/episode6.svg' },
  { id: 7, episodeNo: 7, title: "Hearty Takeaways", creator: "Sandcup Studio", img: '/assets/img/Episodes/episode7.svg' },
  { id: 8, episodeNo: 8, title: "Cough It Off", creator: "Sandcup Studio", img: '/assets/img/Episodes/episode8.svg' },
  { id: 9, episodeNo: 9, title: "Snooze Over Submissions", creator: "Sandcup Studio", img: '/assets/img/Episodes/episode9.svg' },
];

export default function Episodes() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEpisodes = episodesData.filter((ep) =>
    ep.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full px-6 py-10">
      <div className="flex flex-wrap justify-between items-center gap-4 mb-10">
        <div className="flex items-center w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search by episode title..."
            className="w-full rounded-l-md px-3 py-2 text-base focus:outline-none focus:ring-1 focus:ring-pink-400 search-focus"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="search-btn flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-dark"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        <div className="flex gap-3  justify-end">
          <div className="relative">
            <select className="appearance-none border border-gray-300 rounded-md px-8 py-2 text-base focus:outline-none focus:ring-1 focus:ring-gray-300 bg-transparent">
              <option>All</option>
              <option>Today</option>
              <option>This Week</option>
            </select>
            <div className="absolute left-2 top-2.5 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10m-11 8h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>

          <div className="relative">
            <select className="appearance-none border border-gray-300 rounded-md px-8 py-2 text-base focus:outline-none focus:ring-1 focus:ring-gray-300 bg-transparent">
              <option>All</option>
              <option>Admin</option>
              <option>User</option>
            </select>
            {/* 👤 User Icon */}
            <div className="absolute left-2 top-2.5 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804A4 4 0 0112 14a4 4 0 016.879 3.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      {filteredEpisodes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredEpisodes.map((ep) => (
            <div
              key={ep.id}
              className="episode-card"
            >
              <img
                src={ep.img}
                alt={ep.title}
                loading="lazy" 
              />
              <div className="episode-card-info"> 
                 <h4 className="text-base text-gray-500">Episode {ep.episodeNo}</h4>
                <h3>
                  {ep.title}
                </h3>
                <p><i>By {ep.creator}</i></p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-16 text-lg">
          No episode found
        </div>
      )}
    </div>
  );
}
