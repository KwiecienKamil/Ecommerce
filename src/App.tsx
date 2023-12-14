import { useState } from "react";
import CartModal from "./components/CartModal";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import data from "./data/Data";
import { Route,Routes } from "react-router-dom";
import Login from "./components/Login";
import ProductDetails from "./components/ProductDetails";

export type ProductProps = {
   id:string,
   sizes:string, 
   img: string, 
   brand: string, 
   name: string,
   category: string
}
const App = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [productsData, setProductsData] = useState<ProductProps[]>(data);


  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <Navbar setOpenModal={setOpenModal} setProductsData={setProductsData} />
      <AnimatePresence wait={true} initial={false} ExitComplete={() => null}>
        {openModal && <CartModal onClose={handleCloseModal} />}
      </AnimatePresence>
      <Routes>
        <Route path="/" element={<Home productsData={productsData} setProductsData={setProductsData}/> } />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};

export default App;
0;
