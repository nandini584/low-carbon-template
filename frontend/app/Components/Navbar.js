'use client';
import { useState } from 'react';
import { Switch } from '@nextui-org/react';
// import { MoonIcon } from "./Icons/MoonIcon";
// import { SunIcon } from "./Icons/SunIcon";

const Navbar = () => {
  const [isSelected, setIsSelected] = useState(true);
  return (
    <header className="bg-lavendar_gray lg:px-36 px-6 md:py-5 py-3 flex flex-row items-center justify-between w-full">
      <div>
        <p className="md:text-lg text-base md:font-extrabold font-bold text-blue_violet">
          ZenWeb
        </p>
      </div>
      <div className="flex flex-row items-center">
        <nav>
          <span className="md:text-base text-sm md:mr-10 mr-5 text-black cursor-pointer">
            Home
          </span>
          <span className="md:text-base text-sm md:mr-10 mr-5 text-black cursor-pointer">
            Blog
          </span>
        </nav>
        <div>
          {/* <Switch defaultSelected aria-label="Automatic updates"/> */}
          <Switch
            defaultSelected={isSelected}
            aria-label="Automatic updates"
            onChange={(e) => setIsSelected(e.target.checked)}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
