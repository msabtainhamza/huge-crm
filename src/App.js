import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Customers from "./pages/Customers";
import Products from "./pages/Products";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#F6F6F6] min-h-[100vh]">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
