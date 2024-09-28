import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Card from "./Card";
import { useState } from "react";
import SingleCategory from "./SingleCategory";
import { tabsData } from "../constants/tabsData";

const Category = () => {
  const [show, setShow] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Apps");
  const [selectedSubCategory, setSelectedSubCategory] = useState("Sales");
  const [showCategory, setShowCategory] = useState({
    Apps: false,
    Suites: false,
    Marketplace: false,
    HugeCRM: false,
  });

  const handleModal = (category) => {
    setShowCategory((prev) => {
      return {
        ...prev,
        [category]: !prev[category],
      };
    });
    setSelectedCategory(category);
  };
  const handleShow = () => {
    setShow(!show);
  };

  const handleCategory = (category) => {
    setShowCategory((prev) => {
      return {
        ...prev,
        [category]: !prev[category],
      };
    });
    setSelectedCategory(category);
  };

  const handleSubCategory = (subCategory) => {
    setSelectedSubCategory(subCategory);
    setShow(false);
  };
  return (
    <div className="w-full md:hidden block">
      <div className="w-full bg-[#f3f4f6]  gap-1 py-4 relative">
        <div className="flex justify-center items-center cursor-pointer">
          <h2 className="text-md font-medium" onClick={handleShow}>
            {selectedSubCategory.title || "Products"}
          </h2>
          {show ? (
            <MdKeyboardArrowUp className="text-2xl" onClick={handleShow} />
          ) : (
            <MdKeyboardArrowDown className="text-2xl" onClick={handleShow} />
          )}
        </div>
        {show && (
          <div className="absolute top-14 left-0 w-full z-50">
            <div className="w-[90vw] m-auto bg-white rounded-2xl border-b-[#dddbdb] border mb-2 relative">
              <div className="absolute top-3 right-3 cursor-pointer">
                <IoIosCloseCircleOutline
                  className="text-xl"
                  onClick={handleShow}
                />
              </div>
              {tabsData.map((category, index) => (
                <SingleCategory
                  key={index}
                  category={category}
                  showCategory={showCategory}
                  handleCategory={handleCategory}
                  handleSubCategory={handleSubCategory}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      {selectedSubCategory && (
        <div className="p-4">
          {selectedSubCategory.tabItems?.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
