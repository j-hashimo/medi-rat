import { useEffect, useState, useContext } from "react";
import { CardsContext } from "../context/UserToolsContext";
const SavedCards = () => {
  const [savedCards, setSavedCards] = useState([]);
  const { state, dispatch } = useContext(CardsContext);
  useEffect(() => {
    const fetchSavedCards = async () => {
      try {
        const response = await fetch("/api/usertools");
        const data = await response.json();
        setSavedCards(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSavedCards();
  }, []);

  const deleteCard = async (card) => {
    const response = await fetch("/api/usertools/" + card._id, {
      method: "DELETE",
    });
    const data = await response.json();
    if (response.ok) {
      setSavedCards((prevCards) => prevCards.filter((c) => c._id !== card._id)); //this line is needed so that the page is updated without a refresh
      dispatch({
        type: "DELETE_CARD",
        payload: data,
      }); //this react context is needed so that when you leave the page and come back, the deleted card is not still there and it remembers your changes
    }
  };

  return (
    <div>
      {savedCards.map((card) => (
        <div className="card hover:shadow-lg m-6 justify-center w-28 md:w-auto h-auto">
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
                className="mt-2 bg-red-700 text-white px-5 py-3 inline-block rounded-lg shadow-lg uppercase tracking-wider font-semibold text-sm sm:text-base hover:bg-red-600 hover:-translate-y-0.5 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-red-700 focus:ring-opacity-50 active:bg-red-800 transform transition"
                onClick={() => deleteCard(card)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavedCards;
