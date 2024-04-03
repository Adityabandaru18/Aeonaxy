import { useState } from 'react';
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faAngleDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [navLinksOpen, setNavLinksOpen]
    = useState(false);

  const toggleNavLinks = () => {
    setNavLinksOpen(prevState => !prevState);
  };

  return (
    <>
      <nav className="h-18 flex flex-row justify-between items-center shadow-lg z-100">
        <div className="flex flex-row items-center">
          <img src={logo} className="w-16 mr-12 ml-6" alt="wixlogo" />
          <div
            className={`duration-500 md:static absolute bg-white md:min-h-fit min-h-screen right-0 top-0 md:w-auto w-full flex flex-col px-5 font-[400] ${navLinksOpen ? 'left-0 z-50' : 'left-full z-50'
              }`}
          >
            <div className="flex justify-end mb-4 md:hidden">
              <FontAwesomeIcon
                icon={faTimes}
                onClick={toggleNavLinks}
                className="text-2xl cursor-pointer relative top-3"
              />
            </div>
            <ul className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-10 md:items-center cursor-pointer z-50 ">
              <li className="md:inline-block m-auto hover:text-[#AA4DC7] hover:font-bold">
                <span className="flex items-center justify-center ">
                  Creation <FontAwesomeIcon icon={faAngleDown} className="ml-1 hidden md:inline-block " />
                </span>
              </li>
              <li className="md:inline-block m-auto hover:text-[#AA4DC7] hover:font-bold">
                <span className="flex items-center justify-center">
                  Business <FontAwesomeIcon icon={faAngleDown} className=" ml-1 hidden md:inline-block" />
                </span>
              </li>
              <li className="md:inline-block m-auto hover:text-[#AA4DC7] hover:font-bold">
                <span className="flex items-center justify-center">
                  Growth <FontAwesomeIcon icon={faAngleDown} className="ml-1 hidden md:inline-block" />
                </span>
              </li>
              <li className="md:inline-block m-auto hover:text-[#AA4DC7] hover:font-bold">
                <span className="flex items-center justify-center">
                  Resources<FontAwesomeIcon icon={faAngleDown} className=" ml-1 hidden md:inline-block" />
                </span>
              </li>
              <div className="h-[30px] w-[1px] bg-gray-200 m-auto hidden md:inline-block" id="lines"></div>
              <li className="md:inline-block m-auto hover:text-[#AA4DC7] hover:font-bold">Enterprise</li>
              <li className="md:inline-block m-auto hover:text-[#AA4DC7] hover:font-bold">Pricing</li>
              <li className="md:inline-block m-auto hover:text-[#AA4DC7] hover:font-bold">Support</li>
            </ul>
          </div>
        </div>
        <div>
          <FontAwesomeIcon icon={faGlobe} className="text-2xl md:inline-block hidden" />
          <button className="rounded-[25px] border border-blue-500 text-blue-400 pl-7 pr-7 p-2 text-[15px] mx-3 hover:text-white hover:bg-blue-400">Sign In</button>
          <FontAwesomeIcon
            icon={faBars}
            onClick={toggleNavLinks}
            className="text-3xl cursor-pointer md:hidden inline-block mr-2 relative top-1"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;