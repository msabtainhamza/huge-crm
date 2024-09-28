import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import Tabs from "./Tabs";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import MobileNavBar from "./MobileNavBar";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full md:py-9 py-0">
      <div className="md:w-[93vw] w-full m-auto h-[60px] bg-white rounded-xl flex justify-between items-center shadow-lg">
        <div className="flex justify-start items-center md:ml-4 ml-2">
          <CiMenuBurger
            className="font-bold text-xl md:hidden block mr-2"
            onClick={() => setShowModal(true)}
          />
          <img
            src="/images/Logo.png"
            alt="logo"
            className="md:w-8 w-6 md:h-8 h-6"
          />
          <h1 className="md:text-3xl text-md font-bold md:ml-2 ml-1">
            Huge CRM
          </h1>
        </div>
        <div className="mr-4 md:block hidden">
          <ol className="list-none flex gap-7 font-medium text-[##b5b8bf] cursor-pointer">
            <li
              className="mr-4 flex justify-start items-center gap-[1px]"
              onClick={() => setShowModal(true)}
            >
              Products <MdKeyboardArrowDown className="text-[27px]" />
            </li>
            <li className="mr-4">Customers</li>
            <li className="mr-4">About us</li>
            <li className="mr-4">Blogs</li>
          </ol>
        </div>
        <div className="mr-4">
          <div className="flex justify-start items-center gap-4">
            <CiSearch className="text-[#b5b8bf] text-2xl md:block hidden" />
            <button className="md:text-md md:font-medium text-sm">
              Sign in
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-lg md:text-md text-sm">
              Sign up
            </button>
          </div>
        </div>
      </div>
      {showModal && <Tabs setShowModal={setShowModal} />}
      {showModal && <MobileNavBar displaySidebar={setShowModal} />}
    </div>
  );
};

export default Navbar;
