import { IoIosCloseCircleOutline, IoIosArrowForward } from "react-icons/io";
import Card from "./Card";
import { tabsData } from "../constants/tabsData";
import { useState } from "react";

const Tabs = ({ setShowModal }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(
    tabsData[0]?.tabProducts[0] || {
      title: "",
      description: "",
      tabItems: [],
    }
  );

  const handleActiveTab = (index) => {
    const selectedTab = tabsData[activeIndex]?.tabProducts[index];
    if (selectedTab) {
      setActiveTabIndex(index);
      setActiveTab(selectedTab);
    } else {
      setActiveTab({
        title: "",
        description: "",
        tabItems: [],
      });
    }
  };
  return (
    <div className="fixed top-26 left-0 right-0 z-50 w-[93vw] m-auto md:block hidden">
      <div className="w-full min-h-[60vh] bg-white rounded-xl shadow-lg mt-[2px]">
        <div className="w-full border-b-[#e5e7eb] border-b-[1px] pt-3">
          <div className="flex justify-between items-center">
            <ol className="list-none flex justify-start gap-3 font-mediumm text-[#6b7280] py-4 px-7">
              {tabsData.map((product, index) => (
                <li
                  className={`p-2 text-md font-[400] cursor-pointer 
                    ${
                      activeIndex === index
                        ? "text-black border-b-2 border-b-black"
                        : "text-[#6b7280]"
                    }`}
                  onClick={() => {
                    setActiveIndex(index);
                    setActiveTabIndex(0);
                    setActiveTab(
                      product.tabProducts?.[0] || {
                        title: "",
                        description: "",
                        tabItems: [],
                      }
                    );
                  }}
                >
                  {product.title}
                </li>
              ))}
            </ol>
            <div
              className="cursor-pointer mr-4"
              onClick={() => setShowModal(false)}
            >
              <IoIosCloseCircleOutline className="text-3xl" />
            </div>
          </div>
        </div>
        <div className="w-full flex">
          <div className="w-[20%] border-r-[#e5e7eb] border-r-[1px] h-full">
            <ol className="py-4 px-7">
              {tabsData[activeIndex]?.tabProducts?.map((include, index) => (
                <li
                  key={index}
                  onClick={() => handleActiveTab(index)}
                  className={`w-[100%] p-2 flex justify-between items-center rounded-md text-md font-[400] mt-3 cursor-pointer  text-[#6b7280] ${
                    activeTabIndex === index ? "text-black bg-[#f3f4f6]" : ""
                  }`}
                >
                  {include.title}
                  <IoIosArrowForward className="text-[#6b7280] text-md" />
                </li>
              ))}
            </ol>
          </div>
          <div className="py-4 px-7 w-[80%]">
            <h2 className="text-2xl font-bold">
              {activeTab.title || "Default Title"}
            </h2>
            <p className="text-md font-[400] text-[#6b7280]">
              {activeTab.description || "Default Description"}
            </p>
            <div className="flex flex-wrap justify-start items-center gap-3 mt-7">
              {activeTab.tabItems?.length > 0 ? (
                activeTab.tabItems.map((item) => <Card item={item} />)
              ) : (
                <p>No items found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
