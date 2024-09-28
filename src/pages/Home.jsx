import React from "react";
import Navbar from "../components/Navbar";
import Category from "../components/Category";

const Home = () => {
  return (
    <div className="w-[100vw] bg-white min-h-[100vh]">
      <Navbar />
      <Category />
    </div>
  );
};

export default Home;
