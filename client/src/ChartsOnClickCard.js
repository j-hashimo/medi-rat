import React from "react";

function ChartsOnClickCard({ card }) {
  const saveCard = async (card) => {
    try {
      const cardData = {
        link: card.link,
        title: card.title,
        description: card.description,
        imageURL: card.imageURL,
        imageAlt: card.imageAlt,
      };
      const response = await fetch("/api/usertools", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cardData), // don't wrap cardData in curly braces, because otherwise it will be an object that doesn't register the cardData values (we obviously want the cardData values to be registered)
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card hover:shadow-lg cursor-pointer my-4 ml-1 mr-8 justify-center w-28 md:w-auto h-auto">
      <div className="m-4 flex flex-wrap justify-center text-center items-center">
        <img
          src={card.imageURL}
          alt={card.imageAlt}
          className="h-auto w-auto object-cover flex"
        />
        <div className="flex flex-col">
          <a href={card.link} className="">
            <h1 className="mt-4 font-bold text-blue-700 block text-sm md:text-lg text-center">
              {card.title}
            </h1>
          </a>
          <p className="mt-2 text-gray-800 text-center text-xs md:text-base ">
            {card.description}
          </p>
          <button
            className="mt-2 bg-green-700 text-white px-5 py-3 inline-block rounded-lg shadow-lg uppercase tracking-wider font-semibold text-sm sm:text-base hover:bg-green-600 hover:-translate-y-0.5 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-green-700 focus:ring-opacity-50 active:bg-green-800 transform transition"
            onClick={() => saveCard(card)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChartsOnClickCard;
