import React from "react";

export default function CommunitySection() {
    const partner = process.env.PUBLIC_URL + '/assets/img/Icon/partner.svg';
    const search = process.env.PUBLIC_URL + '/assets/img/Icon/search.svg';
    const rise = process.env.PUBLIC_URL + '/assets/img/Icon/rise.svg';

    const cards = [
        {
            icon: partner,
            title: "Partner with Us",
            desc: "Join us as a mentor and contribute towards the upliftment of the design community.",
            button: "Support",
        },
        {
            icon: search,
            title: "Find a Job",
            desc: "Join us as a mentor and contribute towards the upliftment of the design community.",
            button: "Post",
        },
        {
            icon: rise,
            title: "Become a Volunteer",
            desc: "Join us as a mentor and contribute towards the upliftment of the design community.",
            button: "Apply",
        },
    ];

    return (
        <section className="p-10 bg-white text-center">
            <h2 className="text-gray-700 text-xl sm:text-2xl mb-12">
                Join our community in various ways and be a <br /> part of something special
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {cards.map((item, index) => (
                    <div
                        key={index}
                        className="community-card"
                    >
                        <img src={item.icon} loading="lazy" className="mb-6 mx-auto" />
                        <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                        <p className="text-gray-600 text-base mb-6">{item.desc}</p>
                        <button className="community-card-button">
                            {item.button}
                            <span>
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
                            </span>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
