
import { FC } from "react";
import Backdrop from "./Backdrop";
import { motion, AnimatePresence } from "framer-motion";
import { useAppSelector } from "./store/store";
import { IoCloseCircle } from "react-icons/io5";

type Props = {
  onClose: () => void
}

const CartModal: FC<Props> = ({onClose}) => {
  const selector = useAppSelector((state) =>state.product.products)
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0
    },
    visible: {
      y:0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      }
    },
    exit: {
      y:"100vh",
      opacity: 0
    }
  }
  return (
    <Backdrop>
      <motion.div 
      className="min-h-[400px] min-w-[350px] bg-white"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      >
        <div className="w-full flex justify-end">
        <button onClick={onClose} className="p-2 text-xl text-red-500"><IoCloseCircle /></button>
        </div>
        <div className="flex flex-col px-4 mt-2">
          {selector.map((item) => (
            <div className="flex items-center justify-center gap-8">
              <img src={item.img} alt="xd"  className="w-[50px]"/>
              <div className="flex flex-col items-center">
              <p>{item.brand}</p>
              <p>{item.name}</p>
              </div>
              <p>{item.sizes}</p>
              <p className="font-semibold">{`${item.price}$`}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </Backdrop>
  )
};

export default CartModal;
