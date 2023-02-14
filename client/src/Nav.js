
import React, { useState } from "react";
import { Link } from "react-router-dom";

/* reference: https://www.youtube.com/watch?v=74ys-dT94mA https://github.com/Sridhar-C-25/ReactTailwind_nav */
/*Review: why setting the navbar heading to sticky is needed to allow the pages to be clicked */

/*Note: future problem that needs to be resolved: For some reason, the navbar won't work with having a larger z index than the div cards. This is bad because I want the navbar covering the cards, not the other way around. Managed to find an acceptable solution by using media queries to move the content downwards when it goes to phone screens, so the user will just need to scroll all the way up to access the navbar.*/


const Nav = () => {
  let Links = [
    {name: 'Home', link: '/'},
    {name: 'Clinical Calculators', link: '/clinicalcalcs'},
    {name: 'Forms and Risk Assessment', link: '/formsrisk'},
    {name: 'Charts', link: '/charts'},
    {name: 'How To', link: '/howto'},
  ];

  let [open, setOpen] = useState(false);

  return(
    <div className="NavbarItem shadow-md w-full top-0 left-0 absolute z-10 sticky">
      <div className="md:flex bg-gradient-to-r from-blue-500 to-blue-700 py-4 md:px-10 px-7 items-center justify-between h-18">
        <h1 className="navbar-logo text-white text-3xl font-bold"><i className="fa-solid fa-stethoscope mr-2 text-2xl"></i>Medi-Rat</h1>
        <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden text-white">
          <i class={open ? 'fa-solid fa-xmark': 'fa-solid fa-bars'}></i>
          {/*For icons, make sure you install everything completely. Eg for font awesome, make sure you paste the initialization code in the index.html file! */}
        </div>
        {/*from useState, open is initially set to false, and setopen reverses whatever open initially is. So if you click the hamburger icon initially, it will set open is true. When open is true - x mark appears with when navbar is clicked and open, and becomes hamburger when not*/}
        {/*As for the navbar list, if open - i.e. if the button is clicked, it is visible, if enlarged, it goes invisible due to z-index, and if not open (i.e. no button clicked) it moves off of the screen view due to negative pixel value. We can insert this operator with {} into the classname because we used string interpolation with ` `*/}
        <ul className={`md:flex md:items-center absolute md:static left-0 w-full md:w-auto md:z-auto z-[-1] md:bg-transparent md:pl-0 pl-9 bg-blue-500 transition-all ease-in-out ${open ? ' opacity-100 mt-4': 'top-[-490px]'} md:opacity-100`}>
            {
              Links.map((link)=>(
                <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                  <p className="text-gray-200 hover:text-white duration-500"><Link to={link.link}>{link.name}</Link></p>
                </li>
              ))
            }
        </ul>
        
      </div>
      
    </div>
    );
  };


export default Nav;