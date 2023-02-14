import React from 'react';

import ClinicalCalcsDataOnClick from './ClinicalCalcsDataOnClick';
import ClinicalCalcsDataDownload from './ClinicalCalcsDataDownload';
import ClinicalCalcsOnClickCard from './ClinicalCalcsOnClickCard';
/*Tried optimizing by watching this video, but the code didn't work because the image path didn't register and the link didn't work either, possibly because the onClick function couldn't take a JSX element as an argument (it has no problems with strings) - it said error unexpected token. Learn more ways on uploading images and link redirects and try again - for now just do each card individually.
Just replace the onclick with an <a> </a> tag, similar to that of the download cards, and it should work
Reference video: https://www.youtube.com/watch?v=v-mkUxhaFVA&list=PL5f_mz_zU5eXWYDXHUDOLBE0scnuJofO0&index=7  */
{/*Difference btwn React and HTML/CSS: use this onClick function to redirect to URLs */}
{/*Difference btwn React and HTML/CSS:  to show images on React, you need to 1) import the image and the beginning as a variable, and 2) insert the variable into src*/}


function ClinicalCalcs() {
  

  return (
    <section>
      
      <h4 className="font-bold mt-1 pb-2 px-16 py-6 border-b border-gray-300 text-blue-700 text-3xl text-center">
        Clinical Calculators:
      </h4>
      <div className="mt-8 grid sm:flex-col grid-cols-3 sm:grid-cols-5  justify-center md:mt-0">

      {/*To make the cards smaller on mobile screens, need to measure the current dimensions, then scale down with the correct columns. Do this later. */}
      {/*Use map function to create a dynamic list for cards, just 1) make a separate array for onclick links and downloaded files and 2) make sure the files and images are in the public folder instead of the src 
      Also for future reference: always set the height and width of the image in a div to auto, that way you only have to change the h and w of the outer div for media queries*/}
        {ClinicalCalcsDataOnClick.map(card => (
          <ClinicalCalcsOnClickCard card={card} key={card.title}/>
        ))}

        {ClinicalCalcsDataDownload.map(card => (
          <div key={card.title} className="card hover:shadow-lg cursor-pointer m-6 justify-center w-28 md:w-auto h-auto">
            <a href={card.link} download>
              <div className="m-4 flex flex-wrap justify-center text-center items-center">
                <img src={card.imageURL} alt={card.imageAlt} className="h-auto w-auto  object-cover flex" />
                <div className="flex flex-col ">
                  <h1 className="mt-4 font-bold text-blue-700 block text-sm md:text-lg text-center">{card.title}</h1>
                  <p className="mt-2 text-gray-800 text-center text-xs md:text-base">{card.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
  </section>
  );
}

export default ClinicalCalcs;