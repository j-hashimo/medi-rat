import React from "react";
import axios from "axios";
import ChartsDataOnClick from "./ChartsDataOnClick";
import ChartsOnClickCard from "./ChartsOnClickCard";

function Charts() {
  return (
    <div>
      <h4 className="font-bold mt-1 pb-2 px-16 py-6 border-b border-gray-300 text-blue-700 text-3xl text-center">
        Charts
      </h4>
      <div className="mt-2 grid sm:flex-col grid-cols-4 gap-1 md:grid-cols-4 xl:grid-cols-4 justify-center">
        {ChartsDataOnClick.map((card) => (
          <ChartsOnClickCard card={card} key={card.title} />
        ))}
      </div>
    </div>
  );
}

export default Charts;
