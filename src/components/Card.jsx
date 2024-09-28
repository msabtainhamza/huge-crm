import React from "react";

const Card = ({ item }) => {
  return (
    <div
      className="md:w-[24%] w-[90%] md:my-0 md:mx-0 my-3 mx-auto border-[#f3f4f6] border p-4 rounded-xl md:h-[150px] m-auto"
      key={item.title}
    >
      <img src={item.image} alt={item.title} width={27} height={27} />
      <h3 className="text-lg font-bold mt-2">{item.title}</h3>
      <p className=" text-[#6b7280] mt-2">{item.description}</p>
    </div>
  );
};

export default Card;
