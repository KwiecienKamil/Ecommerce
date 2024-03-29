import { FC } from "react";
import Backdrop from "./Backdrop";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "./store/store";
import { IoCloseCircle } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FiMinusCircle } from "react-icons/fi";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "./store/features/productSlice";

type Props = {
  onClose: () => void;
};

const CartModal: FC<Props> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state) => state.product.products);

  const price: (number)[] = selector.map(
    (product) => product.price
  );

  const quantity: (number)[] = selector.map(
    (product) => product.cartQuantity
  );

  let TotalPriceArr: any[] = [];

  const totalPrice = () => {
    for (let i = 0; i < price.length; i++) {
      TotalPriceArr.push(price[i] * quantity[i]);
    }
  };
  totalPrice();

  const getTotalPrice = TotalPriceArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <Backdrop>
      <motion.div
        className="min-h-[400px] lg:min-w-[500px] w-[375px] bg-white p-1 rounded-xl"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="w-full flex justify-end">
          <button onClick={onClose} className="p-2 text-xl text-red-500">
            <IoCloseCircle />
          </button>
        </div>
        <div className="flex flex-col px-4 mt-2 gap-2">
          {selector.map((item) => (
            <div className="grid grid-cols-5 gap-1 lg:gap-1 place-items-center w-full">
              <img src={item.img} alt="xd" className="w-[50px]" />
              <div className="flex flex-col items-center text-sm md:text-md">
                <p>{item.name}</p>
                <p>{item.brand}</p>
              </div>
              <p>{item.sizes}</p>
              <p className="font-semibold">{`${item.price?.toFixed(2)}$`}</p>
              <div className="flex items-center pl-4">
                <button
                  onClick={() => dispatch(decreaseQuantity(item))}
                  className="text-lg text-yellow-500 mr-1"
                >
                  <FiMinusCircle />
                </button>
                <p>{`x${item.cartQuantity}`}</p>
                <button
                  onClick={() => dispatch(increaseQuantity(item))}
                  className="text-lg text-green-500 ml-1"
                >
                  <IoMdAddCircleOutline />
                </button>
                <button
                  onClick={() => dispatch(removeFromCart(item))}
                  className="text-xl text-red-600 ml-1"
                >
                  <MdDeleteForever />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 w-full text-xl font-semibold flex items-center justify-between px-4 py-2">
                <p>Total: {`${getTotalPrice.toFixed(2)}$`}</p>
                <button className="p-2 bg-accent rounded-xl text-lg hover:bg-orange-400 duration-300">
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default CartModal;
