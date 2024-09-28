import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const SingleCategory = ({
  category,
  showCategory,
  handleCategory,
  handleSubCategory,
}) => {
  return (
    <div className="py-2 px-5 cursor-pointer border-b-[#dddbdb] border-b">
      <h2
        className="text-md font-[400]"
        onClick={() => handleCategory(category.title)}
      >
        {category.title}
      </h2>
      {showCategory[category.title] && (
        <div className="py-2 px-0 cursor-pointer border-b-[#dddbdb] border-b">
          {category.tabProducts.map((item, idx) => (
            <div
              key={idx}
              className="px-2 py-2 flex justify-between items-center bg-[#f3f4f6] rounded-xl mb-2"
              onClick={() => handleSubCategory(item)} // Handle subcategory selection
            >
              <h2 className="text-sm font-[400]">{item.title}</h2>
              <IoIosArrowForward className="text-xl" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SingleCategory;
