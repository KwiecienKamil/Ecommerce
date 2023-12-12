import { useState } from "react";
import CartModal from "./components/CartModal";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import data from "./data/Data";

const App = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [productsData, setProductsData] = useState<object>(data)

  const handleCloseModal = () => {
    setOpenModal(false);
    
  };
  return (
    <>
      <Navbar setOpenModal={setOpenModal} setProductsData={setProductsData}/>
      <Home productsData={productsData}/>
      <AnimatePresence wait={true} initial={false} ExitComplete={() => null}>
          {openModal && <CartModal onClose={handleCloseModal} />}
        </AnimatePresence>
    </>
  );
}

export default App;
