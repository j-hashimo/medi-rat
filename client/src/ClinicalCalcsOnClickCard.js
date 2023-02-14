import React from "react";
//We created a separate file for the data, so we can import it anywhere we want, and can also specify only using a specific item in the array instead of the whole loop, so it is more versitile.
//We pass in the card as a prop for this component, and in the Clinical Calcs section, so we can use the card argument that is in this function.
//To shrink the cards proportionally, need to change the width and height of the image, and the width and the height of the outermost div + the rest of the divs.
export default function ClinicalCalcsOnClickCard({ card }) {
  return (
    <div className="card hover:shadow-lg cursor-pointer m-6 justify-center w-28 md:w-auto h-auto">
      <a href={card.link} className=''>
        <div className="m-4 flex flex-wrap justify-center text-center items-center">
            <img src={card.imageURL} alt={card.imageAlt} className="h-auto w-auto object-cover flex" />
          <div className="flex flex-col">
            <h1 className="mt-4 font-bold text-blue-700 block text-sm md:text-lg text-center">{card.title}</h1>
              <p className="mt-2 text-gray-800 text-center text-xs md:text-base ">{card.description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}