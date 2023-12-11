import { useState } from "react";
import CartModal from "./components/CartModal";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);


  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <Navbar setOpenModal={setOpenModal}/>
      <Home />
      <AnimatePresence wait={true} initial={false} ExitComplete={() => null}>
          {openModal && <CartModal onClose={handleCloseModal} />}
        </AnimatePresence>
    </>
  );
}

export default App;
