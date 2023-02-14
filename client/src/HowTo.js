import React from 'react';

import HowToData from './HowToData';
import HowToCard from './HowToCard';
function HowTo() { 
  return (
    <div>
      <h4 className="font-bold mt-1 pb-2 px-16 py-6 border-b border-gray-300 text-blue-700 text-3xl text-center"> 
      How-To
      </h4>
      <div className="mt-8 grid sm:flex-col grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px justify-center md:mt-0">
        {HowToData.map(card => (
          <HowToCard card={card} key={card.title}/>
        ))}
      </div>
      
      
    </div>
  );
}

export default HowTo;