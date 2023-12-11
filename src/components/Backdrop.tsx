import React, { Fragment } from 'react'
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

type BackdropType = {
  children: React.ReactNode;
}

const Backdrop = ({children}: BackdropType) => {
    return (
        <Fragment >
          {ReactDOM.createPortal(
            <motion.div 
            className="fixed top-0 left-0 h-screen w-full backdrop-brightness-50 flex items-center justify-center"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}>
              {children}
            </motion.div>,
            document.getElementById("portal")
          )}
        </Fragment>
      );
    };
export default Backdrop
