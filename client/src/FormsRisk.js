import React from 'react';

/*CHANGE HEIGHT OF CARDS TO H-96 from h-10 sm:h-48, BC IT LOOKS BETTER ON MOBILE */
import FormsRiskDataDownload from './FormsRiskDataDownload';
import FormsRiskDataOnClick from './FormsRiskDataOnClick';
import FormsRiskOnClickCard from './FormsRiskOnClickCard';
import FormsRiskDownloadCard from './FormsRiskDownloadCard';

function FormsRisk() {
  return (
    <div>
      <h4 className="font-bold pb-2 px-16 py-6 border-b border-gray-300 text-blue-700 text-3xl text-center"> 
      Forms and Risk Assessment and Clinical Flow Charts
      </h4>
      <div className="mt-2 grid sm:flex-col grid-cols-7 gap-1 md:grid-cols-7 xl:grid-cols-11 justify-center md:mt-0">

        {FormsRiskDataDownload.map(card => (
          <FormsRiskDownloadCard card={card} key={card.title}/>
        ))}
        {FormsRiskDataOnClick.map(card => (
          <FormsRiskOnClickCard card={card} key={card.title}/>
        ))}
      </div>
    </div>
  );
}

export default FormsRisk;