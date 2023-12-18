
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

  const price = selector
  .map((product) => product.price)
  .reduce((total:number, value) => total + value , 0).toFixed(2);

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
            <div className="flex items-center justify-between w-[95%]">
              <img src={item.img} alt="xd"  className="w-[50px]"/>
              <div className="flex flex-col items-center">
              <p>{item.name}</p>
              <p>{item.brand}</p>
              </div>
              <p>{item.sizes}</p>
              <p className="font-semibold">{`${item.price}$`}</p>
              <div className="absolute bottom-0 left-0 w-full text-xl font-semibold flex items-center justify-between px-2 py-2">
                <p>Total: {`${price}$`}</p>
                <button className="p-2 bg-accent rounded-xl text-lg hover:bg-orange-400 duration-300">Order</button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Backdrop>
  )
};

export default CartModal;
