import React from "react";

function HowToCard({ card }) {
  return (
    <div className="card hover:shadow-lg cursor-pointer m-2 justify-center w-24 md:w-auto h-auto">
      <a href={card.link} className="">
        <div className="m-4 flex flex-wrap justify-center text-center items-center">
          <img
            src={card.imageURL}
            alt={card.imageAlt}
            className="h-auto w-auto object-cover flex"
          />
          <div className="flex flex-col">
            <h1 className="mt-4 font-bold text-blue-700 block text-lg text-center">
              {card.title}
            </h1>
            <p className="mt-2 text-gray-800 text-center text-base ">
              {card.description}
            </p>
            <button className="mt-2 bg-green-700 text-white px-5 py-3 inline-block rounded-lg shadow-lg uppercase tracking-wider font-semibold text-sm sm:text-base hover:bg-green-600 hover:-translate-y-0.5 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-green-700 focus:ring-opacity-50 active:bg-green-800 transform transition">
              Save
            </button>
          </div>
        </div>
      </a>
    </div>
  );
}

export default HowToCard;
