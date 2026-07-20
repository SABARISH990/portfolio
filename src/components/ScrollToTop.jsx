import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronUp } from "lucide-react";
import "../styles/scrollTop.css";

export default function ScrollToTop() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if(window.scrollY > 200){
        setIsVisible(true);
      }
      else{
        setIsVisible(false);
      }
    };


    window.addEventListener("scroll",handleScroll);

    return () => {
      window.removeEventListener("scroll",handleScroll);
    };

  },[]);



  return (

    <AnimatePresence>

      {isVisible && (

        <motion.button

          className="scroll-top-btn"

          onClick={() =>
            window.scrollTo({
              top:0,
              behavior:"smooth"
            })
          }

          initial={{
            opacity:0,
            scale:0
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          exit={{
            opacity:0,
            scale:0
          }}

        >

          <ChevronUp size={22}/>

        </motion.button>

      )}

    </AnimatePresence>

  );

}