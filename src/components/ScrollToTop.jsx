import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronUp } from "lucide-react";
import "../styles/scrollTop.css";

export default function ScrollToTop() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };

  }, []);


  const scrollToTop = () => {

    window.scrollTo({
      top:0,
      behavior:"smooth"
    });

  };


  return (

    <AnimatePresence>

      {
        isVisible && (

          <motion.button

            onClick={scrollToTop}

            initial={{
              opacity:0,
              y:30,
              scale:0.8
            }}

            animate={{
              opacity:1,
              y:0,
              scale:1
            }}

            exit={{
              opacity:0,
              y:30,
              scale:0.8
            }}

            transition={{
              duration:0.3
            }}

            className="scroll-top-btn"

            aria-label="Scroll to top"

          >

            <ChevronUp size={22}/>

          </motion.button>

        )
      }


    </AnimatePresence>

  );
}