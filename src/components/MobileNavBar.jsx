import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const MobileNavBar = ({ displaySidebar }) => {
  const [showModal, setShowModal] = useState({
    products: false,
    customers: false,
    more: false,
  });
  const handleModal = (key) => {
    setShowModal({ ...showModal, [key]: !showModal[key] });
  };
  return (
    <div className="md:hidden fixed top-0 left-0 w-[100vw] flex h-[100vh] z-50">
      <div className="w-[80%] bg-white h-full p-6">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-1">
            <img src="/images/Logo.png" alt="logo" className="w-6 h-6" />
            <h1 className="text-md font-bold ml-1">Huge CRM</h1>
          </div>
          <div onClick={() => displaySidebar(false)}>
            <IoIosCloseCircleOutline className="text-2xl" />
          </div>
        </div>
        <div className="flex justify-start items-center gap-2 px-3 py-1 border-[#dddbdb] border rounded-md mt-6">
          <CiSearch className="text-[#b5b8bf] text-3xl" />
          <input
            type="text"
            placeholder="Search hugecrmm.com"
            className="outline-none bg-transparent w-full text-sm"
          />
        </div>
        <div className="mt-6 border-[#dddbdb] border rounded-2xl">
          <div
            onClick={() => handleModal("products")}
            className=" py-2 px-4 flex justify-between border-b border-b-[#dddbdb] items-center cursor-pointer"
          >
            <h2 className="text-md font-medium">Products</h2>
            {showModal.products ? (
              <MdKeyboardArrowUp className="text-2xl" />
            ) : (
              <MdKeyboardArrowDown className="text-2xl" />
            )}
          </div>
          {showModal.products && (
            <div className="border-b border-b-[#dddbdb]">
              <div className="py-2 px-5 cursor-pointer">
                <h2 className="text-sm font-[400]">Apps</h2>
              </div>
              <div className="py-2 px-5 cursor-pointer">
                <h2 className="text-sm font-[400]">Suites</h2>
              </div>
              <div className="py-2 px-5 cursor-pointer">
                <h2 className="text-sm font-[400]">Marketplace</h2>
              </div>
              <div className="py-2 px-5 cursor-pointer">
                <h2 className="text-sm font-[400]">HugeCRM</h2>
              </div>
            </div>
          )}

          <div
            onClick={() => handleModal("customers")}
            className=" py-2 px-4 flex justify-between border-b border-b-[#dddbdb] items-center cursor-pointer"
          >
            <h2 className="text-md font-medium">Customers</h2>
            {showModal.customers ? (
              <MdKeyboardArrowUp className="text-2xl" />
            ) : (
              <MdKeyboardArrowDown className="text-2xl" />
            )}
          </div>
          <div className="py-2 px-4  border-b border-b-[dddbdb] cursor-pointer">
            <h2 className="text-md font-medium">About us</h2>
          </div>
          <div className="py-2 px-4  border-b border-b-[dddbdb] cursor-pointer">
            <h2 className="text-md font-medium">Blogs</h2>
          </div>
          <div
            onClick={() => handleModal("more")}
            className=" py-2 px-4 flex justify-between border-b border-b-[#dddbdb] items-center cursor-pointer"
          >
            <h2 className="text-md font-medium">More</h2>
            {showModal.more ? (
              <MdKeyboardArrowUp className="text-2xl" />
            ) : (
              <MdKeyboardArrowDown className="text-2xl" />
            )}
          </div>
        </div>
        <div className="mt-5">
          <h2 className="text-md font-medium">Sign in</h2>
          <p className="text-sm">All Huge CRM Products</p>
        </div>
      </div>
      <div className="w-[20%] bg-[#999999] h-full opacity-[0.6]"></div>
    </div>
  );
};

export default MobileNavBar;
