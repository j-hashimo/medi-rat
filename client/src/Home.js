import React from 'react';
import Logo from './img/mouselogo.jpg';
import DoctorImage from './img/doctor.jpg';
import Nav from './Nav';
function Home() {
  return (
    
      <div class="bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5">
        <div class="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
          <div class="xl:max-w-xl">
            <div class="flex">
              <img class="h-24 rounded-full p-2" src={Logo} alt="Medi-Mouse" />
              <h1 class="mt-6 text-2xl font-bold text-gray-900 p-1"><span class="text-blue-700">Medi</span>-Rat</h1>
            </div>
            <img class="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
              src={DoctorImage} alt="Doctor" />
            <h1 class="mt-6 text-2xl font-bold text-gray-900 text-center sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl"><span
                class="text-blue-700">Clinical
                Tools</span> for
              busy doctors.
            </h1>
            <p class="mt-2 text-gray-600 text-center sm:mt-4 sm:text-xl">This is a useful website for family doctors who are extremely busy. It contains connections to family physicians-relevant practise guidelines, clinical tools, drug databases, patient information, and research.</p>
            <div className='flex flex-col mt-5'>
              <h1 className='text-blue-700 font-bold text-xl'>Credits:</h1>
              <a className='text-gray-600 mt-2' href="http://www.medi-mouse.com/mm.php?p=Q" title="Medi-Mouse">Medi-Mouse</a>
              <a className='text-gray-600 mt-2' href="https://www.stocklib.com/media-89095100/simple-cartoon-mouse-logo-modern-geometric-mouse-silhouette-vector-illustration.html?keyword=character%20rats" title="Mouse icons">Simple cartoon mouse logo by StockLib</a>
              <a className='text-gray-600 mt-2' href="https://www.weforum.org/agenda/2021/10/global-trust-index-doctors-scientists-covid/" title="Doctor Image">Doctor Background Image by Tung Nguyen</a>
            </div>
          </div>
        </div>
        <div class="hidden relative lg:block 2xl:col-span-3">
          <img class="absolute inset-0 w-full h-full object-cover object-left" src={DoctorImage} alt="Doctor" />
        </div>
      </div>
    
      
  );
}

export default Home;